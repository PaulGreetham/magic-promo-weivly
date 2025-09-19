"use client";

import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import Marquee from "@/components/ui/marquee";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "GaryFeathers",
    body: "I love the target focused metrics. It helps me stay motivated and track my progress.",
  },
  {
    name: "FitnessFanatic",
    body: "I've used other apps but this is by far the best. The animations are so cool and the features bang on.",
  },
  {
    name: "SonjaRed",
    body: "If you're a fitness enthusiast, this is the app for you. The graphs & charts make it so easy to understand my progress.",
  },
  {
    name: "BrightSide87",
    body: "Considering the amount of data, it's so easy to use and understand.",
  },
  {
    name: "KarenW",
    body: "Happy to review! Honestly, this is the best app I've used for tracking my fitness progress.",
  },
  {
    name: "Ryan",
    body: "Really simple. It definitely helps keep me motivated and on track.",
  },
  {
    name: "Amme28",
    body: "Spot on! The prediction date was amazing to plan my weight loss journey.",
  },
  {
    name: "Chris",
    body: "Brilliant! In Spanish as well ;)",
  }, 
  {
    name: "Jenny123",
    body: "Great way to track weight loss progress.",
  },
  {
    name: "FittMum",
    body: "Easy to use in the gym or at hom when weighing in.",
  },
  {
    name: "FitnessFanatic",
    body: "Perfect for tracking my fitness progress. The visualizations are so helpful.",
  },
  {
    name: "FitnessFanatic",
    body: "Easy to use and understand. The metrics are so helpful.",
  },
  {
    name: "Harry?Ben",
    body: "I love the target focused metrics. It helps me stay motivated and track my progress.", 
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  name,
  body,
}: {
  name: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-col">
        <figcaption className="text-sm font-medium dark:text-white">
          {name}
        </figcaption>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function CTA() {
  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cta">
      <div className="py-14 container mx-auto px-4 max-w-[1000px] ">
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-[2rem] border p-10 py-14">
          <div className="absolute rotate-[35deg]">
            <Marquee pauseOnHover className="[--duration:20s]" repeat={3}>
              {firstRow.map((review) => (
                <ReviewCard key={review.name} name={review.name} body={review.body} />
              ))}
            </Marquee>
            <Marquee
              reverse
              pauseOnHover
              className="[--duration:20s]"
              repeat={3}
            >
              {secondRow.map((review) => (
                <ReviewCard key={review.name} name={review.name} body={review.body} />
              ))}
            </Marquee>
            <Marquee pauseOnHover className="[--duration:20s]" repeat={3}>
              {firstRow.map((review) => (
                <ReviewCard key={review.name} name={review.name} body={review.body} />
              ))}
            </Marquee>
            <Marquee
              reverse
              pauseOnHover
              className="[--duration:20s]"
              repeat={3}
            >
              {secondRow.map((review) => (
                <ReviewCard key={review.name} name={review.name} body={review.body} />
              ))}
            </Marquee>
            <Marquee pauseOnHover className="[--duration:20s]" repeat={3}>
              {firstRow.map((review) => (
                <ReviewCard key={review.name} name={review.name} body={review.body} />
              ))}
            </Marquee>
            <Marquee
              reverse
              pauseOnHover
              className="[--duration:20s]"
              repeat={3}
            >
              {secondRow.map((review) => (
                <ReviewCard key={review.name} name={review.name} body={review.body} />
              ))}
            </Marquee>
          </div>
          <div className="z-10 mx-auto size-24 rounded-[2rem] border bg-primary text-white p-3 shadow-2xl backdrop-blur-md dark:bg-primary lg:size-32">
            <Icons.logo className="w-auto h-full" />
          </div>
          <div className="z-10 mt-4 flex flex-col items-center text-center text-black dark:text-white">
            <h1 className="text-3xl font-bold lg:text-4xl">
              {siteConfig.name}
            </h1>
            <a
              href="#"
              onClick={handleScrollToTop}
              className={cn(
                buttonVariants({ variant: "default" }),
                "h-8 text-white rounded-full group mt-4 cursor-pointer"
              )}
            >
              {siteConfig.cta}
              <ChevronRight className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1" />
            </a>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-white to-70% dark:to-black" />
        </div>
      </div>
    </section>
  );
}
