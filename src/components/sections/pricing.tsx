"use client";

import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function Pricing() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacities = [
    useTransform(scrollYProgress, [0, 0.1, 0.3], [0, 0, 1]),
    useTransform(scrollYProgress, [0, 0.15, 0.35], [0, 0, 1]),
    useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 0, 1]),
    useTransform(scrollYProgress, [0, 0.25, 0.45], [0, 0, 1]),
  ];

  const yTransforms = [
    useTransform(scrollYProgress, [0, 0.1, 0.3], [100, 100, 0]),
    useTransform(scrollYProgress, [0, 0.15, 0.35], [100, 100, 0]),
    useTransform(scrollYProgress, [0, 0.2, 0.4], [100, 100, 0]),
    useTransform(scrollYProgress, [0, 0.25, 0.45], [100, 100, 0]),
  ];

  return (
    <Section
      id="pricing"
      title="Pricing"
      subtitle="simple pricing"
      className="container px-10"
      ref={ref}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto py-10">
        {siteConfig.pricing.map((plan, index) => (
          <motion.div
            key={plan.name}
            style={{ opacity: opacities[index], y: yTransforms[index] }}
            className="bg-card shadow-lg p-6 rounded-3xl grid grid-rows-[auto_auto_auto_1fr_auto] border border-border dark:border-white/10"
          >
            <h2 className="text-2xl font-semibold mb-4">{plan.name}</h2>
            <div className="text-4xl font-bold text-primary mb-2">
              {plan.price}
              <span className="text-sm font-normal text-muted-foreground">
                /{plan.period}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {plan.description}
            </p>

            <div className="space-y-3 mb-6">
              {plan.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center">
                  <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                const heroSection = document.getElementById('hero');
                if (heroSection) {
                  heroSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-4 py-3 font-medium flex items-center justify-center gap-1 group transition-all duration-300 ease-out"
            >
              Download Now
              <ChevronRightIcon className="w-4 h-4 ml-1 transition-all duration-300 ease-out group-hover:translate-x-1" />
            </a>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
