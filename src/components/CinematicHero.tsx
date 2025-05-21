import React, { useState, useEffect, useRef } from "react";
import { Logo } from "./Logo";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { PremiumDeviceShowcase } from "./PremiumDeviceShowcase";
import { TrialRequestButton } from "./TrialRequestButton";
import { Link } from "react-router-dom";
import { Button } from "./Button";

export function CinematicHero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Parallax scrolling effect
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  const headerOpacity = useTransform(scrollY, [0, 400], [1, 0.7]); // Higher minimum opacity (0.7) so content stays more visible when scrolling
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);
  
  // Dynamic headline text options
  const headlines = [
    "PREMIUM ENTERTAINMENT ON EVERY DEVICE",
    "16,000+ CHANNELS IN CRYSTAL CLEAR HD & FHD",
    "STREAM GLOBALLY WITHOUT BUFFERING",
    "LIGHTNING-FAST CHANNEL SWITCHING",
    "50,000+ ON-DEMAND MOVIES & TV SERIES"
  ];
  
  // Auto-rotate headlines
  useEffect(() => {
    if (hasInteracted) return;
    
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % headlines.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [headlines.length, hasInteracted]);
  
  // Handle headline click 
  const handleHeadlineClick = (index: number) => {
    setCurrentTextIndex(index);
    setHasInteracted(true);
  };
  
  // Automatic background particle generation - reduced count for less visual noise
  const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number; speed: number }>>([]);
  
  useEffect(() => {
    const particleCount = 8; // Reduced from 20
    const newParticles = [];
    
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 50 + 10,
      });
    }
    
    setParticles(newParticles);
  }, []);
  
  return (
    <section ref={heroRef} className="relative min-h-[85vh] sm:min-h-[90vh] overflow-visible mb-[-10vh]">
      {/* Enhanced premium background layer */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/90 via-black to-black z-0"></div>
      <div className="absolute inset-0 bg-black/20 mix-blend-overlay z-0"></div>
      
      {/* Cinematic film grain effect */}
      <div className="absolute inset-0 opacity-[0.03] z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>
      
      {/* Enhanced premium particles */}
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-white opacity-20 pointer-events-none"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, particle.speed],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            delay: index * 0.2,
          }}
        />
      ))}
      
      {/* Premium cinematic lighting effects */}
      <motion.div 
        className="absolute top-0 left-1/3 w-1/3 h-1/3 bg-gradient-radial from-primary/15 to-transparent blur-3xl z-0"
        style={{ y }}
        animate={{ opacity: [0.7, 0.9, 0.7] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-1/4 h-1/4 bg-gradient-radial from-secondary/10 to-transparent blur-3xl z-0"
        style={{ y: y.get() * 0.5 }}
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, delay: 2, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>
      <motion.div 
        className="absolute top-1/3 left-1/4 w-1/5 h-1/5 bg-gradient-radial from-purple-500/10 to-transparent blur-3xl z-0"
        style={{ y: y.get() * -0.3 }}
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 7, delay: 1, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>
      
      {/* Ultra-premium cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/90 z-0"></div>
      <div className="absolute inset-0 bg-[conic-gradient(var(--tw-gradient-stops))] from-transparent via-black/5 to-transparent rotate-180 z-0"></div>
      
      {/* Content container with parallax - simplified */}
      <motion.div 
        className="container mx-auto px-3 sm:px-4 pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20 relative z-10 h-full flex flex-col"
        style={{ scale, opacity: headerOpacity }}
      >
        {/* Logo - More Prominent but simplified */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 sm:mb-10 text-center relative"
        >
          <div className="relative inline-block">
            {/* Simple glow effect behind logo */}
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-full blur-xl opacity-50"></div>
            
            {/* Logo itself - clean presentation */}
            <Logo className="w-40 sm:w-52 md:w-60 mx-auto relative z-10" variant="full" />
          </div>
          
          {/* Tagline below logo */}
          <motion.p 
            className="text-xs sm:text-sm text-white/80 mt-3 font-medium tracking-widest animate-pulse-slow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            PREMIUM IPTV ENTERTAINMENT
          </motion.p>
        </motion.div>
        
        {/* Dynamic headlines - cleaner spacing */}
        <div className="mb-6 sm:mb-8 text-center relative min-h-[4rem] sm:min-h-[6rem] md:min-h-[8rem]">
          <AnimatePresence mode="wait">
            <motion.h1 
              key={currentTextIndex}
              className="text-xl sm:text-2xl md:text-4xl font-bold text-white px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <span className="relative">
              {headlines[currentTextIndex]}
              <motion.span 
                className="absolute -bottom-3 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/80 to-transparent"
                initial={{ width: "0%", left: "50%" }}
                animate={{ width: "100%", left: "0%" }}
                transition={{ duration: 3, ease: "easeInOut" }}
                key={currentTextIndex}
              />
            </span>
            </motion.h1>
          </AnimatePresence>
          
          {/* Enhanced headline selector dots */}
          <div className="flex justify-center space-x-3 mt-5">
            {headlines.map((_, index) => (
              <button
                key={index}
                onClick={() => handleHeadlineClick(index)}
                className={`w-2 h-2 rounded-full transition-all duration-500 relative ${index === currentTextIndex ? 'bg-primary scale-125' : 'bg-white/30 hover:bg-white/50'}`}
                aria-label={`Show headline ${index + 1}`}
              >
                {index === currentTextIndex && (
                  <motion.span 
                    className="absolute inset-0 rounded-full bg-primary/30"
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
        
        {/* Enhanced premium feature highlights */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-3xl mx-auto mb-6 sm:mb-8 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { icon: "🌎", text: "GLOBAL ACCESS" },
            { icon: "⚡", text: "ZERO BUFFERING" },
            { icon: "🎬", text: "16,000+ CHANNELS" },
            { icon: "📱", text: "ALL DEVICES" }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              className="flex items-center bg-black/30 backdrop-blur-md rounded-full px-3 sm:px-4 py-1 sm:py-2 border border-white/10 hover:border-primary/30 hover:bg-black/40 transition-all duration-300 group"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-lg sm:text-xl mr-2 group-hover:text-primary transition-colors duration-300">{feature.icon}</div>
              <p className="text-xs sm:text-sm font-medium text-white/90 group-hover:text-white transition-colors duration-300">{feature.text}</p>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* ENHANCED PREMIUM PRICING SECTION */}
        <motion.div
          className="max-w-3xl mx-auto mb-8 bg-gradient-to-br from-background/40 to-background/20 backdrop-blur-md rounded-xl border border-primary/20 p-5 sm:p-6 text-center shadow-lg shadow-primary/5 relative overflow-hidden group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Premium spotlight effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-1000 animate-gradient-x"></div>
          
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-5 bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-secondary relative">
            Premium Plans Starting at <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold">$15</span>/month
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4">
            {[
              { connections: "1", price: "$15", url: "https://loufrankhosting.online/cart.php?a=add&pid=10" },
              { connections: "2", price: "$22", url: "https://loufrankhosting.online/cart.php?a=add&pid=11" },
              { connections: "3", price: "$37", url: "https://loufrankhosting.online/cart.php?a=add&pid=12" },
              { connections: "4", price: "$45", url: "https://loufrankhosting.online/cart.php?a=add&pid=13" }
            ].map((plan, index) => (
              <a 
                key={index} 
                href={plan.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center rounded-lg border-2 border-primary/20 p-3 sm:p-4 transition-all hover:bg-primary/10 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 hover:scale-105 cursor-pointer group relative overflow-hidden"
              >
                <span className="text-xs sm:text-sm font-medium text-white/80 mb-1">CONNECTIONS</span>
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{plan.connections}</span>
                <span className="text-lg sm:text-xl md:text-2xl font-semibold text-primary mt-1">
                  {plan.price}<span className="text-sm text-white/70">/mo</span>
                </span>
                <span className="text-xs bg-primary/20 text-white px-2 py-1 rounded-full mt-2 group-hover:bg-primary/40 transition-colors relative">
                  SUBSCRIBE NOW
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 ease-in-out"></span>
                </span>
                
                {/* Pricing card hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </a>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-2 mb-2 bg-black/30 rounded-lg p-3 border border-white/5">
            <p className="text-sm sm:text-base text-white/90 font-medium">
              All plans include:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="text-xs bg-black/40 rounded-full px-2 py-1 text-white/80">16,000+ Channels</span>
              <span className="text-xs bg-black/40 rounded-full px-2 py-1 text-white/80">Movies & TV Shows</span>
              <span className="text-xs bg-black/40 rounded-full px-2 py-1 text-white/80">No Contracts</span>
              <span className="text-xs bg-black/40 rounded-full px-2 py-1 text-white/80">24/7 Support</span>
            </div>
          </div>
          
          <Link to="/Pricing" className="inline-flex items-center text-sm text-primary hover:text-primary/80 mt-1">
            View detailed pricing
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1">
              <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>
        
        {/* CTA Buttons - More focused */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center mb-8 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <TrialRequestButton 
            size="xxl" 
            className="relative group overflow-hidden shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 ring-1 ring-primary/30 hover:ring-primary/70 transition-all duration-300" 
          />
          <a 
            href="https://loufrankhosting.online/index.php/store/trial-products"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group overflow-hidden inline-flex items-center justify-center rounded-md px-8 py-4 text-sm font-medium h-12 md:h-14 border-2 border-primary text-primary hover:bg-primary/10 bg-transparent shadow-lg hover:shadow-primary/20 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center font-semibold">
              SUBSCRIBE NOW
            </span>
          </a>
        </motion.div>
        
        {/* Premium Device Showcase - simplified */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-4 sm:mt-8 relative z-10"
        >
          <PremiumDeviceShowcase />
        </motion.div>
      </motion.div>
      
      {/* Down arrow indicator - simplified */}
      <motion.div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <button 
          onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
          className="bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-colors"
          aria-label="Scroll down"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </button>
      </motion.div>
      
      {/* Enhanced cinematic vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_rgba(0,0,0,0.8)_100%)] pointer-events-none z-10 opacity-60"></div>
      
      {/* Premium spotlight tracking effect */}
      <motion.div 
        className="absolute w-[40vw] h-[40vh] rounded-full pointer-events-none z-0 opacity-10 mix-blend-overlay"
        style={{
          background: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.6) 0%, transparent 70%)',
          x: y.get() * 0.1, 
          y: y.get() * -0.05,
        }}
      />
    </section>
  );
}