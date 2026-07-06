import { NextResponse } from "next/server";
import { getAllArticlesSitemap } from "@/libs/articles";
import { serverEnv } from "@/libs/serverEnv";

const URL = serverEnv.SITE_URL || "https://trivancetech.com";
const ARTICLES_PER_PAGE = 100;

export async function GET() {
  try {
    const now = new Date().toISOString();
    const articles = await getAllArticlesSitemap();
    const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);

    const sitemaps = [
      { loc: `${URL}/sitemap-static.xml`, lastmod: now },
    ];

    for (let i = 1; i <= totalPages; i++) {
      sitemaps.push({ loc: `${URL}/sitemap/articles/${i}`, lastmod: now });
    }

    sitemaps.push({ loc: `${URL}/sitemap-categories.xml`, lastmod: now });

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.map((s) => `  <sitemap>\n    <loc>${s.loc}</loc>\n    <lastmod>${s.lastmod}</lastmod>\n  </sitemap>`).join("\n")}
</sitemapindex>`;

    return new NextResponse(xml, {
      status: 200,
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });
  } catch (error) {
    console.error("Sitemap index error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}