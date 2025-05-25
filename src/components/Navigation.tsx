import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Logo } from "./Logo";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  // Track scroll position for animation effects
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <motion.header 
      className={`sticky top-0 z-50 w-full border-b ${scrolled ? 'border-border/40 bg-background/95' : 'border-transparent bg-background/60'} backdrop-blur-md transition-all duration-300 ease-in-out`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-3">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo with hover effect */}
          <Link to="/" className="flex-shrink-0 flex items-center group relative">
            {/* Subtle glow effect on hover */}
            <motion.div 
              className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-md -z-10"
              style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)' }}
              layoutId="logoGlow"
            />
            <Logo variant="full" className="h-8 sm:h-10 md:h-12" />
          </Link>
          
          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-3 lg:space-x-6 relative z-10">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary relative group overflow-hidden ${isActive("/") ? "text-primary" : "text-foreground/80"}`}
            >
              <span className="relative z-10">Home</span>
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-[2px] bg-primary origin-left"
                initial={{ scaleX: isActive("/") ? 1 : 0 }}
                animate={{ scaleX: isActive("/") ? 1 : 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <Link 
              to="/features" 
              className={`text-sm font-medium transition-colors hover:text-primary relative group overflow-hidden ${isActive("/features") ? "text-primary" : "text-foreground/80"}`}
            >
              <span className="relative z-10">Features</span>
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-[2px] bg-primary origin-left"
                initial={{ scaleX: isActive("/features") ? 1 : 0 }}
                animate={{ scaleX: isActive("/features") ? 1 : 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <Link 
              to="/pricing" 
              className={`text-sm font-medium transition-colors hover:text-primary relative group overflow-hidden ${isActive("/pricing") ? "text-primary" : "text-foreground/80"}`}
            >
              <span className="relative z-10">Pricing</span>
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-[2px] bg-primary origin-left"
                initial={{ scaleX: isActive("/pricing") ? 1 : 0 }}
                animate={{ scaleX: isActive("/pricing") ? 1 : 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <Link 
              to="/setup-guides" 
              className={`text-sm font-medium transition-colors hover:text-primary relative group overflow-hidden ${isActive("/setup-guides") ? "text-primary" : "text-foreground/80"}`}
            >
              <span className="relative z-10">Setup Guides</span>
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-[2px] bg-primary origin-left"
                initial={{ scaleX: isActive("/setup-guides") ? 1 : 0 }}
                animate={{ scaleX: isActive("/setup-guides") ? 1 : 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <Link 
              to="/testimonials" 
              className={`text-sm font-medium transition-colors hover:text-primary relative group overflow-hidden ${isActive("/testimonials") ? "text-primary" : "text-foreground/80"}`}
            >
              <span className="relative z-10">Testimonials</span>
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-[2px] bg-primary origin-left"
                initial={{ scaleX: isActive("/testimonials") ? 1 : 0 }}
                animate={{ scaleX: isActive("/testimonials") ? 1 : 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <Link 
              to="/faq" 
              className={`text-sm font-medium transition-colors hover:text-primary relative group overflow-hidden ${isActive("/faq") ? "text-primary" : "text-foreground/80"}`}
            >
              <span className="relative z-10">FAQ</span>
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-[2px] bg-primary origin-left"
                initial={{ scaleX: isActive("/faq") ? 1 : 0 }}
                animate={{ scaleX: isActive("/faq") ? 1 : 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors hover:text-primary relative group overflow-hidden ${isActive("/contact") ? "text-primary" : "text-foreground/80"}`}
            >
              <span className="relative z-10">Contact</span>
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-[2px] bg-primary origin-left"
                initial={{ scaleX: isActive("/contact") ? 1 : 0 }}
                animate={{ scaleX: isActive("/contact") ? 1 : 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </nav>
          
          {/* Enhanced Mobile Menu Button */}
          <motion.button 
            className="md:hidden flex items-center p-1 rounded-md hover:bg-background/80 text-foreground/80 relative overflow-hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            {/* Ripple effect on tap */}
            <motion.span 
              className="absolute inset-0 bg-primary/10 rounded-md"
              initial={{ scale: 0, opacity: 0 }}
              whileTap={{ scale: 2, opacity: 0.3, transition: { duration: 0.5 } }}
            />
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </motion.button>
        </div>
      </div>
      
      {/* Enhanced Mobile Menu with better animations */}
      <AnimatePresence mode="wait">
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-background/90 backdrop-blur-md border-t border-border/40"
          >
            <motion.div 
              className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 space-y-2 sm:space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Link 
                  to="/" 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 text-sm font-medium transition-all ${isActive("/") ? "text-primary" : "text-foreground/80"} hover:pl-1 hover:text-primary`}
                >
                  Home
                </Link>
              </motion.div>
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15 }}
              >
                <Link 
                  to="/features" 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 text-sm font-medium transition-all ${isActive("/features") ? "text-primary" : "text-foreground/80"} hover:pl-1 hover:text-primary`}
                >
                  Features
                </Link>
              </motion.div>
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Link 
                  to="/pricing" 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 text-sm font-medium transition-all ${isActive("/pricing") ? "text-primary" : "text-foreground/80"} hover:pl-1 hover:text-primary`}
                >
                  Pricing
                </Link>
              </motion.div>
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.25 }}
              >
                <Link 
                  to="/setup-guides" 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 text-sm font-medium transition-all ${isActive("/setup-guides") ? "text-primary" : "text-foreground/80"} hover:pl-1 hover:text-primary`}
                >
                  Setup Guides
                </Link>
              </motion.div>
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Link 
                  to="/testimonials" 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 text-sm font-medium transition-all ${isActive("/testimonials") ? "text-primary" : "text-foreground/80"} hover:pl-1 hover:text-primary`}
                >
                  Testimonials
                </Link>
              </motion.div>
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35 }}
              >
                <Link 
                  to="/faq" 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 text-sm font-medium transition-all ${isActive("/faq") ? "text-primary" : "text-foreground/80"} hover:pl-1 hover:text-primary`}
                >
                  FAQ
                </Link>
              </motion.div>
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Link 
                  to="/contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 text-sm font-medium transition-all ${isActive("/contact") ? "text-primary" : "text-foreground/80"} hover:pl-1 hover:text-primary`}
                >
                  Contact
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}