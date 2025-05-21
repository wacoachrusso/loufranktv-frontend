// Advanced SEO Configuration Module
// This module contains comprehensive SEO configuration for maximum search engine visibility

// Base website information
export const SITE_NAME = "LouFrank TV";
export const SITE_TITLE = "LouFrank TV - Premium IPTV Service with 16,000+ HD Channels";
export const SITE_URL = "https://loufranktv.com";
export const SITE_DESCRIPTION = "Access over 16,000 HD & FHD channels from 50+ countries with ultra-fast zapping and no freezing. Watch on any device with LouFrank TV's premium IPTV service.";
export const SITE_LOGO = `${SITE_URL}/logo.png`;
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

// Business information (for local SEO)
export const BUSINESS_INFO = {
  name: SITE_NAME,
  legalName: "LouFrank TV Entertainment LLC",
  url: SITE_URL,
  logo: SITE_LOGO,
  email: "support@loufranktv.com",
  telephone: "",  // If available
  foundingDate: "2018",
  founders: [{
    name: "LouFrank TV Team",
    url: `${SITE_URL}/about`
  }],
  address: {
    streetAddress: "", // Optional
    addressLocality: "", // Optional
    addressRegion: "", // Optional
    postalCode: "", // Optional
    addressCountry: "US"
  },
  socialProfiles: {
    facebook: "https://facebook.com/loufranktv",
    twitter: "https://twitter.com/loufranktv",
    instagram: "https://instagram.com/loufranktv",
    youtube: "https://youtube.com/loufranktv"
  }
};

// SEO keywords by category
export const KEYWORDS = {
  // Primary keywords (most important for our business)
  primary: [
    "IPTV service",
    "IPTV subscription",
    "best IPTV provider",
    "premium IPTV service",
    "legal IPTV",
    "HD IPTV channels"
  ],
  
  // Secondary keywords (important but less competitive)
  secondary: [
    "international TV channels",
    "streaming TV service",
    "cable TV alternative",
    "live TV streaming",
    "on-demand movies",
    "sports IPTV",
    "IPTV trial",
    "affordable IPTV"
  ],
  
  // Feature keywords
  features: [
    "no buffer IPTV",
    "IPTV no freezing",
    "ultra-fast channel switching",
    "HD and FHD channels",
    "16000 TV channels",
    "50000 on-demand movies",
    "TV guide EPG",
    "24/7 IPTV support"
  ],
  
  // Device compatibility keywords
  devices: [
    "IPTV for Firestick",
    "IPTV for Apple TV",
    "IPTV for Smart TV",
    "IPTV for Android",
    "IPTV for iPhone",
    "IPTV for PC",
    "IPTV for tablet",
    "IPTV for MAG box"
  ],
  
  // Local keywords (if targeting specific regions)
  local: [
    "US IPTV service",
    "American IPTV provider",
    "IPTV USA channels",
    "North American IPTV"
  ]
};

// Content categories for site organization
export const CONTENT_CATEGORIES = [
  "IPTV Plans",
  "TV Channels",
  "Movies & Series",
  "Live Sports",
  "International Channels",
  "Setup Guides",
  "Support"
];

// Define competitive service features for comparison schema
export const SERVICE_FEATURES = [
  {
    name: "Channel Count",
    value: "16,000+",
    description: "Access to over 16,000 HD and FHD channels from more than 50 countries"
  },
  {
    name: "Video Quality",
    value: "HD/FHD",
    description: "Crystal clear HD and Full HD quality streams"
  },
  {
    name: "Video on Demand",
    value: "50,000+",
    description: "Library of over 50,000 movies and TV series available on demand"
  },
  {
    name: "Zapping Speed",
    value: "Ultra-Fast",
    description: "Industry-leading channel switching speed with our proprietary technology"
  },
  {
    name: "Anti-Buffer Technology",
    value: "Yes",
    description: "Advanced technology prevents freezing and buffering for smooth viewing"
  },
  {
    name: "Device Compatibility",
    value: "All Devices",
    description: "Works on all major streaming devices, smart TVs, phones, tablets, and computers"
  },
  {
    name: "Multi-Connection",
    value: "1-4",
    description: "Options for multiple simultaneous connections based on subscription plan"
  },
  {
    name: "Electronic Program Guide",
    value: "Yes",
    description: "Comprehensive TV guide for most channels"
  },
  {
    name: "Customer Support",
    value: "24/7",
    description: "Round-the-clock customer support via email and chat"
  },
  {
    name: "Contract",
    value: "None",
    description: "No contracts or long-term commitments required"
  }
];

