import React from "react";

export function StaticEpgImage() {
  // Sample channel data for static EPG display
  const channels = [
    { id: 1, name: "Sports Network", logo: "🏆", current: "Premier League Live" },
    { id: 2, name: "News 24/7", logo: "📰", current: "Breaking News" },
    { id: 3, name: "Movies Plus", logo: "🎬", current: "Hollywood Blockbuster" },
    { id: 4, name: "Entertainment One", logo: "🎭", current: "Celebrity Talk Show" },
    { id: 5, name: "Discovery Channel", logo: "🌍", current: "Wild Nature" },
    { id: 6, name: "Kids Zone", logo: "👶", current: "Cartoon Marathon" },
    { id: 7, name: "Music Hits", logo: "🎵", current: "Top 40 Countdown" },
    { id: 8, name: "Travel & Living", logo: "✈️", current: "World Cuisine" },
  ];
  
  // Time slots for the EPG
  const timeSlots = [
    "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00"
  ];
  
  return (
    <div className="relative rounded-xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10 bg-black/90 h-[500px]">
      {/* Static EPG-style interface */}
      <div className="w-full h-full flex flex-col text-white">
        {/* EPG Header - Day and time */}
        <div className="bg-gray-900 p-3 border-b border-gray-800 flex items-center">
          <div className="flex space-x-2 mr-4">
            <button className="px-3 py-1 bg-primary rounded text-xs font-medium">Today</button>
            <button className="px-3 py-1 bg-gray-800 rounded text-xs font-medium">Tomorrow</button>
          </div>
          
          <div className="flex-1 overflow-hidden">
            <div className="flex">
              {timeSlots.map(time => (
                <div key={time} className="w-24 flex-shrink-0 text-center text-xs text-gray-400">{time}</div>
              ))}
            </div>
          </div>
        </div>
        
        {/* EPG Content - Channels and programs */}
        <div className="flex-1 overflow-y-auto">
          {channels.map(channel => (
            <div key={channel.id} className="flex border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
              {/* Channel info */}
              <div className="w-48 p-3 flex items-center space-x-3 flex-shrink-0 border-r border-gray-800">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-lg">
                  {channel.logo}
                </div>
                <div>
                  <div className="text-sm font-medium">{channel.name}</div>
                  <div className="text-xs text-gray-400">CH {channel.id}</div>
                </div>
              </div>
              
              {/* Programs timeline */}
              <div className="flex-1 flex relative">
                {/* Current program - highlighted */}
                <div className="absolute top-0 left-0 h-full w-48 bg-primary/20 border-r-2 border-primary z-10"></div>
                
                {/* Program blocks */}
                <div className="flex w-full">
                  {timeSlots.map((time, index) => {
                    // First slot is current program
                    if (index === 0) {
                      return (
                        <div key={time} className="w-24 p-2 z-20">
                          <div className="text-xs font-medium text-primary">{channel.current}</div>
                          <div className="text-[10px] text-gray-400 mt-1">{time} - {timeSlots[1]}</div>
                          <div className="h-1 bg-gray-700 rounded-full mt-1 overflow-hidden">
                            <div className="h-full bg-primary rounded-full w-3/4"></div>
                          </div>
                        </div>
                      );
                    }
                    
                    // Random program names for other slots
                    const programs = ["Movie", "News", "Show", "Series", "Sports", "Documentary"];
                    const randomProgram = programs[Math.floor(Math.random() * programs.length)];
                    
                    return (
                      <div key={time} className="w-24 p-2 border-l border-gray-800">
                        <div className="text-xs font-medium truncate">{randomProgram}</div>
                        <div className="text-[10px] text-gray-400 mt-1">
                          {time} - {timeSlots[index+1] || "23:30"}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom bar with controls */}
        <div className="bg-gray-900 p-3 border-t border-gray-800 flex justify-between items-center">
          <div className="flex space-x-6 text-sm text-gray-400">
            <button className="flex items-center space-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Home</span>
            </button>
            <button className="flex items-center space-x-1 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span>Guide</span>
            </button>
          </div>
          
          <div className="text-xs text-gray-400">
            TiviMate Interface
          </div>
        </div>
      </div>
      
      {/* Premium indicator overlay */}
      <div className="absolute top-3 right-3 z-40 bg-gradient-to-r from-primary to-secondary text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 mr-1">
          <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clipRule="evenodd" />
        </svg>
        PREMIUM
      </div>
    </div>
  );
}
