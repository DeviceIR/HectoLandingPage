/**
 * Asset path helper for LandingPage
 * Provides utility functions to get asset paths correctly in Vite
 */

// Helper to get asset path - Vite handles relative imports automatically
export const getAssetPath = (relativePath) => {
  // For dynamic imports in Vite, we need to use new URL
  // This works for assets that need to be referenced dynamically
  try {
    return new URL(`../assets/${relativePath}`, import.meta.url).href;
  } catch (e) {
    // Fallback to relative path (Vite will handle it)
    return `../assets/${relativePath}`;
  }
};

// For static images, it's better to import them directly in components
// But for dynamic paths (like in lottie animations), use getAssetPath

