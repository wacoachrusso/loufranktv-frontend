import React from "react";
import { motion } from "framer-motion";
import { TrialRequestButton } from "./TrialRequestButton";

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  connections: number;
  isPopular?: boolean;
  delay?: number;
  regularPrice?: string;
  signupUrl?: string;
}

export function PricingCard({ 
  title, 
  price, 
  period, 
  description, 
  features, 
  connections,
  isPopular = false,
  delay = 0,
  regularPrice,
  signupUrl = "https://loufrankhosting.online/cart.php?a=view"
}: PricingCardProps) {
  return (
    <motion.div 
      className={`relative flex flex-col h-full rounded-xl sm:rounded-2xl ${isPopular ? 'border-primary border-2' : 'border-border border'} bg-card/50 overflow-hidden`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Popular badge */}
      {isPopular && (
        <div className="absolute top-0 right-0 z-10">
          <div className="bg-primary text-primary-foreground text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-bl-lg">
            Most Popular
          </div>
        </div>
      )}
      
      {/* Card header */}
      <div className="p-4 sm:p-5 md:p-6 pb-3 sm:pb-4">
        <h3 className="text-lg sm:text-xl font-bold mb-0.5 sm:mb-1">{title}</h3>
        <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{description}</p>
        
        {/* Connections */}
        <div className="mb-3 sm:mb-4 bg-background/50 rounded-lg p-2 sm:p-3 inline-block">
          <span className="text-xs sm:text-sm font-medium">{connections} {connections === 1 ? 'Connection' : 'Connections'}</span>
        </div>
        
        {/* Price */}
        <div className="mb-4 sm:mb-6">
          {regularPrice ? (
            <div className="flex flex-col">
              <div className="flex items-center mb-1">
                <span className="text-lg text-muted-foreground line-through mr-2">{regularPrice}</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">SALE</span>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-bold">{price}</span>
                <span className="text-muted-foreground ml-1">{period}</span>
              </div>
            </div>
          ) : (
            <div>
              <span className="text-3xl sm:text-4xl font-bold">{price}</span>
              <span className="text-muted-foreground ml-1">{period}</span>
            </div>
          )}
        </div>
        
        {/* CTA Button */}
        <div className="mb-4 sm:mb-6">
          <a 
            href="https://loufrankhosting.online/index.php/store/trial-products"
            target="_blank"
            rel="noopener noreferrer"
            className={`block w-full py-3 px-4 rounded-lg font-medium text-center transition-colors duration-200 ${isPopular ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-card hover:bg-card/80 border border-border'}`}
          >
            Subscribe Now
          </a>
        </div>
      </div>
      
      {/* Feature list */}
      <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 mt-auto">
        <p className="text-xs sm:text-sm font-semibold mb-2 sm:mb-3">Includes:</p>
        <ul className="space-y-2 sm:space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className={`mr-2 mt-0.5 ${feature.included ? 'text-green-500' : 'text-muted-foreground'}`}>
                {feature.included ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                  </svg>
                )}
              </span>
              <span className={`text-xs sm:text-sm ${feature.included ? 'text-foreground' : 'text-muted-foreground'}`}>{feature.name}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Bottom accent for popular card */}
      {isPopular && (
        <div className="h-1 w-full bg-primary absolute bottom-0 left-0 right-0"></div>
      )}
    </motion.div>
  );
}
