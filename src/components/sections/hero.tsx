"use client";

import { Icons } from "@/components/icons";
import { Section } from "@/components/section";
import { easeInOutCubic } from "@/lib/animation";
import { siteConfig } from "@/lib/config";
import { motion, useScroll, useTransform } from "framer-motion";

export function Hero() {
  const { scrollY } = useScroll({
    offset: ["start start", "end start"],
  });
  const y1 = useTransform(scrollY, [0, 300], [100, 0]);
  const y2 = useTransform(scrollY, [0, 300], [50, 0]);
  const y3 = useTransform(scrollY, [0, 300], [0, 0]);
  const y4 = useTransform(scrollY, [0, 300], [50, 0]);
  const y5 = useTransform(scrollY, [0, 300], [100, 0]);

  return (
    <Section id="hero" className="min-h-[100vh] w-full overflow-hidden">
      <main className="mx-auto pt-16 sm:pt-24 md:pt-32 text-center relative px-4">
        <div className="relative">
          <motion.div
            initial={{ scale: 4.5, height: "80vh" }}
            animate={{ scale: 1, height: "10vh" }}
            transition={{
              scale: { delay: 0, duration: 1.8, ease: easeInOutCubic },
              height: { delay: 0, duration: 1.8, ease: easeInOutCubic },
            }}
            className="mb-16 relative z-20"
            style={{ transformOrigin: "top" }}
          >
            <div className="bg-primary text-white text-xl font-bold p-3 h-20 w-20 flex items-center justify-center rounded-3xl mx-auto shadow-md">
              <Icons.logo className="w-auto h-[60px]" />
            </div>
          </motion.div>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute inset-0 top-20 z-10"
          >
            {siteConfig.name}
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: easeInOutCubic }}
            className="text-5xl font-bold mb-4 tracking-tighter"
          >
            {siteConfig.description}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: easeInOutCubic }}
            className="max-w-2xl mx-auto text-xl mb-8 font-normal hero-text space-y-2"
          >
            <p>The most adavnced football weather app ever created.</p>
            <p>Download for FREE now.</p>
          </motion.div>
          <div className="flex justify-center gap-4 mb-16">
            <motion.a
              href="https://apps.apple.com/nl/app/my-game-weather/id6742402918?l=en-GB"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="h-12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/download-black.svg"
                alt="Download on the App Store"
                className="h-full w-auto mobile-svg-enhance"
              />
            </motion.a>
            
            <motion.a
              href="https://play.google.com/store/apps/details?id=com.mygameweather.app"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="h-12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src="/GetItOnGooglePlay_Badge_Web_color_English.png" 
                alt="Get it on Google Play" 
                className="h-full w-auto"
              />
            </motion.a>
          </div>
        </div>
        <div className="flex flex-nowrap items-center justify-center gap-4 sm:gap-8 h-auto sm:h-[500px] select-none">
          {[
            "/MyGameWeather_Promo_Team_Search",
            "/MyGameWeather_Promo_Fixtures",
            {
              png: "/MyGameWeather_Promo_Wind.png", 
              svg: "/MyGameWeather_Promo_Wind.svg",
              fallback: "/placeholder.png"
            }, 
            "/MyGameWeather_Promo_Rain",
            "/MyGameWeather_Promo_Profile"
          ].map((item, index) => {
            // Handle both string paths and object paths
            const src = typeof item === 'string' ? item : item.svg;
            const pngSrc = typeof item === 'string' ? `${item}.png` : item.png;
            const svgSrc = typeof item === 'string' ? `${item}.svg` : item.svg;
            const fallbackSrc = typeof item === 'string' ? "/placeholder.png" : (item.fallback || "/placeholder.png");
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: [-200, -100, 0, 100, 200][index] }}
                animate={{ opacity: 1, x: 0 }}
                style={{ y: [y1, y2, y3, y4, y5][index] }}
                transition={{ duration: 1, delay: 1 }}
                className="w-40 sm:w-64 h-[333px] sm:h-[500px] flex-shrink-0 relative phone-container"
              >
                <picture>
                  <source media="(max-width: 768px)" srcSet={pngSrc} />
                  <source srcSet={svgSrc} />
                  <img
                    src={svgSrc}
                    alt={`iPhone screenshot ${index + 1}`}
                    className="w-full h-full object-contain mobile-svg-enhance"
                    onError={(e) => {
                      console.error(`Failed to load image: ${svgSrc}`);
                      e.currentTarget.src = fallbackSrc;
                    }}
                  />
                </picture>
              </motion.div>
            );
          })}
        </div>
      </main>
    </Section>
  );
}
