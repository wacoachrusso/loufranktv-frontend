import React, { useState } from "react";
import { TrialRequestModal } from "./TrialRequestModal";
import { Button } from "./Button";

interface Props {
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "gradient";
  size?: "default" | "sm" | "lg" | "xl" | "xxl";
  children?: React.ReactNode;
  asLink?: boolean;
}

export function TrialRequestButton({ className, variant = "gradient", size = "default", children, asLink = false }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  
  const buttonText = children || (
    <span className="flex items-center">
      <span className="mr-2">FREE 36H TRIAL - SIGN UP NOW</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 animate-pulse-slow">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
      </svg>
    </span>
  );
  
  if (asLink) {
    return (
      <>
        <a 
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleOpenModal();
          }}
          className={className || "relative group inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-md text-sm font-medium text-primary-foreground overflow-hidden shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"}
        >
          <span className="relative z-10 flex items-center font-semibold">
            {buttonText}
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </a>
        <TrialRequestModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      </>
    );
  }
  
  return (
    <>
      <Button 
        variant={variant} 
        size={size} 
        className={className}
        onClick={handleOpenModal}
        data-trial-button="true"
      >
        {buttonText}
      </Button>
      <TrialRequestModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  );
}
