import { Bebas_Neue } from "next/font/google";

export const fontHeading = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
});

// Text and mono fonts are handled via CSS fallbacks to platform UI fonts
// See `globals.css` and `tailwind.config.ts` for stacks
export const fontSans = undefined as unknown as { variable: string };
export const fontMono = undefined as unknown as { variable: string };
