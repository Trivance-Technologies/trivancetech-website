import { getAllArticles, getAllTags } from "@/libs/articles";
import Blog from "./blog";

export const revalidate = 7200; // 2 hours in seconds 

export async function generateMetadata() {

  return {
    title: "Insights & Updates | Trivance Technologies Blog on ERP, Fintech & Compliance",
    description: "Stay informed with Trivance’s expert insights on ERP implementation, pension tech, digital transformation, and regulatory trends shaping compliance-driven industries.",
    openGraph: {
      title: "Insights & Updates | Trivance Technologies Blog on ERP, Fintech & Compliance",
      description: "Stay informed with Trivance’s expert insights on ERP implementation, pension tech, digital transformation, and regulatory trends shaping compliance-driven industries.",
      url: `https://trivancetech.com/blog`,
      type: 'website',
      siteName: 'Trivance Technologies',
    },
    twitter: {
      card: "summary_large_image",
      title: "Insights & Updates | Trivance Technologies Blog on ERP, Fintech & Compliance",
      description: "Stay informed with Trivance’s expert insights on ERP implementation, pension tech, digital transformation, and regulatory trends shaping compliance-driven industries.",
      type: 'website',
      siteName: 'Trivance Technologies',
    },
  };
}

export default async function Page() {
    const {articleCards, totalArticlesCount} = await getAllArticles(0, 10);
    const allTags: string[] = await getAllTags();

    return <Blog articleCards={articleCards} tagList={allTags} totalAllArticlesCount={totalArticlesCount} />;
}