import { useEffect } from 'react';
import landingColors, { getCSSVariables } from '../config/colors';

/**
 * Hook to apply landing page color variables to the document root
 */
export const useLandingColors = () => {
  useEffect(() => {
    const root = document.documentElement;
    const cssVars = getCSSVariables(landingColors);

    // Apply CSS variables to root element
    Object.entries(cssVars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    // Cleanup: remove variables when component unmounts (optional)
    // Uncomment if you want to clean up on unmount
    // return () => {
    //   Object.keys(cssVars).forEach((key) => {
    //     root.style.removeProperty(key);
    //   });
    // };
  }, []);
};

export default useLandingColors;

