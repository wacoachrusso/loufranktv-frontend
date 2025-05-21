import React from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
  accentColor?: string;
}

export function FeatureCard({ 
  icon, 
  title, 
  description, 
  delay = 0,
  accentColor = "bg-primary" 
}: FeatureCardProps) {
  return (
    <motion.div 
      className="relative flex flex-col items-center p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/40 overflow-hidden group transition-all duration-500 hover:border-primary/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.7)",
        y: -5,
        scale: 1.02
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Background glow effect */}
      <div className={`absolute -right-12 -top-12 w-24 h-24 rounded-full ${accentColor} opacity-10 blur-2xl group-hover:opacity-30 group-hover:scale-150 transition-all duration-700`}></div>
      
      {/* Subtle animated glow */}
      <div className={`absolute -bottom-16 -left-16 w-32 h-32 rounded-full ${accentColor} opacity-5 blur-3xl group-hover:opacity-15 animate-pulse-slow`}></div>
      
      {/* Icon with highlight */}
      <div className="relative z-10 mb-6">
        <div className={`w-16 h-16 flex items-center justify-center rounded-xl ${accentColor} bg-opacity-10 text-primary mb-2 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          {icon}
        </div>
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-bold mb-3 text-center group-hover:text-primary transition-all duration-300 group-hover:scale-105">{title}</h3>
      
      {/* Description */}
      <p className="text-muted-foreground text-center group-hover:text-foreground/80 transition-colors duration-500">{description}</p>
      
      {/* Bottom accent line */}
      <motion.div 
        className={`absolute bottom-0 left-0 right-0 h-1 ${accentColor}`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
      />
    </motion.div>
  );
}
