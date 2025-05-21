import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Channel {
  id: string;
  name: string;
  logo: string;
  category: string;
  number: number;
}

interface Program {
  id: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  duration: number;
  progress: number;
  channelId: string;
}

export function InteractiveEpgPreview() {
  // State for active UI view
  const [activeView, setActiveView] = useState<"guide" | "channels" | "catchup">("channels");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedChannel, setSelectedChannel] = useState<Channel | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showInfoPanel, setShowInfoPanel] = useState<boolean>(false);
  
  // Mock data
  const categories = [
    "All", "Sports", "News", "Movies", "Entertainment", "Kids", "Music", "International"
  ];
  
  const channels: Channel[] = [
    { id: "1", name: "Sports Network", logo: "/public/901661ac-f28e-4815-8069-61ae5363a100/channel-logos/sports-1.png", category: "Sports", number: 1 },
    { id: "2", name: "News 24/7", logo: "/public/901661ac-f28e-4815-8069-61ae5363a100/channel-logos/news-1.png", category: "News", number: 2 },
    { id: "3", name: "Cinema Hits", logo: "/public/901661ac-f28e-4815-8069-61ae5363a100/channel-logos/movies-1.png", category: "Movies", number: 3 },
    { id: "4", name: "Comedy Central", logo: "/public/901661ac-f28e-4815-8069-61ae5363a100/channel-logos/entertainment-1.png", category: "Entertainment", number: 4 },
    { id: "5", name: "Kids Zone", logo: "/public/901661ac-f28e-4815-8069-61ae5363a100/channel-logos/kids-1.png", category: "Kids", number: 5 },
    { id: "6", name: "Music Hits", logo: "/public/901661ac-f28e-4815-8069-61ae5363a100/channel-logos/music-1.png", category: "Music", number: 6 },
    { id: "7", name: "International", logo: "/public/901661ac-f28e-4815-8069-61ae5363a100/channel-logos/international-1.png", category: "International", number: 7 },
    { id: "8", name: "Sports 2", logo: "/public/901661ac-f28e-4815-8069-61ae5363a100/channel-logos/sports-2.png", category: "Sports", number: 8 },
    { id: "9", name: "News Extra", logo: "/public/901661ac-f28e-4815-8069-61ae5363a100/channel-logos/news-2.png", category: "News", number: 9 },
    { id: "10", name: "Premium Movies", logo: "/public/901661ac-f28e-4815-8069-61ae5363a100/channel-logos/movies-2.png", category: "Movies", number: 10 },
  ];
  
  // Generate programs for today
  const generatePrograms = (channelId: string): Program[] => {
    const now = new Date();
    const programs: Program[] = [];
    let startTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
    
    const titles = [
      "Morning Show", "News Update", "Sports Highlights", "Movie Marathon", 
      "Kids Special", "Documentary", "Late Night Show", "Live Concert",
      "Tech Review", "Cooking Master", "Travel Adventures", "Reality TV"
    ];
    
    for (let i = 0; i < 24; i++) {
      const duration = Math.floor(Math.random() * 120) + 30; // 30-150 minutes
      const endTime = new Date(startTime.getTime() + duration * 60000);
      
      const title = titles[Math.floor(Math.random() * titles.length)];
      
      // Calculate progress if current time is within program time
      let progress = 0;
      if (now >= startTime && now <= endTime) {
        progress = ((now.getTime() - startTime.getTime()) / (endTime.getTime() - startTime.getTime())) * 100;
      } else if (now > endTime) {
        progress = 100;
      }
      
      programs.push({
        id: `${channelId}-${i}`,
        title,
        description: `Description for ${title}. This is a sample program description that would typically contain details about the show, its cast, and other information.`,
        startTime: startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        endTime: endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        duration,
        progress,
        channelId
      });
      
      startTime = endTime;
    }
    
    return programs;
  };
  
  // Get all programs for all channels
  const allPrograms = channels.reduce((acc, channel) => {
    const channelPrograms = generatePrograms(channel.id);
    return { ...acc, [channel.id]: channelPrograms };
  }, {} as Record<string, Program[]>);
  
  // Filter channels by category
  const filteredChannels = selectedCategory === "All" 
    ? channels 
    : channels.filter(channel => channel.category === selectedCategory);
  
  // Handle channel selection
  const handleChannelSelect = (channel: Channel) => {
    setSelectedChannel(channel);
    setIsPlaying(true);
    // Auto show info panel when channel is selected
    setShowInfoPanel(true);
    // Auto hide info panel after 5 seconds
    setTimeout(() => setShowInfoPanel(false), 5000);
    
    // Find current program for this channel
    const now = new Date();
    const currentProgram = allPrograms[channel.id].find(program => {
      const programStartTime = parseTimeString(program.startTime);
      const programEndTime = parseTimeString(program.endTime);
      return now >= programStartTime && now <= programEndTime;
    });
    
    if (currentProgram) {
      setSelectedProgram(currentProgram);
    }
  };
  
  // Helper function to parse time string into Date
  const parseTimeString = (timeString: string): Date => {
    const [hours, minutes] = timeString.split(':').map(part => parseInt(part, 10));
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date;
  };
  
  // Auto-select first channel on mount
  useEffect(() => {
    if (filteredChannels.length > 0 && !selectedChannel) {
      handleChannelSelect(filteredChannels[0]);
    }
  }, [filteredChannels]);
  
  return (
    <div className="relative rounded-xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10 bg-black">
      {/* Interface header - like Tivimate */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/80 to-transparent p-4 flex justify-between items-center">
        <div className="flex space-x-4">
          <button 
            onClick={() => setActiveView("channels")} 
            className={`text-xs font-medium transition ${activeView === "channels" ? "text-primary" : "text-white/70 hover:text-white"}`}
          >
            CHANNELS
          </button>
          <button 
            onClick={() => setActiveView("guide")} 
            className={`text-xs font-medium transition ${activeView === "guide" ? "text-primary" : "text-white/70 hover:text-white"}`}
          >
            TV GUIDE
          </button>
          <button 
            onClick={() => setActiveView("catchup")} 
            className={`text-xs font-medium transition ${activeView === "catchup" ? "text-primary" : "text-white/70 hover:text-white"}`}
          >
            CATCH UP
          </button>
        </div>
        
        <div className="text-white text-xs">
          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
      
      {/* Main content area */}
      <div className="flex h-[500px]">
        {/* Left sidebar - categories or guide */}
        <AnimatePresence mode="wait">
          {activeView === "channels" && (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="w-[200px] h-full bg-black/80 border-r border-white/10 overflow-y-auto hidden md:block"
            >
              <div className="p-3 text-white/60 text-xs uppercase font-medium">Categories</div>
              <div className="space-y-1 px-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 text-sm rounded-md transition ${selectedCategory === category ? "bg-primary/20 text-primary" : "text-white/80 hover:bg-white/5"}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
          
          {activeView === "guide" && (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="w-[200px] h-full bg-black/80 border-r border-white/10 overflow-y-auto hidden md:block"
            >
              <div className="p-3 text-white/60 text-xs uppercase font-medium">Today</div>
              <div className="space-y-1 px-2">
                {filteredChannels.map(channel => (
                  <button
                    key={channel.id}
                    onClick={() => handleChannelSelect(channel)}
                    className={`w-full text-left px-3 py-2 text-sm rounded-md transition flex items-center ${selectedChannel?.id === channel.id ? "bg-primary/20 text-primary" : "text-white/80 hover:bg-white/5"}`}
                  >
                    <span className="w-8 text-xs opacity-50">{channel.number}</span>
                    <div className="w-8 h-8 mr-2 flex-shrink-0 overflow-hidden rounded">
                      <img src={channel.logo} alt={channel.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="truncate">{channel.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Main content area */}
        <div className="flex-1 relative overflow-hidden">
          {/* Video player background */}
          <div className="absolute inset-0 bg-black z-10">
            {selectedChannel && (
              <div className="w-full h-full relative overflow-hidden">
                {/* Video placeholder with animated bars to simulate streaming */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
                  {isPlaying ? (
                    <div className="w-full h-full relative">
                      {/* Simulated video content */}
                      <img 
                        src="https://images.unsplash.com/photo-1578022761797-b8636ac1773c?q=80&w=1000&auto=format&fit=crop" 
                        alt="Channel preview" 
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
                      
                      {/* Channel logo watermark */}
                      <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-md p-1 rounded">
                        <img src={selectedChannel.logo} alt={selectedChannel.name} className="h-6 w-6" />
                      </div>
                      
                      {/* Animated loading indicator */}
                      <div className="absolute bottom-0 left-0 right-0 h-0.5">
                        <div className="absolute inset-0 bg-primary animate-pulse"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-white/50">Press play to start streaming</div>
                  )}
                </div>
              </div>
            )}
          </div>
          
          {/* Channel list overlay for channels view */}
          <AnimatePresence>
            {activeView === "channels" && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-20 bg-black/70 backdrop-blur-sm overflow-y-auto"
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
                  {filteredChannels.map(channel => (
                    <motion.button
                      key={channel.id}
                      onClick={() => handleChannelSelect(channel)}
                      className={`flex flex-col items-center p-3 rounded-lg transition ${selectedChannel?.id === channel.id ? "bg-primary/20 ring-2 ring-primary" : "bg-black/40 hover:bg-black/60"}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="w-12 h-12 mb-2 relative rounded-md overflow-hidden border border-white/10">
                        <img src={channel.logo} alt={channel.name} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-xs font-medium text-white truncate max-w-full">{channel.name}</span>
                      <span className="text-[10px] text-white/50 mt-1">{channel.number}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* EPG guide overlay for guide view */}
          <AnimatePresence>
            {activeView === "guide" && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-20 bg-black/70 backdrop-blur-sm overflow-y-auto"
              >
                <div className="flex flex-col divide-y divide-white/10">
                  {selectedChannel && (
                    <div className="sticky top-0 bg-black/90 backdrop-blur-md z-10 p-3 flex items-center space-x-2">
                      <div className="w-10 h-10 overflow-hidden rounded">
                        <img src={selectedChannel.logo} alt={selectedChannel.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">{selectedChannel.name}</h3>
                        <p className="text-white/60 text-xs">{selectedChannel.category}</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex-1 overflow-x-auto">
                    {selectedChannel && allPrograms[selectedChannel.id].map((program) => {
                      const isCurrentProgram = program.progress > 0 && program.progress < 100;
                      const isPastProgram = program.progress === 100;
                      
                      return (
                        <div 
                          key={program.id}
                          className={`p-3 border-b border-white/10 transition ${isCurrentProgram ? "bg-primary/10" : ""} ${isPastProgram ? "opacity-60" : ""}`}
                          onClick={() => setSelectedProgram(program)}
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-white/80 text-sm font-medium">
                              {program.startTime} - {program.endTime}
                            </span>
                            {isCurrentProgram && (
                              <span className="text-xs bg-primary/90 text-white px-2 py-0.5 rounded-full">
                                NOW
                              </span>
                            )}
                          </div>
                          <h4 className="text-white font-semibold mt-1">{program.title}</h4>
                          
                          {/* Progress bar for current program */}
                          {isCurrentProgram && (
                            <div className="mt-2 h-1 bg-white/20 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-primary rounded-full" 
                                style={{ width: `${program.progress}%` }}
                              ></div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Catch-up view */}
          <AnimatePresence>
            {activeView === "catchup" && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-20 bg-black/70 backdrop-blur-sm overflow-y-auto p-4"
              >
                <div className="text-center py-8">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto text-primary/80 mb-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L15 9m0 0l-6-6m6 6l-6 6" />
                  </svg>
                  <h3 className="text-xl font-semibold text-white mb-2">7-Day Catch Up</h3>
                  <p className="text-white/70 max-w-md mx-auto">
                    Never miss a show again! With our 7-day catch-up feature, you can watch any program from the past week on demand.
                  </p>
                  <button className="mt-4 bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-primary/90 transition">
                    Browse Recordings
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Info panel that shows when a channel is selected */}
          <AnimatePresence>
            {showInfoPanel && selectedProgram && (
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-black via-black/90 to-transparent p-4 z-30"
              >
                <div className="flex">
                  <div className="flex-1">
                    <h2 className="text-white text-xl font-bold">{selectedProgram.title}</h2>
                    <div className="flex items-center text-white/60 text-sm mt-1">
                      <span>{selectedProgram.startTime} - {selectedProgram.endTime}</span>
                      <span className="mx-2">•</span>
                      <span>{selectedProgram.duration} min</span>
                    </div>
                    <p className="text-white/80 text-sm mt-2 line-clamp-2">{selectedProgram.description}</p>
                  </div>
                  
                  <div className="flex-shrink-0 ml-4 flex flex-col items-end justify-between">
                    <div className="flex space-x-2">
                      <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-white">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-white">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </button>
                    </div>
                    
                    {/* Progress indicator */}
                    {selectedProgram.progress > 0 && selectedProgram.progress < 100 && (
                      <div className="w-20 h-1 bg-white/20 rounded-full overflow-hidden mt-4">
                        <div 
                          className="h-full bg-primary rounded-full" 
                          style={{ width: `${selectedProgram.progress}%` }}
                        ></div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Bottom control bar - mimicking Tivimate UI */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-black/80 backdrop-blur-sm border-t border-white/10 flex items-center px-4 z-20">
        <div className="flex space-x-6 text-white/70">
          <button className="text-xs flex flex-col items-center justify-center h-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mb-0.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            HOME
          </button>
          <button className="text-xs flex flex-col items-center justify-center h-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mb-0.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            MENU
          </button>
          <button className="text-xs flex flex-col items-center justify-center h-full text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mb-0.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
            </svg>
            TV
          </button>
          <button className="text-xs flex flex-col items-center justify-center h-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mb-0.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
            </svg>
            PLAY
          </button>
          <button className="text-xs flex flex-col items-center justify-center h-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mb-0.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            SETTINGS
          </button>
        </div>
        
        <div className="ml-auto text-white/60 text-xs">
          <span className="font-mono">CH {selectedChannel?.number || '-'}</span>
        </div>
      </div>
      
      {/* Premium indicator overlay */}
      <div className="absolute top-3 right-3 z-40 bg-gradient-to-r from-primary to-secondary text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 mr-1">
          <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clipRule="evenodd" />
        </svg>
        PREMIUM
      </div>
      
      {/* Helper text */}
      <div className="absolute bottom-16 left-4 z-40 bg-black/80 text-white text-xs px-3 py-1.5 rounded-lg font-medium max-w-xs">
        <p className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-primary mr-1.5">
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
          </svg>
          Click the buttons above to explore different views
        </p>
      </div>
    </div>
  );
}