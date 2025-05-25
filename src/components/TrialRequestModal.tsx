import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import brain from "brain";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function TrialRequestModal({ isOpen, setIsOpen }: Props) {
  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Clear form when modal is closed
  const handleClose = () => {
    setIsOpen(false);
    // Reset form after animation completes
    setTimeout(() => {
      setName("");
      setEmail("");
      setPhone("");
    }, 300);
  };
  
  // Submit form to backend
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email) {
      toast.error("Please provide your name and email");
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      const response = await brain.send_trial_request({
        name,
        email,
        phone: phone || undefined,
      });
      
      const data = await response.json();
      
      if (data.success) {
        toast.success("Trial request submitted successfully!");
        handleClose();
      } else {
        toast.error(data.message || "Failed to submit trial request");
      }
    } catch (error) {
      console.error("Error submitting trial request:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleClose}
        >
          <motion.div 
            className="relative bg-card border border-primary/20 rounded-xl shadow-xl max-w-md w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: [0.19, 1.0, 0.22, 1.0] }}
          >
            {/* Premium animated border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/5 via-primary/30 to-primary/5 rounded-xl blur-sm opacity-30 animate-border-flow"></div>
            
            {/* Enhanced premium header */}
            <div className="bg-gradient-to-r from-primary to-secondary p-0.5 rounded-t-xl">
              <div className="bg-gradient-to-b from-card to-card/80 p-5 rounded-t-[calc(0.75rem-1px)] relative overflow-hidden">
                {/* Subtle animated glow */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 -z-10" 
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "loop", ease: "linear", repeatDelay: 2 }}
                />
                <h3 className="text-xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary animate-gradient-flow flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                  </svg>
                  FREE 36H TRIAL
                </h3>
              </div>
            </div>
            
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="p-6">
              <p className="text-muted-foreground mb-4 text-center">
                Complete the form below to request our free 36-hour trial. We'll contact you shortly with access details.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1 flex items-center">
                    Name <span className="text-primary ml-1">*</span>
                    <motion.span 
                      className="ml-1 opacity-0 text-primary text-xs"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}>
                      (required)
                    </motion.span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="relative z-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 flex items-center">
                    Email <span className="text-primary ml-1">*</span>
                    <motion.span 
                      className="ml-1 opacity-0 text-primary text-xs"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, delay: 0.5 }}>
                      (required)
                    </motion.span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="relative z-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Phone Number <span className="text-muted-foreground">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="relative z-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 px-4 rounded-md bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium flex items-center justify-center transition-all hover:shadow-lg hover:shadow-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden group"
                  >
                    <div className="relative z-10">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        <span className="flex items-center justify-center gap-1.5">
                          Request Trial
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                          </svg>
                        </span>
                      )}
                    </div>
                    {/* Animated button background effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                  </button>
                </div>
              </form>
              
              <p className="mt-4 text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our <a href="#" className="text-primary hover:underline hover:text-primary/80 transition-colors">Terms of Service</a> and <a href="#" className="text-primary hover:underline hover:text-primary/80 transition-colors">Privacy Policy</a>.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
