import React from 'react';
import { Helmet } from 'react-helmet';

// Current date in ISO format
const currentDate = new Date().toISOString();

/**
 * Additional structured data for rich search results
 */
export function EnhancedStructuredData() {
  return (
    <Helmet>
      {/* VideoObject schema for video content */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'VideoObject',
          'name': 'LouFrank TV Premium IPTV Demo',
          'description': 'Watch a demo of LouFrank TV premium IPTV service with 16,000+ HD channels, ultra-fast zapping, and no freezing.',
          'thumbnailUrl': '/public/901661ac-f28e-4815-8069-61ae5363a100/video-thumbnail.jpg',
          'uploadDate': '2023-09-15T08:00:00+08:00',
          'contentUrl': 'https://loufrank.tv/demo-video',
          'duration': 'PT1M30S',
          'embedUrl': 'https://loufrank.tv/embed-demo-video',
          'interactionStatistic': {
            '@type': 'InteractionCounter',
            'interactionType': 'https://schema.org/WatchAction',
            'userInteractionCount': 5000
          },
          'publication': {
            '@type': 'BroadcastEvent',
            'isLiveBroadcast': true,
            'startDate': currentDate
          }
        })}
      </script>

      {/* WebSite schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          'url': 'https://loufrank.tv',
          'name': 'LouFrank TV',
          'description': 'Access over 16,000 HD & FHD channels from 50+ countries with ultra-fast zapping and no freezing.',
          'potentialAction': {
            '@type': 'SearchAction',
            'target': {
              '@type': 'EntryPoint',
              'urlTemplate': 'https://loufrank.tv/search?q={search_term_string}'
            },
            'query-input': 'required name=search_term_string'
          }
        })}
      </script>

      {/* Service schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          'serviceType': 'IPTV Streaming Service',
          'provider': {
            '@type': 'Organization',
            'name': 'LouFrank TV',
            'url': 'https://loufrank.tv',
            'logo': 'https://loufrank.tv/logo.png',
            'sameAs': [
              'https://facebook.com/loufrankTV',
              'https://twitter.com/loufrankTV',
              'https://instagram.com/loufrankTV'
            ]
          },
          'name': 'LouFrank TV Premium IPTV',
          'description': 'Premium IPTV service with 16,000+ HD channels from over 50 countries',
          'offers': {
            '@type': 'AggregateOffer',
            'lowPrice': '1.00',
            'highPrice': '79.99',
            'priceCurrency': 'USD',
            'offerCount': 4,
            'availability': 'https://schema.org/InStock'
          },
          'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'bestRating': '5',
            'worstRating': '1',
            'ratingCount': '124'
          }
        })}
      </script>

      {/* FAQPage schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': [
            {
              '@type': 'Question',
              'name': 'How many channels does LouFrank TV offer?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'LouFrank TV offers over 16,000 HD and FHD channels from more than 50 countries.'
              }
            },
            {
              '@type': 'Question',
              'name': 'What devices can I watch LouFrank TV on?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'LouFrank TV is compatible with various devices including Firestick, Apple products, Smart TVs, PCs, tablets, MAG boxes, and smartphones.'
              }
            },
            {
              '@type': 'Question',
              'name': 'Do you offer a trial period?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Yes, we offer a $1 trial for 36 hours so you can experience our premium service before committing.'
              }
            }
          ]
        })}
      </script>
      {/* Product schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          'name': 'LouFrank TV Premium IPTV',
          'image': 'https://loufrank.tv/product-image.jpg',
          'description': 'Premium IPTV service with over 16,000 HD and FHD channels from more than 50 countries',
          'brand': {
            '@type': 'Brand',
            'name': 'LouFrank TV'
          },
          'offers': {
            '@type': 'AggregateOffer',
            'lowPrice': '1.00',
            'highPrice': '79.99',
            'priceCurrency': 'USD',
            'offerCount': 4,
            'availability': 'https://schema.org/InStock'
          },
          'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'bestRating': '5',
            'worstRating': '1',
            'ratingCount': '124'
          }
        })}
      </script>

      {/* BreadcrumbList schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': 'https://loufrank.tv'
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'Services',
              'item': 'https://loufrank.tv/services'
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'name': 'Premium IPTV',
              'item': 'https://loufrank.tv/premium-iptv'
            }
          ]
        })}
      </script>
    </Helmet>
  );
}
