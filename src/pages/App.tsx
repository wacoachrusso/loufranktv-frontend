import React, { useEffect, useRef, useState } from "react";
// GoogleAnalytics now in Head component
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { SchemaMaker } from "components/SchemaMaker";
import { Button } from "components/Button";
import { Logo } from "components/Logo";
import { DeviceCompatibility } from "components/DeviceCompatibility";
import { FeaturesSection } from "components/FeaturesSection";
import { PricingSection } from "components/PricingSection";
import { SetupGuidesSection } from "components/SetupGuidesSection";
import { TestimonialsSection } from "components/TestimonialsSection";
import { Footer } from "components/Footer";
import { Navigation } from "components/Navigation";
import { motion } from "framer-motion";
// Auth store removed
import { Toaster } from "sonner";
import { applyDarkTheme } from "../utils/theme";
import { TrustBadges } from "components/TrustBadges";
import { EnhancedStructuredData } from "../utils/structuredData";
import { CountryFlags } from "components/CountryFlags";
import { LiveChannelPreview } from "components/LiveChannelPreview";
import { TrialRequestButton } from "components/TrialRequestButton";
import { ChannelGuideDemoSection } from "components/ChannelGuideDemoSection";
import { CinematicHero } from "components/CinematicHero";
import { DeviceCompatibilitySection } from "components/DeviceCompatibilitySection";
import { ChannelShowcaseSection } from "components/ChannelShowcaseSection";
import { VodBenefitSection } from "components/VodBenefitSection";

export default function App() {
  // Video player state
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };
  
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };
  // Apply dark theme on mount
  useEffect(() => {
    applyDarkTheme();
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen text-foreground overflow-x-hidden overflow-y-visible relative max-w-[100vw]">
      {/* GoogleAnalytics now in Head component */}
      <SEO 
        pageName="home" 
        customMetaTags={[
          { name: "google-site-verification", content: "your-google-verification-code" },
          { name: "msvalidate.01", content: "your-bing-verification-code" }
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" }
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
      
      <div className="container mx-auto px-4 pt-8">
        <Breadcrumbs 
          items={[
            { name: "Home", url: "/" }
          ]}
        />
      </div>
      
      {/* Premium Cinematic Hero */}
      <CinematicHero />
      
      {/* Trust Badges */}
      <TrustBadges />
      
      {/* VOD Benefit Section - Replace Streaming Services */}
      <VodBenefitSection />
      
      {/* Channel Showcase Preview */}
      <ChannelShowcaseSection />
      
      {/* Page Section Links */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Explore LouFrank TV</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Features Link */}
          <div className="bg-background/40 backdrop-blur-lg rounded-xl border border-border/40 p-6 shadow-lg transition-all hover:shadow-primary/10 hover:border-primary/40 hover:scale-105 hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-3 text-primary">Premium Features</h3>
            <p className="text-muted-foreground mb-4">Ultra-fast zapping, no freezing, and 16,000+ HD channels from 50+ countries.</p>
            <Link to="/Features" className="inline-flex items-center text-primary hover:text-primary/80">
              Explore Features
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
          
          {/* Pricing Link */}
          <div className="bg-background/40 backdrop-blur-lg rounded-xl border border-border/40 p-6 shadow-lg transition-all hover:shadow-primary/10 hover:border-primary/40 hover:scale-105 hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-3 text-primary">Subscription Plans</h3>
            <p className="text-muted-foreground mb-4">Flexible plans for every household with no contracts and premium support.</p>
            <Link to="/Pricing" className="inline-flex items-center text-primary hover:text-primary/80">
              View Pricing
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
          
          {/* Setup Guides Link */}
          <div className="bg-background/40 backdrop-blur-lg rounded-xl border border-border/40 p-6 shadow-lg transition-all hover:shadow-primary/10 hover:border-primary/40 hover:scale-105 hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-3 text-primary">Setup Guides</h3>
            <p className="text-muted-foreground mb-4">Easy setup instructions for all your devices with detailed step-by-step guides.</p>
            <Link to="/SetupGuides" className="inline-flex items-center text-primary hover:text-primary/80">
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
          
          {/* Testimonials Link */}
          <div className="bg-background/40 backdrop-blur-lg rounded-xl border border-border/40 p-6 shadow-lg transition-all hover:shadow-primary/10 hover:border-primary/40 hover:scale-105 hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-3 text-primary">Testimonials</h3>
            <p className="text-muted-foreground mb-4">See what our satisfied customers are saying about LouFrank TV service.</p>
            <Link to="/Testimonials" className="inline-flex items-center text-primary hover:text-primary/80">
              Read Reviews
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Country Flags Preview */}
      <div className="container mx-auto px-4 py-8">
        <h3 className="text-2xl font-bold text-center mb-6">Global Entertainment Access</h3>
        <CountryFlags />
      </div>
      
      {/* Trial Request CTA */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to experience premium IPTV?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Try LouFrank TV free with our 36-hour trial access.</p>
        <TrialRequestButton size="lg" />
      </div>
      
      {/* Remove unused main section */}
      <Footer />
    </div>
  );
}
