import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { GlassCard } from "./glass-card";
import { SectionHeader } from "./section-header";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import type { Service } from "@shared/schema";


export function ServicesSection() {
  const { data: services = [], isLoading } = useQuery<Service[]>({
    queryKey: ["/api/services"],
  });


  if (isLoading) {
    return (
      <section id="services" className="py-3 relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title="Our Services" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <GlassCard key={i} className="p-8 animate-pulse">
                <div className="w-16 h-16 bg-muted rounded-lg mb-6"></div>
                <div className="h-6 bg-muted rounded mb-4"></div>
                <div className="h-16 bg-muted rounded mb-6"></div>
                <div className="space-y-2">
                  {[...Array(4)].map((_, j) => (
                    <div key={j} className="h-4 bg-muted rounded"></div>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-3 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          title="Our Services" 
          subtitle="We offer comprehensive digital solutions to transform your business"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <GlassCard key={service.id} className="p-8 service-card">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-purple-500/25">
                <span className="text-2xl" role="img" aria-label={service.name}>{service.icon}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{service.name}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-white">
                    <Check className="w-4 h-4 text-white mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={`/services/${service.slug}`}>
                <Button 
                  variant="ghost" 
                  size="sm"
                  data-testid={`button-learn-more-${service.slug}`}
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