// Page-specific SEO settings type
export type PageSEO = {
  title: string;                      // Page title (will be formatted with site name)
  description: string;                // Meta description
  keywords: string[];                 // Keywords for this page
  canonicalPath: string;              // Path portion of canonical URL relative to domain
  ogImage?: string;                   // Open Graph image URL (defaults to site OG image)
  ogType?: string;                    // Open Graph type (defaults to 'website')
  twitterCard?: string;               // Twitter card type (defaults to 'summary_large_image')
  structuredData?: Record<string, any> | Record<string, any>[]; // JSON-LD structured data
  publishedDate?: string;             // ISO date for article published date
  modifiedDate?: string;              // ISO date for article modified date
  locale?: string;                    // Content locale (defaults to 'en_US')
};

// Base SEO configuration that applies to all pages
export const BASE_SEO: Omit<PageSEO, 'title' | 'description' | 'keywords' | 'canonicalPath'> = {
  ogType: 'website',
  twitterCard: 'summary_large_image',
  ogImage: DEFAULT_OG_IMAGE,
  locale: 'en_US',
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": BUSINESS_INFO.name,
    "legalName": BUSINESS_INFO.legalName,
    "url": BUSINESS_INFO.url,
    "logo": BUSINESS_INFO.logo,
    "foundingDate": BUSINESS_INFO.foundingDate,
    "founders": BUSINESS_INFO.founders,
    "email": BUSINESS_INFO.email,
    "telephone": BUSINESS_INFO.telephone,
    "description": SITE_DESCRIPTION,
    "sameAs": [
      BUSINESS_INFO.socialProfiles.facebook,
      BUSINESS_INFO.socialProfiles.twitter,
      BUSINESS_INFO.socialProfiles.instagram,
      BUSINESS_INFO.socialProfiles.youtube
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": BUSINESS_INFO.address.addressCountry
    }
  }
};

// Detailed page-specific SEO configurations
const HOME_SEO: PageSEO = {
  title: `${SITE_TITLE} - Stream 16,000+ HD Channels From 50+ Countries`,
  description: "LouFrank TV delivers premium IPTV streaming with 16,000+ HD channels from 50+ countries. Ultra-fast zapping, no freezing, and compatible with all devices.",
  keywords: [...KEYWORDS.primary, ...KEYWORDS.secondary.slice(0, 5), ...KEYWORDS.features.slice(0, 5), ...KEYWORDS.devices.slice(0, 3)],
  canonicalPath: "/",
  modifiedDate: new Date().toISOString(),
  structuredData: [
    // Organization Schema
    BASE_SEO.structuredData,
    // WebSite Schema
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": SITE_NAME,
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
    },
    // Breadcrumb Schema
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": SITE_URL
        }
      ]
    },
    // Service Schema
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "IPTV Streaming Service",
      "provider": {
        "@type": "Organization",
        "name": SITE_NAME,
        "url": SITE_URL
      },
      "name": "Premium IPTV Streaming",
      "description": SITE_DESCRIPTION,
      "offers": {
        "@type": "Offer",
        "price": "15.00",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": `${SITE_URL}/pricing`
      }
    }
  ]
};

const FEATURES_SEO: PageSEO = {
  title: "Premium IPTV Features | LouFrank TV - 16,000+ HD Channels & Movies",
  description: "Explore LouFrank TV's premium IPTV features: 16,000+ HD channels, ultra-fast zapping, no freezing, vast VOD library, and compatibility with all devices.",
  keywords: [...KEYWORDS.features, ...KEYWORDS.primary.slice(0, 3), ...KEYWORDS.secondary.slice(0, 3)],
  canonicalPath: "/features",
  structuredData: [
    // Organization Schema
    BASE_SEO.structuredData,
    // Breadcrumb Schema
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": SITE_URL
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Features",
          "item": `${SITE_URL}/features`
        }
      ]
    },
    // ItemList Schema for Features
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": SERVICE_FEATURES.map((feature, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": feature.name,
        "description": feature.description
      }))
    }
  ]
};

