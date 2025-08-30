import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ContactPopup } from "@/components/contact-popup";
import { Rocket, Play, Code, Palette, Lightbulb } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="hero-glow top-20 left-20"></div>
      <div className="hero-glow bottom-20 right-20 animation-delay-2s"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Crafting Digital
            <span className="gradient-text block">Experiences</span>
            That Convert
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We're a premium digital agency specializing in React TypeScript development, 
            Python Flask backends, and cutting-edge digital marketing solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ContactPopup 
              trigger={
                <Button className="glass-button px-8 py-4 text-lg" data-testid="button-start-project">
                  <Rocket className="mr-2 h-5 w-5" />
                  Start Your Project
                </Button>
              }
              title="Ready to Transform Your Digital Presence?"
              description="Tell us about your project goals and let's create something amazing together. Get a free consultation and custom proposal."
            />
            <Link href="/portfolio">
              <Button 
                variant="outline" 
                className="border-accent text-accent hover:bg-accent hover:text-black px-8 py-4 text-lg"
                data-testid="button-view-work"
              >
                <Play className="mr-2 h-5 w-5" />
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 glass-card rounded-full flex items-center justify-center animate-float">
        <Code className="text-accent text-2xl" />
      </div>
      <div className="absolute bottom-40 right-20 w-16 h-16 glass-card rounded-full flex items-center justify-center animate-float animation-delay-2s">
        <Palette className="text-accent text-xl" />
      </div>
      <div className="absolute top-1/2 left-20 w-12 h-12 glass-card rounded-full flex items-center justify-center animate-float animation-delay-4s">
        <Lightbulb className="text-accent" />
      </div>
    </section>
  );
}
