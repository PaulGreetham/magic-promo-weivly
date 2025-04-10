import { Section } from "@/components/section";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

export function Testimonials() {
  return (
    <Section
      title="Testimonials"
      subtitle="What our users say"
      className="container px-10"
    >
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4 py-10">
        {siteConfig.testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-3xl flex flex-col h-fit shadow-sm border border-border dark:border-white/10 bg-card"
            style={{
              gridRow: `span ${Math.floor(testimonial.text.length / 50) + 1}`,
            }}
          >
            <div className="bg-primary px-4 py-3">
              <h3 className="text-lg font-medium text-white">
                {testimonial.name}
              </h3>
            </div>
            <div className="px-4 py-4 sm:p-6 flex-grow">
              <p className="text-foreground">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
