import { colors } from './colors';
import { typography } from './typography';

// Spacing scale (kept minimal; extend as needed)
export const spacing = {
  0: 0,
  0.5: 2,
  1: 4,
  1.5: 6,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
  16: 64,
} as const;

export const lightTheme = {
  colors: {
    primary: colors.primary[500],
    primaryLight: colors.primary[100],
    primaryDark: colors.primary[700],
    background: colors.white,
    backgroundSecondary: colors.neutral[50],
    surface: colors.white,
    card: colors.white,
    text: colors.primary[900],
    textSecondary: colors.neutral[700],
    textMuted: colors.neutral[500],
    textInverse: colors.white,
    border: colors.neutral[200],
    borderMedium: colors.neutral[300],
    success: colors.success[500],
    warning: colors.warning[500],
    error: colors.error[500],
    info: colors.primary[500],
    tabIconDefault: colors.neutral[400],
    tabIconSelected: colors.primary[500],
    white: colors.white,
    black: colors.black,
    transparent: colors.transparent,
  },
  typography,
  spacing,
} as const;

export const darkTheme = {
  colors: {
    primary: colors.primary[500],
    primaryLight: colors.primary[100],
    primaryDark: colors.primary[600],
    background: colors.primary[900],
    backgroundSecondary: colors.primary[900],
    surface: colors.primary[900],
    card: colors.primary[900],
    text: colors.neutral[100],
    textSecondary: colors.neutral[300],
    textMuted: colors.neutral[400],
    textInverse: colors.neutral[900],
    border: colors.neutral[700],
    borderMedium: colors.neutral[600],
    success: colors.success[500],
    warning: colors.warning[500],
    error: colors.error[500],
    info: colors.primary[500],
    tabIconDefault: colors.neutral[500],
    tabIconSelected: colors.primary[500],
    white: colors.white,
    black: colors.black,
    transparent: colors.transparent,
  },
  typography,
  spacing,
} as const;

export type AppTheme = typeof lightTheme | typeof darkTheme;


