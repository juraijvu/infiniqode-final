import { useQuery } from "@tanstack/react-query";
import { GlassCard } from "./glass-card";
import { SectionHeader } from "./section-header";
import { Star } from "lucide-react";
import type { Testimonial } from "@shared/schema";

export function TestimonialsSection() {
  const { data: testimonials = [], isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  if (isLoading) {
    return (
      <section className="py-1.5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title="Client Testimonials" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <GlassCard key={i} className="p-8 animate-pulse">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, j) => (
                      <div key={j} className="w-4 h-4 bg-muted rounded"></div>
                    ))}
                  </div>
                </div>
                <div className="h-20 bg-muted rounded mb-6"></div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-muted rounded-full mr-4"></div>
                  <div>
                    <div className="h-4 bg-muted rounded mb-2 w-24"></div>
                    <div className="h-3 bg-muted rounded w-32"></div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-1.5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          title="Client Testimonials" 
          subtitle="See what our clients say about working with us"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <GlassCard key={testimonial.id} className="p-8">
              <div className="flex items-center mb-4">
                <div className="flex text-accent">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star key={index} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-6">"{testimonial.content}"</p>
              <div className="flex items-center">
                {testimonial.image && (
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                )}
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.position}, {testimonial.company}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
