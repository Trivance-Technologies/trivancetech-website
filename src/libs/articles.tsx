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

const domain = "https://wealthy-power-26376c166d.strapiapp.com";

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

export async function getArticleBySlug(slug: string): Promise<Article | null> {
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

  const res = await fetch(`${domain}/api/articles?${query}`, {
    cache: "no-store",
  });

  const json = await res.json();
  const item = (json.data as StrapiArticle[])[0];
  const meta = item.Metadata;

  if (!item) return null;

  const readTime = calculateReadTime(item.Content);
  const date = formatPublishedDate(item.publishedAt);

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
}

export async function getArticlesByTag(tag: string, start: number, limit: number): Promise<{articleCards: ArticleCard[]; totalArticlesCount: number}> {
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

  const res = await fetch(`${domain}/api/articles?${query}`, {
    cache: "no-store",
  });

  const json = await res.json();
  const totalArticlesCount = json.meta?.pagination?.total ?? 0;

  const articleCards = (json.data as StrapiArticle[]).map((item) => {
    const date = formatPublishedDate(item.publishedAt);
    const readTime = calculateReadTime(item.Content);

    return {
      id: item.id,
      slug: item.Slug,
      category: item.Tag.trim(),
      title: item.Title,
      description: item.ShortDescription,
      image: item.CoverImage?.url ?? "",
      publishedAt: date,
      readTime,
      alternativeText: item.CoverImage?.alternativeText ?? ""
    };
  });

  return { articleCards, totalArticlesCount };
}

export async function getAllTags(): Promise<string[]> {
  const res = await fetch(`${domain}/api/tag?fields[0]=name`);
  const json = await res.json();
  const tags = (json.data as { name: string }[]).map((tag) => tag.name);
  return ["All Posts", ...tags];
}

export async function getLatestArticles(): Promise<{articleCards: ArticleCard[]; totalArticlesCount: number}> {
  const params = new URLSearchParams({
    "fields[0]": "Slug",
    "fields[1]": "Tag",
    "fields[2]": "Title",
    "fields[3]": "ShortDescription",
    "fields[4]": "publishedAt",
    "fields[5]": "Content",
    populate: "CoverImage",
    "sort[0]": "publishedAt:desc",
    "pagination[limit]": "3"
  });

  const query = params.toString();
  
  const res = await fetch(`${domain}/api/articles?${query}`, {
    cache: "no-store",
  });

  const json = await res.json();
  console.log(json);
  const totalArticlesCount = json.meta?.pagination?.total ?? 0;

  const articleCards = (json.data as StrapiArticle[]).map((item) => {
    const date = formatPublishedDate(item.publishedAt);
    const readTime = calculateReadTime(item.Content);

    return {
      id: item.id,
      slug: item.Slug,
      category: item.Tag.trim(),
      title: item.Title,
      description: item.ShortDescription,
      image: item.CoverImage?.url ?? "",
      publishedAt: date,
      readTime,
      alternativeText: item.CoverImage?.alternativeText ?? ""
    };
  });

  return { articleCards, totalArticlesCount };
}

export async function getAllArticles(start: number, limit: number): Promise<{ articleCards: ArticleCard[]; totalArticlesCount: number}> {
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

  const res = await fetch(`${domain}/api/articles?${query}`, {
    cache: "no-store",
  });

  const json = await res.json();
  const totalArticlesCount = json.meta?.pagination?.total ?? 0;


  const articleCards = (json.data as StrapiArticle[]).map((item) => {
    const date = formatPublishedDate(item.publishedAt);
    const readTime = calculateReadTime(item.Content);

    console.log(item.CoverImage?.url);


    return {
      id: item.id,
      slug: item.Slug,
      category: item.Tag.trim(),
      title: item.Title,
      description: item.ShortDescription,
      image: item.CoverImage?.url ?? "",
      publishedAt: date,
      readTime,
      alternativeText: item.CoverImage?.alternativeText ?? ""
    };
  });

  return { articleCards, totalArticlesCount };
}

export async function getArticlesBySearch(
  query: string,
  tag: string,
  start: number,
  limit: number
): Promise<{ articleCards: ArticleCard[]; totalArticlesCount: number }> {
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

  // Search by title or description
  params.append("filters[$or][0][Title][$containsi]", query);
  params.append("filters[$or][1][ShortDescription][$containsi]", query);

  // Optional tag filter
  if (tag && tag !== "All Posts") {
    params.append("filters[Tag][$containsi]", tag);
  }

  const fullUrl = `${domain}/api/articles?${params.toString()}`;

  const res = await fetch(fullUrl, { cache: "no-store" });
  const json = await res.json();
  const totalArticlesCount = json.meta?.pagination?.total ?? 0;

  const articleCards = (json.data as StrapiArticle[]).map((item) => {
    const date = formatPublishedDate(item.publishedAt);
    const readTime = calculateReadTime(item.Content);

    return {
      id: item.id,
      slug: item.Slug,
      category: item.Tag.trim(),
      title: item.Title,
      description: item.ShortDescription,
      image: item.CoverImage?.url ?? "",
      publishedAt: date,
      readTime,
      alternativeText: item.CoverImage?.alternativeText ?? ""
    };
  });

  return { articleCards, totalArticlesCount };
}



