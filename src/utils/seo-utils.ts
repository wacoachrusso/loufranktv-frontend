/**
 * SEO Utilities
 * 
 * This module provides utility functions for SEO-related tasks:
 * - Structured data generation for Schema.org markup
 * - Open Graph and Twitter card meta tag generation
 * - Breadcrumb navigation data
 */

interface BreadcrumbItem {
  name: string;
  url: string;
}

// Function to generate structured data JSON for breadcrumbs
export function generateBreadcrumbsStructuredData(breadcrumbs: BreadcrumbItem[], baseUrl: string = 'https://loufranktv.com') {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': `${baseUrl}${item.url}`
    }))
  };
}

// Function to generate structured data for an article or blog post
export function generateArticleStructuredData({
  title,
  description,
  image,
  datePublished,
  dateModified,
  authorName,
  url
}: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': title,
    'description': description,
    'image': image,
    'datePublished': datePublished,
    'dateModified': dateModified,
    'author': {
      '@type': 'Person',
      'name': authorName
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'LouFrank TV',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://loufranktv.com/public/901661ac-f28e-4815-8069-61ae5363a100/logo-color.png'
      }
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': url
    }
  };
}

// Function to generate structured data for a product (IPTV subscription)
export function generateProductStructuredData({
  name,
  description,
  image,
  price,
  currency = 'USD',
  availability = 'InStock',
  url
}: {
  name: string;
  description: string;
  image: string;
  price: string;
  currency?: string;
  availability?: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': name,
    'description': description,
    'image': image,
    'offers': {
      '@type': 'Offer',
      'price': price,
      'priceCurrency': currency,
      'availability': `https://schema.org/${availability}`,
      'url': url
    },
    'brand': {
      '@type': 'Brand',
      'name': 'LouFrank TV'
    }
  };
}

// Function to generate structured data for a FAQ page
export function generateFAQStructuredData(faqs: Array<{question: string; answer: string}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };
}

// Function to generate structured data for a local business
export function generateLocalBusinessStructuredData({
  name,
  description,
  image,
  telephone,
  email,
  url,
  address
}: {
  name: string;
  description: string;
  image: string;
  telephone: string;
  email: string;
  url: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': name,
    'description': description,
    'image': image,
    'telephone': telephone,
    'email': email,
    'url': url,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': address.streetAddress,
      'addressLocality': address.addressLocality,
      'addressRegion': address.addressRegion,
      'postalCode': address.postalCode,
      'addressCountry': address.addressCountry
    }
  };
}

// Function to generate Open Graph meta tags
export function generateOpenGraphTags({
  title,
  description,
  url,
  image,
  type = 'website',
  siteName = 'LouFrank TV'
}: {
  title: string;
  description: string;
  url: string;
  image: string;
  type?: string;
  siteName?: string;
}) {
  return [
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: url },
    { property: 'og:image', content: image },
    { property: 'og:type', content: type },
    { property: 'og:site_name', content: siteName }
  ];
}

// Function to generate Twitter card meta tags
export function generateTwitterTags({
  title,
  description,
  image,
  card = 'summary_large_image'
}: {
  title: string;
  description: string;
  image: string;
  card?: string;
}) {
  return [
    { name: 'twitter:card', content: card },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image }
  ];
}
