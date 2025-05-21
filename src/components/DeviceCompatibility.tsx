import React, { useState } from "react";
import { motion } from "framer-motion";

interface DeviceType {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  popular?: boolean;
}

export function DeviceCompatibility() {
  const [activeDevice, setActiveDevice] = useState<string | null>(null);
  
  // Device categories with descriptions
  const deviceTypes: DeviceType[] = [
    {
      id: "smart-tv",
      name: "Smart TVs",
      popular: true,
      description: "Samsung, LG, Sony, TCL, Hisense, and all other Smart TVs running Android TV or webOS",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
          <path d="M19.5 6h-15v9h15V6z" />
          <path fillRule="evenodd" d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 006 21h12a.75.75 0 000-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375zm0 13.5h17.25a.375.375 0 00.375-.375V4.875a.375.375 0 00-.375-.375H3.375A.375.375 0 003 4.875v11.25c0 .207.168.375.375.375z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      id: "firestick",
      name: "Fire TV & Stick",
      popular: true,
      description: "All Amazon Fire TV devices including Fire TV Stick 4K, Fire TV Cube, and Fire TV Edition",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
          <path d="M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z" />
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      id: "apple-tv",
      name: "Apple TV",
      description: "Apple TV HD, Apple TV 4K, and any generation of Apple TV devices",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
          <path fillRule="evenodd" d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v9.75c0 .83.67 1.5 1.5 1.5h13.5c.83 0 1.5-.67 1.5-1.5V5.25c0-.83-.67-1.5-1.5-1.5H5.25c-.83 0-1.5.67-1.5 1.5z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      id: "android-tv",
      name: "Android TV/Box",
      popular: true,
      description: "All Android TV devices, TV boxes, NVIDIA Shield, Chromecast with Google TV",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
          <path fillRule="evenodd" d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v9.75c0 .83.67 1.5 1.5 1.5h13.5c.83 0 1.5-.67 1.5-1.5V5.25c0-.83-.67-1.5-1.5-1.5H5.25c-.83 0-1.5.67-1.5 1.5z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      id: "pc-mac",
      name: "PC & Mac",
      description: "Windows PCs, Mac computers, laptops, and desktops via web browser or app",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
          <path fillRule="evenodd" d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v9.75c0 .83.67 1.5 1.5 1.5h13.5c.83 0 1.5-.67 1.5-1.5V5.25c0-.83-.67-1.5-1.5-1.5H5.25c-.83 0-1.5.67-1.5 1.5z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      id: "mobile",
      name: "Smartphones",
      description: "iOS & Android phones via dedicated apps with full functionality",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
          <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
          <path fillRule="evenodd" d="M8.625 3.75A2.625 2.625 0 006 6.375v11.25A2.625 2.625 0 008.625 20.25h6.75A2.625 2.625 0 0018 17.625V6.375A2.625 2.625 0 0015.375 3.75h-6.75zM7.5 6.375A1.125 1.125 0 018.625 5.25h6.75A1.125 1.125 0 0116.5 6.375v11.25a1.125 1.125 0 01-1.125 1.125h-6.75A1.125 1.125 0 017.5 17.625V6.375z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      id: "tablet",
      name: "Tablets",
      description: "iPad, Android tablets, and other tablet devices with touchscreen optimization",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
          <path fillRule="evenodd" d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M3 3.75A.75.75 0 013.75 3h16.5a.75.75 0 01.75.75v16.5a.75.75 0 01-.75.75H3.75a.75.75 0 01-.75-.75V3.75zM3.75 4.5a.75.75 0 00-.75.75v16.5c0 .414.336.75.75.75h16.5a.75.75 0 00.75-.75v-16.5a.75.75 0 00-.75-.75h-16.5z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      id: "mag-box",
      name: "MAG Boxes",
      popular: true,
      description: "MAG 322, MAG 324, MAG 349, MAG 351, MAG 420, MAG 424 and other models",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
          <path fillRule="evenodd" d="M4.5 9.75a6 6 0 0111.573-2.226 3.75 3.75 0 014.133 4.303A4.5 4.5 0 0118 20.25H6.75a5.25 5.25 0 01-2.23-10.004 6.072 6.072 0 01-.02-.496z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];
  
  // Animation variants for cards
  const deviceCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };
  
  return (
    <div className="w-full">
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {deviceTypes.map((device, index) => {
          const isActive = activeDevice === device.id;
          
          return (
            <motion.div
              key={device.id}
              variants={deviceCardVariants}
              custom={index}
              className={`relative overflow-hidden bg-gradient-to-br from-muted/30 to-card/60 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-primary/5 transition-all duration-300 ${isActive ? 'ring-2 ring-primary/70 shadow-lg shadow-primary/5' : 'hover:border-primary/20 hover:shadow-md hover:shadow-primary/5'} ${device.popular ? 'border-primary/20' : ''}`}
              onMouseEnter={() => setActiveDevice(device.id)}
              onMouseLeave={() => setActiveDevice(null)}
            >
              {/* Popular badge */}
              {device.popular && (
                <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground rounded-full px-2 py-0.5 text-xs font-medium shadow-lg transform rotate-3">
                  Popular
                </div>
              )}
              
              <div className="flex flex-col h-full">
                <div className="text-primary mb-2">
                  {device.icon}
                </div>
                <h3 className="text-base sm:text-lg font-medium mb-1">{device.name}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-auto">
                  {device.description}
                </p>
              </div>
              
              {/* Hover gradient effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl opacity-0 pointer-events-none"
                animate={{ opacity: isActive ? 0.5 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          );
        })}
      </motion.div>
      
      {/* Cross-platform benefit */}
      <motion.div 
        className="mt-8 sm:mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-primary/10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="flex flex-col gap-4 sm:gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">One Subscription, All Devices</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              With one LouFrank TV subscription, you can seamlessly switch between all your devices. Start watching on your TV, continue on your phone, and finish on your tablet - all with perfect synchronization and the same premium experience.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {[
              "Sync Watchlist", "Continue Watching", "Shared Favorites", "Consistent UI"
            ].map((feature, idx) => (
              <div 
                key={idx} 
                className="flex items-center space-x-1.5 bg-background/30 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary">
                  <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      
      {/* Technical compatibility specs */}
      <motion.div 
        className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="bg-card/50 rounded-xl p-4 sm:p-5 border border-border">
          <h4 className="text-base sm:text-lg font-medium mb-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary">
              <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
            </svg>
            Bandwidth Requirements
          </h4>
          <ul className="space-y-1.5 text-xs sm:text-sm text-muted-foreground">
            <li className="flex items-start">
              <span className="text-primary mr-1.5">•</span>
              <span><span className="font-medium text-foreground">HD Streaming:</span> 5+ Mbps internet connection</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-1.5">•</span>
              <span><span className="font-medium text-foreground">FHD Streaming:</span> 10+ Mbps internet connection</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-1.5">•</span>
              <span><span className="font-medium text-foreground">4K Streaming:</span> 25+ Mbps internet connection</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-card/50 rounded-xl p-4 sm:p-5 border border-border">
          <h4 className="text-base sm:text-lg font-medium mb-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary">
              <path fillRule="evenodd" d="M12 1.5a.75.75 0 01.75.75V4.5a.75.75 0 01-1.5 0V2.25A.75.75 0 0112 1.5zM5.636 4.136a.75.75 0 011.06 0l1.592 1.591a.75.75 0 01-1.061 1.06l-1.591-1.59a.75.75 0 010-1.061zm12.728 0a.75.75 0 010 1.06l-1.591 1.592a.75.75 0 01-1.06-1.061l1.59-1.591a.75.75 0 011.061 0zm-6.816 4.496a.75.75 0 01.82.311l5.228 7.917a.75.75 0 01-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 01-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 01-1.247-.606l.569-9.47a.75.75 0 01.554-.68zM3 10.5a.75.75 0 01.75-.75H6a.75.75 0 010 1.5H3.75A.75.75 0 013 10.5zm14.25 0a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H18a.75.75 0 01-.75-.75zm-8.962 3.712a.75.75 0 010 1.061l-1.591 1.591a.75.75 0 11-1.061-1.06l1.591-1.592a.75.75 0 011.06 0z" clipRule="evenodd" />
            </svg>
            System Requirements
          </h4>
          <ul className="space-y-1.5 text-xs sm:text-sm text-muted-foreground">
            <li className="flex items-start">
              <span className="text-primary mr-1.5">•</span>
              <span><span className="font-medium text-foreground">iOS:</span> iPhone, iPad running iOS 12.0+</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-1.5">•</span>
              <span><span className="font-medium text-foreground">Android:</span> Version 7.0 or later</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-1.5">•</span>
              <span><span className="font-medium text-foreground">Smart TVs:</span> 2018+ models</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-card/50 rounded-xl p-4 sm:p-5 border border-border">
          <h4 className="text-base sm:text-lg font-medium mb-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
            </svg>
            Additional Support
          </h4>
          <ul className="space-y-1.5 text-xs sm:text-sm text-muted-foreground">
            <li className="flex items-start">
              <span className="text-primary mr-1.5">•</span>
              <span>24/7 technical support for all devices</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-1.5">•</span>
              <span>Remote setup assistance available</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-1.5">•</span>
              <span>Detailed setup guides available</span>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}