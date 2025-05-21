import React, { useEffect, useRef, useCallback } from "react";
import { StaticEpgImage } from "./StaticEpgImage";
import { motion, useInView, useAnimation } from "framer-motion";
import { TrialRequestButton } from "./TrialRequestButton";

export function ChannelGuideDemoSection() {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  const startAnimation = useCallback(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    });
  }, [controls]);
  
  useEffect(() => {
    if (isInView) {
      startAnimation();
    }
  }, [isInView, startAnimation]);
  
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="channel-guide">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-gray-900/60 to-[#080221]/80 z-0"></div>
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-radial from-primary/10 to-transparent blur-3xl z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-gradient-radial from-secondary/10 to-transparent blur-3xl z-0"></div>
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent"></div>
        <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      </div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
          >
            REVOLUTIONARY CHANNEL NAVIGATION
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ delay: 0.1 }}
          >
            Experience lightning-fast channel switching, an intuitive program guide, and seamless navigation with our premium Tivimate-based interface. Stream your favorite content with unparalleled control.
          </motion.p>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Interactive demo */}
          <motion.div 
            className="lg:col-span-8 relative z-0"
            initial={{ opacity: 0, y: 40 }}
            animate={controls}
            transition={{ delay: 0.2 }}
          >
            <div className="relative">
              {/* Glowing highlight effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-xl blur-sm opacity-50"></div>
              
              {/* TV/Device Frame */}
              <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl z-0">
                <StaticEpgImage />
              </div>
              
              {/* Feature pointers */}
              <div className="absolute -top-4 -left-4 bg-primary/90 text-white px-3 py-1.5 rounded-full text-sm font-medium shadow-lg transform -rotate-6">
                Lightning Fast Zapping
              </div>
              <div className="absolute top-1/4 -right-4 bg-secondary/90 text-white px-3 py-1.5 rounded-full text-sm font-medium shadow-lg transform rotate-3">
                7-Day Catch Up
              </div>
              <div className="absolute -bottom-4 left-1/3 bg-gradient-to-r from-primary to-secondary text-white px-3 py-1.5 rounded-full text-sm font-medium shadow-lg">
                Full EPG Guide
              </div>
            </div>
          </motion.div>
          
          {/* Features list */}
          <motion.div 
            className="lg:col-span-4"
            initial={{ opacity: 0, x: 20 }}
            animate={controls}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-white">Premium Interface Features</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-white font-medium">Ultra-Fast Channel Switching</h4>
                    <p className="text-muted-foreground text-sm mt-1">Channel zapping under 1 second with anti-buffer technology</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-white font-medium">Comprehensive EPG Guide</h4>
                    <p className="text-muted-foreground text-sm mt-1">Full 7-day program guide with detailed show information</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-white font-medium">Catch-Up & Recording</h4>
                    <p className="text-muted-foreground text-sm mt-1">Watch shows from the past 7 days with automatic cloud recording</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-white font-medium">Favorites & Categories</h4>
                    <p className="text-muted-foreground text-sm mt-1">Organize channels with custom favorites and category filters</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-6">
                <TrialRequestButton
                  size="lg"
                  className="w-full justify-center shadow-xl shadow-primary/20"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}