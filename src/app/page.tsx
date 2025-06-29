import { getLatestArticles } from "@/libs/articles";
import { logoDetails, retrieveClientLogos } from "@/libs/strapi_calls";
import Home from "./homepage";

export async function generateMetadata() {
  return {
    title: "Trivance Technologies | Digital Transformation Experts for Regulated Industries",
    description: "Trivance delivers data-driven digital transformation with ERP, accounting, and pension systems built for compliance-heavy sectors. Your business, reimagined",
    openGraph: {
      title: "Trivance Technologies | Digital Transformation Experts for Regulated Industries",
      description: "Trivance delivers data-driven digital transformation with ERP, accounting, and pension systems built for compliance-heavy sectors. Your business, reimagined",
      url: `https://trivancetech.com/`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Trivance Technologies | Digital Transformation Experts for Regulated Industries",
      description: "Trivance delivers data-driven digital transformation with ERP, accounting, and pension systems built for compliance-heavy sectors. Your business, reimagined",
    },
  };
}

export default async function Page() {
  const { articleCards, totalArticlesCount } = await getLatestArticles();
  const logoData: logoDetails[] = await retrieveClientLogos();

  return (
    <Home
      articleCards={articleCards}
      totalArticlesCount={totalArticlesCount}
      logoData={logoData}
    />
  );
}
