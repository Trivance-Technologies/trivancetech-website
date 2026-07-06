import { cacheLife, cacheTag } from 'next/cache';
import { getAllArticles, getAllTags } from '@/libs/articles';
import Blog from './blog'; // your client component

async function getCachedBlogData() {
  'use cache';
  cacheLife('hours');        // revalidate every 1 hour (stale‑while‑revalidate)
  cacheTag('blog-articles'); // manual invalidation via revalidateTag('blog-articles')

  const [articles, tags] = await Promise.all([
    getAllArticles(0, 10),
    getAllTags(),
  ]);

  return {
    articleCards: articles.articleCards,
    totalArticlesCount: articles.totalArticlesCount,
    allTags: tags,
  };
}

export async function generateMetadata() {
  return {
    title: "Insights & Updates | Trivance Technologies Blog on ERP, Fintech & Compliance",
    description: "Stay informed with Trivance’s expert insights on ERP implementation, pension tech, digital transformation, and regulatory trends shaping compliance-driven industries.",
    openGraph: {
      title: "Insights & Updates | Trivance Technologies Blog on ERP, Fintech & Compliance",
      description: "Stay informed with Trivance’s expert insights on ERP implementation, pension tech, digital transformation, and regulatory trends shaping compliance-driven industries.",
      url: "https://trivancetech.com/blog",
      type: 'website',
      siteName: 'Trivance Technologies',
    },
    twitter: {
      card: "summary_large_image",
      title: "Insights & Updates | Trivance Technologies Blog on ERP, Fintech & Compliance",
      description: "Stay informed with Trivance’s expert insights on ERP implementation, pension tech, digital transformation, and regulatory trends shaping compliance-driven industries.",
    },
    alternates: {
      canonical: "https://trivancetech.com/blog",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Page() {
  const initialData = await getCachedBlogData();
  return <Blog initialData={initialData} />;
}