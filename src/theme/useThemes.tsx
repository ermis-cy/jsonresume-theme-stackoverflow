import { makeStaticStyles } from '@griffel/react';
import { darkTheme, lightTheme, Theme } from './tokens';

function themeToCSS(theme: Theme) {
  return Object.entries(theme)
    .map(([key, value]) => `--${key}: ${value};`)
    .join('\n');
}

export const useThemes = makeStaticStyles([
  `body { margin: 0 }`,
  `body { ${themeToCSS(lightTheme)} }`,
  `@media (prefers-color-scheme: dark) { body { ${themeToCSS(darkTheme)} } }`
]);