const PRICING_SEO: PageSEO = {
  title: "Affordable IPTV Plans & Pricing | LouFrank TV - Starting at $15/mo",
  description: "Choose from LouFrank TV's affordable IPTV subscription plans with no contracts. Get 16,000+ channels, VOD, and premium features starting at $15/month.",
  keywords: [...KEYWORDS.primary.slice(0, 3), "IPTV subscription cost", "cheap IPTV service", "IPTV monthly plan", "cancel anytime IPTV", "IPTV pricing", "best IPTV deals", "IPTV subscription plans"],
  canonicalPath: "/pricing",
  structuredData: [
    // Organization Schema
    BASE_SEO.structuredData,
    // Breadcrumb Schema
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": SITE_URL
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Pricing",
          "item": `${SITE_URL}/pricing`
        }
      ]
    },
    // Product Schema
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "LouFrank TV IPTV Subscription",
      "description": "Premium IPTV subscription with 16,000+ HD channels from 50+ countries",
      "image": DEFAULT_OG_IMAGE,
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "15.00",
        "highPrice": "25.00",
        "priceCurrency": "USD",
        "offerCount": 3,
        "offers": [
          {
            "@type": "Offer",
            "name": "Basic Plan",
            "price": "15.00",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": `${SITE_URL}/pricing#basic`
          },
          {
            "@type": "Offer",
            "name": "Standard Plan",
            "price": "20.00",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": `${SITE_URL}/pricing#standard`
          },
          {
            "@type": "Offer",
            "name": "Premium Plan",
            "price": "25.00",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": `${SITE_URL}/pricing#premium`
          }
        ]
      },
      "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4.8",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "LouFrank TV Customer"
        },
        "reviewBody": "Excellent service with thousands of channels and perfect streaming quality. The best IPTV service I've used."
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1205",
        "bestRating": "5",
        "worstRating": "1"
      }
    }
  ]
};

const SETUP_GUIDES_SEO: PageSEO = {
  title: "Easy IPTV Setup Guide | LouFrank TV - Works on Any Device",
  description: "Simple setup instructions for LouFrank TV IPTV on any device. Step-by-step guides for Firestick, Apple TV, Smart TVs, Android, and more.",
  keywords: [...KEYWORDS.devices, "IPTV setup", "how to install IPTV", "IPTV configuration", "IPTV player setup", "IPTV installation guide"],
  canonicalPath: "/setup-guides",
  structuredData: [
    // Organization Schema
    BASE_SEO.structuredData,
    // Breadcrumb Schema
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": SITE_URL
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Setup Guides",
          "item": `${SITE_URL}/setup-guides`
        }
      ]
    },
    // HowTo Schema
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Set Up LouFrank TV IPTV Service",
      "description": "Simple step-by-step guide to set up LouFrank TV IPTV service on any device",
      "totalTime": "PT5M",
      "tool": [
        {
          "@type": "HowToTool",
          "name": "Smart TV, Firestick, Apple TV, Android device, or computer"
        },
        {
          "@type": "HowToTool",
          "name": "IPTV Player App"
        },
        {
          "@type": "HowToTool",
          "name": "Internet connection"
        }
      ],
      "step": [
        {
          "@type": "HowToStep",
          "name": "Choose a Subscription Plan",
          "text": "Select a subscription plan that suits your needs",
          "url": `${SITE_URL}/pricing`,
          "image": `${SITE_URL}/setup-step1.jpg`
        },
        {
          "@type": "HowToStep",
          "name": "Download the App",
          "text": "Download the LouFrank TV app or a compatible IPTV player on your device",
          "url": `${SITE_URL}/setup-guides#apps`,
          "image": `${SITE_URL}/setup-step2.jpg`
        },
        {
          "@type": "HowToStep",
          "name": "Enter Your Credentials",
          "text": "Enter your username and password provided after subscription",
          "url": `${SITE_URL}/setup-guides#login`,
          "image": `${SITE_URL}/setup-step3.jpg`
        },
        {
          "@type": "HowToStep",
          "name": "Start Watching",
          "text": "Enjoy your favorite channels and content in HD quality",
          "url": `${SITE_URL}/setup-guides#watching`,
          "image": `${SITE_URL}/setup-step4.jpg`
        }
      ]
    }
  ]
};

