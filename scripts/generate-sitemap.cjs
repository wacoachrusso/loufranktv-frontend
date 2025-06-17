const fs = require('fs');

const SITE_URL = 'https://loufranktv.com';

const generateSitemapXml = () => {
  const today = new Date().toISOString().split('T')[0];
  const urls = [
    { loc: '/', lastmod: today, changefreq: 'weekly', priority: '1.0' },
    { loc: '/features', lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/pricing', lastmod: today, changefreq: 'monthly', priority: '0.9' },
    { loc: '/setup-guides', lastmod: today, changefreq: 'monthly', priority: '0.7' },
    { loc: '/contact', lastmod: today, changefreq: 'yearly', priority: '0.6' },
    { loc: '/faq', lastmod: today, changefreq: 'monthly', priority: '0.7' },
    { loc: '/testimonials', lastmod: today, changefreq: 'monthly', priority: '0.7' },
    { loc: '/about', lastmod: today, changefreq: 'yearly', priority: '0.6' }
  ];
  const urlElements = urls.map(url => `\n  <url>\n    <loc>${SITE_URL}${url.loc}</loc>\n    <lastmod>${url.lastmod}</lastmod>\n    <changefreq>${url.changefreq}</changefreq>\n    <priority>${url.priority}</priority>\n  </url>`).join('');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlElements}\n</urlset>\n`;
};

const generateRobotsTxt = () => {
  return `# robots.txt for LouFrank TV\nUser-agent: *\nAllow: /\n\n# Sitemaps\nSitemap: ${SITE_URL}/sitemap.xml\n`;
};

fs.writeFileSync('public/sitemap.xml', generateSitemapXml());
fs.writeFileSync('public/robots.txt', generateRobotsTxt());
console.log('Generated sitemap.xml and robots.txt in public/');
