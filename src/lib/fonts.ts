import { Bebas_Neue, Poppins } from "next/font/google";

export const fontHeading = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
});

export const fontText = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-text",
});

// For backward compatibility with existing code
export const fontSans = fontText;
export const fontMono = fontText;
