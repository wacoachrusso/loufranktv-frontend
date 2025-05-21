import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, X, DollarSign, Clock, Tv } from "lucide-react";
import { TrialRequestButton } from "./TrialRequestButton";
import { useNavigate } from "react-router-dom";

export function VodBenefitSection() {
  const navigate = useNavigate();

  const streamingServices = [
    { name: "Netflix", price: "15.49" },
    { name: "Disney+", price: "13.99" },
    { name: "Hulu", price: "17.99" },
    { name: "HBO Max", price: "16.99" },
    { name: "Amazon Prime Video", price: "14.99" },
    { name: "Paramount+", price: "11.99" },
    { name: "Apple TV+", price: "9.99" },
    { name: "Peacock", price: "11.99" },
  ];

  const totalPerMonth = streamingServices.reduce(
    (sum, service) => sum + parseFloat(service.price),
    0
  ).toFixed(2);

  const moviePerks = [
    "Latest Theatrical Releases",
    "Pre-Streaming Content",
    "Request Any Movie",
    "Premium Video Quality",
    "Exclusive Director's Cuts",
    "Worldwide Film Selection",
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-black to-gray-950 isolate">
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent"></div>
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/15 rounded-full filter blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-1/4 w-[30rem] h-[30rem] bg-secondary/15 rounded-full filter blur-[120px] animate-pulse-slower"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-purple-600/10 rounded-full filter blur-[80px] opacity-60"></div>
      </div>
      
      {/* Premium accent lines */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-20">
        <div className="absolute top-[10%] left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="absolute top-[90%] left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
        <div className="absolute top-0 left-[10%] w-px h-full bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"></div>
        <div className="absolute top-0 right-[10%] w-px h-full bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-3 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 backdrop-blur-sm px-6 py-2 rounded-full border border-primary/20">
            <span className="text-sm font-medium tracking-wide uppercase text-primary">Premium Entertainment, One Subscription</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary drop-shadow-sm">
            Replace All Your Streaming Services
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            LouFrank TV gives you access to all the content from major streaming platforms, including the latest theatrical releases, for a fraction of the cost.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left side - Replace subscriptions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative group bg-gradient-to-br from-gray-900 via-black/95 to-black/90 rounded-2xl border border-white/10 p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {/* Subtle animated glow effect on hover */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-red-500/0 to-red-500/0 opacity-0 group-hover:opacity-20 group-hover:from-red-500/10 group-hover:via-red-600/10 group-hover:to-red-500/10 rounded-2xl blur-lg transition duration-700 group-hover:duration-500"></div>
            <div className="flex items-center mb-8">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 mr-4">
                <X className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <div className="text-xs font-medium text-red-400/80 uppercase tracking-wide mb-1">The Problem</div>
                <h3 className="text-2xl font-bold">What You're Paying Now</h3>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {streamingServices.map((service) => (
                <div key={service.name} className="flex justify-between items-center border-b border-white/10 pb-3 px-1">
                  <span className="text-white/80 flex items-center">
                    <span className="w-2 h-2 bg-red-400/60 rounded-full mr-2"></span>
                    {service.name}
                  </span>
                  <span className="text-white font-medium tracking-wide">${service.price}/mo</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-3 font-bold px-1">
                <span className="text-lg">Total Monthly Cost:</span>
                <div className="flex flex-col items-end">
                  <span className="text-red-400 text-2xl">${totalPerMonth}<span className="text-base">/mo</span></span>
                  <span className="text-red-400/70 text-xs mt-1">${(parseFloat(totalPerMonth) * 12).toFixed(2)}/year</span>
                </div>
              </div>
            </div>

            <div className="mt-8 p-5 bg-black/50 backdrop-blur-sm rounded-xl border border-red-500/5">
              <div className="flex items-start mb-3">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 border border-red-500/20">
                  <DollarSign className="w-4 h-4 text-red-400" />
                </div>
                <p className="text-white/80 text-sm leading-relaxed">Multiple subscriptions add up quickly, costing well over <span className="text-white font-medium">$1,300 every year</span> for limited content libraries.</p>
              </div>
              <div className="flex items-start mb-3">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 border border-red-500/20">
                  <Clock className="w-4 h-4 text-red-400" />
                </div>
                <p className="text-white/80 text-sm leading-relaxed">Content constantly removed as licensing deals change, forcing you to subscribe to yet another service.</p>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 border border-red-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-red-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                  </svg>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">Constantly switching between multiple apps and interfaces with different user experiences.</p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Our solution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative group bg-gradient-to-br from-black/90 via-black/95 to-gray-900 rounded-2xl border border-primary/20 p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {/* Subtle animated glow effect on hover */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/0 to-primary/0 opacity-0 group-hover:opacity-20 group-hover:from-primary/10 group-hover:via-purple-600/10 group-hover:to-secondary/10 rounded-2xl blur-lg transition duration-700 group-hover:duration-500"></div>
            
            {/* Premium particle effects */}
            <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
              {Array.from({ length: 5 }).map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-primary"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animation: `float-${Math.floor(Math.random() * 3) + 1}s ${Math.random() * 10}s infinite alternate`
                  }}
                ></div>
              ))}
            </div>
            <div className="flex items-center mb-8">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 mr-4">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-xs font-medium text-primary/80 uppercase tracking-wide mb-1">The Solution</div>
                <h3 className="text-2xl font-bold">Replace Them All With LouFrank TV</h3>
              </div>
            </div>

            <ul className="space-y-5 mb-8">
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0 border border-primary/20">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <span className="text-white/90 mt-1">Access to <span className="font-bold text-white">50,000+ movies and TV episodes</span> that would require multiple streaming subscriptions</span>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0 border border-primary/20">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <span className="text-white/90 mt-1"><span className="font-bold text-white">Latest theatrical releases</span> available before they hit streaming platforms</span>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0 border border-primary/20">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <span className="text-white/90 mt-1">Entire series collections from premium networks without seasonal gaps</span>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0 border border-primary/20">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <span className="text-white/90 mt-1">No more switching between apps - everything in <span className="font-bold text-white">one unified interface</span></span>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0 border border-primary/20">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <span className="text-white/90 mt-1">Save <span className="font-bold text-primary">$1,000+ per year</span> compared to multiple streaming services</span>
              </li>
            </ul>

            <div className="mt-10">
              <div className="p-5 bg-primary/5 backdrop-blur-sm rounded-xl border border-primary/10 mb-6 flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold mb-1">Premium Plan</h4>
                  <p className="text-white/70 text-sm">Access everything for one low price</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">$15<span className="text-sm font-normal text-white/70">/mo</span></div>
                  <div className="text-xs text-primary/80 mt-1">For one connection - no contracts</div>
                </div>
              </div>
              
              <Button 
                className="w-full py-6 text-lg relative overflow-hidden group" 
                onClick={() => navigate('/Pricing')}
              >
                <span className="relative z-10 flex items-center justify-center">
                  View All Plans <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary via-purple-600 to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Early access theatrical releases section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <div className="inline-block mb-3 bg-gradient-to-r from-secondary/20 via-secondary/10 to-secondary/20 backdrop-blur-sm px-6 py-2 rounded-full border border-secondary/20">
              <span className="text-sm font-medium tracking-wide uppercase text-secondary">Premium Theater Experience</span>
            </div>
            <h3 className="text-3xl font-bold mb-3">Early Access to Latest Movies</h3>
            <p className="text-white/70 max-w-2xl mx-auto">Get movies before they hit mainstream streaming services. Can't find what you're looking for? Just request it and we'll add it to our library!</p>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black/60 border border-white/10 p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
            {/* Background film strip effect */}
            <div className="absolute inset-0 opacity-10 backdrop-blur-sm">
              {/* Film strip effect */}
              {Array.from({ length: 12 }).map((_, i) => (
                <div 
                  key={i} 
                  className="absolute h-32 w-full border-t border-b border-white/30 transform -rotate-12"
                  style={{ top: `${i * 60}px`, left: `-${i * 10}px` }}
                ></div>
              ))}
              
              {/* Theater screen lighting effect */}
              <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-secondary/10 to-transparent"></div>
              
              {/* Film projector light beam */}
              <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[400px] bg-gradient-to-b from-white/5 to-transparent skew-x-[-45deg] transform rotate-45"></div>
            </div>
            
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-6">
              {moviePerks.map((perk, idx) => (
                <motion.div
                  key={perk}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-center p-4 bg-black/40 rounded-xl border border-white/10 hover:border-primary/30 hover:bg-black/60 transition-all duration-300 group shadow-md"
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <Tv className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm md:text-base font-medium group-hover:text-white transition-colors duration-300">{perk}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="text-center">
          <div className="max-w-2xl mx-auto bg-black/30 backdrop-blur-sm border border-white/5 rounded-2xl p-6 mb-8">
            <p className="text-white/80 mb-2">Our video-on-demand library is constantly updated with new releases</p>
            <p className="text-primary/90 font-medium">50+ new titles added weekly</p>
          </div>
          
          <TrialRequestButton
            variant="gradient"
            size="xl"
            className="px-8 py-6 text-lg shadow-lg hover:shadow-primary/10 transition-all duration-300"
          >
            <span className="flex items-center">
              FREE 36H TRIAL - SIGN UP NOW <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </TrialRequestButton>
        </div>
      </div>
    </section>
  );
}
