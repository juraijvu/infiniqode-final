import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { GlassCard } from "@/components/glass-card";
import { TeamSection } from "@/components/team-section";
import { ContactPopup } from "@/components/contact-popup";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Trophy, Users, Rocket, Target, Heart, Lightbulb, Shield, Award } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Trophy className="w-8 h-8 text-white" />,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering solutions that exceed expectations and drive real business results."
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Collaboration",
      description: "We believe in the power of collaboration, working closely with our clients to understand their needs and achieve their goals."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-white" />,
      title: "Innovation",
      description: "We stay at the forefront of technology, constantly exploring new tools and methodologies to deliver cutting-edge solutions."
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Integrity",
      description: "We conduct business with the highest level of integrity, building trust through transparency and honest communication."
    }
  ];

  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "DigitalCraft was established with a vision to transform businesses through innovative digital solutions."
    },
    {
      year: "2019",
      title: "First Major Client",
      description: "Secured our first enterprise client and delivered a game-changing e-commerce platform."
    },
    {
      year: "2020",
      title: "Team Expansion",
      description: "Grew our team to 15+ talented professionals across development, design, and marketing."
    },
    {
      year: "2021",
      title: "SaaS Specialization",
      description: "Specialized in SaaS development, helping startups and enterprises build scalable platforms."
    },
    {
      year: "2022",
      title: "Industry Recognition",
      description: "Received multiple industry awards for our innovative approach to digital transformation."
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Expanded operations globally, serving clients across North America, Europe, and Asia."
    }
  ];

  return (
    <>
      <SEOHead
        title="About Us"
        description="Learn about DigitalCraft's mission, values, and team. We're a passionate group of developers, designers, and strategists dedicated to crafting exceptional digital experiences."
        keywords="about us, digital agency team, company mission, values, expertise"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-20">
        <div className="hero-glow top-20 left-20"></div>
        <div className="hero-glow bottom-20 right-20 animation-delay-2s"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-white">DigitalCraft</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We're a passionate team of developers, designers, and digital strategists 
            dedicated to crafting exceptional digital experiences that drive real business results.
          </p>
          <ContactPopup 
            trigger={
              <Button className="glass-button px-8 py-4 text-lg" data-testid="button-work-with-us">
                <Heart className="mr-2 h-5 w-5" />
                Work With Us
              </Button>
            }
            title="Let's Work Together"
            description="Ready to partner with our passionate team? Let's discuss how we can help achieve your digital goals."
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Our Mission</h2>
              <p className="text-xl text-muted-foreground mb-8">
                To empower businesses of all sizes with cutting-edge digital solutions that drive growth, 
                enhance user experiences, and create lasting competitive advantages in the digital landscape.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Purpose-Driven Development</h3>
                    <p className="text-muted-foreground">
                      Every line of code we write serves a purpose - to solve real business problems and create measurable value.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Future-Ready Solutions</h3>
                    <p className="text-muted-foreground">
                      We build with tomorrow in mind, ensuring your digital assets remain relevant and scalable as technology evolves.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Team collaboration and innovation" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-muted/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Story</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From a small startup to a global digital agency, our journey has been driven by passion, 
              innovation, and an unwavering commitment to client success.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-br from-primary to-accent rounded-full border-4 border-background"></div>
                  <div className="ml-20">
                    <GlassCard className="p-6">
                      <div className="flex items-center mb-3">
                        <Badge variant="secondary" className="bg-primary/20 text-accent mr-4">
                          {milestone.year}
                        </Badge>
                        <h3 className="text-xl font-semibold">{milestone.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </GlassCard>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <GlassCard key={index} className="p-8 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Company Stats */}
      <section className="py-20 bg-muted/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">By The Numbers</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our achievements and the impact we've made in the digital world
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <GlassCard className="p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">150+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </GlassCard>
            <GlassCard className="p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </GlassCard>
            <GlassCard className="p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">25+</div>
              <div className="text-muted-foreground">Team Members</div>
            </GlassCard>
            <GlassCard className="p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Recognition & Awards</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Industry recognition for our commitment to excellence and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard className="p-8 text-center">
              <Award className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Best Digital Agency 2023</h3>
              <p className="text-muted-foreground">Web Excellence Awards</p>
            </GlassCard>
            <GlassCard className="p-8 text-center">
              <Award className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Innovation in SaaS</h3>
              <p className="text-muted-foreground">Tech Innovation Summit</p>
            </GlassCard>
            <GlassCard className="p-8 text-center">
              <Award className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Top Mobile App Developer</h3>
              <p className="text-muted-foreground">Mobile Excellence Awards</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <GlassCard className="p-16 text-center relative overflow-hidden">
            <div className="hero-glow top-0 left-1/2 transform -translate-x-1/2"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with innovative digital solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="glass-button px-8 py-4 text-lg" data-testid="button-start-project">
                    <Rocket className="mr-2 h-5 w-5" />
                    Start a Project
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="outline" className="border-2 border-purple-400/50 text-purple-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:text-white px-8 py-4 text-lg transition-all duration-300" data-testid="button-view-work">
                    View Our Work
                  </Button>
                </Link>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </>
  );
}
