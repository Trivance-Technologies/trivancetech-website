export interface StrapiArticle {
  id: number;
  Slug: string;
  Tag: string;
  Title: string;
  ShortDescription: string;
  publishedAt: string;
  Content: string;
  CoverImage?: {
    formats?: {
      large?: {
        url: string;
      };
    };
  };
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
}

export interface Article extends ArticleCard {
  content: string;
}

interface StrapiTag {
  id: number;
  attributes: {
    name: string;
  };
}

const domain = "http://localhost:1337";

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
    populate: "CoverImage",
    "filters[Slug][$eq]": slug,
  }).toString();

  const res = await fetch(`${domain}/api/articles?${query}`, {
    cache: "no-store",
  });

  const json = await res.json();
  const item = (json.data as StrapiArticle[])[0];

  if (!item) return null;

  const largeUrl = item.CoverImage?.formats?.large?.url ?? "";
  const readTime = calculateReadTime(item.Content);
  const date = formatPublishedDate(item.publishedAt);

  return {
    id: item.id,
    slug: item.Slug,
    category: item.Tag.trim(),
    title: item.Title,
    description: item.ShortDescription,
    image: largeUrl ? `${domain}${largeUrl}` : "",
    content: item.Content,
    readTime,
    publishedAt: date,
  };
}

export async function getArticlesByTag(tag: string, limit = 3): Promise<ArticleCard[]> {
  const query = new URLSearchParams({
    "fields[0]": "Slug",
    "fields[1]": "Tag",
    "fields[2]": "Title",
    "fields[3]": "ShortDescription",
    "fields[4]": "publishedAt",
    "fields[5]": "Content",
    populate: "CoverImage",
    "filters[Tag][$eq]": tag,
    "sort[0]": "publishedAt:desc",
    "pagination[limit]": limit.toString(),
  }).toString();

  const res = await fetch(`${domain}/api/articles?${query}`, {
    cache: "no-store",
  });

  const json = await res.json();

  return (json.data as StrapiArticle[]).map((item) => {
    const largeUrl = item.CoverImage?.formats?.large?.url ?? "";
    const date = formatPublishedDate(item.publishedAt);
    const readTime = calculateReadTime(item.Content);

    return {
      id: item.id,
      slug: item.Slug,
      category: item.Tag.trim(),
      title: item.Title,
      description: item.ShortDescription,
      image: largeUrl ? `${domain}${largeUrl}` : "",
      publishedAt: date,
      readTime,
    };
  });
}

export async function getAllTags () {
    const res = await fetch(`${domain}/api/tags?fields[0]=name`);
    const json = await res.json();
    return (json.data as StrapiTag[]).map((tag) => tag.attributes.name);
}

export async function getLatestArticles(): Promise<ArticleCard[]> {
  const query = new URLSearchParams({
    "fields[0]": "Slug",
    "fields[1]": "Tag",
    "fields[2]": "Title",
    "fields[3]": "ShortDescription",
    "fields[4]": "publishedAt",
    "fields[5]": "Content",
    populate: "CoverImage",
    "sort[0]": "publishedAt:desc",
    "pagination[limit]": "3",
  }).toString();

  const res = await fetch(`${domain}/api/articles?${query}`, {
    cache: "no-store",
  });

  const json = await res.json();

  return (json.data as StrapiArticle[]).map((item) => {
    const largeUrl = item.CoverImage?.formats?.large?.url ?? "";
    const date = formatPublishedDate(item.publishedAt);
    const readTime = calculateReadTime(item.Content);

    return {
      id: item.id,
      slug: item.Slug,
      category: item.Tag.trim(),
      title: item.Title,
      description: item.ShortDescription,
      image: largeUrl ? `${domain}${largeUrl}` : "",
      publishedAt: date,
      readTime,
    };
  });
}

export async function getAllArticles(start: number, limit: number): Promise<ArticleCard[]> {
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

  return (json.data as StrapiArticle[]).map((item) => {
    const largeUrl = item.CoverImage?.formats?.large?.url ?? "";
    const date = formatPublishedDate(item.publishedAt);
    const readTime = calculateReadTime(item.Content);

    return {
      id: item.id,
      slug: item.Slug,
      category: item.Tag.trim(),
      title: item.Title,
      description: item.ShortDescription,
      image: largeUrl ? `${domain}${largeUrl}` : "",
      publishedAt: date,
      readTime,
    };
  });
}


