import React from "react";
import { motion } from "framer-motion";

export function CountryFlags() {
  // Extended list of countries with more flags
  const countries = [
    { code: "us", name: "United States" },
    { code: "gb", name: "United Kingdom" },
    { code: "ca", name: "Canada" },
    { code: "fr", name: "France" },
    { code: "de", name: "Germany" },
    { code: "es", name: "Spain" },
    { code: "it", name: "Italy" },
    { code: "jp", name: "Japan" },
    { code: "in", name: "India" },
    { code: "br", name: "Brazil" },
    { code: "mx", name: "Mexico" },
    { code: "au", name: "Australia" },
    { code: "ae", name: "United Arab Emirates" },
    { code: "sa", name: "Saudi Arabia" },
    { code: "za", name: "South Africa" },
    { code: "nl", name: "Netherlands" },
    { code: "se", name: "Sweden" },
    { code: "ch", name: "Switzerland" },
    { code: "no", name: "Norway" },
    { code: "dk", name: "Denmark" },
    { code: "fi", name: "Finland" },
    { code: "pt", name: "Portugal" },
    { code: "gr", name: "Greece" },
    { code: "pl", name: "Poland" },
    { code: "tr", name: "Turkey" },
    { code: "ie", name: "Ireland" },
    { code: "be", name: "Belgium" },
    { code: "at", name: "Austria" },
    { code: "ru", name: "Russia" },
    { code: "cn", name: "China" },
  ];
  
  // Function to get flag image with multiple fallback mechanisms
  const getCountryFlagImage = (country: { code: string, name: string }) => {
    return (
      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30 shadow-lg hover:scale-110 transition-transform hover:border-primary bg-gradient-to-br from-gray-700 to-gray-900">
        <img 
          src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`}
          alt={`${country.name} flag`}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            // Try first alternative source
            target.onerror = (e2) => {
              const target2 = e2.target as HTMLImageElement;
              // Try second alternative source
              target2.onerror = (e3) => {
                const target3 = e3.target as HTMLImageElement;
                // Final fallback - create text-based flag
                target3.style.display = 'none';
                const container = target3.parentElement;
                if (container) {
                  // Create styled fallback
                  const fallback = document.createElement('div');
                  fallback.className = 'w-full h-full flex items-center justify-center';
                  fallback.innerHTML = `<span class="font-bold text-white text-xl">${country.name.substring(0, 2).toUpperCase()}</span>`;
                  container.appendChild(fallback);
                }
              };
              target2.src = `https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/${country.code.toLowerCase()}.svg`;
            };
            target.src = `https://purecatamphetamine.github.io/country-flag-icons/3x2/${country.code.toUpperCase()}.svg`;
          }}
        />
      </div>
    );
  };

  return (
    <div className="py-12 overflow-hidden bg-gradient-to-r from-background/0 via-background/30 to-background/0 border-y border-y-primary/10">
      <div className="mb-8 text-center">
        <motion.h3 
          className="text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-secondary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Access Content From 50+ Countries
        </motion.h3>
        <motion.p 
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Stream local and international channels from around the world
        </motion.p>
      </div>
      
      {/* First row - scrolling left to right */}
      <motion.div 
        className="flex space-x-6 mb-6"
        initial={{ x: "-100%" }}
        animate={{ x: "-50%" }}
        transition={{ 
          repeat: Infinity, 
          duration: 50, 
          ease: "linear",
          repeatType: "loop" 
        }}
      >
        {[...countries, ...countries].map((country, index) => (
          <div 
            key={`row1-${country.code}-${index}`} 
            className="flex-shrink-0 flex flex-col items-center gap-2 px-1"
            title={country.name}
          >
            {getCountryFlagImage(country)}
            <span className="text-xs text-white/70">{country.name}</span>
          </div>
        ))}
      </motion.div>
      
      {/* Second row - scrolling right to left (opposite direction) */}
      <motion.div 
        className="flex space-x-6"
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{ 
          repeat: Infinity, 
          duration: 60, 
          ease: "linear",
          repeatType: "loop" 
        }}
      >
        {[...countries.slice().reverse(), ...countries.slice().reverse()].map((country, index) => (
          <div 
            key={`row2-${country.code}-${index}`} 
            className="flex-shrink-0 flex flex-col items-center gap-2 px-1"
            title={country.name}
          >
            {getCountryFlagImage(country)}
            <span className="text-xs text-white/70">{country.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
