/**
 * Utility to generate a sitemap.xml and robots.txt files
 * 
 * This can be used to generate the files and then manually add them to the public directory
 * or it can be used as a reference for content that should be added to those files.
 */

export const SITE_URL = "https://loufranktv.com";

export const generateSitemapXml = (): string => {
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
  
  const urls = [
    {
      loc: "/",
      lastmod: today,
      changefreq: "weekly",
      priority: "1.0"
    },
    {
      loc: "/features",
      lastmod: today,
      changefreq: "monthly",
      priority: "0.8"
    },
    {
      loc: "/pricing",
      lastmod: today,
      changefreq: "monthly",
      priority: "0.9"
    },
    {
      loc: "/setup-guides",
      lastmod: today,
      changefreq: "monthly",
      priority: "0.7"
    },
    {
      loc: "/contact",
      lastmod: today,
      changefreq: "yearly",
      priority: "0.6"
    },
    {
      loc: "/faq",
      lastmod: today,
      changefreq: "monthly",
      priority: "0.7"
    },
    {
      loc: "/testimonials",
      lastmod: today,
      changefreq: "monthly",
      priority: "0.7"
    },
    {
      loc: "/about",
      lastmod: today,
      changefreq: "yearly",
      priority: "0.6"
    }
  ];
  
  const urlElements = urls.map(url => `
  <url>
    <loc>${SITE_URL}${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('');
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlElements}
</urlset>`;
};

export const generateRobotsTxt = (): string => {
  return `# robots.txt for LouFrank TV
User-agent: *
Allow: /

# Sitemaps
Sitemap: ${SITE_URL}/sitemap.xml
`;
};

/**
 * To generate the files, you can run the following code in a Node.js script:
 *
 * import fs from 'fs';
 * import { generateSitemapXml, generateRobotsTxt } from './generateSitemap';
 *
 * fs.writeFileSync('public/sitemap.xml', generateSitemapXml());
 * fs.writeFileSync('public/robots.txt', generateRobotsTxt());
 */

// Instructions for manually adding the files to your application:
// 1. Copy the output of generateSitemapXml() to a file named sitemap.xml in your public directory
// 2. Copy the output of generateRobotsTxt() to a file named robots.txt in your public directory
// 3. Make sure these files are served at the root of your domain

// Console log outputs for easy copy/paste
console.log("\nSITEMAP.XML:\n" + generateSitemapXml());
console.log("\nROBOTS.TXT:\n" + generateRobotsTxt());
