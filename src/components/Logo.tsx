import React from "react";
import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  variant?: "full" | "icon";
  withText?: boolean;
}

export function Logo({ className = "", variant = "full", withText = true }: LogoProps) {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center">
          <div className="relative">
            <img 
              src="/public/901661ac-f28e-4815-8069-61ae5363a100/logo-color.png" 
              alt="LouFrank TV Logo" 
              className={`${variant === "full" ? "h-10" : "h-8"} object-contain`}
            />
            {/* Add subtle glow effect */}
            <div className="absolute inset-0 bg-primary opacity-10 blur-xl rounded-full -z-10"></div>
          </div>
          
          {withText && variant === "full" && (
            <motion.div 
              className="ml-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-xl font-bold tracking-wider text-foreground">LOUFRANK <span className="text-primary">TV</span></h2>
            </motion.div>
          )}
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
