/**
 * SEO Constants and Utility Functions
 * Comprehensive SEO tools for enhancing search engine visibility and structured data
 */

// Base website information
export const SITE_NAME = "LouFrank TV - Premium IPTV Streaming Service";
export const SITE_URL = "https://loufranktv.com";
export const SITE_DESCRIPTION = "Access over 16,000 HD channels, movies & TV series from 50+ countries. Ultra-fast, no freezing IPTV service compatible with Firestick, Apple, Smart TVs & more.";
export const SITE_LOGO = `${SITE_URL}/logo.png`;

// Primary keywords that we want to rank for
export const PRIMARY_KEYWORDS = [
  "IPTV service",
  "best IPTV provider",
  "legal IPTV service",
  "HD IPTV channels",
  "streaming TV service",
  "cable TV alternative",
  "IPTV subscription",
  "IPTV trial",
  "affordable IPTV",
  "premium IPTV",
  "IPTV for Firestick",
  "IPTV for Smart TV",
  "international TV channels"
];

// Page-specific SEO settings
export type PageSEO = {
  title: string;
  description: string;
  keywords: string[];
  canonicalPath?: string; // Path portion of canonical URL relative to domain
  ogImage?: string; // Open Graph image URL
  structuredData?: Record<string, any>; // JSON-LD structured data
};

// Default page SEO
export const DEFAULT_SEO: PageSEO = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  keywords: PRIMARY_KEYWORDS,
  ogImage: `${SITE_URL}/og-image.jpg`,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "LouFrank TV",
    "url": SITE_URL,
    "logo": SITE_LOGO,
    "description": SITE_DESCRIPTION,
    "sameAs": [
      "https://facebook.com/loufranktv",
      "https://twitter.com/loufranktv",
      "https://instagram.com/loufranktv"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "",
      "contactType": "customer service",
      "availableLanguage": ["English"]
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${SITE_URL}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  }
};

