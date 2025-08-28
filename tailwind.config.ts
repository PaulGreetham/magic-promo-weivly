import type { Config } from "tailwindcss";
import { colors as dsColors } from "./src/lib/design-system/colors";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        brand: {
          50: dsColors.primary[50],
          100: dsColors.primary[100],
          500: dsColors.primary[500],
          600: dsColors.primary[600],
          700: dsColors.primary[700],
          900: dsColors.primary[900],
        },
        neutral: {
          50: dsColors.neutral[50],
          100: dsColors.neutral[100],
          200: dsColors.neutral[200],
          300: dsColors.neutral[300],
          400: dsColors.neutral[400],
          500: dsColors.neutral[500],
          600: dsColors.neutral[600],
          700: dsColors.neutral[700],
          800: dsColors.neutral[800],
          900: dsColors.neutral[900],
        },
        success: {
          50: dsColors.success[50],
          500: dsColors.success[500],
          600: dsColors.success[600],
        },
        warning: {
          50: dsColors.warning[50],
          500: dsColors.warning[500],
          600: dsColors.warning[600],
        },
        error: {
          50: dsColors.error[50],
          500: dsColors.error[500],
          600: dsColors.error[600],
          700: dsColors.error[700],
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        ripple: {
          "0%, 100%": {
            transform: "translate(-50%, -50%) scale(1)",
          },
          "50%": {
            transform: "translate(-50%, -50%) scale(0.9)",
          },
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "-apple-system", "BlinkMacSystemFont", "SF Pro Display", "SF Pro Text", "Helvetica Neue", "Helvetica", "Roboto", "Segoe UI", "Arial", "system-ui", "sans-serif"],
        text: ["var(--font-text)", "-apple-system", "BlinkMacSystemFont", "SF Pro Display", "SF Pro Text", "Helvetica Neue", "Helvetica", "Roboto", "Segoe UI", "Arial", "system-ui", "sans-serif"],
        sans: ["-apple-system", "BlinkMacSystemFont", "SF Pro Display", "SF Pro Text", "Helvetica Neue", "Helvetica", "Roboto", "Segoe UI", "Arial", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "SF Mono", "Roboto Mono", "Menlo", "Monaco", "Consolas", "Liberation Mono", "monospace"],
        bebas: ["BebasNeue_400Regular", "sans-serif"],
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '20px',
        xl: '24px',
        '2xl': '32px',
        '3xl': '48px',
      },
      letterSpacing: {
        tightest: '-0.5px',
        tighter: '-0.25px',
        normal: '0',
        wide: '0.5px',
        wider: '1px',
        widest: '2px',
      },
      lineHeight: {
        tight: '1',
        normal: '1.2',
        relaxed: '1.5',
        none: '1',
        h1: '52px',
        h2: '36px',
        h3: '28px',
        body: '24px',
        bodySmall: '20px',
        caption: '18px',
        button: '24px',
        label: '20px',
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
