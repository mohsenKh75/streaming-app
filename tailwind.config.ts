import type { Config } from 'tailwindcss';
const figmaTheme = require('./figma/tailwind.theme.json');

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ...figmaTheme.colors,
        background: 'var(--background)',
        foreground: 'var(--foreground)'
      },
      fontSize: {
        ...figmaTheme.fontSize
      }
    }
  },
  plugins: []
} satisfies Config;
