import React from "react";
import { SEO } from "../components/SEO";
import { Navigation } from "components/Navigation";
import { Footer } from "components/Footer";
import { Toaster } from "sonner";

export default function UsingAI() {
  return (
    <div className="flex flex-col min-h-screen text-foreground overflow-x-hidden overflow-y-visible relative max-w-[100vw]">
      <SEO
        pageName="using-ai"
        customTitle="Using AI - LouFrank TV"
        customDescription="Learn about how LouFrank TV uses artificial intelligence to enhance your viewing experience."
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Using AI", url: "/UsingAI" }
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
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Using AI at LouFrank TV</h1>
          
          <div className="max-w-3xl mx-auto bg-background/40 backdrop-blur-sm rounded-xl border border-border/40 p-6 md:p-8 shadow-xl">
            <div className="prose prose-invert max-w-none">
              <h2>How We Use Artificial Intelligence</h2>
              <p>
                At LouFrank TV, we leverage cutting-edge artificial intelligence to enhance your viewing experience in several key ways:
              </p>
              
              <h3>Content Recommendations</h3>
              <p>
                Our AI-powered recommendation system analyzes your viewing habits to suggest channels and content you might enjoy. This helps you discover new favorite shows and channels from our extensive library of over 16,000 options.
              </p>
              
              <h3>Streaming Optimization</h3>
              <p>
                We use AI algorithms to optimize streaming quality based on your internet connection, ensuring you get the best possible viewing experience with minimal buffering and interruptions.
              </p>
              
              <h3>Voice Search Capabilities</h3>
              <p>
                Our platform incorporates natural language processing to make searching for your favorite shows and channels as simple as speaking what you're looking for.
              </p>
              
              <h3>Customer Support</h3>
              <p>
                Our customer support system utilizes AI to provide faster responses to common questions and issues, though we always ensure human oversight for complex problems.
              </p>
              
              <h2>Your Data Privacy</h2>
              <p>
                While we use AI to improve our service, we're committed to protecting your privacy. All data used for AI processing is anonymized and secured according to industry-leading standards. For more details, please review our <a href="/PrivacyPolicy" className="text-primary hover:text-primary/80 underline">Privacy Policy</a>.
              </p>
              
              <h2>Future AI Enhancements</h2>
              <p>
                We're continuously exploring new ways to use AI technology to make LouFrank TV the most user-friendly and feature-rich IPTV service available. Stay tuned for exciting new AI-powered features in the future!
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
