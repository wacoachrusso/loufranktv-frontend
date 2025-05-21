import React from "react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { SEO } from "../components/SEO";
import { Navigation } from "components/Navigation";
import { FeaturesSection } from "components/FeaturesSection";
import { LiveChannelPreview } from "components/LiveChannelPreview";
import { ChannelGuideDemoSection } from "components/ChannelGuideDemoSection";
import { ChannelShowcaseSection } from "components/ChannelShowcaseSection";
import { CountryFlags } from "components/CountryFlags";
import { Footer } from "components/Footer";
import { Toaster } from "sonner";
import { TrialRequestButton } from "components/TrialRequestButton";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Features() {
  return (
    <div className="flex flex-col min-h-screen text-foreground overflow-x-hidden overflow-y-visible relative max-w-[100vw]">
      <SEO 
        pageName="features" 
        customDescription="Explore premium IPTV features with LouFrank TV. Ultra-fast channel zapping, 16,000+ HD channels, movies and TV shows with no buffering or freezing."
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Features", url: "/Features" }
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
              { name: "Features", url: "/Features" }
            ]}
            className="mb-8"
          />
        </div>
        
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Premium Features</h1>
          <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto mb-16">Experience the best in IPTV with LouFrank TV's premium features and superior streaming quality.</p>
        </div>
        
        {/* Hero Banner */}
        <motion.div 
          className="relative overflow-hidden bg-gradient-to-br from-black/90 to-gray-900/90 my-8 rounded-2xl border border-primary/20 shadow-2xl shadow-primary/5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Premium visual effects */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=2070&auto=format&fit=crop')] opacity-5 bg-cover bg-center bg-no-repeat mix-blend-overlay"></div>
          
          {/* Animated glowing orbs */}
          <motion.div 
            className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.4, 0.3],
            }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          ></motion.div>
          
          <motion.div 
            className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", delay: 2 }}
          ></motion.div>
          
          <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium border border-primary/30 inline-block mb-4">PREMIUM ENTERTAINMENT SOLUTION</span>
                  <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-primary/90 to-white leading-tight">Experience Entertainment <br />Without Limits</h1>
                </motion.div>
                
                <motion.p 
                  className="text-lg text-white/80 mb-8 max-w-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  LouFrank TV delivers a revolutionary IPTV experience with our proprietary streaming technology, premium content library, and unmatched reliability. Access over 16,000 channels and 50,000+ on-demand titles.
                </motion.p>
                
                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <TrialRequestButton
                    size="lg"
                    className="shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20"
                  />
                </motion.div>
                
                <motion.div 
                  className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 border border-primary/20">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary">
                        <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5" />
                        <path d="M22.5 9.75h-1.5v-3a3 3 0 00-3-3h-3V1.5h-3v1.5h-3a3 3 0 00-3 3v3H4.5v3h1.5v3a3 3 0 003 3h3v1.5h3v-1.5h3a3 3 0 003-3v-3h1.5v-3z" />
                      </svg>
                    </div>
                    <span className="text-sm text-white/80">16,000+ Live<br />Channels</span>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-3 border border-secondary/20">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-secondary">
                        <path fillRule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zm1.5 0v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5A.375.375 0 003 5.625zm16.125-.375a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5A.375.375 0 0021 7.125v-1.5a.375.375 0 00-.375-.375h-1.5zM21 9.375A.375.375 0 0020.625 9h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zM4.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5zM3.375 15h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h1.5a.375.375 0 00.375-.375v-1.5A.375.375 0 004.875 9h-1.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375zm4.125 0a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-white/80">50,000+ On-Demand<br />Titles</span>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-3 border border-purple-500/20">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-purple-500">
                        <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
                        <path fillRule="evenodd" d="M8.625 3.75A2.625 2.625 0 006 6.375v11.25A2.625 2.625 0 008.625 20.25h6.75A2.625 2.625 0 0018 17.625V6.375A2.625 2.625 0 0015.375 3.75h-6.75zM7.5 6.375A1.125 1.125 0 018.625 5.25h6.75A1.125 1.125 0 0116.5 6.375v11.25a1.125 1.125 0 01-1.125 1.125h-6.75A1.125 1.125 0 017.5 17.625V6.375z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-white/80">Multi-Device<br />Compatibility</span>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                className="relative overflow-hidden rounded-xl shadow-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {/* Premium interactive display */}
                <div className="aspect-video bg-black/80 rounded-xl relative overflow-hidden border border-white/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=2070&auto=format&fit=crop" 
                      alt="Premium entertainment" 
                      className="w-full h-full object-cover opacity-70"
                    />
                    
                    {/* Overlay elements */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex justify-between items-end">
                          <div>
                            <h3 className="text-2xl font-bold mb-2">Premium Entertainment</h3>
                            <p className="text-white/70 max-w-md">Experience cinematic quality with our ultra-HD streaming technology</p>
                          </div>
                          <button className="bg-primary/90 hover:bg-primary rounded-full w-14 h-14 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                              <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Control bar */}
                <div className="bg-black/90 backdrop-blur-sm border-t border-white/10 py-3 px-4 rounded-b-xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button className="text-white/80 hover:text-white focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path d="M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V8.688c0-1.44-1.555-2.342-2.805-1.628L12 11.03v-2.34c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061z" />
                        </svg>
                      </button>
                      <button className="text-white/80 hover:text-white focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                          <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <button className="text-white/80 hover:text-white focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path d="M5.055 7.06c-1.25-.714-2.805.189-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.342 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L14.805 7.06C13.555 6.346 12 7.25 12 8.688v2.34L5.055 7.06z" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-white/60">HD</span>
                      <button className="text-white/80 hover:text-white focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 010 1.06L8.06 10l3.72 3.72a.75.75 0 11-1.06 1.06l-4.25-4.25a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0z" clipRule="evenodd" />
                          <path fillRule="evenodd" d="M12.22 5.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L15.94 10l-3.72-3.72a.75.75 0 010-1.06z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* Core Features Section */}
        <FeaturesSection />
        
        {/* Channel Showcase */}
        <ChannelShowcaseSection />
        
        {/* Premium Cinematic Channel Showcase */}
        <motion.section 
          className="py-16 relative overflow-hidden isolate"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90 z-[-1]"></div>
          
          {/* Premium lighting effects */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.15)_0,rgba(255,255,255,0)_70%)] opacity-40"></div>
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-1/2 aspect-square bg-gradient-radial from-primary/10 to-transparent blur-3xl opacity-30"></div>
          
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Cinematic Entertainment Experience</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Immerse yourself in a truly premium viewing experience with incredible picture quality and crystal-clear sound</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* Left side - interactive display */}
              <motion.div 
                className="relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Dynamic cinema effect */}
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0"></div>
                
                {/* Cinematic content */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1594908900066-3f47337549d8?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-70"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70"></div>
                </div>
                
                {/* Premium controls overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <span className="px-2 py-1 bg-black/60 text-white/90 rounded-sm text-xs font-medium">LIVE</span>
                      <h3 className="text-2xl font-bold mt-2">Premium Movie Channel</h3>
                      <p className="text-white/70 text-sm">Experience cinema-quality content</p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center hover:bg-primary transition-colors duration-300 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                          <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  {/* Premium progress indicator */}
                  <div className="mb-2">
                    <div className="h-1.5 bg-white/20 rounded-full w-full overflow-hidden">
                      <div className="h-full bg-primary w-[30%] rounded-full relative">
                        <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-r from-transparent to-primary/60 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Interactive controls */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <button className="text-white/80 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path d="M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V8.688c0-1.44-1.555-2.342-2.805-1.628L12 11.03v-2.34c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061z" />
                        </svg>
                      </button>
                      
                      <button className="text-white/80 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
                        </svg>
                      </button>
                      
                      <button className="text-white/80 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path d="M5.055 7.06c-1.25-.714-2.805.189-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.342 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L14.805 7.06C13.555 6.346 12 7.25 12 8.688v2.34L5.055 7.06z" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="text-xs text-white/70 font-medium">30:15 / 1:47:00</div>
                    
                    <div className="flex items-center gap-3">
                      <button className="text-white/80 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 01-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
                          <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
                        </svg>
                      </button>
                      
                      <button className="text-white/80 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                        </svg>
                      </button>
                      
                      <button className="flex items-center gap-1 bg-black/40 px-2 py-1 rounded text-white text-xs border border-white/10 hover:border-white/30 transition-colors">
                        <span>4K</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Right side - features */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Ultra HD Quality Viewing</h3>
                <p className="text-white/80 text-lg mb-6">Enjoy cinema-quality viewing with our Ultra HD streams, featuring vibrant colors, deep contrasts, and crystal clear picture quality that brings content to life.</p>
                
                <div className="space-y-4">
                  {[
                    {
                      title: "4K/Ultra HD Resolution",
                      description: "Experience incredibly detailed picture quality with four times the resolution of standard HD."
                    },
                    {
                      title: "Advanced Color Technology",
                      description: "Our streams support HDR10 and Dolby Vision for the most accurate and vibrant colors possible."
                    },
                    {
                      title: "Spatial Audio Support",
                      description: "Immerse yourself with Dolby Atmos and DTS:X audio that creates a three-dimensional sound experience."
                    },
                    {
                      title: "Adaptive Bitrate Streaming",
                      description: "Our smart technology adjusts quality based on your internet speed for uninterrupted viewing."
                    },
                  ].map((feature, idx) => (
                    <motion.div 
                      key={idx}
                      className="bg-black/20 border border-white/10 rounded-lg p-4 hover:border-primary/30 transition-all duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * idx }}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                      <p className="text-white/70">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
        
        {/* Advanced Features Section */}
        <motion.section 
          className="py-20 relative overflow-hidden isolate"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900/80 z-[-1]"></div>
          
          {/* Premium lighting effect */}
          <div className="absolute top-0 left-1/3 right-1/3 h-32 bg-gradient-radial from-primary/20 to-transparent blur-3xl z-[-1]"></div>
          <div className="absolute bottom-0 left-1/4 right-1/4 h-32 bg-gradient-radial from-secondary/20 to-transparent blur-3xl z-[-1]"></div>
          
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary">Advanced Technology</h2>
                <p className="text-muted-foreground max-w-3xl mx-auto text-lg">Our proprietary streaming technology delivers an unrivaled viewing experience</p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {/* Feature 1 */}
              <motion.div 
                className="bg-gradient-to-br from-black to-gray-900/80 rounded-xl border border-primary/10 p-6 hover:border-primary/30 transition-all duration-300 relative group overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 to-primary/0 opacity-0 group-hover:from-primary/10 group-hover:via-purple-500/10 group-hover:to-secondary/10 group-hover:opacity-100 rounded-xl blur transition duration-500"></div>
                
                <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 border border-primary/20 mb-5 relative">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-primary">
                    <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold mb-3">Ultra-Fast Channel Zapping</h3>
                <p className="text-white/70 mb-4">Switch between channels in milliseconds with our proprietary channel switching technology — up to 10x faster than standard IPTV services.</p>
                
                <div className="bg-black/30 rounded-lg p-3 border border-primary/5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/60">Standard IPTV</span>
                    <span className="text-white/80">2-4 seconds</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full mt-2 mb-3">
                    <div className="h-full bg-red-500/50 rounded-full w-[85%]"></div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/60">LouFrank TV</span>
                    <span className="text-white/80">0.3 seconds</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full mt-2">
                    <div className="h-full bg-primary rounded-full w-[15%]"></div>
                  </div>
                </div>
              </motion.div>
              
              {/* Feature 2 */}
              <motion.div 
                className="bg-gradient-to-br from-black to-gray-900/80 rounded-xl border border-secondary/10 p-6 hover:border-secondary/30 transition-all duration-300 relative group overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary/0 to-secondary/0 opacity-0 group-hover:from-secondary/10 group-hover:via-purple-500/10 group-hover:to-primary/10 group-hover:opacity-100 rounded-xl blur transition duration-500"></div>
                
                <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-secondary/10 border border-secondary/20 mb-5 relative">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-secondary">
                    <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold mb-3">Anti-Buffer Technology</h3>
                <p className="text-white/70 mb-4">Our advanced streaming algorithms eliminate buffering and freezing, delivering reliable playback even on standard connections.</p>
                
                <div className="bg-black/30 rounded-lg p-3 border border-secondary/5">
                  <h4 className="text-sm font-medium mb-2 text-white/80">Common Freezing Causes Eliminated:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-2 text-secondary">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/70">Network congestion</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-2 text-secondary">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/70">Server overload issues</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-2 text-secondary">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/70">Codec incompatibility</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
              
              {/* Feature 3 */}
              <motion.div 
                className="bg-gradient-to-br from-black to-gray-900/80 rounded-xl border border-purple-500/10 p-6 hover:border-purple-500/30 transition-all duration-300 relative group overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/0 to-purple-500/0 opacity-0 group-hover:from-purple-500/10 group-hover:via-purple-600/10 group-hover:to-purple-500/10 group-hover:opacity-100 rounded-xl blur transition duration-500"></div>
                
                <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-purple-500/10 border border-purple-500/20 mb-5 relative">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-purple-500">
                    <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold mb-3">Adaptive Stream Quality</h3>
                <p className="text-white/70 mb-4">Automatically adjusts video quality based on your connection, ensuring uninterrupted viewing at the highest possible resolution.</p>
                
                <div className="bg-black/30 rounded-lg p-3 border border-purple-500/5">
                  <h4 className="text-sm font-medium mb-2 text-white/80">Quality Levels:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/70">Ultra HD (4K)</span>
                      <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full">25+ Mbps</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/70">Full HD (1080p)</span>
                      <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full">8+ Mbps</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/70">HD (720p)</span>
                      <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full">3+ Mbps</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/70">SD (480p)</span>
                      <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full">1+ Mbps</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
        
        {/* Country Flags Carousel */}
        <div className="container mx-auto px-4 py-8">
          <CountryFlags />
        </div>
        
        {/* Live Channel Preview Section */}
        <div className="container mx-auto px-4 py-12">
          <LiveChannelPreview />
        </div>
        
        {/* Featured Channels Carousel */}
        <motion.section 
          className="py-16 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-black/50 z-[-1]"></div>
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Channels</h2>
              <p className="text-white/70 max-w-2xl mx-auto">A selection of premium networks available in our vast channel lineup</p>
            </motion.div>
            
            <div className="relative overflow-hidden py-10">
              {/* Gradient overlays for carousel edges */}
              <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
              <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10"></div>
              
              {/* Channels carousel */}
              <div className="flex items-center space-x-8 py-6 animate-marquee">
                {[
                  { name: "HBO", logo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=200&auto=format&fit=crop" },
                  { name: "Netflix", logo: "https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?q=80&w=200&auto=format&fit=crop" },
                  { name: "Disney+", logo: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=200&auto=format&fit=crop" },
                  { name: "ESPN", logo: "https://images.unsplash.com/photo-1617674678835-b2e1b2ac29fc?q=80&w=200&auto=format&fit=crop" },
                  { name: "BBC", logo: "https://images.unsplash.com/photo-1611365892117-30afd8954031?q=80&w=200&auto=format&fit=crop" },
                  { name: "CNN", logo: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=200&auto=format&fit=crop" },
                  { name: "NBC", logo: "https://images.unsplash.com/photo-1612117189122-6b065b74f4bd?q=80&w=200&auto=format&fit=crop" },
                  { name: "Prime", logo: "https://images.unsplash.com/photo-1695653422259-8a84dd7f847b?q=80&w=200&auto=format&fit=crop" },
                ].map((channel, idx) => (
                  <motion.div 
                    key={idx}
                    className="flex-shrink-0 relative group"
                    whileHover={{ scale: 1.1, y: -10 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                  >
                    <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-primary/50 transition-all duration-300 relative">
                      {/* Overlay with info */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 z-10">
                        <p className="font-bold">{channel.name}</p>
                        <p className="text-xs text-white/80">Premium Channel</p>
                      </div>
                      
                      {/* Premium overlay glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                      
                      {/* Channel logo/image */}
                      <img 
                        src={channel.logo} 
                        alt={channel.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  </motion.div>
                ))}
                
                {/* Duplicate for infinite scroll effect */}
                {[
                  { name: "HBO", logo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=200&auto=format&fit=crop" },
                  { name: "Netflix", logo: "https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?q=80&w=200&auto=format&fit=crop" },
                  { name: "Disney+", logo: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=200&auto=format&fit=crop" },
                  { name: "ESPN", logo: "https://images.unsplash.com/photo-1617674678835-b2e1b2ac29fc?q=80&w=200&auto=format&fit=crop" },
                ].map((channel, idx) => (
                  <motion.div 
                    key={`duplicate-${idx}`}
                    className="flex-shrink-0 relative group"
                    whileHover={{ scale: 1.1, y: -10 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (idx + 8) * 0.05 }}
                  >
                    <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-primary/50 transition-all duration-300 relative">
                      {/* Overlay with info */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 z-10">
                        <p className="font-bold">{channel.name}</p>
                        <p className="text-xs text-white/80">Premium Channel</p>
                      </div>
                      
                      {/* Premium overlay glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                      
                      {/* Channel logo/image */}
                      <img 
                        src={channel.logo} 
                        alt={channel.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* Interactive Channel Guide Demo Section */}
        <ChannelGuideDemoSection />
        
        {/* Premium Stats Section */}
        <motion.section 
          className="py-16 relative overflow-hidden isolate"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/50 z-[-1]"></div>
          
          {/* Radial glow effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-40 bg-gradient-radial from-primary/10 to-transparent blur-3xl z-[-1]"></div>
          
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-secondary">LouFrank TV by the Numbers</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Our comprehensive entertainment solution continues to grow and expand</p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
              {/* Stat 1 */}
              <motion.div 
                className="bg-black/30 backdrop-blur-sm rounded-xl border border-primary/10 p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 blur-md rounded-full -z-10 animate-pulse-slow"></div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-1">16K<span className="text-primary">+</span></h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-primary/50 to-primary mx-auto mb-2"></div>
                  <p className="text-white/70 text-sm font-medium uppercase tracking-wide">HD Channels</p>
                </div>
              </motion.div>
              
              {/* Stat 2 */}
              <motion.div 
                className="bg-black/30 backdrop-blur-sm rounded-xl border border-secondary/10 p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-secondary/0 via-secondary/30 to-secondary/0 opacity-0 group-hover:opacity-100 blur-md rounded-full -z-10 animate-pulse-slow"></div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-1">50K<span className="text-secondary">+</span></h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-secondary/50 to-secondary mx-auto mb-2"></div>
                  <p className="text-white/70 text-sm font-medium uppercase tracking-wide">On-Demand Titles</p>
                </div>
              </motion.div>
              
              {/* Stat 3 */}
              <motion.div 
                className="bg-black/30 backdrop-blur-sm rounded-xl border border-purple-500/10 p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/0 via-purple-500/30 to-purple-500/0 opacity-0 group-hover:opacity-100 blur-md rounded-full -z-10 animate-pulse-slow"></div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-1">50<span className="text-purple-500">+</span></h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-purple-500/50 to-purple-500 mx-auto mb-2"></div>
                  <p className="text-white/70 text-sm font-medium uppercase tracking-wide">Countries</p>
                </div>
              </motion.div>
              
              {/* Stat 4 */}
              <motion.div 
                className="bg-black/30 backdrop-blur-sm rounded-xl border border-cyan-500/10 p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-cyan-500/0 opacity-0 group-hover:opacity-100 blur-md rounded-full -z-10 animate-pulse-slow"></div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-1">24/7</h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-cyan-500/50 to-cyan-500 mx-auto mb-2"></div>
                  <p className="text-white/70 text-sm font-medium uppercase tracking-wide">Support</p>
                </div>
              </motion.div>
            </div>
            
            {/* CTA Section */}
            <motion.div 
              className="mt-16 max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to experience the best in entertainment?</h3>
              <p className="text-white/70 mb-8">Start with our risk-free 36-hour trial for just $1. No long-term commitments, cancel anytime.</p>
              
              <div className="inline-block relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-secondary rounded-lg blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <TrialRequestButton
                  size="lg"
                  variant="default"
                  className="relative text-lg font-medium shadow-xl overflow-hidden group border-0 bg-gradient-to-r from-primary to-secondary hover:shadow-primary/20 transition-shadow duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start Your Trial Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </TrialRequestButton>
              </div>
              
              <p className="text-xs text-white/50 mt-4">Join thousands of satisfied customers worldwide</p>
            </motion.div>
          </div>
        </motion.section>
        
        {/* Premium Testimonials Section */}
        <motion.section 
          className="py-20 relative overflow-hidden isolate"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black to-gray-900/80 z-[-1]"></div>
          
          {/* Premium lighting effects */}
          <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-primary/5 to-transparent z-[-1]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-secondary/5 to-transparent z-[-1]"></div>
          
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block mb-3 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 backdrop-blur-sm px-6 py-2 rounded-full border border-primary/20">
                <span className="text-sm font-medium tracking-wide uppercase text-primary">Customer Experiences</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
              <p className="text-white/70 max-w-2xl mx-auto">Thousands of satisfied customers worldwide trust LouFrank TV for their premium entertainment needs</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <motion.div 
                className="bg-gradient-to-br from-black to-gray-900/80 rounded-xl border border-primary/10 p-6 hover:border-primary/30 transition-all duration-300 relative group overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 to-primary/0 opacity-0 group-hover:from-primary/10 group-hover:via-purple-500/10 group-hover:to-secondary/10 group-hover:opacity-100 rounded-xl blur transition duration-500"></div>
                
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3 text-lg font-bold text-primary">J</div>
                    <div>
                      <h4 className="font-medium">James W.</h4>
                      <p className="text-xs text-white/60">Premium Subscriber</p>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-500">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                </div>
                
                <p className="text-white/80 mb-4">"I've tried several IPTV services over the years, but LouFrank TV is simply in a different league. The channel variety is incredible, and I've never experienced a single buffer or freeze in over a year of use."</p>
                
                <div className="pt-3 border-t border-white/10 flex justify-between items-center">
                  <span className="text-xs text-white/60">Subscriber since: 2022</span>
                  <div className="flex items-center text-primary text-sm">
                    <span>16,000+ channels</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </motion.div>
              
              {/* Testimonial 2 */}
              <motion.div 
                className="bg-gradient-to-br from-black to-gray-900/80 rounded-xl border border-secondary/10 p-6 hover:border-secondary/30 transition-all duration-300 relative group overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary/0 to-secondary/0 opacity-0 group-hover:from-secondary/10 group-hover:via-purple-500/10 group-hover:to-primary/10 group-hover:opacity-100 rounded-xl blur transition duration-500"></div>
                
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center mr-3 text-lg font-bold text-secondary">M</div>
                    <div>
                      <h4 className="font-medium">Maria S.</h4>
                      <p className="text-xs text-white/60">Family Plan User</p>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-500">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                </div>
                
                <p className="text-white/80 mb-4">"The movie selection is outstanding! We cancelled all our streaming subscriptions after getting LouFrank TV. Our entire family can watch whatever they want simultaneously on different devices with no issues."</p>
                
                <div className="pt-3 border-t border-white/10 flex justify-between items-center">
                  <span className="text-xs text-white/60">Subscriber since: 2023</span>
                  <div className="flex items-center text-secondary text-sm">
                    <span>50,000+ titles</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </motion.div>
              
              {/* Testimonial 3 */}
              <motion.div 
                className="bg-gradient-to-br from-black to-gray-900/80 rounded-xl border border-purple-500/10 p-6 hover:border-purple-500/30 transition-all duration-300 relative group overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/0 to-purple-500/0 opacity-0 group-hover:from-purple-500/10 group-hover:via-purple-600/10 group-hover:to-purple-500/10 group-hover:opacity-100 rounded-xl blur transition duration-500"></div>
                
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 text-lg font-bold text-purple-400">D</div>
                    <div>
                      <h4 className="font-medium">David L.</h4>
                      <p className="text-xs text-white/60">Sports Package</p>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-500">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                </div>
                
                <p className="text-white/80 mb-4">"As a sports fan, I need reliable access to games from around the world. LouFrank TV has every sports channel I could want, including PPV events at no extra cost. The value is incredible."</p>
                
                <div className="pt-3 border-t border-white/10 flex justify-between items-center">
                  <span className="text-xs text-white/60">Subscriber since: 2021</span>
                  <div className="flex items-center text-purple-400 text-sm">
                    <span>All sports packages</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
        
        {/* Final CTA Section */}
        <div className="container mx-auto px-4 py-20 text-center">
          <motion.div
            className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-primary/20 p-12 max-w-5xl mx-auto shadow-2xl shadow-primary/5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Premium effect */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1564951434112-64d74cc2a2d7?q=80&w=3087&auto=format&fit=crop')] opacity-5 bg-cover bg-center bg-no-repeat mix-blend-overlay"></div>
            <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-64 h-64 bg-secondary/10 rounded-full blur-3xl opacity-70"></div>
            
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-6 relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >Ready for Limitless Entertainment?</motion.h2>
            
            <motion.p 
              className="text-xl text-white/80 mb-10 max-w-2xl mx-auto relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >Try LouFrank TV free for 36 hours with full access to our premium channels and on-demand library.</motion.p>
            
            <motion.div
              className="relative z-10 flex flex-col sm:flex-row gap-5 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <TrialRequestButton size="xl" className="shadow-xl shadow-primary/10 hover:shadow-2xl hover:shadow-primary/20">
                <span className="flex items-center">
                  FREE 36H TRIAL <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </TrialRequestButton>
            </motion.div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
