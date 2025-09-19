"use client";

import { Section } from "@/components/section";
import { easeOutCubic } from "@/lib/animation";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function FeatureScroll() {
  const phone1Ref = useRef(null);
  const phone2Ref = useRef(null);
  const phone3Ref = useRef(null);

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: phone1Ref,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: phone2Ref,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: phone3Ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress1, [0, 0.3], [150, 0], {
    ease: easeOutCubic,
  });
  const y2 = useTransform(scrollYProgress2, [0.1, 0.4], [200, 0], {
    ease: easeOutCubic,
  });
  const y3 = useTransform(scrollYProgress3, [0.2, 0.5], [250, 0], {
    ease: easeOutCubic,
  });

  return (
    <Section
      id="feature-scroll"
      title="Experience"
      subtitle="Insight today. Impact tomorrow."
      className="container px-4 sm:px-10"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mx-auto select-none">
        <motion.div
          ref={phone1Ref}
          style={{ y: y1 }}
          className="w-full h-auto -z-10 max-w-[250px] sm:max-w-[300px] mx-auto phone-container"
        >
          <picture>
            <source 
              media="(max-width: 768px)" 
              srcSet="/metric4.png" 
            />
            <source srcSet="/metric4.svg" />
            <img
              src="/metric4.svg"
              alt="iPhone 1"
              className="w-full h-full object-contain mobile-svg-enhance"
            />
          </picture>
        </motion.div>
        
        <motion.div
          ref={phone2Ref}
          style={{ y: y2 }}
          className="w-full h-auto -z-10 max-w-[250px] sm:max-w-[300px] mx-auto phone-container"
        >
          <picture>
            <source 
              media="(max-width: 768px)" 
              srcSet="/metric3.png" 
            />
            <source srcSet="/metric3.svg" />
            <img
              src="/metric3.svg"
              alt="iPhone 2"
              className="w-full h-full object-contain mobile-svg-enhance"
            />
          </picture>
        </motion.div>
        
        <motion.div
          ref={phone3Ref}
          style={{ y: y3 }}
          className="w-full h-auto -z-10 max-w-[250px] sm:max-w-[300px] mx-auto phone-container"
        >
          <picture>
            <source 
              media="(max-width: 768px)" 
              srcSet="/input2" 
            />
            <source srcSet="/input2.svg" />
            <img
              src="/input2.svg"
              alt="iPhone 3"
              className="w-full h-full object-contain mobile-svg-enhance"
            />
          </picture>
        </motion.div>
      </div>
    </Section>
  );
}
