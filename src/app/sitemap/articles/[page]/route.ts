import { NextResponse } from "next/server";
import { getAllArticlesSitemap } from "@/libs/articles";
import { serverEnv } from "@/libs/serverEnv";

const URL = serverEnv.SITE_URL || "https://trivancetech.com";
const ARTICLES_PER_PAGE = 100;

function escapeXml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

function urlEntry(loc: string, lastmod: string, changefreq: string, priority: string) {
  return `  <url>\n    <loc>${escapeXml(loc)}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ page: string }> }
) {
  try {
    const { page: pageParam } = await params;
    const page = parseInt(pageParam, 10);

    if (isNaN(page) || page < 1) {
      return new NextResponse("Invalid page number", { status: 400 });
    }

    const articles = await getAllArticlesSitemap();
    const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);

    if (page > totalPages) {
      return new NextResponse("Page not found", { status: 404 });
    }

    const start = (page - 1) * ARTICLES_PER_PAGE;
    const pageArticles = articles.slice(start, start + ARTICLES_PER_PAGE);

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pageArticles.map((a) => urlEntry(`${URL}/blog/${a.slug}`, a.publishedAt, "monthly", "0.6")).join("\n")}
</urlset>`;

    return new NextResponse(xml, {
      status: 200,
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });
  } catch (error) {
    console.error("Articles sitemap error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}