// Simple CSS-only animation for better performance
import { cn } from "@/lib/utils";

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
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Partners</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading companies worldwide to deliver exceptional digital experiences
          </p>
        </div>
        
        <div className="space-y-8">
          {/* First row - simple CSS animation */}
          <div className="partners-scroll-right overflow-hidden">
            <div className="partners-track">
              {[...partners.slice(0, 6), ...partners.slice(0, 6)].map((partner, index) => (
                <div
                  key={`row1-${index}`}
                  className="partner-card glass-card rounded-lg beam-border"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-full object-contain opacity-70"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Second row - opposite direction */}
          <div className="partners-scroll-left overflow-hidden">
            <div className="partners-track">
              {[...partners.slice(6), ...partners.slice(6)].map((partner, index) => (
                <div
                  key={`row2-${index}`}
                  className="partner-card glass-card rounded-lg beam-border"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-full object-contain opacity-70"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}