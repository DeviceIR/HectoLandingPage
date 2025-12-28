# Landing Page Color Configuration

This directory contains the color configuration system for the landing page. All colors can be changed from a single file without touching any component code.

## Quick Start

To change the theme colors, simply edit `colors.js`:

```javascript
export const landingColors = {
  'accent-color': '#6559FF',        // Change this to update brand color
  'background-color': '#F9F9F9',    // Change this to update background
  'default-color': '#141233',       // Change this to update text color
  // ... etc
};
```

## File Structure

- `colors.js` - Main color configuration file (EDIT THIS FILE)
- `useLandingColors.js` - React hook that applies colors to the page
- `landing-colors.css` - CSS file with variable declarations (optional reference)

## How It Works

1. Colors are defined in `config/colors.js`
2. The `useLandingColors` hook automatically applies these as CSS variables to the document root
3. The existing CSS in `main.css` already uses these CSS variables
4. Changing values in `colors.js` will update the entire landing page

## Available Color Variables

### Core Colors (Used by existing CSS)
- `background-color` - Main background color
- `default-color` - Default text color
- `heading-color` - Heading/primary color
- `accent-color` - Accent/brand color (buttons, links)
- `surface-color` - Card/box background
- `contrast-color` - Contrast text (usually white)

### Navigation Colors
- `nav-color` - Navigation link color
- `nav-hover-color` - Navigation hover/active color
- `nav-mobile-background-color` - Mobile nav background
- `nav-dropdown-background-color` - Dropdown background
- `nav-dropdown-color` - Dropdown link color
- `nav-dropdown-hover-color` - Dropdown hover color

### Additional Colors
- `border-color` - Border color
- `primary`, `primary-hover`, `primary-light`, `primary-dark` - Primary color variants
- `secondary`, `secondary-hover`, etc. - Secondary color variants
- `success`, `error`, `warning`, `info` - Status colors
- `text-primary`, `text-secondary`, etc. - Text color variants

## Usage in Components

If you need to use these colors in React components:

```jsx
import landingColors from '../config/colors';

// Use in inline styles
<div style={{ backgroundColor: landingColors['accent-color'] }}>
  Content
</div>

// Or use CSS variables (recommended)
<div className="my-component">
  Content
</div>

/* In CSS */
.my-component {
  background-color: var(--accent-color);
  color: var(--default-color);
}
```

## Example: Changing the Theme

To change from purple to blue theme:

```javascript
// In colors.js
export const landingColors = {
  'accent-color': '#3B82F6',        // Changed from #6559FF to blue
  'heading-color': '#3B82F6',       // Changed to match
  'nav-hover-color': '#3B82F6',     // Changed to match
  // ... keep other colors or adjust as needed
};
```

That's it! The entire landing page will now use the new blue theme.

