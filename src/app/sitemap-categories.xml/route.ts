import { NextResponse } from "next/server";
import { getAllTags } from "@/libs/articles";
import { serverEnv } from "@/libs/serverEnv";

const URL = serverEnv.SITE_URL || "https://trivancetech.com";

function escapeXml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

function urlEntry(loc: string, lastmod: string, changefreq: string, priority: string) {
  return `  <url>\n    <loc>${escapeXml(loc)}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}

export async function GET() {
  try {
    const now = new Date().toISOString();
    const tags = await getAllTags();

    const categoryRoutes = tags.map((tag) => ({
      loc: `${URL}/blog?category=${encodeURIComponent(tag)}`,
      changefreq: "weekly" as const,
      priority: "0.5",
    }));

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${categoryRoutes.map((r) => urlEntry(r.loc, now, r.changefreq, r.priority)).join("\n")}
</urlset>`;

    return new NextResponse(xml, {
      status: 200,
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });
  } catch (error) {
    console.error("Categories sitemap error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}