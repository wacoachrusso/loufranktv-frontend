import React from "react";
import { Helmet } from "react-helmet";
import { generateBreadcrumbsStructuredData } from "../utils/seo-utils";
import { 
  getPageSEO, 
  PageSEO, 
  SITE_NAME, 
  SITE_URL,
  generateOpenGraphTags,
  generateTwitterTags,
  generateBreadcrumbSchema
} from "../utils/seo";

interface SEOProps {
  pageName?: string;
  customSEO?: Partial<PageSEO>;
  customTitle?: string;
  customDescription?: string;
  customCanonicalPath?: string;
  customMetaTags?: Array<{ name: string; content: string } | { property: string; content: string }>;
  noIndex?: boolean;
  breadcrumbs?: Array<{name: string, url: string}>;
}

export function SEO({ 
  pageName = "home", 
  customSEO = {}, 
  customTitle, 
  customDescription, 
  customCanonicalPath,
  customMetaTags = [],
  noIndex = false,
  breadcrumbs = []
}: SEOProps) {
  // Get base SEO for this page and merge with any custom overrides
  const pageSEO = getPageSEO(pageName);
  const seo = { ...pageSEO, ...customSEO };

  // Apply individual overrides if provided
  if (customTitle) seo.title = customTitle;
  if (customDescription) seo.description = customDescription;
  if (customCanonicalPath) seo.canonicalPath = customCanonicalPath;

  // Prepare canonical URL
  const canonicalURL = seo.canonicalPath
    ? `${SITE_URL}${seo.canonicalPath}`
    : SITE_URL;

  // Prepare keywords string
  const keywordsString = seo.keywords.join(", ");

  // Get current date for Last-Modified header
  const lastModified = seo.modifiedDate || new Date().toISOString();

  // Generate Open Graph and Twitter tags using utility functions
  const openGraphTags = generateOpenGraphTags(
    seo.title,
    seo.description,
    canonicalURL,
    seo.ogImage || `${SITE_URL}/og-image.jpg`,
    seo.ogType || "website"
  );

  const twitterTags = generateTwitterTags(
    seo.title,
    seo.description,
    seo.ogImage || `${SITE_URL}/og-image.jpg`
  );

  // Add breadcrumbs structured data if provided
  let structuredDataArray = [];
  if (seo.structuredData) {
    structuredDataArray.push(seo.structuredData);
  }
  
  if (breadcrumbs.length > 0) {
    // Use the new structured data generator for breadcrumbs
    structuredDataArray.push(generateBreadcrumbsStructuredData(breadcrumbs, SITE_URL));
  }
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={keywordsString} />
      <link rel="canonical" href={canonicalURL} />

      {/* Open Graph Meta Tags (for Facebook, LinkedIn) */}
      {openGraphTags.map((tag, index) => (
        <meta key={`og-tag-${index}`} property={tag.property} content={tag.content} />
      ))}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={seo.locale || "en_US"} />
      <meta property="og:updated_time" content={lastModified} />

      {/* Twitter Meta Tags */}
      {twitterTags.map((tag, index) => (
        <meta key={`twitter-tag-${index}`} name={tag.name} content={tag.content} />
      ))}

      {/* Robots control */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      )}
      <meta name="googlebot" content={noIndex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"} />
      <meta name="bingbot" content={noIndex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="LouFrank TV" />
      <meta httpEquiv="last-modified" content={lastModified} />

      {/* Mobile Specific Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content={SITE_NAME} />
      <meta name="application-name" content={SITE_NAME} />
      <meta name="theme-color" content="#0f172a" />
      
      {/* Performance optimization hint */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

      {/* Additional custom meta tags */}
      {customMetaTags.map((tag, index) => {
        if ('name' in tag) {
          return <meta key={`custom-meta-${index}`} name={tag.name} content={tag.content} />;
        } else if ('property' in tag) {
          return <meta key={`custom-meta-${index}`} property={tag.property} content={tag.content} />;
        }
        return null;
      })}

      {/* JSON-LD structured data */}
      {structuredDataArray.length > 0 && structuredDataArray.map((item, index) => (
        <script key={`structured-data-${index}`} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}

      {/* Favicon */}
      <link rel="icon" href="/public/901661ac-f28e-4815-8069-61ae5363a100/logo-color.png" />
      <link rel="apple-touch-icon" href="/public/901661ac-f28e-4815-8069-61ae5363a100/logo-color.png" />
      <link rel="shortcut icon" href="/public/901661ac-f28e-4815-8069-61ae5363a100/logo-color.png" />
    </Helmet>
  );
}
