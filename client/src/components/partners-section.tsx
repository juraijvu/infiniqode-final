// Simple CSS-only animation for better performance
import { cn } from "@/lib/utils";
import { GlassCard } from "./glass-card";

const partners = [
  { name: "Microsoft", logo: "https://via.placeholder.com/120x60/2F3349/FFFFFF?text=Microsoft" },
  { name: "Google", logo: "https://via.placeholder.com/120x60/2F3349/FFFFFF?text=Google" },
  { name: "Amazon", logo: "https://via.placeholder.com/120x60/2F3349/FFFFFF?text=Amazon" },
  { name: "Apple", logo: "https://via.placeholder.com/120x60/2F3349/FFFFFF?text=Apple" },
  { name: "Meta", logo: "https://via.placeholder.com/120x60/2F3349/FFFFFF?text=Meta" },
  { name: "Netflix", logo: "https://via.placeholder.com/120x60/2F3349/FFFFFF?text=Netflix" },
  { name: "Spotify", logo: "https://via.placeholder.com/120x60/2F3349/FFFFFF?text=Spotify" },
  { name: "Adobe", logo: "https://via.placeholder.com/120x60/2F3349/FFFFFF?text=Adobe" },
  { name: "Tesla", logo: "https://via.placeholder.com/120x60/2F3349/FFFFFF?text=Tesla" },
  { name: "Stripe", logo: "https://via.placeholder.com/120x60/2F3349/FFFFFF?text=Stripe" },
  { name: "Shopify", logo: "https://via.placeholder.com/120x60/2F3349/FFFFFF?text=Shopify" },
  { name: "Slack", logo: "https://via.placeholder.com/120x60/2F3349/FFFFFF?text=Slack" },
];

export function PartnersSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Our Partners</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by leading companies worldwide to deliver exceptional digital experiences
          </p>
        </div>
        
        <div className="space-y-8">
          {/* First row - simple CSS animation */}
          <div className="partners-scroll-right overflow-hidden">
            <div className="partners-track">
              {[...partners.slice(0, 6), ...partners.slice(0, 6)].map((partner, index) => (
                <GlassCard
                  key={`row1-${index}`}
                  className="partner-card p-4 hover"
                  hover
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Second row - opposite direction */}
          <div className="partners-scroll-left overflow-hidden">
            <div className="partners-track">
              {[...partners.slice(6), ...partners.slice(6)].map((partner, index) => (
                <GlassCard
                  key={`row2-${index}`}
                  className="partner-card p-4 hover"
                  hover
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}