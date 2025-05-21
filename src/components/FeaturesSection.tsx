import React from "react";
import { motion } from "framer-motion";
import { FeatureCard } from "./FeatureCard";
import { TrialRequestButton } from "./TrialRequestButton";

export function FeaturesSection() {
  // Custom animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const features = [
    {
      title: "Premium Live Channels",
      description: "Experience over 16,000 crystal-clear HD and FHD channels from 50+ countries with studio-quality streaming and unmatched reliability.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
        </svg>
      ),
      accentColor: "bg-red-500"
    },
    {
      title: "Instant On-Demand",
      description: "Zero waiting time with our proprietary streaming technology. Catch up on your favorite programs instantly with real-time access to new episodes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z" clipRule="evenodd" />
        </svg>
      ),
      accentColor: "bg-green-500"
    },
    {
      title: "Expansive Entertainment Library",
      description: "Unlock our vast collection of over 50,000 on-demand TV shows, TV series, and movies spanning every genre imaginable. Fresh content added daily with exclusive pre-releases.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zm1.5 0v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5A.375.375 0 003 5.625zm16.125-.375a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5A.375.375 0 0021 7.125v-1.5a.375.375 0 00-.375-.375h-1.5zM21 9.375A.375.375 0 0020.625 9h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zM4.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5zM3.375 15h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h1.5a.375.375 0 00.375-.375v-1.5A.375.375 0 004.875 9h-1.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375zm4.125 0a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9z" clipRule="evenodd" />
        </svg>
      ),
      accentColor: "bg-blue-500"
    },
    {
      title: "Universal Device Compatibility",
      description: "Seamlessly stream on any device - Smart TVs, Firestick, Android, iOS, tablets, MAG boxes, and more with our adaptive streaming technology.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
          <path fillRule="evenodd" d="M8.625 3.75A2.625 2.625 0 006 6.375v11.25A2.625 2.625 0 008.625 20.25h6.75A2.625 2.625 0 0018 17.625V6.375A2.625 2.625 0 0015.375 3.75h-6.75zM7.5 6.375A1.125 1.125 0 018.625 5.25h6.75A1.125 1.125 0 0116.5 6.375v11.25a1.125 1.125 0 01-1.125 1.125h-6.75A1.125 1.125 0 017.5 17.625V6.375z" clipRule="evenodd" />
        </svg>
      ),
      accentColor: "bg-purple-500"
    }
  ];

  return (
    <motion.section 
      id="features" 
      className="py-20 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Enhanced premium background effect with parallax */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-[#050118]/90 to-black/90 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      ></motion.div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=2187&auto=format&fit=crop')] opacity-0 bg-cover bg-center bg-no-repeat"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.02 }}
        transition={{ duration: 2, delay: 0.5 }}
        style={{
          backgroundAttachment: "fixed" // Parallax effect
        }}
      ></motion.div>
      
      {/* Enhanced premium lighting effects with movement */}
      <motion.div 
        className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-radial from-primary/10 to-transparent blur-3xl z-0"
        animate={{
          x: [0, 10, -10, 0],
          y: [0, -10, 10, 0],
          scale: [1, 1.05, 0.95, 1]
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "easeInOut"
        }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-gradient-radial from-secondary/10 to-transparent blur-3xl z-0"
        animate={{
          x: [0, -15, 15, 0],
          y: [0, 15, -15, 0],
          scale: [1, 1.08, 0.92, 1]
        }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "easeInOut"
        }}
      ></motion.div>
      
      {/* Enhanced animated particles with more elements */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <motion.div 
          className="absolute top-1/3 left-1/5 w-1 h-1 rounded-full bg-primary/30"
          animate={{
            y: ["-10px", "10px", "-10px"],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1/4 right-1/3 w-1 h-1 rounded-full bg-secondary/30"
          animate={{
            y: ["-15px", "15px", "-15px"],
            x: ["5px", "-5px", "5px"],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-2/3 right-1/4 w-2 h-2 rounded-full bg-purple-500/20"
          animate={{
            y: ["-5px", "5px", "-5px"],
            x: ["-8px", "8px", "-8px"],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            repeat: Infinity,
            duration: 3.5,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/4 right-1/5 w-1.5 h-1.5 rounded-full bg-blue-400/20"
          animate={{
            y: ["8px", "-8px", "8px"],
            opacity: [0.15, 0.35, 0.15]
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1/3 left-1/4 w-1 h-1 rounded-full bg-green-400/20"
          animate={{
            y: ["-12px", "12px", "-12px"],
            x: ["7px", "-7px", "7px"],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            repeat: Infinity,
            duration: 7,
            ease: "easeInOut"
          }}
        ></motion.div>
      </div>
      
      {/* Enhanced decorative glows with subtle movement */}
      <motion.div 
        className="absolute -top-64 -left-64 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.05, 0.98, 1],
          opacity: [0.5, 0.6, 0.45, 0.5]
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "easeInOut"
        }}
      ></motion.div>
      <motion.div 
        className="absolute -bottom-32 -right-32 w-[30rem] h-[30rem] bg-purple-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 0.96, 1.04, 1],
          opacity: [0.5, 0.4, 0.55, 0.5]
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut"
        }}
      ></motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary animate-gradient-flow">Premium Features</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Elevate your entertainment experience with our industry-leading technology. LouFrank TV delivers unparalleled quality across multiple devices simultaneously with zero buffering and lightning-fast channel switching.
          </p>
        </motion.div>
        
        {/* Highlight Feature with enhanced animations */}
        <motion.div 
          className="mb-16 max-w-4xl mx-auto bg-gradient-to-r from-black/80 to-gray-900/80 rounded-xl overflow-hidden border border-primary/20 shadow-xl shadow-primary/5 p-1"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.7,
            type: "spring",
            stiffness: 50,
            damping: 15
          }}
        >
          <div className="bg-black/90 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <motion.div 
                className="relative w-48 h-48 flex items-center justify-center"
                animate={{ 
                  rotateZ: [0, 2, -2, 0] 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 6,
                  ease: "easeInOut" 
                }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 0.9, 0.7]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 3,
                    ease: "easeInOut" 
                  }}
                ></motion.div>
                <motion.div 
                  className="absolute w-36 h-36 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-xl"
                  animate={{ 
                    scale: [1, 0.95, 1.05, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 8,
                    ease: "easeInOut" 
                  }}
                ></motion.div>
                <motion.div 
                  className="relative z-10 text-white"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20">
                    <path fillRule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zm1.5 0v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5A.375.375 0 003 5.625zm16.125-.375a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5A.375.375 0 0021 7.125v-1.5a.375.375 0 00-.375-.375h-1.5zM21 9.375A.375.375 0 0020.625 9h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zM4.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5zM3.375 15h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h1.5a.375.375 0 00.375-.375v-1.5A.375.375 0 004.875 9h-1.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375zm4.125 0a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9z" clipRule="evenodd" />
                  </svg>
                </motion.div>
              </motion.div>
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-primary">Anti-Buffer Technology</h3>
              <p className="text-muted-foreground mb-4">Our groundbreaking <span className="text-primary font-semibold">proprietary technology</span> eliminates buffering and freezing, delivering what other services can't: truly uninterrupted streaming even on standard connections.</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <motion.div 
                  className="flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 text-sm"
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "rgba(59, 130, 246, 0.2)",
                    transition: { duration: 0.2 }
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-primary">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                  </svg>
                  <span>Zero Buffering</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2 bg-secondary/10 rounded-full px-4 py-1.5 text-sm"
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "rgba(136, 58, 234, 0.2)",
                    transition: { duration: 0.2 }
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-secondary">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                  </svg>
                  <span>Ultra-Fast Switching</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2 bg-purple-500/10 rounded-full px-4 py-1.5 text-sm"
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "rgba(168, 85, 247, 0.2)",
                    transition: { duration: 0.2 }
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-purple-500">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                  </svg>
                  <span>Adaptive Streaming</span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Features grid with staggered animations */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
              accentColor={feature.accentColor}
            />
          ))}
        </motion.div>
        

        
        {/* Call to action */}
        <motion.div 
          className="mt-16 text-center flex flex-col sm:flex-row gap-3 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <TrialRequestButton 
            variant="gradient"
            size="xl"
            className="relative group overflow-hidden shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
          />
          <a 
            href="https://loufrankhosting.online/index.php/store/trial-products"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group overflow-hidden inline-flex items-center justify-center rounded-md px-8 py-4 text-sm font-medium h-12 border border-primary text-primary hover:bg-primary/10 bg-transparent"
          >
            <span className="relative z-10 flex items-center font-semibold">
              SUBSCRIBE NOW
            </span>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}