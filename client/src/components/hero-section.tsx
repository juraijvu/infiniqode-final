import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ContactPopup } from "@/components/contact-popup";
import { Rocket, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center min-h-screen">
        {/* Left side - Content */}
        <div className="text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
            Digital Solutions 
            <span className="text-white block">That</span>
            <span className="text-gray-300">Drive Success</span>
          </h1>
          
          <div className="text-white mb-4 text-sm font-medium tracking-wide uppercase">
            AT INFINICODE
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            We believe in the transformative power of digital solutions. Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape. From captivating web design to data-driven marketing strategies, we are committed to delivering results that exceed expectations.
          </p>
          
          <div className="mb-8">
            <p className="text-white font-semibold text-lg mb-6">
              Unlock Your Business Potential Today
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <ContactPopup 
              trigger={
                <Button className="button-3d px-8 py-4 text-lg rounded-full" data-testid="button-start-project">
                  Get Started
                </Button>
              }
              title="Ready to Transform Your Digital Presence?"
              description="Tell us about your project goals and let's create something amazing together. Get a free consultation and custom proposal."
            />
            <Button 
              variant="outline" 
              className="glass-button border-white text-white px-8 py-4 text-lg rounded-full"
              data-testid="button-consultation"
            >
              Free Consultation
            </Button>
          </div>
        </div>
        
        {/* Right side - Abstract Logo/Design Element */}
        <div className="hidden lg:flex justify-center items-center">
          <div className="relative">
            {/* Large circular elements */}
            <div className="w-96 h-96 relative">
              <div className="absolute inset-0 border-4 border-white/30 rounded-full"></div>
              <div className="absolute inset-8 border-4 border-white/50 rounded-full"></div>
              <div className="absolute inset-16 border-4 border-white/70 rounded-full"></div>
              
              {/* Inner decorative elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-32 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
                  ∞
                </div>
              </div>
              
              {/* Small floating elements */}
              <div className="absolute top-10 right-10 w-6 h-6 bg-white rounded-full opacity-80"></div>
              <div className="absolute bottom-10 left-10 w-4 h-4 bg-gray-300 rounded-full opacity-60"></div>
              <div className="absolute top-1/3 left-0 w-3 h-3 bg-white rounded-full opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
