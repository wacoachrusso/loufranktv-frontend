import React from "react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { SEO } from "../components/SEO";
import { Navigation } from "components/Navigation";
import { SetupGuidesSection } from "components/SetupGuidesSection";
import { DeviceCompatibilitySection } from "components/DeviceCompatibilitySection";
import { Footer } from "components/Footer";
import { Toaster } from "sonner";

export default function SetupGuides() {
  return (
    <div className="flex flex-col min-h-screen text-foreground overflow-x-hidden overflow-y-visible relative max-w-[100vw]">
      <SEO 
        pageName="setup-guides" 
        customDescription="Easy-to-follow setup guides for using LouFrank TV on all your devices including Firestick, Apple TV, Smart TVs, smartphones, tablets, and computers."
        customMetaTags={[
          { property: "og:type", content: "website" },
          { property: "og:title", content: "Setup Guides | LouFrank TV" },
          { property: "og:description", content: "Easy setup instructions for LouFrank TV on all devices" }
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Setup Guides", url: "/SetupGuides" }
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
              { name: "Setup Guides", url: "/SetupGuides" }
            ]}
            className="mb-8"
          />
        </div>
        
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Setup Guides</h1>
          <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto mb-16">Easy-to-follow instructions to get LouFrank TV running on all your favorite devices.</p>
        </div>
        
        {/* Device Compatibility Section */}
        <DeviceCompatibilitySection />
        
        {/* Setup Guides Section */}
        <SetupGuidesSection />
      </main>
      
      <Footer />
    </div>
  );
}
