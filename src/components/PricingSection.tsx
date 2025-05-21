import React from "react";
import { motion } from "framer-motion";
import { PricingCard } from "./PricingCard";
import { TrialRequestButton } from "./TrialRequestButton";

export function PricingSection() {
  // Define common features for all plans based on the original website
  const commonFeatures = [
    { name: "Live TV Guide (EPG)", included: true },
    { name: "Video on Demand", included: true },
    { name: "Free Regular Updates", included: true },
    { name: "Multi-Device Support", included: true },
  ];

  // Define the subscription plans based on original website
  const subscriptionPlans = [
    {
      title: "1 Connection",
      price: "$15",
      period: "/month",
      description: "Perfect for individual viewers with a single device",
      connections: 1,
      channelCount: "16,000+",
      features: [
        ...commonFeatures,
        { name: `${16000}+ HD & FHD Channels`, included: true },
        { name: "Premium Movie Channels", included: true },
        { name: "24/7 Premium Support", included: true },
        { name: "Anti-Freeze Technology", included: true },
      ],
      isPopular: false,
      regularPrice: "$24",
      signupUrl: "https://loufrankhosting.online/cart.php?a=view"
    },
    {
      title: "2 Connections",
      price: "$22",
      period: "/month",
      description: "Ideal for couples or small households",
      connections: 2,
      channelCount: "16,000+",
      features: [
        ...commonFeatures,
        { name: `${16000}+ HD & FHD Channels`, included: true },
        { name: "Premium Movie Channels", included: true },
        { name: "24/7 Premium Support", included: true },
        { name: "Anti-Freeze Technology", included: true },
      ],
      isPopular: true,
      regularPrice: "$30",
      signupUrl: "https://loufrankhosting.online/cart.php?a=view"
    },
    {
      title: "3 Connections",
      price: "$37",
      period: "/month",
      description: "Great for families with multiple viewers",
      connections: 3,
      channelCount: "16,000+",
      features: [
        ...commonFeatures,
        { name: `${16000}+ HD & FHD Channels`, included: true },
        { name: "Premium Movie Channels", included: true },
        { name: "24/7 Premium Support", included: true },
        { name: "Anti-Freeze Technology", included: true },
      ],
      isPopular: false,
      regularPrice: "$45",
      signupUrl: "https://loufrankhosting.online/cart.php?a=view"
    },
    {
      title: "4 Connections",
      price: "$45",
      period: "/month",
      description: "Ultimate package for large households",
      connections: 4,
      channelCount: "16,000+",
      features: [
        ...commonFeatures,
        { name: `${16000}+ HD & FHD Channels`, included: true },
        { name: "Premium Movie Channels", included: true },
        { name: "24/7 Premium Support", included: true },
        { name: "Anti-Freeze Technology", included: true },
      ],
      isPopular: false,
      regularPrice: "$60",
      signupUrl: "https://loufrankhosting.online/cart.php?a=view"
    },
  ];

  return (
    <section id="pricing" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background/95 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596994836684-49671a04f506?q=80&w=2070&auto=format&fit=crop')] opacity-[0.02] bg-cover bg-center bg-no-repeat"></div>
      <div className="absolute -top-64 right-1/4 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 left-1/3 w-[30rem] h-[30rem] bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        {/* Section header */}
        <motion.div 
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary animate-gradient-flow">Subscription Plans</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Watch local and international channels on multiple devices. Choose the perfect plan for your entertainment needs with 16,000+ HD & FHD channels and thousands of movies and TV series on demand.
          </p>
        </motion.div>
        
        {/* Key features highlight */}
        <motion.div 
          className="flex flex-col items-center justify-center gap-5 mb-6 sm:mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* All plans include features */}
          <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-xl p-4 sm:p-5 w-full max-w-4xl">
            <h3 className="text-base sm:text-lg font-semibold mb-3 text-center">All plans include:</h3>
            
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary flex-shrink-0">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">16,000+ Channels</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary flex-shrink-0">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Movies & TV Shows</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary flex-shrink-0">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">No Contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary flex-shrink-0">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>
            
            <div className="flex justify-center mt-4">
              <a 
                href="/pricing" 
                className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors font-medium group"
              >
                View detailed pricing
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 group-hover:translate-x-0.5 transition-transform">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Free trial button */}
          <div className="flex items-center gap-2">
            <TrialRequestButton variant="link" size="sm" className="text-xs sm:text-sm p-0 h-auto m-0 hover:text-primary">
              FREE 36H TRIAL - SIGN UP NOW
            </TrialRequestButton>
          </div>
        </motion.div>
        
        {/* Pricing cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {subscriptionPlans.map((plan, index) => (
            <PricingCard 
              key={plan.title}
              title={plan.title}
              price={plan.price}
              period={plan.period}
              description={plan.description}
              features={plan.features}
              connections={plan.connections}
              isPopular={plan.isPopular}
              delay={index * 0.1}
              regularPrice={plan.regularPrice}
              signupUrl={plan.signupUrl}
            />
          ))}
        </div>
        
        {/* Payment Methods */}
        <motion.div 
          className="mt-10 sm:mt-12 md:mt-16 text-center bg-card/50 border border-border rounded-xl p-4 sm:p-6 max-w-2xl mx-auto mb-6 sm:mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Accepted Payment Methods</h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-2">
            {/* PayPal */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center mb-1 sm:mb-2">
                <div className="text-[#00457C] font-bold text-lg sm:text-xl flex items-center justify-center">
                  <span className="text-[#0079C1]">P</span>
                  <span className="text-[#00457C]">P</span>
                </div>
              </div>
              <span className="text-xs sm:text-sm font-medium">PayPal</span>
            </div>
            
            {/* Zelle */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center mb-1 sm:mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 text-[#6D1ED4]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-medium">Zelle</span>
            </div>
            
            {/* Cash App */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center mb-1 sm:mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 text-[#00D632]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-medium">Cash App</span>
            </div>
            
            {/* Venmo */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center mb-1 sm:mb-2">
                <div className="text-[#3D95CE] font-bold text-lg sm:text-xl">V</div>
              </div>
              <span className="text-xs sm:text-sm font-medium">Venmo</span>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">
            We accept these secure payment methods for your convenience and security.
          </p>
        </motion.div>
        
        {/* Money-back guarantee */}
        <motion.div 
          className="mt-8 sm:mt-12 md:mt-16 text-center bg-card/50 border border-border rounded-xl p-4 sm:p-6 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 text-primary">
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </div>
          <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Satisfaction Guaranteed</h3>
          <p className="text-xs sm:text-sm text-muted-foreground">
            If you're not completely satisfied with LouFrank TV, contact our support team within 7 days of purchase for a full refund. No questions asked.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