const CONTACT_SEO: PageSEO = {
  title: "Contact LouFrank TV - 24/7 IPTV Customer Support",
  description: "Get 24/7 customer support for LouFrank TV IPTV service. Contact us for technical assistance, subscription inquiries, or general questions.",
  keywords: [...KEYWORDS.primary.slice(0, 3), "IPTV customer support", "IPTV helpdesk", "IPTV technical support", "contact IPTV provider", "IPTV service support"],
  canonicalPath: "/contact",
  structuredData: [
    // Organization Schema
    BASE_SEO.structuredData,
    // Breadcrumb Schema
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": SITE_URL
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Contact",
          "item": `${SITE_URL}/contact`
        }
      ]
    },
    // ContactPage Schema
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact LouFrank TV IPTV Service",
      "description": "Contact our 24/7 customer support team for assistance",
      "mainEntity": {
        "@type": "ContactPoint",
        "telephone": BUSINESS_INFO.telephone,
        "email": BUSINESS_INFO.email,
        "contactType": "customer service",
        "availableLanguage": ["English"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        }
      }
    }
  ]
};

const FAQ_SEO: PageSEO = {
  title: "IPTV FAQs | LouFrank TV - Everything You Need to Know",
  description: "Find answers to frequently asked questions about LouFrank TV IPTV service. Learn about setup, channels, subscriptions, compatibility, and more.",
  keywords: [...KEYWORDS.primary.slice(0, 3), "IPTV questions", "IPTV FAQ", "IPTV help", "what is IPTV", "how does IPTV work", "IPTV troubleshooting"],
  canonicalPath: "/faq",
  structuredData: [
    // Organization Schema
    BASE_SEO.structuredData,
    // Breadcrumb Schema
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": SITE_URL
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "FAQ",
          "item": `${SITE_URL}/faq`
        }
      ]
    },
    // FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is IPTV?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "IPTV (Internet Protocol Television) is a service that delivers television content over Internet Protocol (IP) networks. Unlike traditional TV that receives broadcast signals via antenna, cable or satellite, IPTV streams content directly through your internet connection to your device. LouFrank TV offers premium IPTV service with over 16,000 channels from more than 50 countries."
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
            "text": "Yes! We offer a $1 trial for 36 hours that gives you full access to our services. This allows you to test compatibility with your devices and experience our channel quality before committing to a full subscription."
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
            "text": "No, LouFrank TV operates on a flexible, pay-as-you-go model. There are no long-term contracts or commitments. You can cancel your subscription at any time."
          }
        },
        {
          "@type": "Question",
          "name": "What internet speed do I need for LouFrank TV?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For optimal performance, we recommend an internet connection of at least 25 Mbps for HD content and 50 Mbps for FHD/4K content. A stable connection is more important than raw speed for smooth streaming experience."
          }
        },
        {
          "@type": "Question",
          "name": "How do I set up LouFrank TV on my device?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Setup is simple and varies slightly by device. Generally, you'll need to download an IPTV player app on your device, then enter your LouFrank TV credentials. We provide detailed setup guides for all supported devices in our Setup Guide section."
          }
        },
        {
          "@type": "Question",
          "name": "How many channels do you offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "LouFrank TV provides access to over 16,000 live TV channels in HD and FHD quality from more than 50 countries worldwide. Our library is constantly updated with new channels."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide EPG (TV Guide) services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all our subscriptions include a comprehensive electronic program guide (EPG) that shows program schedules for most channels. The guide is updated regularly and works with compatible IPTV players."
          }
        },
        {
          "@type": "Question",
          "name": "How do I pay for my subscription?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We accept PayPal, Venmo, Cash App, and Zelle for payment. All transactions are processed securely through these payment services."
          }
        }
      ]
    }
  ]
};

