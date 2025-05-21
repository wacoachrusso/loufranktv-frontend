import React from "react";
import { motion } from "framer-motion";

interface DeviceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export function DeviceCard({ icon, title, description, delay = 0 }: DeviceCardProps) {
  return (
    <motion.div 
      className="flex flex-col items-center bg-card p-6 rounded-xl border border-border hover:border-primary/30 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.5)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="w-16 h-16 mb-4 text-primary">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground text-center">{description}</p>
    </motion.div>
  );
}
