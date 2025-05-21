import React from "react";
import { motion } from "framer-motion";

export function PremiumDeviceShowcase() {
  // Device data with images
  const devices = [
    {
      id: "smart-tv",
      name: "Smart TV",
      image: "/public/901661ac-f28e-4815-8069-61ae5363a100/device-screens/smart-tv.png",
      screenImage: "/public/901661ac-f28e-4815-8069-61ae5363a100/channel-logos/hbo.png"
    },
    {
      id: "tablet",
      name: "Tablet",
      image: "/public/901661ac-f28e-4815-8069-61ae5363a100/device-screens/tablet.png",
      screenImage: "/public/901661ac-f28e-4815-8069-61ae5363a100/channel-logos/espn.png"
    },
    {
      id: "phone",
      name: "Phone",
      image: "/public/901661ac-f28e-4815-8069-61ae5363a100/device-screens/phone.png",
      screenImage: "/public/901661ac-f28e-4815-8069-61ae5363a100/channel-logos/fox-sports.png"
    },
    {
      id: "laptop",
      name: "Laptop",
      image: "/public/901661ac-f28e-4815-8069-61ae5363a100/device-screens/laptop.png",
      screenImage: "/public/901661ac-f28e-4815-8069-61ae5363a100/channel-logos/netflix.png"
    }
  ];

  // Use fallback colors for device screens if images fail to load
  const fallbackColors = [
    "from-blue-800 to-indigo-900",
    "from-purple-800 to-indigo-900",
    "from-red-800 to-purple-900",
    "from-orange-800 to-red-900"
  ];

  return (
    <div className="w-full">
      <motion.div 
        className="relative z-10 flex justify-center items-end gap-2 sm:gap-4 md:gap-6 overflow-visible"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, staggerChildren: 0.1 }}
      >
        {devices.map((device, index) => (
          <motion.div
            key={device.id}
            className={`relative ${index === 0 ? 'w-28 sm:w-40 md:w-52 lg:w-64 z-30' : 
              index === 1 || index === 2 ? 'w-20 sm:w-28 md:w-36 lg:w-44 z-20' : 
              'w-24 sm:w-32 md:w-40 lg:w-52 z-10'}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
          >
            {/* Device Image */}
            <div className="relative">
              <img 
                src={device.image} 
                alt={device.name}
                className="w-full h-auto object-contain drop-shadow-2xl relative z-20"
                onError={(e) => {
                  // If device image fails to load, show placeholder
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              
              {/* Fallback device frame for image load failures */}
              <div className="absolute inset-0 z-10 rounded-lg bg-gradient-to-b from-black/50 to-black/80 backdrop-blur-sm hidden"></div>
              
              {/* Screen Content */}
              <div className="absolute inset-[12%] z-10 overflow-hidden rounded-lg bg-gradient-to-br ${fallbackColors[index]} flex items-center justify-center">
                <img 
                  src={device.screenImage}
                  alt="Screen content"
                  className="w-4/5 h-4/5 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            </div>
            
            {/* Device name */}
            <p className="text-center text-[10px] sm:text-xs mt-1 text-white/70">{device.name}</p>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Premium glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-20 bg-gradient-radial from-primary/20 to-transparent blur-2xl -z-10"></div>
      
      {/* Compatibility message */}
      <motion.p 
        className="text-center text-xs sm:text-sm text-white/50 mt-3 max-w-sm mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        Stream on all your favorite devices with one subscription
      </motion.p>
    </div>
  );
}