const TESTIMONIALS_SEO: PageSEO = {
  title: "LouFrank TV Reviews & Testimonials | Real Customer Experiences",
  description: "Read real reviews and testimonials from satisfied LouFrank TV customers. Discover why thousands trust our premium IPTV service for their entertainment needs.",
  keywords: [...KEYWORDS.primary.slice(0, 3), "IPTV reviews", "IPTV testimonials", "LouFrank TV reviews", "best IPTV service reviews", "customer IPTV feedback"],
  canonicalPath: "/testimonials",
  structuredData: [
    // Organization Schema
    BASE_SEO.structuredData,
    // Breadcrumb Schema
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": SITE_URL
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Testimonials",
          "item": `${SITE_URL}/testimonials`
        }
      ]
    },
    // Review Schema
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "LouFrank TV IPTV Service",
      "description": SITE_DESCRIPTION,
      "brand": {
        "@type": "Brand",
        "name": SITE_NAME
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1205",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "name": "Excellent IPTV Service",
          "reviewBody": "I've been using LouFrank TV for over a year now and couldn't be happier. The channels never buffer, and the picture quality is excellent.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          },
          "author": {
            "@type": "Person",
            "name": "Michael J."
          },
          "datePublished": "2025-01-15"
        },
        {
          "@type": "Review",
          "name": "Great Value for Money",
          "reviewBody": "The channel selection is amazing, especially the sports channels. Customer service is very responsive whenever I need help.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          },
          "author": {
            "@type": "Person",
            "name": "Sarah T."
          },
          "datePublished": "2025-02-10"
        },
        {
          "@type": "Review",
          "name": "Top-Notch Streaming",
          "reviewBody": "The movies and series library is extensive, and the stream quality is excellent. Very satisfied with my subscription.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4",
            "bestRating": "5",
            "worstRating": "1"
          },
          "author": {
            "@type": "Person",
            "name": "David K."
          },
          "datePublished": "2025-02-25"
        }
      ]
    }
  ]
};

const ABOUT_SEO: PageSEO = {
  title: "About LouFrank TV - Professional IPTV Provider Since 2018",
  description: "LouFrank TV is a leading IPTV provider offering premium streaming services since 2018. Learn about our mission to provide high-quality, affordable TV worldwide.",
  keywords: [...KEYWORDS.primary.slice(0, 3), "IPTV company", "IPTV provider history", "trusted IPTV service", "reliable IPTV provider", "legal IPTV company"],
  canonicalPath: "/about",
  structuredData: [
    // Organization Schema
    BASE_SEO.structuredData,
    // Breadcrumb Schema
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": SITE_URL
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About Us",
          "item": `${SITE_URL}/about`
        }
      ]
    },
    // AboutPage Schema
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About LouFrank TV",
      "description": "Learn about LouFrank TV's mission and vision as a premium IPTV provider",
      "mainEntity": {
        "@type": "Corporation",
        "name": BUSINESS_INFO.name,
        "legalName": BUSINESS_INFO.legalName,
        "foundingDate": BUSINESS_INFO.foundingDate,
        "founders": BUSINESS_INFO.founders,
        "url": SITE_URL,
        "logo": SITE_LOGO,
        "numberOfEmployees": {
          "@type": "QuantitativeValue",
          "value": "15+"
        },
        "slogan": "Premium Entertainment for Less",
        "description": "LouFrank TV is a leading provider of premium IPTV services, dedicated to delivering high-quality entertainment solutions to customers worldwide.",
        "sameAs": [
          BUSINESS_INFO.socialProfiles.facebook,
          BUSINESS_INFO.socialProfiles.twitter,
          BUSINESS_INFO.socialProfiles.instagram,
          BUSINESS_INFO.socialProfiles.youtube
        ]
      }
    }
  ]
};

// Complete page SEO configuration map
export const PAGE_SEO: Record<string, PageSEO> = {
  home: HOME_SEO,
  features: FEATURES_SEO,
  pricing: PRICING_SEO,
  'setup-guides': SETUP_GUIDES_SEO,
  contact: CONTACT_SEO,
  faq: FAQ_SEO,
  testimonials: TESTIMONIALS_SEO,
  about: ABOUT_SEO
};

// Helper function to get SEO data for a specific page
export const getPageSEO = (pageName: string): PageSEO => {
  if (pageName in PAGE_SEO) {
    return PAGE_SEO[pageName as keyof typeof PAGE_SEO];
  }
  
  // Default fallback SEO configuration
  return {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    keywords: KEYWORDS.primary,
    canonicalPath: "/",
    ...BASE_SEO
  };
};
