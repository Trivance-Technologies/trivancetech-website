import { getAllArticlesSitemap } from "@/libs/articles";
import { productData } from "@/data/productsData";
import { serviceData } from "@/data/servicesData";

const URL = "https://www.trivancetech.com";

export default async function sitemap() {
  try {
    const articles = await getAllArticlesSitemap();
    
    const posts = articles.map((article) => ({
      url: `${URL}/blog/${article.slug}`,
      lastModified: new Date(article.publishedAt).toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

    // Generate product pages
    const products = Object.keys(productData).map((slug) => ({
      url: `${URL}/products/${slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

    // Generate service pages
    const services = Object.keys(serviceData).map((slug) => ({
      url: `${URL}/services/${slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

    const routes = [
      {
        url: URL,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 1.0,
      },
      {
        url: `${URL}/about`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      },
      {
        url: `${URL}/services`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      },
      {
        url: `${URL}/products`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      },
      {
        url: `${URL}/blog`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
      },
      {
        url: `${URL}/contact`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'yearly' as const,
        priority: 0.7,
      },
    ];

    return [...routes, ...posts, ...products, ...services];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    
    const fallbackRoutes = [
      {
        url: URL,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 1.0,
      },
      {
        url: `${URL}/about`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      },
      {
        url: `${URL}/services`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      },
      {
        url: `${URL}/products`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      },
      {
        url: `${URL}/blog`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
      },
      {
        url: `${URL}/contact`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'yearly' as const,
        priority: 0.7,
      },
    ];

    return fallbackRoutes;
  }
}