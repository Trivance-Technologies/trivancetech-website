export interface StrapiArticle {
  id: number;
  Slug: string;
  Tag: string;
  Title: string;
  ShortDescription: string;
  publishedAt: string;
  Content: string;
  CoverImage?: {
    alternativeText: string;
    url: string;
  };
  Metadata: {
    metaTitle: string;
    metaDescription: string;
  }
}

export interface ArticleCard {
  id: number;
  slug: string;
  category: string;
  title: string;
  description: string;
  image: string;
  publishedAt: string;
  readTime: string;
  alternativeText: string;
}

export interface Article extends ArticleCard {
  content: string;
  metaTitle: string;
  metaDescription: string;
}

function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min${minutes > 1 ? "s" : ""} read`;
}

function formatPublishedDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function fetchWithRetry(
  url: string,
  retries = 4,
  timeout = 60000,
): Promise<Response> {
  let attempt = 0;
  let delay = 1000;

  while (true) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeout);
    try {
      const res = await fetch(url, { signal: controller.signal });
      clearTimeout(timer);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res;
    } catch (err) {
      clearTimeout(timer);
      if (attempt >= retries) {
        console.error(`fetchWithRetry: all ${retries + 1} attempts failed for ${url}`);
        throw err;
      }

      const jitter = Math.floor(Math.random() * 1000);
      const wait = delay + jitter;
      console.warn(`fetchWithRetry: attempt ${attempt + 1} failed for ${url}. Retrying in ${wait}ms...`, err);
      await new Promise((res) => setTimeout(res, wait));

      attempt += 1;
      delay *= 2;
      continue;
    }
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const query = new URLSearchParams({
      "fields[0]": "Slug",
      "fields[1]": "Tag",
      "fields[2]": "Title",
      "fields[3]": "ShortDescription",
      "fields[4]": "publishedAt",
      "fields[5]": "Content",
      "filters[Slug][$eq]": slug,
      "populate": "*"
    }).toString();

    const baseUrl = process.env.STRAPI_URL ?? process.env.NEXT_PUBLIC_STRAPI_URL;
    const res = await fetchWithRetry(`${baseUrl}/api/articles?${query}`);
    const json = await res.json();
    const item = (json.data as StrapiArticle[])[0];
    if (!item) return null;

    const readTime = calculateReadTime(item.Content);
    const date = formatPublishedDate(item.publishedAt);
    const meta = item.Metadata;

    return {
      id: item.id,
      slug: item.Slug,
      category: item.Tag.trim(),
      title: item.Title,
      description: item.ShortDescription,
      image: item.CoverImage?.url ?? "",
      content: item.Content,
      readTime,
      publishedAt: date,
      metaTitle: meta?.metaTitle ?? item.Title,
      metaDescription: meta?.metaDescription ?? item.ShortDescription,
      alternativeText: item.CoverImage?.alternativeText ?? ""
    };
  } catch (err) {
    console.error("Failed to fetch article by slug:", err);
    return null;
  }
}

export async function getArticlesByTag(tag: string, start: number, limit: number) {
  try {
    const query = new URLSearchParams({
      "fields[0]": "Slug",
      "fields[1]": "Tag",
      "fields[2]": "Title",
      "fields[3]": "ShortDescription",
      "fields[4]": "publishedAt",
      "fields[5]": "Content",
      populate: "CoverImage",
      "filters[Tag][$containsi]": tag,
      "sort[0]": "publishedAt:desc",
      "pagination[start]": start.toString(),
      "pagination[limit]": limit.toString(),
    }).toString();

    const baseUrl = process.env.STRAPI_URL ?? process.env.NEXT_PUBLIC_STRAPI_URL;
    const res = await fetchWithRetry(`${baseUrl}/api/articles?${query}`);
    const json = await res.json();
    const totalArticlesCount = json.meta?.pagination?.total ?? 0;

    const articleCards = (json.data as StrapiArticle[]).map(item => ({
      id: item.id,
      slug: item.Slug,
      category: item.Tag.trim(),
      title: item.Title,
      description: item.ShortDescription,
      image: item.CoverImage?.url ?? "",
      publishedAt: formatPublishedDate(item.publishedAt),
      readTime: calculateReadTime(item.Content),
      alternativeText: item.CoverImage?.alternativeText ?? ""
    }));

    return { articleCards, totalArticlesCount };
  } catch (err) {
    console.error("Failed to fetch articles by tag:", err);
    return { articleCards: [], totalArticlesCount: 0 };
  }
}

export async function getAllTags(): Promise<string[]> {
  try {

    const baseUrl = process.env.STRAPI_URL ?? process.env.NEXT_PUBLIC_STRAPI_URL;
    const res = await fetchWithRetry(`${baseUrl}/api/tag?fields[0]=name`);
    const json = await res.json();
    const tags = (json.data as { name: string }[]).map(tag => tag.name);
    return ["All Posts", ...tags];
  } catch (err) {
    console.error("Failed to fetch tags:", err);
    return ["All Posts"];
  }
}

export async function getLatestArticles(limit = 3): Promise<{ articleCards: ArticleCard[]; totalArticlesCount: number }> {
  try {
    const params = new URLSearchParams({
      "fields[0]": "Slug",
      "fields[1]": "Tag",
      "fields[2]": "Title",
      "fields[3]": "ShortDescription",
      "fields[4]": "publishedAt",
      "fields[5]": "Content",
      populate: "CoverImage",
      "sort[0]": "publishedAt:desc",
      "pagination[limit]": limit.toString()
    });

    const baseUrl = process.env.STRAPI_URL ?? process.env.NEXT_PUBLIC_STRAPI_URL;
    const res = await fetchWithRetry(`${baseUrl}/api/articles?${params.toString()}`);
    const json = await res.json();
    const totalArticlesCount = json.meta?.pagination?.total ?? 0;

    const articleCards = (json.data as StrapiArticle[]).map(item => ({
      id: item.id,
      slug: item.Slug,
      category: item.Tag.trim(),
      title: item.Title,
      description: item.ShortDescription,
      image: item.CoverImage?.url ?? "",
      publishedAt: formatPublishedDate(item.publishedAt),
      readTime: calculateReadTime(item.Content),
      alternativeText: item.CoverImage?.alternativeText ?? ""
    }));

    return { articleCards, totalArticlesCount };
  } catch (err) {
    console.error("Failed to fetch latest articles:", err);
    return { articleCards: [], totalArticlesCount: 0 };
  }
}

export async function getAllArticles(start: number, limit: number) {
  try {
    const query = new URLSearchParams({
      "fields[0]": "Slug",
      "fields[1]": "Tag",
      "fields[2]": "Title",
      "fields[3]": "ShortDescription",
      "fields[4]": "publishedAt",
      "fields[5]": "Content",
      populate: "CoverImage",
      "sort[0]": "publishedAt:desc",
      "pagination[start]": start.toString(),
      "pagination[limit]": limit.toString(),
    }).toString();

    const baseUrl = process.env.STRAPI_URL ?? process.env.NEXT_PUBLIC_STRAPI_URL;
    const res = await fetchWithRetry(`${baseUrl}/api/articles?${query}`);
    const json = await res.json();
    const totalArticlesCount = json.meta?.pagination?.total ?? 0;

    const articleCards = (json.data as StrapiArticle[]).map(item => ({
      id: item.id,
      slug: item.Slug,
      category: item.Tag.trim(),
      title: item.Title,
      description: item.ShortDescription,
      image: item.CoverImage?.url ?? "",
      publishedAt: formatPublishedDate(item.publishedAt),
      readTime: calculateReadTime(item.Content),
      alternativeText: item.CoverImage?.alternativeText ?? ""
    }));

    return { articleCards, totalArticlesCount };
  } catch (err) {
    console.error("Failed to fetch all articles:", err);
    return { articleCards: [], totalArticlesCount: 0 };
  }
}

export async function getArticlesBySearch(
  query: string,
  tag: string,
  start: number,
  limit: number
): Promise<{ articleCards: ArticleCard[]; totalArticlesCount: number }> {
  try {
    const params = new URLSearchParams({
      "fields[0]": "Slug",
      "fields[1]": "Tag",
      "fields[2]": "Title",
      "fields[3]": "ShortDescription",
      "fields[4]": "publishedAt",
      "fields[5]": "Content",
      populate: "CoverImage",
      "sort[0]": "publishedAt:desc",
      "pagination[start]": start.toString(),
      "pagination[limit]": limit.toString(),
    });

    params.append("filters[$or][0][Title][$containsi]", query);
    params.append("filters[$or][1][ShortDescription][$containsi]", query);
    if (tag && tag !== "All Posts") {
      params.append("filters[Tag][$containsi]", tag);
    }

    const baseUrl = process.env.STRAPI_URL ?? process.env.NEXT_PUBLIC_STRAPI_URL;
    const res = await fetchWithRetry(`${baseUrl}/api/articles?${params.toString()}`);
    const json = await res.json();
    const totalArticlesCount = json.meta?.pagination?.total ?? 0;

    const articleCards = (json.data as StrapiArticle[]).map(item => ({
      id: item.id,
      slug: item.Slug,
      category: item.Tag.trim(),
      title: item.Title,
      description: item.ShortDescription,
      image: item.CoverImage?.url ?? "",
      publishedAt: formatPublishedDate(item.publishedAt),
      readTime: calculateReadTime(item.Content),
      alternativeText: item.CoverImage?.alternativeText ?? ""
    }));

    return { articleCards, totalArticlesCount };
  } catch (err) {
    console.error("Failed to fetch articles by search:", err);
    return { articleCards: [], totalArticlesCount: 0 };
  }
}

export async function getAllArticlesSitemap() {
  try {
    const query = new URLSearchParams({
      "fields[0]": "Slug",
      "fields[1]": "publishedAt",
      "sort[0]": "publishedAt:desc",
      "pagination[limit]": "1000",
    }).toString();

    const baseUrl = process.env.STRAPI_URL ?? process.env.NEXT_PUBLIC_STRAPI_URL;
    const res = await fetchWithRetry(`${baseUrl}/api/articles?${query}`);
    const json = await res.json();

    const articles = (json.data as StrapiArticle[]).map(item => ({
      slug: item.Slug,
      publishedAt: item.publishedAt,
    }));

    return articles;
  } catch (err) {
    console.error("Failed to fetch articles for sitemap:", err);
    return [];
  }
}