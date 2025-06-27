// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.trivancetech.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  additionalPaths: async (config) => {
    const res = await fetch(`${process.env.STRAPI_URL}/api/articles?fields[0]=Slug&pagination[limit]=1000`);
    const json = await res.json();
    const slugs = json.data.map(item => item.Slug);

    return await Promise.all(
      slugs.map(slug => config.transform(config, `/blog/${slug}`, 'weekly', 0.6))
    );
  },
};
