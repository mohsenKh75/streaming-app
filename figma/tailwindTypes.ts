import tailwindcssTheme from './tailwind.theme.json';
export type ColorType = keyof (typeof tailwindcssTheme)['colors'];
export type fontSize = keyof (typeof tailwindcssTheme)['fontSize'];
export type TextColorClassNameType = `text-${ColorType}`;
export type BackgroundColorClassNameType = `bg-${ColorType}`;
export type BorderColorClassNameType = `border-${ColorType}`;
export type TextFontSizeType = `text-${fontSize}`;
