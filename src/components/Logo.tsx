import React from "react";
import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  variant?: "full" | "icon"; // Retaining variant for potential size differences
}

export function Logo({ className = "", variant = "full" }: LogoProps) {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="relative z-10 h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center h-full">
          <div className="relative h-full">
            <img 
              src="/images/logo-loufrank-crew.png" // Path from public directory
              alt="The LouFrank Crew Logo" 
              className="h-full w-auto object-contain"
            />
            {/* Add subtle glow effect */}
            <div className="absolute inset-0 bg-primary opacity-10 blur-xl rounded-full -z-10"></div>
          </div>

        </div>
      </motion.div>
      
      {/* Add subtle reflection */}
      <motion.div 
        className="absolute -bottom-2 left-0 right-0 h-4 opacity-30 blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{
          background: "linear-gradient(to bottom, rgba(23, 209, 224, 0.2) 0%, transparent 100%)"
        }}
      ></motion.div>
    </div>
  );
}
