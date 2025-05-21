import React from "react";
import { motion } from "framer-motion";
import { DeviceCompatibility } from "./DeviceCompatibility";

export function DeviceCompatibilitySection() {
  return (
    <section id="compatibility" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-0"></div>
      <div className="absolute -top-48 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary animate-gradient-flow">
            Watch on Any Device
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl sm:max-w-2xl mx-auto px-2">
            LouFrank TV works on virtually any device with an internet connection. Watch your favorite channels on Smart TVs, smartphones, tablets, computers, and streaming devices.
          </p>
        </motion.div>
        
        <DeviceCompatibility />
      </div>
    </section>
  );
}