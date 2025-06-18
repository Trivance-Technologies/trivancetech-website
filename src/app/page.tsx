import { ArticleCard, getLatestArticles } from "@/libs/articles";
import Home from "./homepage";

export default async function Page() {
    const articleCards: ArticleCard[] = await getLatestArticles();    
    return <Home articleCards={articleCards} />;
}