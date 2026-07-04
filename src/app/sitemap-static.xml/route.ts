import { NextResponse } from "next/server";
import { productData } from "@/data/productsData";
import { serviceData } from "@/data/servicesData";
import { serverEnv } from "@/libs/serverEnv";

const URL = serverEnv.SITE_URL || "https://trivancetech.com";

export const dynamic = "force-dynamic";

function escapeXml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

function urlEntry(loc: string, lastmod: string, changefreq: string, priority: string) {
  return `  <url>\n    <loc>${escapeXml(loc)}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}

export async function GET() {
  try {
    const now = new Date().toISOString();

    const staticRoutes = [
      { loc: URL, changefreq: "monthly", priority: "1.0" },
      { loc: `${URL}/about`, changefreq: "monthly", priority: "0.8" },
      { loc: `${URL}/services`, changefreq: "monthly", priority: "0.8" },
      { loc: `${URL}/products`, changefreq: "monthly", priority: "0.8" },
      { loc: `${URL}/blog`, changefreq: "monthly", priority: "0.9" },
      { loc: `${URL}/contact`, changefreq: "yearly", priority: "0.7" },
    ];

    const productRoutes = Object.keys(productData).map((slug) => ({
      loc: `${URL}/products/${slug}`,
      changefreq: "monthly",
      priority: "0.7",
    }));

    const serviceRoutes = Object.keys(serviceData).map((slug) => ({
      loc: `${URL}/services/${slug}`,
      changefreq: "monthly",
      priority: "0.7",
    }));

    const allRoutes = [...staticRoutes, ...productRoutes, ...serviceRoutes];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${allRoutes.map((r) => urlEntry(r.loc, now, r.changefreq, r.priority)).join("\n")}\n</urlset>`;

    return new NextResponse(xml, {
      status: 200,
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });
  } catch (error) {
    console.error("Static sitemap error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}