import { GlassCard } from "./glass-card";
import { SectionHeader } from "./section-header";
import { Linkedin, Twitter, Github, Dribbble } from "lucide-react";

const teamMembers = [
  {
    id: "1",
    name: "Alex Thompson",
    position: "CEO & Founder",
    description: "Visionary leader with 10+ years in digital transformation",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: "2",
    name: "Sarah Chen",
    position: "CTO",
    description: "Full-stack expert specializing in React and Python",
    image: "https://images.unsplash.com/photo-1494790108755-2616b112371c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
    social: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    id: "3",
    name: "Marcus Rivera",
    position: "Design Director",
    description: "Creative visionary crafting exceptional user experiences",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
    social: {
      linkedin: "#",
      dribbble: "#"
    }
  },
  {
    id: "4",
    name: "Emma Wilson",
    position: "Marketing Director",
    description: "Data-driven strategist with proven ROI optimization",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  }
];

export function TeamSection() {
  return (
    <section className="py-1.5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          title="Meet Our Team" 
          subtitle="The talented individuals behind our success"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <GlassCard key={member.id} className="p-6 text-center team-card">
              <div className="relative overflow-hidden rounded-full w-24 h-24 mx-auto mb-4">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="team-image w-full h-full object-cover transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{member.name}</h3>
              <p className="text-accent mb-3">{member.position}</p>
              <p className="text-sm text-muted-foreground mb-4">{member.description}</p>
              <div className="flex justify-center space-x-3">
                {member.social.linkedin && (
                  <a 
                    href={member.social.linkedin} 
                    className="text-muted-foreground hover:text-accent transition-colors"
                    data-testid={`social-linkedin-${member.name.toLowerCase().replace(' ', '-')}`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {member.social.twitter && (
                  <a 
                    href={member.social.twitter} 
                    className="text-muted-foreground hover:text-accent transition-colors"
                    data-testid={`social-twitter-${member.name.toLowerCase().replace(' ', '-')}`}
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
                {member.social.github && (
                  <a 
                    href={member.social.github} 
                    className="text-muted-foreground hover:text-accent transition-colors"
                    data-testid={`social-github-${member.name.toLowerCase().replace(' ', '-')}`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {member.social.dribbble && (
                  <a 
                    href={member.social.dribbble} 
                    className="text-muted-foreground hover:text-accent transition-colors"
                    data-testid={`social-dribbble-${member.name.toLowerCase().replace(' ', '-')}`}
                  >
                    <Dribbble className="w-4 h-4" />
                  </a>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
