export const typography = {
  // Font Family
  fontFamily: 'BebasNeue_400Regular',

  // Font Sizes
  sizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 32,
    xxxl: 48,
  },

  // Line Heights
  lineHeights: {
    tight: 1,    // For headings
    normal: 1.2, // For most text
    relaxed: 1.5 // For readable paragraphs
  },

  // Letter Spacing
  letterSpacing: {
    tighter: -0.5,
    tight: -0.25,
    normal: 0,
    wide: 0.5,
    wider: 1,
    widest: 2,
  },

  // Font Styles
  styles: {
    h1: {
      fontSize: 48,
      lineHeight: 52,
      fontFamily: 'BebasNeue_400Regular',
      letterSpacing: 1, // wider spacing for large headlines
    },
    h2: {
      fontSize: 32,
      lineHeight: 36,
      fontFamily: 'BebasNeue_400Regular',
      letterSpacing: 0.5, // slightly wider for subheadings
      color: 'white'
    },
    h3: {
      fontSize: 24,
      lineHeight: 28,
      fontFamily: 'BebasNeue_400Regular',
      letterSpacing: 0.25, // subtle spacing for smaller headings
    },
    body: {
      fontSize: 18,
      lineHeight: 24,
      fontFamily: 'BebasNeue_400Regular',
      letterSpacing: 0.5, // better readability for body text
    },
    bodySmall: {
      fontSize: 16,
      lineHeight: 20,
      fontFamily: 'BebasNeue_400Regular',
      letterSpacing: 0.25,
    },
    caption: {
      fontSize: 14,
      lineHeight: 18,
      fontFamily: 'BebasNeue_400Regular',
      letterSpacing: 0.25,
    },
    button: {
      fontSize: 20,
      lineHeight: 24,
      fontFamily: 'BebasNeue_400Regular',
      letterSpacing: 1, // wider spacing for buttons
    },
    label: {
      fontSize: 16,
      lineHeight: 20,
      fontFamily: 'BebasNeue_400Regular',
      letterSpacing: 0.75, // good spacing for form labels
    }
  }
} as const; 