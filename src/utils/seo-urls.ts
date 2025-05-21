/**
 * SEO URL-related utilities
 * Functions for generating sitemap.xml and robots.txt
 */

// Base website information
export const SITE_URL = "https://loufranktv.com";

/**
 * URL structure for sitemap
 */
export interface SitemapUrl {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

/**
 * Generate XML sitemap content for the website
 */
export const generateSitemap = (baseUrl: string, paths: SitemapUrl[]): string => {
  const today = new Date().toISOString().split('T')[0];
  
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  paths.forEach(path => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${baseUrl}${path.url}</loc>\n`;
    sitemap += `    <lastmod>${path.lastmod || today}</lastmod>\n`;
    sitemap += `    <changefreq>${path.changefreq || 'monthly'}</changefreq>\n`;
    sitemap += `    <priority>${path.priority || 0.8}</priority>\n`;
    sitemap += '  </url>\n';
  });
  
  sitemap += '</urlset>';
  return sitemap;
};

/**
 * Generate robots.txt content
 */
export const generateRobotsTxt = (baseUrl: string): string => {
  return `User-agent: *\nAllow: /\n\nSitemap: ${baseUrl}/sitemap.xml`;
};
