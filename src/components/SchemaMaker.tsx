import React from 'react';
import { Helmet } from 'react-helmet';

/**
 * Schema.org structured data component for rich snippets in search results
 * This dramatically improves SEO by providing search engines with structured information
 */
export function SchemaMaker() {
  // Base organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "LouFrank TV",
    "url": "https://loufrank.tv",
    "logo": "https://loufrank.tv/public/901661ac-f28e-4815-8069-61ae5363a100/logo-color.png",
    "description": "Premium IPTV provider offering over 16,000 HD and FHD channels from more than 50 countries with ultra-fast zapping and no buffering.",
    "sameAs": [
      "https://facebook.com/loufrankTV",
      "https://twitter.com/loufrankTV",
      "https://instagram.com/loufrankTV"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-LOUFRANK",
      "contactType": "customer service",
      "availableLanguage": ["English", "Spanish"]
    }
  };

  // Product schema for the IPTV service
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "LouFrank TV Premium IPTV Service",
    "image": "https://loufrank.tv/public/901661ac-f28e-4815-8069-61ae5363a100/logo-color.png",
    "description": "Access over 16,000 HD & FHD channels from 50+ countries with ultra-fast zapping and no freezing.",
    "brand": {
      "@type": "Brand",
      "name": "LouFrank TV"
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "1.00",
      "highPrice": "79.99",
      "priceCurrency": "USD",
      "offerCount": 4,
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "985"
    }
  };

  // FAQ schema for common questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What devices can I use with LouFrank TV?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "LouFrank TV is compatible with Firestick, Apple products, Smart TVs, PCs, tablets, MAG boxes, and smartphones. Our service works on virtually any device that can connect to the internet and play video."
        }
      },
      {
        "@type": "Question",
        "name": "How many channels does LouFrank TV offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "LouFrank TV provides access to over 16,000 HD and FHD channels from more than 50 countries worldwide. Our extensive library also includes thousands of on-demand movies and TV series."
        }
      },
      {
        "@type": "Question",
        "name": "Does LouFrank TV require a contract?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, LouFrank TV offers flexible, pay-as-you-go subscription models with no long-term contracts or commitments. You can choose from monthly plans with varying numbers of connections to suit your needs."
        }
      },
      {
        "@type": "Question",
        "name": "How is the streaming quality of LouFrank TV?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "LouFrank TV offers ultra-fast zapping with no freezing or buffering. Our streams are available in HD and FHD quality, providing a premium viewing experience across all devices."
        }
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(productSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
}