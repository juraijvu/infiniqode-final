import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { ContactSection } from "@/components/contact-section";
import { GlassCard } from "@/components/glass-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Calendar,
  Rocket,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8 text-white" />,
      title: "Email Us",
      description: "Send us an email and we'll respond within 24 hours",
      contact: "hello@digitalcraft.agency",
      action: "mailto:hello@digitalcraft.agency"
    },
    {
      icon: <Phone className="w-8 h-8 text-white" />,
      title: "Call Us",
      description: "Speak directly with our team during business hours",
      contact: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-white" />,
      title: "Live Chat",
      description: "Chat with us in real-time for quick questions",
      contact: "Available 9 AM - 6 PM PST",
      action: "#"
    },
    {
      icon: <Calendar className="w-8 h-8 text-white" />,
      title: "Schedule a Call",
      description: "Book a consultation at your convenience",
      contact: "15-30 minute slots available",
      action: "#"
    }
  ];

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity and scope. Most web development projects take 4-12 weeks, while larger SaaS or enterprise solutions may take 3-6 months. We provide detailed timelines during the planning phase."
    },
    {
      question: "Do you work with startups or only established businesses?",
      answer: "We work with businesses of all sizes, from early-stage startups to Fortune 500 companies. Our flexible approach allows us to adapt our services to meet different budget levels and requirements."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We specialize in React TypeScript for frontend development, Python Flask for backend systems, and modern deployment practices. We also have expertise in mobile development, digital marketing, and SEO optimization."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer comprehensive post-launch support including maintenance, updates, hosting management, and technical assistance. We have various support packages to fit different needs and budgets."
    },
    {
      question: "Can you help with digital marketing and SEO?",
      answer: "Absolutely! We offer comprehensive digital marketing services including SEO optimization, content strategy, social media marketing, and PPC campaigns. We can help you grow your online presence and drive qualified traffic."
    },
    {
      question: "What's your pricing structure?",
      answer: "Our pricing varies based on project scope, timeline, and requirements. We offer both fixed-price projects and hourly consulting. Contact us for a detailed quote based on your specific needs."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We start with a detailed discussion about your goals, requirements, and vision for the project."
    },
    {
      step: "02",
      title: "Proposal & Planning",
      description: "We create a comprehensive proposal with timeline, deliverables, and pricing for your review."
    },
    {
      step: "03",
      title: "Design & Development",
      description: "Our team brings your vision to life with regular updates and feedback sessions throughout the process."
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We handle the launch and provide ongoing support to ensure your success in the digital landscape."
    }
  ];

  return (
    <>
      <SEOHead
        title="Contact Us"
        description="Get in touch with DigitalCraft for your next digital project. We offer web development, SaaS development, digital marketing, and more. Free consultation available."
        keywords="contact us, digital agency contact, web development consultation, project quote"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20">
        <div className="hero-glow top-20 left-20"></div>
        <div className="hero-glow bottom-20 right-20 animation-delay-2s"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Let's Build Something <span className="text-white">Amazing</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Ready to transform your digital presence? We're here to help you achieve your goals with cutting-edge solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="glass-button px-8 py-4 text-lg" data-testid="button-start-project">
              <Rocket className="mr-2 h-5 w-5" />
              Start Your Project
            </Button>
            <Button variant="outline" className="border-2 border-purple-400/50 text-purple-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:text-white px-8 py-4 text-lg transition-all duration-300" data-testid="button-schedule-call">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the contact method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <GlassCard key={index} className="p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{method.description}</p>
                <a 
                  href={method.action} 
                  className="text-accent font-medium hover:underline"
                  data-testid={`contact-${method.title.toLowerCase().replace(' ', '-')}`}
                >
                  {method.contact}
                </a>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection />

      {/* Office Information */}
      <section className="py-20 bg-muted/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">Our Office</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Visit us at our San Francisco headquarters or connect with us remotely. 
                We work with clients worldwide and offer flexible meeting options.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      123 Innovation Drive<br />
                      San Francisco, CA 94105<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                      Saturday: 10:00 AM - 4:00 PM PST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <GlassCard className="p-8">
                <div className="aspect-video bg-muted/20 rounded-lg mb-6 flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Visit Our Office</h3>
                <p className="text-muted-foreground mb-6">
                  Located in the heart of San Francisco's tech district, our office is easily accessible 
                  by public transportation and offers convenient parking.
                </p>
                <Button variant="outline" className="border-2 border-purple-400/50 text-purple-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:text-white transition-all duration-300" data-testid="button-get-directions">
                  Get Directions
                </Button>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 gradient-text">How We Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our proven process ensures successful project delivery from concept to launch
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <GlassCard key={index} className="p-6 text-center">
                <div className="text-4xl font-bold gradient-text mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Common questions about our services and process
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <GlassCard key={index} className="p-6">
                <h3 className="text-lg font-semibold mb-3 flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-muted-foreground ml-8">{faq.answer}</p>
              </GlassCard>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Don't see your question answered here?
            </p>
            <Button className="glass-button" data-testid="button-contact-support">
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <GlassCard className="p-16 text-center relative overflow-hidden">
            <div className="hero-glow top-0 left-1/2 transform -translate-x-1/2"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Take the first step towards transforming your digital presence. 
                Let's discuss your project and explore how we can help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="glass-button px-8 py-4 text-lg" data-testid="button-free-consultation">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Free Consultation
                </Button>
                <Link href="/portfolio">
                  <Button variant="outline" className="border-2 border-purple-400/50 text-purple-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:text-white px-8 py-4 text-lg transition-all duration-300" data-testid="button-view-our-work">
                    View Our Work
                    <ArrowRight className="ml-2 h-5 w-5" />
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
