import { GlassCard } from "./glass-card";
import { SectionHeader } from "./section-header";
import { Linkedin, Twitter, Github, Dribbble } from "lucide-react";

const teamMembers = [
  {
    id: "1",
    name: "Mukesh Raiya",
    position: "CEO & Founder",
    description: "Visionary leader with 10+ years in digital transformation",
    image: "https://orbitdigital.agency/wp-content/uploads/2025/03/Ahmed-Ali.png",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: "2",
    name: "Dyan Baguio",
    position: "Sales Consultant",
    description: "excels in crafting data-driven strategies, boosting conversions, and accelerating business growth through personalized, client-focused solutions.",
    image: "https://orbitdigital.agency/wp-content/uploads/2025/03/Dyan.png",
    social: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    id: "3",
    name: "Juraij V. U.",
    position: "Development Expert",
    description: "Full-stack expert specializing in React and Python",
    image: "https://orbitdigital.agency/wp-content/uploads/2025/03/Juraij.png",
    social: {
      linkedin: "#",
      dribbble: "#"
    }
  },
  {
    id: "4",
    name: "Girish Kumar",
    position: "Digital Marketing Expert",
    description: "With 8+ years of experience, our expert drives growth through strategic, data-driven digital marketing campaigns tailored to your business goals.",
    image: "https://orbitdigital.agency/wp-content/uploads/2025/03/Girish-Kumar.png",
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
