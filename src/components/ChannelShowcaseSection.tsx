import React, { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ChevronRight, Tv, Globe, Search, Award, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TrialRequestButton } from "./TrialRequestButton";
import { useNavigate } from "react-router-dom";

export function ChannelShowcaseSection() {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  
  // Auto-rotate featured channels
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeatureIndex(prev => (prev + 1) % 5);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  // The featured channels to display in the cinematic carousel
  const featuredChannels = [
    { logo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=200&auto=format&fit=crop", name: "HBO", category: "Premium", description: "Award-winning series and blockbuster movies" },
    { logo: "https://images.unsplash.com/photo-1617674678835-b2e1b2ac29fc?q=80&w=200&auto=format&fit=crop", name: "ESPN", category: "Sports", description: "Live coverage of major sporting events worldwide" },
    { logo: "https://images.unsplash.com/photo-1611365892117-30afd8954031?q=80&w=200&auto=format&fit=crop", name: "BBC", category: "News", description: "International news coverage and documentaries" },
    { logo: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=200&auto=format&fit=crop", name: "Disney+", category: "Family", description: "Family-friendly entertainment for all ages" },
    { logo: "https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?q=80&w=200&auto=format&fit=crop", name: "Netflix", category: "Streaming", description: "Original series and popular movies" },
  ];
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Channel categories with extensive channel listings
  const categories = [
    { 
      id: "entertainment",
      name: "Entertainment", 
      count: "3,200+", 
      description: "From premium networks to basic cable favorites, our entertainment lineup has something for everyone.",
      featured: ["HBO", "Netflix", "AMC", "Fox", "NBC", "ABC", "BBC", "PBS"],
      expanded: [
        "HBO", "Showtime", "Starz", "Cinemax", "AMC", "FX", "TNT", "TBS", 
        "USA Network", "Bravo", "E!", "Comedy Central", "Syfy", "A&E", 
        "Lifetime", "Hallmark", "Oxygen", "WE tv", "OWN", "Freeform",
        "BET", "TV Land", "MTV", "VH1", "Paramount Network", "TLC",
        "Food Network", "HGTV", "Travel Channel", "Discovery", "History",
        "Netflix", "Prime Video", "Hulu", "Disney+", "HBO Max", "Apple TV+",
        "NBC", "CBS", "ABC", "FOX", "The CW", "PBS", "BBC America"
      ] 
    },
    { 
      id: "movies",
      name: "Movies", 
      count: "2,500+", 
      description: "Thousands of movies from blockbusters to indie classics across every genre imaginable.",
      featured: ["Sony Movies", "Paramount", "MGM", "Film4", "TCM", "Showtime", "Cinemax", "Starz"],
      expanded: [
        "Showtime", "Starz", "Cinemax", "HBO", "TCM", "AMC", "FX Movie Channel", 
        "IFC", "Sundance TV", "MGM", "Sony Movie Channel", "Film4", "Hallmark Movies", 
        "Lifetime Movies", "Paramount Network", "Movie Plex", "Indie Plex", "Retro Plex",
        "Epix", "Epix2", "Epix Hits", "Encore", "Encore Action", "Encore Westerns",
        "Encore Suspense", "Encore Black", "Encore Classic", "Encore Family",
        "Fox Movies", "Warner Movies", "Universal Movies", "Paramount Movies",
        "Disney Movies", "Netflix Movies", "Prime Movies", "Apple TV+ Movies",
        "Hulu Movies", "HBO Max Movies", "Disney+ Movies", "Peacock Movies"
      ]
    },
    { 
      id: "sports",
      name: "Sports", 
      count: "3,000+", 
      description: "Never miss a game with our comprehensive sports coverage from leagues around the world.",
      featured: ["ESPN", "Sky Sports", "NBC Sports", "Fox Sports", "NBA TV", "NFL Network", "UFC", "Eurosport"],
      expanded: [
        "ESPN", "ESPN2", "ESPNews", "ESPNU", "ESPN Classic", "ESPN+", 
        "Fox Sports 1", "Fox Sports 2", "NBC Sports", "CBS Sports Network", 
        "NFL Network", "NFL RedZone", "NBA TV", "MLB Network", "NHL Network", 
        "Golf Channel", "Tennis Channel", "Olympic Channel", "UFC", "WWE Network",
        "Sky Sports Main Event", "Sky Sports Premier League", "Sky Sports Football", 
        "Sky Sports F1", "Sky Sports Golf", "Sky Sports Cricket", "Sky Sports Arena",
        "BT Sport 1", "BT Sport 2", "BT Sport 3", "Eurosport 1", "Eurosport 2",
        "beIN Sports", "DAZN", "Willow", "Eleven Sports", "TUDN", "ESPN Deportes", 
        "Fox Deportes", "MSG", "YES Network", "SNY", "NESN", "Altitude", 
        "AT&T SportsNet", "Bally Sports", "NBC Sports Regional", "SEC Network", "ACC Network",
        "Big Ten Network", "Pac-12 Network", "Longhorn Network", "ESPNFC"
      ]
    },
    { 
      id: "news",
      name: "News", 
      count: "1,500+", 
      description: "Stay informed with 24/7 news coverage from top networks around the globe.",
      featured: ["CNN", "BBC News", "Al Jazeera", "Fox News", "MSNBC", "Euronews", "Sky News", "Bloomberg"],
      expanded: [
        "CNN", "CNN International", "HLN", "Fox News", "Fox Business", "MSNBC", 
        "CNBC", "Bloomberg", "BBC World News", "BBC News", "Sky News", 
        "Al Jazeera English", "Al Jazeera Arabic", "Euronews", "France 24", 
        "RT", "TRT World", "Deutsche Welle", "CGTN", "NHK World", "CNA",
        "CBC News", "ABC News", "CBS News", "NBC News", "Newsmax", "C-SPAN", 
        "C-SPAN2", "C-SPAN3", "The Weather Channel", "AccuWeather", "BBC Parliament", 
        "Bloomberg Television", "CNBC World", "CNN en Español", "One America News",
        "Newsy", "Vice", "i24NEWS", "NDTV"
      ]
    },
    { 
      id: "kids",
      name: "Kids", 
      count: "800+", 
      description: "Family-friendly entertainment to keep children of all ages entertained and educated.",
      featured: ["Disney", "Nickelodeon", "Cartoon Network", "Nick Jr.", "PBS Kids", "Discovery Kids", "Baby TV", "CBeebies"],
      expanded: [
        "Disney Channel", "Disney Junior", "Disney XD", "Nickelodeon", "Nick Jr.", 
        "TeenNick", "NickToons", "Cartoon Network", "Boomerang", "PBS Kids", 
        "Universal Kids", "Baby TV", "BabyFirst", "CBeebies", "Discovery Kids", 
        "Nick Music", "Disney Music", "ZooMoo", "Duck TV", "ToonCast", 
        "Kidsflix", "Moonbug", "Kidstream", "PBS Kids Games", "YouTube Kids", 
        "Hopster", "Toon Goggles", "Kabillion", "Kids Street", "HappyKids", 
        "Baby Einstein", "Kidoodle.TV", "JimJam", "Da Vinci Kids", "AnimeCast", 
        "Lego Channel", "Minecraft TV", "Roblox TV"
      ]
    },
    { 
      id: "documentaries",
      name: "Documentaries", 
      count: "950+", 
      description: "Explore the world and expand your mind with fascinating documentaries on any subject.",
      featured: ["National Geographic", "Discovery", "History", "PBS", "BBC Earth", "Animal Planet", "Science", "Crime+Investigation"],
      expanded: [
        "National Geographic", "Nat Geo Wild", "Discovery Channel", "Discovery Science", 
        "Discovery History", "Investigation Discovery", "Animal Planet", "History Channel", 
        "History 2", "PBS", "BBC Earth", "BBC Four", "Smithsonian Channel", 
        "Crime+Investigation", "DOGTV", "Love Nature", "Curiosity Stream", "Docurama", 
        "MagellanTV", "PBS Nova", "Nature", "Biography", "True Royalty", "FYI", 
        "Science Channel", "NASA TV", "World Fishing Network", "Outdoor Channel", 
        "MotorTrend", "American Heroes Channel", "Military History", "Discovery Life", 
        "Animal Planet", "Destination America", "Discovery Family", "Discovery Turbo", 
        "Discovery Asia", "Crime Scene Investigation"
      ]
    },
    { 
      id: "music",
      name: "Music", 
      count: "650+", 
      description: "Tune into the latest hits, classic favorites, and live performances across all genres.",
      featured: ["MTV", "VH1", "CMT", "BET", "Vevo", "Mezzo", "Stingray Music", "Music Choice"],
      expanded: [
        "MTV", "MTV2", "MTV Live", "MTV Classic", "VH1", "VH1 Classic", "CMT", 
        "BET", "BET Jams", "BET Soul", "BET Gospel", "Vevo", "Mezzo", "Mezzo Live HD", 
        "Stingray Music", "Stingray Classica", "Stingray DJAZZ", "Stingray Ambiance", 
        "Music Choice", "Music Choice Play", "Music Choice 90s", "Music Choice 80s", 
        "Music Choice Hip-Hop and R&B", "Music Choice Rock", "Music Choice Metal", 
        "Music Choice Pop Hits", "Music Choice Country", "Music Choice Jazz", 
        "Music Choice R&B Soul", "Music Choice Dance/EDM", "Music Choice Rap", 
        "Music Choice Mexicana", "Music Choice Musica Urbana", "Music Choice Pop Latino", 
        "Music Choice Classical Masterpieces", "Music Choice Gospel", "iConcerts", 
        "Qello Concerts", "REVOLT", "Fuse", "AXS TV", "Tidal", "Spotify TV"
      ]
    },
    { 
      id: "international",
      name: "International", 
      count: "4,000+", 
      description: "Content from across the globe in numerous languages to connect you with your heritage.",
      featured: ["Zee TV", "Star Plus", "TVE", "France 24", "DW", "RAI", "TV5Monde", "Telemundo"],
      expanded: [
        "Zee TV", "Star Plus", "Colors", "Sony TV", "Star Bharat", "&TV", 
        "TVE", "Antena 3", "Telecinco", "Canal+", "Movistar+", "RAI 1", "RAI 2", "RAI 3", 
        "Mediaset Italia", "RTVE", "ARD", "ZDF", "RTL", "ProSieben", "France 2", 
        "France 3", "TV5Monde", "Canal+", "M6", "TF1", "RTP", "RTP Internacional", 
        "SIC", "TVI", "NHK", "Fuji TV", "TV Asahi", "TBS", "NTV", "Telemundo", "Univision", 
        "UniMás", "Azteca", "Telefe", "TV Globo", "SBT", "Record TV", "Band", 
        "Al Arabiya", "MBC", "Rotana", "CBC", "Dubai TV", "Abu Dhabi TV", 
        "KBS World", "Arirang TV", "SBS International", "MBC Korea", "TVB", "Phoenix TV", 
        "CCTV-4", "Dragon TV", "NDTV", "ABP News", "Aaj Tak", "DD National", 
        "GMA Pinoy TV", "The Filipino Channel", "TV5 (Philippines)", "INQUIRER.net TV"
      ]
    },
    { 
      id: "local",
      name: "Local Affiliates", 
      count: "1,000+", 
      description: "We offer local affiliate channels in major cities across the US, giving you access to local news, sports, and programming.",
      featured: ["ABC Local", "NBC Local", "CBS Local", "FOX Local", "PBS Local", "The CW Local", "MyNetworkTV", "Telemundo Local"],
      expanded: [
        "ABC New York (WABC)", "ABC Los Angeles (KABC)", "ABC Chicago (WLS)", "ABC Philadelphia (WPVI)", 
        "ABC Dallas (WFAA)", "ABC Houston (KTRK)", "ABC San Francisco (KGO)", "ABC Boston (WCVB)", 
        "NBC New York (WNBC)", "NBC Los Angeles (KNBC)", "NBC Chicago (WMAQ)", "NBC Philadelphia (WCAU)", 
        "NBC Dallas (KXAS)", "NBC Houston (KPRC)", "NBC San Francisco (KNTV)", "NBC Boston (WBTS)", 
        "CBS New York (WCBS)", "CBS Los Angeles (KCBS)", "CBS Chicago (WBBM)", "CBS Philadelphia (KYW)", 
        "CBS Dallas (KTVT)", "CBS Houston (KHOU)", "CBS San Francisco (KPIX)", "CBS Boston (WBZ)", 
        "FOX New York (WNYW)", "FOX Los Angeles (KTTV)", "FOX Chicago (WFLD)", "FOX Philadelphia (WTXF)", 
        "FOX Dallas (KDFW)", "FOX Houston (KRIV)", "FOX San Francisco (KTVU)", "FOX Boston (WFXT)", 
        "PBS New York (WNET)", "PBS Los Angeles (KOCE)", "PBS Chicago (WTTW)", "PBS Philadelphia (WHYY)", 
        "PBS Dallas (KERA)", "PBS Houston (KUHT)", "PBS San Francisco (KQED)", "PBS Boston (WGBH)", 
        "The CW New York (WPIX)", "The CW Los Angeles (KTLA)", "The CW Chicago (WPWR)", "The CW Philadelphia (WPSG)", 
        "The CW Dallas (KDAF)", "The CW Houston (KIAH)", "The CW San Francisco (KBCW)", "The CW Boston (WLVI)",
        "MyNetworkTV New York (WWOR)", "MyNetworkTV Los Angeles (KCOP)", "MyNetworkTV Chicago (WPWR)", 
        "MyNetworkTV Philadelphia (WPHL)", "MyNetworkTV Dallas (KDFI)", "MyNetworkTV Houston (KTXH)", 
        "MyNetworkTV San Francisco (KRON)", "MyNetworkTV Boston (WSBK)",
        "Telemundo New York (WNJU)", "Telemundo Los Angeles (KVEA)", "Telemundo Chicago (WSNS)", 
        "Telemundo Philadelphia (WWSI)", "Telemundo Dallas (KXTX)", "Telemundo Houston (KTMD)", 
        "Telemundo San Francisco (KSTS)", "Telemundo Boston (WNEU)"
      ]
    }
  ];
  
  // Premium content types for Pay-Per-View
  const premiumContent = [
    {
      type: "Pay-Per-View Events",
      description: "Get access to exclusive live events, including major boxing matches, UFC fights, and special entertainment events without a subscription.",
      examples: [
        "UFC Championship Fights",
        "Major Boxing Matches",
        "Pro Wrestling Events",
        "Concert Premieres",
        "Comedy Specials",
        "Award Shows"
      ]
    },
    {
      type: "Sports Packages",
      description: "Purchase season passes to your favorite sports leagues and tournaments from around the world, with no blackouts.",
      examples: [
        "NFL Sunday Ticket",
        "NBA League Pass",
        "MLB Extra Innings",
        "NHL Center Ice",
        "Premier League Pass",
        "F1 TV Pro"
      ]
    },
    {
      type: "Premium Movie Access",
      description: "Watch the latest blockbuster movies while they're still in theaters, with new releases added regularly.",
      examples: [
        "Early Release Movies",
        "International Films",
        "Independent Cinema",
        "Film Festival Selections",
        "Director's Cuts",
        "Exclusive Premieres"
      ]
    }
  ];
  
  // Modal content for expanded channel list
  const renderCategoryDialog = () => {
    if (!selectedCategory) return null;
    
    const category = categories.find(c => c.id === selectedCategory);
    if (!category) return null;
    
    return (
      <Dialog open={!!selectedCategory} onOpenChange={() => setSelectedCategory(null)}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-black border border-primary/20">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white">{category.name} Channels</DialogTitle>
            <DialogDescription className="text-white/70">
              {category.description} We offer {category.count} channels in this category.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mt-4">
            {category.expanded.map((channel, idx) => (
              <div key={idx} className="bg-black/30 border border-white/10 rounded-md p-2 text-center hover:border-primary/30 transition-all duration-200">
                <span className="text-sm text-white">{channel}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-black/30 border border-white/10 rounded-md">
            <p className="text-white/80 text-sm">
              This is just a sample of our {category.name.toLowerCase()} channels. Our complete lineup includes many more channels from around the world, with new ones added regularly.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <section id="features" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Premium cinematic background with dynamic lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-gray-900/80 to-black/90 z-0"></div>
      
      {/* Cinematic spotlight effects */}
      <div className="absolute top-0 left-1/4 w-1/2 h-40 bg-primary/5 rounded-full filter blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-1/2 h-40 bg-secondary/5 rounded-full filter blur-[100px] animate-pulse-slow"></div>
      
      {/* Dynamic grid patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.1)_0,rgba(255,255,255,0)_70%)] opacity-60"></div>
      <div className="absolute inset-0 backdrop-blur-[1px] bg-black/10"></div>
      
      {/* Cinematic scan lines - very subtle */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        {Array.from({ length: 80 }).map((_, i) => (
          <div 
            key={i} 
            className="w-full h-px bg-white/30"
            style={{ marginTop: `${i * 12}px` }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Featured Channel Cinematic Showcase */}
        <div className="mb-20 relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-900/80 border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)]">
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30 blur-sm"></div>
          </div>
          
          <div className="relative z-10 p-8 md:p-12">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              {/* Left side: Channel showcase carousel */}
              <div className="lg:w-1/2 relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 z-10"></div>
                
                {/* Channel selector controls */}
                <div className="absolute bottom-0 left-0 w-full p-4 z-20">
                  <div className="flex justify-center gap-2">
                    {featuredChannels.map((_, idx) => (
                      <button 
                        key={idx}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeFeatureIndex ? 'bg-primary w-8' : 'bg-white/30'}`}
                        onClick={() => setActiveFeatureIndex(idx)}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Channel display */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeatureIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 z-0"
                  >
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0"></div>
                    <motion.img 
                      src={featuredChannels[activeFeatureIndex].logo} 
                      alt={featuredChannels[activeFeatureIndex].name}
                      className="w-full h-full object-cover opacity-50"
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                    />
                    
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="text-center">
                        <div className="inline-block px-3 py-1 mb-3 bg-primary/20 backdrop-blur-sm rounded-full text-xs text-primary font-medium">
                          {featuredChannels[activeFeatureIndex].category}
                        </div>
                        <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 drop-shadow-lg">
                          {featuredChannels[activeFeatureIndex].name}
                        </h3>
                        <p className="text-white/80 max-w-md mx-auto">
                          {featuredChannels[activeFeatureIndex].description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Right side: Content description */}
              <div className="lg:w-1/2">
                <div className="inline-block px-4 py-1 mb-3 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 backdrop-blur-sm rounded-full border border-primary/20">
                  <span className="text-xs font-medium tracking-wider uppercase text-primary">Premium Entertainment Experience</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary/80 to-white drop-shadow-sm">
                  World-Class Channel Selection
                </h2>
                
                <p className="text-white/80 mb-8 text-lg leading-relaxed">
                  Experience television like never before with our curated collection of premium channels from around the world. Crystal-clear HD and FHD quality, zero buffering, and instant channel switching.  
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: <Globe className="w-5 h-5 text-primary" />, title: "Global Coverage", desc: "50+ countries represented" },
                    { icon: <Tv className="w-5 h-5 text-primary" />, title: "HD & FHD Quality", desc: "Crystal clear picture" },
                    { icon: <Zap className="w-5 h-5 text-primary" />, title: "Ultra-fast Zapping", desc: "Instant channel switching" },
                    { icon: <Star className="w-5 h-5 text-primary" />, title: "Premium Networks", desc: "All major providers included" },
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-primary/30 transition-all duration-300">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 mr-3 border border-primary/20 flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-white">{feature.title}</h4>
                        <p className="text-sm text-white/70">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <TrialRequestButton size="lg" className="sm:w-auto flex-1">
                    Start 36-Hour Trial
                  </TrialRequestButton>
                  
                  <Button 
                    variant="outline" 
                    className="sm:w-auto flex-1 border-white/20 hover:border-primary/50"
                    onClick={() => navigate('/Pricing')}
                  >
                    View All Plans
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Section header */}
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary drop-shadow-lg">
            Over 16,000 Channels & 50,000+ On-Demand Titles
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Our extensive lineup covers entertainment from around the world, with crystal-clear HD and FHD quality channels. From live sports to breaking news, family entertainment to movies - we've got it all, including the latest theater releases.
          </p>
        </motion.div>
        
        {/* Channel Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category, idx) => (
            <motion.div
              key={category.id}
              className="relative group bg-gradient-to-br from-gray-900 to-black/60 border border-white/10 rounded-lg overflow-hidden hover:border-primary/30 hover:shadow-primary/10 transition-all duration-300 shadow-xl cursor-pointer"
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
              onClick={() => setSelectedCategory(category.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Premium hover effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 opacity-0 group-hover:opacity-20 group-hover:from-primary/5 group-hover:via-primary/10 group-hover:to-primary/5 rounded-lg blur-md transition-all duration-700 ${hoveredCategory === category.id ? 'opacity-20' : 'opacity-0'}`}></div>
              
              <div className="p-4 border-b border-white/10 flex justify-between items-center relative">
                <h3 className="text-lg font-bold text-white">{category.name}</h3>
                <span className="bg-primary/30 text-white text-xs py-1 px-2 rounded-md font-semibold">{category.count}</span>
              </div>
              
              <div className="p-4 relative">
                <p className="text-white/80 text-sm mb-3">{category.description}</p>
                
                <div className="flex flex-wrap gap-1.5">
                  {category.featured.slice(0, 4).map((channel, channelIdx) => (
                    <motion.div 
                      key={channel} 
                      className="bg-black/40 text-white/90 text-xs px-2 py-1 rounded-md border border-white/10 hover:border-primary/40 transition-all duration-300 hover:bg-black/60 hover:text-white group-hover:scale-105"
                      initial={{ opacity: 0, y: 5 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 + (channelIdx * 0.05) }}
                    >
                      {channel}
                    </motion.div>
                  ))}
                  <motion.div 
                    className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-md border border-primary/30 flex items-center group-hover:bg-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-sm hover:shadow-primary/20"
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    whileHover={{ x: 3 }}
                  >
                    + {parseInt(category.count) - 4}+ more
                    <ChevronRight className="w-3 h-3 ml-0.5 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Pay-Per-View Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center mb-6">
            <div className="h-10 w-1 bg-gradient-to-b from-primary to-secondary rounded-full mr-4"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-primary/90 to-white">Premium Pay-Per-View & Packages</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {premiumContent.map((content, idx) => (
              <motion.div 
                key={content.type}
                className="relative bg-gradient-to-br from-gray-900/90 to-black/90 border border-white/10 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-500 shadow-2xl h-full group"
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 20px 2px rgba(124, 58, 237, 0.1)', 
                  y: -5 
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15, type: "spring", stiffness: 50 }}
              >
                {/* Premium hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 opacity-0 group-hover:opacity-30 group-hover:from-primary/15 group-hover:to-secondary/15 rounded-lg blur-md transition-all duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-40 transition-all duration-700 pointer-events-none"></div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 to-secondary/0 opacity-0 group-hover:opacity-30 group-hover:from-primary/20 group-hover:via-transparent group-hover:to-secondary/20 rounded-lg blur-md transition-all duration-700 pointer-events-none z-0"></div>
                
                <div className="p-5 border-b border-white/10 relative z-10">
                  <h3 className="text-xl lg:text-2xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80 group-hover:from-white group-hover:via-primary/90 group-hover:to-white transition-all duration-500">{content.type}</h3>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-radial from-primary/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 pointer-events-none"></div>
                </div>
                
                <div className="p-5 flex flex-col h-full relative z-10">
                  <p className="text-white/70 group-hover:text-white/90 mb-5 flex-grow leading-relaxed transition-all duration-500">{content.description}</p>
                  
                  <div>
                    <div className="flex items-center mb-3">
                      <div className="h-0.5 w-6 bg-primary/50 rounded-full mr-2"></div>
                      <h4 className="text-sm uppercase tracking-wide text-white/70 group-hover:text-white/90 transition-colors duration-300">Popular Options:</h4>
                    </div>
                    <div className="flex flex-col space-y-2.5">
                      {content.examples.slice(0, 6).map((example, i) => (
                        <motion.div 
                          key={example} 
                          className="flex items-center gap-2.5 group-hover:translate-x-2 transition-all duration-500 ease-out" 
                          initial={{ opacity: 0, x: -5 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 + (0.08 * i), duration: 0.4 }}
                        >
                          <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-primary to-secondary flex-shrink-0 group-hover:scale-125 transition-transform duration-500 group-hover:shadow-glow"></div>
                          <span className="text-sm text-white/80 group-hover:text-white transition-colors duration-500">{example}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <motion.div 
                    className="mt-6 pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0 }} // Start hidden, only show on hover
                  >
                    <Button variant="ghost" className="w-full bg-primary/10 hover:bg-primary/20 text-primary hover:text-white border border-primary/30 hover:border-primary/50">
                      View Options
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Local Channels Highlight */}
        <motion.div 
          className="p-6 bg-black/30 border border-white/10 rounded-lg backdrop-blur-sm shadow-xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-3">Local Channels in Your City</h3>
              <p className="text-white/80 mb-4">
                We provide access to local affiliate stations from all major networks including ABC, NBC, CBS, FOX, and more. Watch your local news, sports, and weather without needing an antenna or separate subscription.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-primary/20 text-white text-sm px-3 py-1 rounded-full">Local News</span>
                <span className="bg-primary/20 text-white text-sm px-3 py-1 rounded-full">Local Sports</span>
                <span className="bg-primary/20 text-white text-sm px-3 py-1 rounded-full">Weather</span>
                <span className="bg-primary/20 text-white text-sm px-3 py-1 rounded-full">Community Events</span>
              </div>
            </div>
            <div className="md:w-1/3 flex flex-wrap justify-center gap-3">
              {["ABC", "NBC", "CBS", "FOX", "PBS", "CW"].map((network) => (
                <div key={network} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-md bg-gradient-to-br from-gray-700 to-gray-900 border border-white/10 flex items-center justify-center text-white font-bold">
                    {network}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Stats */}
        <motion.div 
          className="flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center p-8 bg-gradient-to-br from-black/40 via-black/30 to-black/40 border border-white/10 rounded-xl backdrop-blur-sm shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Premium background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-20"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
          
          <div className="text-center md:text-left relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary/90 to-white">The Ultimate Entertainment Solution</h3>
            <p className="text-white/70 text-lg">Why settle for less when you can have it all with LouFrank TV?</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 relative z-10">
            {[
              { label: "Channels", value: "16,000+" },
              { label: "Movies & Shows", value: "50,000+" },
              { label: "Countries", value: "50+" },
              { label: "Uptime", value: "99.9%" },
            ].map((stat) => (
              <motion.div 
                key={stat.label} 
                className="text-center"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-xs uppercase tracking-wider text-white/80 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Elevate Your Entertainment Experience?</h3>
            <p className="text-white/70 mb-8">Experience the ultimate entertainment solution with access to over 16,000 channels and 50,000+ on-demand titles. No contracts, no hassle, just premium content whenever you want it.</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <TrialRequestButton size="lg" variant="gradient" className="px-8 py-6 text-lg">
                Try For $1 - 36 Hour Trial
              </TrialRequestButton>
              
              <Button
                variant="outline"
                className="px-8 py-6 text-lg border-white/20 hover:border-primary/50"
                onClick={() => navigate('/Pricing')}
              >
                View Premium Plans
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Render expanded category dialog */}
      {renderCategoryDialog()}
    </section>
  );
}
