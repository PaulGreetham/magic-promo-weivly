import { Platform } from 'react-native';

// Font families
export const fontFamilies = {
  default: Platform?.select
    ? Platform.select({ ios: 'SF Pro Display', android: 'Roboto', default: 'System' })
    : 'System',
  mono: Platform?.select
    ? Platform.select({ ios: 'SF Mono', android: 'Roboto Mono', default: 'Courier' })
    : 'ui-monospace',
} as const;

// Font weights
export const fontWeights = {
  light: '300' as const,
  normal: '400' as const,
  medium: '500' as const,
  semibold: '600' as const,
  bold: '700' as const,
  extrabold: '800' as const,
} as const;

// Font sizes
export const fontSizes = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 28,
  '4xl': 32,
  '5xl': 36,
  '6xl': 48,
} as const;

// Line heights  
export const lineHeights = {
  tight: 1.25,
  normal: 1.5,
  relaxed: 1.6,
  loose: 2,
} as const;

// Typography scale
export const typography = {
  display: {
    large: {
      fontFamily: fontFamilies.default as string,
      fontSize: fontSizes['6xl'],
      fontWeight: fontWeights.bold,
      lineHeight: fontSizes['6xl'] * lineHeights.tight,
    },
    medium: {
      fontFamily: fontFamilies.default as string,
      fontSize: fontSizes['5xl'],
      fontWeight: fontWeights.bold,
      lineHeight: fontSizes['5xl'] * lineHeights.tight,
    },
    small: {
      fontFamily: fontFamilies.default as string,
      fontSize: fontSizes['4xl'],
      fontWeight: fontWeights.bold,
      lineHeight: fontSizes['4xl'] * lineHeights.tight,
    },
  },
  heading: {
    h1: {
      fontFamily: fontFamilies.default as string,
      fontSize: fontSizes['3xl'],
      fontWeight: fontWeights.bold,
      lineHeight: fontSizes['3xl'] * lineHeights.tight,
    },
    h2: {
      fontFamily: fontFamilies.default as string,
      fontSize: fontSizes['2xl'],
      fontWeight: fontWeights.bold,
      lineHeight: fontSizes['2xl'] * lineHeights.tight,
    },
    h3: {
      fontFamily: fontFamilies.default as string,
      fontSize: fontSizes.xl,
      fontWeight: fontWeights.semibold,
      lineHeight: fontSizes.xl * lineHeights.tight,
    },
    h4: {
      fontFamily: fontFamilies.default as string,
      fontSize: fontSizes.lg,
      fontWeight: fontWeights.semibold,
      lineHeight: fontSizes.lg * lineHeights.normal,
    },
    h5: {
      fontFamily: fontFamilies.default as string,
      fontSize: fontSizes.base,
      fontWeight: fontWeights.semibold,
      lineHeight: fontSizes.base * lineHeights.normal,
    },
    h6: {
      fontFamily: fontFamilies.default as string,
      fontSize: fontSizes.sm,
      fontWeight: fontWeights.semibold,
      lineHeight: fontSizes.sm * lineHeights.normal,
    },
  },
  body: {
    large: {
      fontFamily: fontFamilies.default as string,
      fontSize: fontSizes.lg,
      fontWeight: fontWeights.normal,
      lineHeight: fontSizes.lg * lineHeights.normal,
    },
    medium: {
      fontFamily: fontFamilies.default as string,
      fontSize: fontSizes.base,
      fontWeight: fontWeights.normal,
      lineHeight: fontSizes.base * lineHeights.normal,
    },
    small: {
      fontFamily: fontFamilies.default as string,
      fontSize: fontSizes.sm,
      fontWeight: fontWeights.normal,
      lineHeight: fontSizes.sm * lineHeights.normal,
    },
  },
  label: {
    large: {
      fontFamily: fontFamilies.default as string,
      fontSize: fontSizes.base,
      fontWeight: fontWeights.medium,
      lineHeight: fontSizes.base * lineHeights.normal,
    },
    medium: {
      fontFamily: fontFamilies.default as string,
      fontSize: fontSizes.sm,
      fontWeight: fontWeights.medium,
      lineHeight: fontSizes.sm * lineHeights.normal,
    },
    small: {
      fontFamily: fontFamilies.default as string,
      fontSize: fontSizes.xs,
      fontWeight: fontWeights.medium,
      lineHeight: fontSizes.xs * lineHeights.normal,
    },
  },
  caption: {
    large: {
      fontFamily: fontFamilies.default as string,
      fontSize: fontSizes.sm,
      fontWeight: fontWeights.normal,
      lineHeight: fontSizes.sm * lineHeights.normal,
    },
    small: {
      fontFamily: fontFamilies.default as string,
      fontSize: fontSizes.xs,
      fontWeight: fontWeights.normal,
      lineHeight: fontSizes.xs * lineHeights.normal,
    },
  },
  mono: {
    large: {
      fontFamily: fontFamilies.mono as string,
      fontSize: fontSizes.base,
      fontWeight: fontWeights.normal,
      lineHeight: fontSizes.base * lineHeights.normal,
    },
    medium: {
      fontFamily: fontFamilies.mono as string,
      fontSize: fontSizes.sm,
      fontWeight: fontWeights.normal,
      lineHeight: fontSizes.sm * lineHeights.normal,
    },
    small: {
      fontFamily: fontFamilies.mono as string,
      fontSize: fontSizes.xs,
      fontWeight: fontWeights.normal,
      lineHeight: fontSizes.xs * lineHeights.normal,
    },
  },
} as const;

export type Typography = typeof typography;


