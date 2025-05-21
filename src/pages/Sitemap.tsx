import React, { useEffect } from 'react';
import { SITE_URL, generateSitemap } from '../utils/seo-urls';

/**
 * Dynamic Sitemap Generator Component
 * This page returns an XML sitemap when accessed directly
 */
export default function Sitemap() {
  useEffect(() => {
    // Define site paths with SEO priority
    const sitePaths = [
      { url: '/', lastmod: '2025-03-10', priority: 1.0, changefreq: 'weekly' as const },
      { url: '/features', lastmod: '2025-03-10', priority: 0.8, changefreq: 'monthly' as const },
      { url: '/pricing', lastmod: '2025-03-10', priority: 0.9, changefreq: 'monthly' as const },
      { url: '/setup-guides', lastmod: '2025-03-10', priority: 0.7, changefreq: 'monthly' as const },
      { url: '/testimonials', lastmod: '2025-03-10', priority: 0.6, changefreq: 'monthly' as const },
      { url: '/faq', lastmod: '2025-03-10', priority: 0.7, changefreq: 'monthly' as const },
      { url: '/contact', lastmod: '2025-03-10', priority: 0.6, changefreq: 'monthly' as const },
      { url: '/about', lastmod: '2025-03-10', priority: 0.6, changefreq: 'monthly' as const },
    ];

    // Generate the sitemap XML
    const sitemapXml = generateSitemap(SITE_URL, sitePaths);
    
    // Create a Blob from the XML
    const blob = new Blob([sitemapXml], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    
    // Trigger download or display
    window.location.href = url;
    
    // Clean up the URL object later
    return () => URL.revokeObjectURL(url);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Sitemap</h1>
        <p>Generating XML sitemap...</p>
      </div>
    </div>
  );
}
