import React from "react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { SEO } from "../components/SEO";
import { Navigation } from "components/Navigation";
import { TestimonialsSection } from "components/TestimonialsSection";
import { TrustBadges } from "components/TrustBadges";
import { TrialRequestButton } from "components/TrialRequestButton";
import { Footer } from "components/Footer";
import { Toaster } from "sonner";

export default function Testimonials() {
  return (
    <div className="flex flex-col min-h-screen text-foreground overflow-x-hidden overflow-y-visible relative max-w-[100vw]">
      <SEO 
        pageName="testimonials" 
        customDescription="Read real customer reviews and testimonials about LouFrank TV's premium IPTV service. See why our customers love our extensive channel lineup and reliable streaming."
        customMetaTags={[
          { property: "og:type", content: "website" },
          { property: "og:title", content: "Customer Testimonials | LouFrank TV" },
          { property: "og:description", content: "Real customer reviews of LouFrank TV premium IPTV service" }
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Testimonials", url: "/Testimonials" }
        ]}
      />
      
      {/* Premium Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-[#050118] z-[-2]"></div>
      
      {/* Animated subtle gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-tr from-primary/5 via-secondary/5 to-purple-500/5 z-[-1] animate-gradient-slow"></div>
      
      {/* Radial glow effect */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[120%] aspect-square bg-gradient-radial from-primary/10 to-transparent opacity-50 blur-3xl z-[-1]"></div>
      
      {/* Moving particles effect - top layer */}
      <div className="fixed inset-0 z-[-1]" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-primary/40 animate-float-slow"></div>
        <div className="absolute top-3/4 left-2/3 w-1 h-1 rounded-full bg-secondary/40 animate-float-medium"></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 rounded-full bg-purple-500/30 animate-float-fast"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full bg-cyan-500/40 animate-float-reverse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 rounded-full bg-primary/30 animate-pulse-slow"></div>
      </div>
      
      <Navigation />
      <Toaster position="top-right" theme="dark" richColors />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs 
            items={[
              { name: "Home", url: "/" },
              { name: "Testimonials", url: "/Testimonials" }
            ]}
            className="mb-8"
          />
        </div>
        
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Customer Testimonials</h1>
          <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto mb-8">Hear what our satisfied customers have to say about their experience with LouFrank TV.</p>
          
          <div className="flex justify-center mb-16">
            <TrialRequestButton />
          </div>
        </div>
        
        {/* Trust Badges */}
        <TrustBadges />
        
        {/* Testimonials Section */}
        <TestimonialsSection />
      </main>
      
      <Footer />
    </div>
  );
}
