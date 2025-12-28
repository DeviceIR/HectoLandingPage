/**
 * Landing Page Color Configuration
 *
 * Change colors here to update the entire landing page theme.
 * All colors are automatically converted to CSS custom properties.
 *
 * These variables map to the existing CSS variables in main.css:
 * - --background-color: Main background color
 * - --default-color: Default text color
 * - --heading-color: Heading/text color
 * - --accent-color: Primary accent/brand color
 * - --surface-color: Card/box background color
 * - --contrast-color: Contrast text color (usually white)
 */

export const landingColors = {
  // Core Colors (mapped to existing CSS variables)
  "background-color": "#FFFFFF", // Main background color (white for all sections)
  "default-color": "#000000", // Default text color (black)
  "heading-color": "#000000", // Heading/primary color (black)
  "accent-color": "#6559FF", // Accent/brand color (buttons, links)
  "surface-color": "#FFFFFF", // Card/box background
  "contrast-color": "#FFFFFF", // Contrast text (white)

  // Navigation Colors
  "nav-color": "#000000", // Navigation link color (black)
  "nav-hover-color": "#6559FF", // Navigation hover/active color
  "nav-mobile-background-color": "#FFFFFF", // Mobile nav background (white)
  "nav-dropdown-background-color": "#FFFFFF", // Dropdown background (white)
  "nav-dropdown-color": "#000000", // Dropdown link color (black)
  "nav-dropdown-hover-color": "#6559FF", // Dropdown hover color

  // Border & Additional
  "border-color": "#E7E7EA", // Border color
  "light-primary": "#FFFFFF", // Light primary background (white)
  "box-shadow":
    "0px 1px 1px 0px rgba(61, 53, 153, 0.04), 0px 2px 4px 0px rgba(61, 53, 153, 0.08)",
  "dark-gray": "#2B2947", // Dark gray color

  // Button Colors
  "btn-hover-color": "#EFEEFF", // Button hover background
  "btn-hover-primary-color": "#7469FF", // Primary button hover color

  // Extended Colors (custom variables you can use)
  primary: "#6559FF", // Primary color
  "primary-hover": "#7469FF", // Primary hover
  "primary-light": "#A39BFF", // Light primary
  "primary-dark": "#5147CC", // Dark primary

  secondary: "#F15A29", // Secondary color
  "secondary-hover": "#F26A3E", // Secondary hover
  "secondary-light": "#F8AC94", // Light secondary
  "secondary-dark": "#D57119", // Dark secondary

  // Text Colors
  "text-primary": "#000000", // Primary text (black)
  "text-secondary": "#000000", // Secondary text (black)
  "text-light": "#000000", // Light text (black)
  "text-dark": "#000000", // Dark text (black)
  "text-muted": "#000000", // Muted text (black)

  // Status Colors
  success: "#4AC985", // Success color
  "success-light": "#E5F5F0", // Light success
  error: "#C62F35", // Error color
  "error-light": "#F9EAEA", // Light error
  warning: "#D06200", // Warning color
  "warning-light": "#FAEFE5", // Light warning
  info: "#0E7490", // Info color
  "info-light": "#E5F5F0", // Light info

  // Footer (if needed)
  "footer-bg": "#141233", // Footer background
  "footer-text": "#ffffff", // Footer text
  "footer-link": "#A1A0AD", // Footer link
  "footer-link-hover": "#ffffff", // Footer link hover

  // Preloader
  "preloader-bg": "#FFFFFF", // Preloader background
  "preloader-color": "#6559FF", // Preloader color

  // Service Icon Colors
  "service-icon-bg": "#E5E5E5", // Service icon background (gray)
  "service-icon-color": "#000000", // Service icon color (black)

  // Background Colors (Light Grays)
  "bg-light": "#F9F9F9", // Light background (main background)
  "bg-light-gray": "#F8F9FA", // Light gray background
  "bg-lighter-gray": "#F5F5F5", // Lighter gray background
  "bg-disabled": "#CCCCCC", // Disabled element background

  // Contact Form Colors
  "contact-bg": "#FFFFFF", // Contact form background
  "contact-input-bg": "#F8F9FA", // Contact input background
  "contact-input-focus-bg": "#F5F5F5", // Contact input focus background
  "contact-button": "#6F42C1", // Contact button color (purple)
  "contact-button-hover": "#5A32A3", // Contact button hover
  "contact-button-disabled": "#CCCCCC", // Contact button disabled

  // Status/Feedback Colors
  "success-bg": "#D4EDDA", // Success background
  "success-text": "#155724", // Success text color
  "error-bg": "#F8D7DA", // Error background
  "error-text": "#721C24", // Error text color
  "error-red": "#DC3545", // Error red color

  // Gradient Colors
  "gradient-primary-start": "#6A5DF6", // Primary gradient start
  "gradient-primary-end": "#7F71FF", // Primary gradient end
  "gradient-accent-start": "#8B5CF6", // Accent gradient start
  "gradient-accent-end": "#8B76FF", // Accent gradient end
  "gradient-accent-teal": "#00C2A8", // Accent gradient teal
  "gradient-badge-start": "#FF6B6B", // Badge gradient start
  "gradient-badge-end": "#FF8E53", // Badge gradient end
  "gradient-light-start": "#E8E6FF", // Light gradient start
  "gradient-light-end": "#FFFFFF", // Light gradient end

  // Color Mix Variants (for color-mix usage)
  "color-mix-purple": "#8B5CF6", // Purple for color mixing
  "color-mix-indigo": "#6366F1", // Indigo for color mixing
  "color-mix-dark-indigo": "#4338CA", // Dark indigo for color mixing

  // Special Colors
  "yellow-gold": "#FBBF24", // Yellow/Gold color
  "green-success": "#10B981", // Green success color

  // Dark Background Variants
  "dark-bg-primary": "#0C114A", // Dark background primary
  "dark-bg-secondary": "#131B76", // Dark background secondary
  "dark-surface": "#252525", // Dark surface color

  // Light Primary Variants
  "light-primary-bg": "#F8F9FF", // Light primary background
  "light-primary-hover": "#EFEEFF", // Light primary hover

  // Additional UI Colors
  "white": "#FFFFFF", // White
  "black": "#000000", // Black
  "transparent": "transparent", // Transparent
};

/**
 * Get CSS variables as object for inline styles
 * Keys are already in the correct format (kebab-case with -- prefix)
 */
export const getCSSVariables = (colors) => {
  const vars = {};
  Object.entries(colors).forEach(([key, value]) => {
    // If key already starts with --, use it as is, otherwise add --
    const cssKey = key.startsWith("--") ? key : `--${key}`;
    vars[cssKey] = value;
  });
  return vars;
};

/**
 * Convert color config object to CSS custom properties string
 */
export const generateCSSVariables = (colors) => {
  return Object.entries(colors)
    .map(([key, value]) => {
      const cssKey = key.startsWith("--") ? key : `--${key}`;
      return `${cssKey}: ${value};`;
    })
    .join("\n  ");
};

export default landingColors;
