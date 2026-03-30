import { Metadata } from 'next';
import { Article } from '@/libs/articles';

const siteConfig = {
  siteName: 'Trivance Technologies',
  siteUrl: 'https://trivancetech.com',
  defaultImage: 'https://trivancetech.com/logos/trivance.svg',
  locale: 'en_US',
  language: 'en-US',
  author: 'Trivance Technologies',
  description: 'Innovative technology solutions and industry insights for modern enterprises.',
  logoPath: 'https://trivancetech.com/logos/trivance.svg'
} as const;

// Helper functions
function parseReadTime(readTime: string): number {
  const match = readTime.match(/(\d+)/);
  return match ? parseInt(match[1]) : 5;
}

function formatCategorySlug(category: string): string {
  return category.toLowerCase().replace(/\s+/g, '-');
}

function generateKeywords(article: Article): string {
  return [
    article.category,
    'technology',
    'innovation', 
    'enterprise solutions',
    'business',
    'digital transformation'
  ].join(', ');
}

function getCanonicalUrl(slug: string): string {
  return `${siteConfig.siteUrl}/blog/${slug}`;
}

// Metadata generation
export function generateArticleMetadata(article: Article): Metadata {
  const canonicalUrl = getCanonicalUrl(article.slug);
  const images = [{
    url: article.image || siteConfig.defaultImage,
    width: 1200,
    height: 630,
    alt: article.alternativeText || article.title,
  }];

  const publishedDate = new Date(article.publishedAt).toISOString();

  return {
    title: article.metaTitle || article.title,
    description: article.metaDescription || article.description,
    keywords: generateKeywords(article),
    
    openGraph: {
      title: article.metaTitle || article.title,
      description: article.metaDescription || article.description,
      type: 'article',
      url: canonicalUrl,
      siteName: siteConfig.siteName,
      locale: siteConfig.locale,
      images,
      publishedTime: publishedDate,
      authors: [siteConfig.author],
      section: article.category,
      tags: [article.category],
    },

    twitter: {
      card: 'summary_large_image',
      title: article.metaTitle || article.title,
      description: article.metaDescription || article.description,
      images: [article.image || siteConfig.defaultImage],
    },

    alternates: {
      canonical: canonicalUrl,
    },

    other: {
      ['article:author']: siteConfig.author,
      ['article:published_time']: publishedDate,
      ['article:section']: article.category,
      ['article:tag']: article.category,
    },
  };
}

// Schema generation
export function generateArticleSchemas(article: Article) {
  const canonicalUrl = getCanonicalUrl(article.slug);
  const publishedDate = new Date(article.publishedAt).toISOString();
  const readingTimeMinutes = parseReadTime(article.readTime);
  const categorySlug = formatCategorySlug(article.category);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription || article.description,
    image: {
      '@type': 'ImageObject',
      url: article.image || siteConfig.defaultImage,
      width: 1200,
      height: 630,
    },
    author: {
      '@type': 'Organization',
      name: siteConfig.author,
      url: siteConfig.siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.siteUrl}${siteConfig.logoPath}`,
        width: 200,
        height: 60,
      },
      url: siteConfig.siteUrl,
    },
    datePublished: publishedDate,
    dateModified: publishedDate,
    url: canonicalUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    articleSection: article.category,
    keywords: [article.category, 'technology', 'innovation'],
    inLanguage: siteConfig.language,
    isPartOf: {
      '@type': 'WebSite',
      name: siteConfig.siteName,
      url: siteConfig.siteUrl,
    },
    timeRequired: `PT${readingTimeMinutes}M`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteConfig.siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog', 
        item: `${siteConfig.siteUrl}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.category,
        item: `${siteConfig.siteUrl}/blog?category=${categorySlug}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: article.title,
        item: canonicalUrl,
      },
    ],
  };

  return [articleSchema, breadcrumbSchema];
}