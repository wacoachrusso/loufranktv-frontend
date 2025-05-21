import { preloadImages } from './imageOptimization';

/**
 * Theme utility to ensure dark mode is applied and optimize performance
 */
export function applyDarkTheme() {
  // Apply dark class to html element
  document.documentElement.classList.add('dark');
  
  // Set theme-color meta for mobile browsers
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute('content', '#111827'); // Dark theme color
  }
  
  // Set performance hints
  if ('connection' in navigator && (navigator.connection as any).saveData) {
    // Add saveData mode optimizations
    document.documentElement.classList.add('save-data');
  }
  
  // Preload critical images for improved performance
  const criticalImages = [
    '/public/901661ac-f28e-4815-8069-61ae5363a100/logo-color.png',
    '/public/901661ac-f28e-4815-8069-61ae5363a100/hero-bg.jpg',
    'https://flagcdn.com/w40/us.png',
    'https://flagcdn.com/w40/gb.png'
  ];
  
  preloadImages(criticalImages);
  
  // Apply performance optimizations
  document.documentElement.style.scrollBehavior = 'smooth';
  
  // Disable animations for users who prefer reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('no-animation');
  }
}
