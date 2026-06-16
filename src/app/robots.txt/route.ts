import { NextResponse } from "next/server";

const PRODUCTION_URL = "https://www.trivancetech.com";

const robotsTxt = `
User-agent: *
Allow: /
Disallow: /api/
Host: ${PRODUCTION_URL}
Sitemap: ${PRODUCTION_URL}/sitemap.xml
`.trim();

export async function GET() {
  return new NextResponse(robotsTxt, {
    headers: { "Content-Type": "text/plain" },
  });
}