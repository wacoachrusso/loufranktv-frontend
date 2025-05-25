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
    const flagUrl = `https://flagcdn.com/w80/${country.code.toLowerCase()}.png`;

    return (
      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30 shadow-lg hover:scale-110 transition-transform hover:border-primary bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center relative"> {/* Added relative for potential absolute positioning of fallback */}
        <img
          key={country.code} // Add a key for React reconciliation
          src={flagUrl}
          alt={`${country.name} flag`}
          className="w-full h-full object-cover"
          loading="lazy"
          onLoad={(e) => {
            console.log(`Flag loaded (onLoad) for ${country.name}:`, (e.target as HTMLImageElement).src);
            const container = (e.target as HTMLImageElement).parentElement;
            const fallback = container?.querySelector('.flag-fallback-text');
            if (fallback) (fallback as HTMLElement).style.display = 'none'; // Hide fallback if image loads
          }}
          onError={(e) => {
            const imgElement = e.target as HTMLImageElement;
            console.error(`Flag failed (onError) for ${country.name}: ${imgElement.src}`);
            imgElement.style.display = 'none'; // Hide broken image

            const container = imgElement.parentElement;
            if (container) {
              let fallback = container.querySelector('.flag-fallback-text') as HTMLElement;
              if (!fallback) {
                fallback = document.createElement('div');
                fallback.className = 'flag-fallback-text font-bold text-red-500 text-xl';
                container.appendChild(fallback);
              }
              fallback.textContent = country.code.substring(0, 2).toUpperCase();
              fallback.style.display = 'block'; // Ensure fallback is visible
            }
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
