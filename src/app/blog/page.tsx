import { getAllArticles, getAllTags } from "@/libs/articles";
import { Metadata } from "next";
import Blog from "./blog";

export const metadata: Metadata = {
    title: 'Blog - Trivance Technologies',
    description: "Stay updated with Trivance Technologies' insights on Odoo solutions, industry trends, and expert tips to transform your business with our tailored technology solutions.",
};

export default async function Page() {
    const {articleCards, totalArticlesCount} = await getAllArticles(0, 10);
    const allTags: string[] = await getAllTags();

    return <Blog articleCards={articleCards} tagList={allTags} totalAllArticlesCount={totalArticlesCount} />;
}