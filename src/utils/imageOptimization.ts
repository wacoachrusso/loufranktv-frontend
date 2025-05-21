/**
 * Utility functions for image optimization
 */

/**
 * Preload critical images to improve performance
 * @param imagePaths Array of image URLs to preload
 */
export function preloadImages(imagePaths: string[]) {
  // Only run in browser environment
  if (typeof window === 'undefined') return;
  
  imagePaths.forEach(path => {
    // Skip if already preloaded
    if (document.querySelector(`link[rel="preload"][href="${path}"]`)) return;
    
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = path;
    link.as = 'image';
    link.type = 'image/png'; // Adjust if using different formats
    document.head.appendChild(link);
  });
}

/**
 * Get a responsive image URL with width parameter
 * @param imageUrl Original image URL
 * @param width Desired width in pixels
 * @returns Modified URL with width parameter if supported
 */
export function getResponsiveImageUrl(imageUrl: string, width: number): string {
  // Handle Unsplash images
  if (imageUrl.includes('unsplash.com')) {
    // Add or replace width parameter
    return imageUrl.includes('?') 
      ? imageUrl.replace(/w=\d+/, `w=${width}`)
      : `${imageUrl}?w=${width}&auto=format`;
  }
  
  // Handle flagcdn.com images
  if (imageUrl.includes('flagcdn.com')) {
    // Replace width in URL path
    return imageUrl.replace(/w\d+/, `w${width}`);
  }
  
  // Default: return original URL
  return imageUrl;
}

/**
 * Custom React hook to handle lazy loading images with fade-in effect
 * This would be used in React components
 */
export function createImageLoadingHandler() {
  return (event: React.SyntheticEvent<HTMLImageElement>) => {
    const img = event.currentTarget;
    img.classList.remove('opacity-0');
    img.classList.add('opacity-100');
  };
}
