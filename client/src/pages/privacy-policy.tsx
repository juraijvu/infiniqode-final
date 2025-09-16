import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEOHead } from "@/components/seo-head";




export default function PrivacyPolicy() {



  return (
    <>
     
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] mt-[50px] flex items-center justify-center pt-20">
        <div className="hero-glow top-20 left-20"></div>
        <div className="hero-glow bottom-20 right-20 animation-delay-2s"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Privacy policy</span>
          </h1>
          <p className="text-md md:text-md text-muted-foreground mb-8">
           At infiniqode, we are committed to protecting your privacy and ensuring the security of
            your personal information. This Privacy Policy outlines how we collect, use, disclose, 
            and safeguard your data when you visit our website or engage with our digital services,
             including web development, mobile app development, and digital marketing. We collect personal 
             information such as names, email addresses, and payment details only when voluntarily provided 
             through forms, subscriptions, or service inquiries. Usage data, including IP addresses and browsing
              behavior, may be collected via cookies to enhance user experience and analyze site performance. 
              Your data is used to deliver personalized services, process transactions, and improve our offerings, 
              with strict adherence to GDPR and other applicable regulations. We do not sell or share your information
               with third parties, except with trusted service providers under secure agreements or as required by law.
                Our website employs SSL encryption and regular security audits to protect your data. You may request
                 access, correction, or deletion of your information by contacting us. We retain data only as long
                  as necessary for business purposes or legal compliance. By using our website, you consent to this policy. 
           For inquiries, reach us at [contact@infiniqode.com].
          </p>
        </div>
      </section>

  


     

      <Footer />
    </>
  );
}