// Page-specific SEO settings
export const PAGE_SEO: Record<string, PageSEO> = {
  home: {
    ...DEFAULT_SEO,
    title: `${SITE_NAME} - Stream 16,000+ HD Channels From 50+ Countries`,
    description: "LouFrank TV offers premium IPTV streaming with 16,000+ HD channels, movies & TV series from 50+ countries. Ultra-fast, no freezing, compatible with all devices.",
    keywords: [...PRIMARY_KEYWORDS, "HD streaming service", "no contract TV", "IPTV free trial", "watch international TV"],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "LouFrank TV",
      "url": SITE_URL,
      "description": SITE_DESCRIPTION,
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${SITE_URL}/search?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    }
  },
  features: {
    ...DEFAULT_SEO,
    title: "Premium IPTV Features | LouFrank TV - 16,000+ HD Channels & Movies",
    description: "Explore LouFrank TV's premium IPTV features: 16,000+ HD channels, ultra-fast zapping, no freezing, VOD library, and compatibility with all devices.",
    keywords: [...PRIMARY_KEYWORDS, "IPTV features", "HD channel list", "video on demand", "catch-up TV", "TV guide", "IPTV compatibility"],
    canonicalPath: "/features",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "16,000+ HD & FHD Channels",
          "description": "Access over 16,000 HD and FHD channels from more than 50 countries."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Ultra-Fast Channel Zapping",
          "description": "Enjoy seamless channel switching with no delays."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "No Freezing Technology",
          "description": "Advanced anti-freezing technology ensures smooth viewing experience."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Video On Demand Library",
          "description": "Thousands of movies and TV series available on demand."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Multi-Device Compatibility",
          "description": "Compatible with Firestick, Apple products, Smart TVs, PCs, tablets, MAG boxes, and smartphones."
        }
      ]
    }
  },
  pricing: {
    ...DEFAULT_SEO,
    title: "Affordable IPTV Plans & Pricing | LouFrank TV - Starting at $15/mo",
    description: "Choose from LouFrank TV's affordable IPTV subscription plans with no contracts. Get 16,000+ channels, VOD, and premium features starting at $15/month.",
    keywords: [...PRIMARY_KEYWORDS, "IPTV subscription cost", "cheap IPTV service", "IPTV monthly plan", "cancel anytime IPTV", "IPTV pricing"],
    canonicalPath: "/pricing",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "LouFrank TV IPTV Subscription",
      "description": "Premium IPTV subscription with 16,000+ HD channels from 50+ countries",
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "15",
        "highPrice": "25",
        "priceCurrency": "USD",
        "offerCount": 3
      }
    }
  },
  setup: {
    ...DEFAULT_SEO,
    title: "Easy IPTV Setup Guide | LouFrank TV - Works on Any Device",
    description: "Simple setup instructions for LouFrank TV IPTV on any device. Step-by-step guides for Firestick, Apple TV, Smart TVs, Android, and more.",
    keywords: [...PRIMARY_KEYWORDS, "IPTV setup", "how to install IPTV", "IPTV configuration", "IPTV on Firestick", "IPTV on Smart TV", "IPTV player setup"],
    canonicalPath: "/setup",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Set Up LouFrank TV IPTV Service",
      "description": "Simple step-by-step guide to set up LouFrank TV IPTV service on any device",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Choose a Subscription Plan",
          "text": "Select a subscription plan that suits your needs"
        },
        {
          "@type": "HowToStep",
          "name": "Download the App",
          "text": "Download the LouFrank TV app or a compatible IPTV player"
        },
        {
          "@type": "HowToStep",
          "name": "Enter Your Credentials",
          "text": "Enter your username and password provided after subscription"
        },
        {
          "@type": "HowToStep",
          "name": "Start Watching",
          "text": "Enjoy your favorite channels and content in HD quality"
        }
      ]
    }
  },
  contact: {
    ...DEFAULT_SEO,
    title: "Contact LouFrank TV - 24/7 IPTV Customer Support",
    description: "Get 24/7 customer support for LouFrank TV IPTV service. Contact us for technical assistance, subscription inquiries, or general questions.",
    keywords: [...PRIMARY_KEYWORDS, "IPTV customer support", "IPTV helpdesk", "IPTV technical support", "contact IPTV provider"],
    canonicalPath: "/contact",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact LouFrank TV IPTV Service",
      "description": "Contact our 24/7 customer support team for assistance"
    }
  },
  faq: {
    ...DEFAULT_SEO,
    title: "IPTV FAQs | LouFrank TV - Everything You Need to Know",
    description: "Find answers to frequently asked questions about LouFrank TV IPTV service. Learn about setup, channels, subscriptions, compatibility, and more.",
    keywords: [...PRIMARY_KEYWORDS, "IPTV questions", "IPTV FAQ", "IPTV help", "what is IPTV", "how does IPTV work"],
    canonicalPath: "/faq",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is IPTV?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "IPTV (Internet Protocol Television) is a service that delivers television content over the internet instead of through traditional cable or satellite methods. LouFrank TV offers premium IPTV service with over 16,000 channels from more than 50 countries."
          }
        },
        {
          "@type": "Question",
          "name": "What devices are compatible with LouFrank TV?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "LouFrank TV is compatible with a wide range of devices including Firestick, Apple products, Smart TVs, PCs, tablets, MAG boxes, and smartphones. Our service works on any device that can install an IPTV player application."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer a free trial?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer a $1 trial for 36 hours so you can experience our service before committing to a full subscription. This gives you access to all features and channels."
          }
        },
        {
          "@type": "Question",
          "name": "How many simultaneous connections do I get?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depending on your subscription plan, you can get from 1 to 4 simultaneous connections. This means you can watch different channels on multiple devices at the same time."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a long-term contract?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, we offer flexible month-to-month subscriptions with no long-term contracts. You can cancel at any time."
          }
        }
      ]
    }
  },
  about: {
    ...DEFAULT_SEO,
    title: "About LouFrank TV - Professional IPTV Provider Since 2018",
    description: "LouFrank TV is a leading IPTV provider offering premium streaming services since 2018. Learn about our mission to provide high-quality, affordable TV worldwide.",
    keywords: [...PRIMARY_KEYWORDS, "IPTV company", "IPTV provider history", "trusted IPTV service", "reliable IPTV provider"],
    canonicalPath: "/about",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About LouFrank TV",
      "description": "Learn about LouFrank TV's mission and vision as a premium IPTV provider"
    }
  }
};

// Get SEO data for a specific page
export const getPageSEO = (pageName: keyof typeof PAGE_SEO | string): PageSEO => {
  if (pageName in PAGE_SEO) {
    return PAGE_SEO[pageName as keyof typeof PAGE_SEO];
  }
  return DEFAULT_SEO;
};

/**
 * Generate dynamic sitemap content
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

/**
 * Generate breadcrumb structured data
 */
export const generateBreadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

/**
 * Generate common Open Graph meta tags
 */
export const generateOpenGraphTags = (
  title: string,
  description: string,
  url: string,
  imageUrl: string,
  type: string = "website"
): Array<{property: string, content: string}> => [
  { property: "og:title", content: title },
  { property: "og:description", content: description },
  { property: "og:url", content: url },
  { property: "og:image", content: imageUrl },
  { property: "og:type", content: type }
];

/**
 * Generate Twitter Card meta tags
 */
export const generateTwitterTags = (
  title: string,
  description: string,
  imageUrl: string,
  twitterHandle: string = "@loufranktv"
): Array<{name: string, content: string}> => [
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:site", content: twitterHandle },
  { name: "twitter:title", content: title },
  { name: "twitter:description", content: description },
  { name: "twitter:image", content: imageUrl }
];

