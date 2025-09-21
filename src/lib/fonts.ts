import { Poppins } from "next/font/google";

export const fontHeading = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-heading",
});

export const fontText = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-text",
});

// Text and mono fonts are handled via CSS fallbacks to platform UI fonts
// See `globals.css` and `tailwind.config.ts` for stacks
export const fontSans = undefined as unknown as { variable: string };
export const fontMono = undefined as unknown as { variable: string };
