import React, { useState } from "react";
import { LazyImage } from "./LazyImage";
import { motion } from "framer-motion";

type ChannelCategory = {
  name: string;
  logo: string;
  description: string;
};

export function LiveChannelPreview() {
  // Channel networks by category
  const channelsByCategory = {
    Sports: [
      { name: "ESPN", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/united-states/espn-us.png" },
      { name: "Sky Sports", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/united-kingdom/sky-sports-uk.png" },
      { name: "beIN Sports", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/united-states/bein-sports-us.png" },
      { name: "NBA TV", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/united-states/nba-tv-us.png" },
      { name: "NFL Network", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/united-states/nfl-network-us.png" },
      { name: "MLB Network", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/united-states/mlb-network-us.png" },
      { name: "Fox Sports", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/united-states/fox-sports-1-us.png" },
      { name: "UFC Fight Pass", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/united-states/ufc-fight-pass-us.png" },
      { name: "WWE Network", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/united-states/wwe-network-us.png" },
    ],
    Movies: [
      { name: "HBO", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/united-states/hbo-us.png" },
      { name: "Showtime", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/united-states/showtime-us.png" },
      { name: "Starz", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/united-states/starz-us.png" },
      { name: "Cinemax", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/united-states/cinemax-us.png" },
      { name: "AMC", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/united-states/amc-us.png" },
      { name: "TCM", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/united-states/tcm-us.png" },
      { name: "FX", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/united-states/fx-us.png" },
      { name: "Hallmark", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/united-states/hallmark-channel-us.png" },
      { name: "Lifetime", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/united-states/lifetime-us.png" },
    ],
    News: [
      { name: "CNN", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/united-states/cnn-us.png" },
      { name: "BBC News", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/united-kingdom/bbc-news-uk.png" },
      { name: "Fox News", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/united-states/fox-news-us.png" },
      { name: "MSNBC", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/united-states/msnbc-us.png" },
      { name: "Al Jazeera", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/qatar/al-jazeera-qa.png" },
      { name: "Bloomberg", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/united-states/bloomberg-television-us.png" },
      { name: "CNBC", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/united-states/cnbc-us.png" },
      { name: "Sky News", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/united-kingdom/sky-news-uk.png" },
      { name: "Euronews", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/france/euronews-fr.png" },
    ],
    Entertainment: [
      { name: "ABC", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/united-states/abc-us.png" },
      { name: "NBC", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/united-states/nbc-us.png" },
      { name: "CBS", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/united-states/cbs-us.png" },
      { name: "FOX", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/united-states/fox-us.png" },
      { name: "Comedy Central", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/united-states/comedy-central-us.png" },
      { name: "Bravo", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/united-states/bravo-us.png" },
      { name: "E!", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/united-states/e-entertainment-us.png" },
      { name: "TLC", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/united-states/tlc-us.png" },
      { name: "MTV", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/united-states/mtv-us.png" },
    ],
    Kids: [
      { name: "Disney Channel", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/united-states/disney-channel-us.png" },
      { name: "Nickelodeon", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/united-states/nickelodeon-us.png" },
      { name: "Cartoon Network", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/united-states/cartoon-network-us.png" },
      { name: "Disney Junior", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/united-states/disney-junior-us.png" },
      { name: "Nick Jr", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/united-states/nick-jr-us.png" },
      { name: "PBS Kids", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/united-states/pbs-kids-us.png" },
      { name: "Boomerang", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/united-states/boomerang-us.png" },
      { name: "Baby TV", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/united-states/baby-tv-us.png" },
      { name: "Teen Nick", logo: "https://cdn.jsdelivr.net/gh/Tapiosinn/tv-logos/countries/united-states/teennick-us.png" },
    ],
    PPV: [
      { name: "Combat Sports", logo: "ppv-combat" },
      { name: "Wrestling Events", logo: "ppv-wrestling" },
      { name: "Boxing Matches", logo: "ppv-boxing" },
      { name: "Football Package", logo: "ppv-football" },
      { name: "Hockey Package", logo: "ppv-hockey" },
      { name: "Baseball Package", logo: "ppv-baseball" },
      { name: "Basketball Package", logo: "ppv-basketball" },
      { name: "Racing Events", logo: "ppv-racing" },
      { name: "Special Events", logo: "ppv-special" },
    ]
  };
  const channelCategories: ChannelCategory[] = [
    {
      name: "PPV",
      logo: "", // Using SVG icon instead
      description: "Don't miss any pay-per-view events with premium access to UFC, WWE, Boxing, and other special events."
    },
    {
      name: "Sports",
      logo: "", // Using SVG icon instead
      description: "Never miss a game with premium sports channels including ESPN, Sky Sports, beIN Sports, and more."
    },
    {
      name: "Movies",
      logo: "", // Using SVG icon instead
      description: "Access top movie channels like HBO, Showtime, Starz, and other premium networks in HD and FHD quality."
    },
    {
      name: "News",
      logo: "", // Using SVG icon instead
      description: "Stay informed with global news networks including CNN, BBC, Al Jazeera, Fox News, and more."
    },
    {
      name: "Entertainment",
      logo: "", // Using SVG icon instead
      description: "Enjoy entertainment channels like AMC, FX, Comedy Central, and many others from around the world."
    },
    {
      name: "Kids",
      logo: "", // Using SVG icon instead
      description: "Keep the whole family entertained with Nickelodeon, Disney Channel, Cartoon Network, and more."
    }
  ];

  const [activeCategory, setActiveCategory] = useState<ChannelCategory>(channelCategories[0]);

  return (
    <section className="py-16 bg-black/30 backdrop-blur-sm rounded-2xl border border-primary/10 shadow-xl shadow-primary/5 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-40"></div>
      <div className="absolute -top-64 -right-64 w-[30rem] h-[30rem] bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary animate-gradient-flow">
            Premium Content Categories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our vast collection of premium channels across all major categories. 
            From sports to movies, news to kids' programming, we have it all in stunning HD quality.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-12">
          {channelCategories.map((category, index) => (
            <motion.button
              key={category.name}
              className={`p-4 rounded-lg flex flex-col items-center gap-3 transition-all duration-300 ${activeCategory.name === category.name ? 'bg-primary/20 border border-primary/40' : 'bg-card/30 hover:bg-card/50 border border-border'}`}
              onClick={() => setActiveCategory(category)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full">
                {category.name === "Sports" && (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary">
                    <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                    <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                  </svg>
                )}
                {category.name === "Movies" && (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary">
                    <path fillRule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zm1.5 0v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5A.375.375 0 003 5.625zm16.125-.375a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5A.375.375 0 0021 7.125v-1.5a.375.375 0 00-.375-.375h-1.5zM21 9.375A.375.375 0 0020.625 9h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zM4.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5zM3.375 15h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h1.5a.375.375 0 00.375-.375v-1.5A.375.375 0 004.875 9h-1.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375z" clipRule="evenodd" />
                    <path d="M8.25 5.625H12a.75.75 0 01.75.75v3.75a.75.75 0 01-.75.75H8.25a.75.75 0 01-.75-.75v-3.75a.75.75 0 01.75-.75zm3.75 8.25a.75.75 0 01.75-.75h3.75a.75.75 0 01.75.75v3.75a.75.75 0 01-.75.75h-3.75a.75.75 0 01-.75-.75v-3.75z" />
                  </svg>
                )}
                {category.name === "News" && (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary">
                    <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 003 3h15a3 3 0 01-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125zM12 9.75a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H12zm-.75-2.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75zM6 12.75a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5H6zm-.75 3.75a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zM6 6.75a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-3A.75.75 0 009 6.75H6z" clipRule="evenodd" />
                    <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 01-3 0V6.75z" />
                  </svg>
                )}
                {category.name === "Entertainment" && (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary">
                    <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                  </svg>
                )}
                {category.name === "Kids" && (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary">
                    <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
                  </svg>
                )}
              </div>
              <span className={`text-sm font-medium ${activeCategory.name === category.name ? 'text-primary' : 'text-foreground'}`}>
                {category.name}
              </span>
            </motion.button>
          ))}
        </div>
        
        <motion.div 
          className="bg-black/40 p-6 rounded-xl border border-primary/20 shadow-lg shadow-primary/5"
          key={activeCategory.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-4 text-primary">{activeCategory.name} Channels</h3>
            <p className="text-muted-foreground">{activeCategory.description}</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {channelsByCategory[activeCategory.name as keyof typeof channelsByCategory]?.map((channel, index) => (
              <motion.div 
                key={channel.name}
                className="bg-black/30 backdrop-blur-sm rounded-lg p-3 flex flex-col items-center justify-center border border-border/50 hover:border-primary/30 transition-colors shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="bg-white/5 rounded-lg p-3 w-full aspect-video flex items-center justify-center mb-2 overflow-hidden">
                  {activeCategory.name === "PPV" && channel.logo.startsWith("ppv-") ? (
                    <div className="w-full h-full flex items-center justify-center">
                      {channel.logo === "ppv-combat" && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-rose-500 animate-pulse">
                          <path d="M5.34 2.007a4.51 4.51 0 00-1.423.715 5.966 5.966 0 00-1.582 1.672v-.008a9.489 9.489 0 00-1.211 5.437 10 10 0 00.507 2.479 5.436 5.436 0 001.435 2.115 4.208 4.208 0 002.485.889 4.295 4.295 0 00-2.486.893 5.58 5.58 0 00-1.468 2.03 9.605 9.605 0 00-.547 2.58 9.841 9.841 0 001.25 5.438 6.366 6.366 0 001.582 1.671 6.008 6.008 0 001.423.715c2.295.872 5.126.872 7.421 0 .5-.19.984-.426 1.423-.715a5.966 5.966 0 001.582-1.672 9.489 9.489 0 001.211-5.437 10 10 0 00-.507-2.479 5.437 5.437 0 00-1.435-2.116 4.208 4.208 0 00-2.485-.889 4.295 4.295 0 002.486-.893 5.58 5.58 0 001.468-2.03 9.605 9.605 0 00.547-2.58 9.841 9.841 0 00-1.25-5.438 6.365 6.365 0 00-1.582-1.671 6.007 6.007 0 00-1.423-.715c-2.295-.872-5.126-.872-7.421 0z" />
                        </svg>
                      )}
                      {channel.logo === "ppv-wrestling" && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-blue-500 animate-pulse">
                          <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
                        </svg>
                      )}
                      {channel.logo === "ppv-boxing" && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-red-500 animate-pulse">
                          <path d="M10.5 1.875a1.125 1.125 0 012.25 0v8.219c.517.384 1.15.645 1.886.645h7.5c.966 0 1.75.784 1.75 1.75v4.5a6.75 6.75 0 01-6.75 6.75h-7.5a6.75 6.75 0 01-6.75-6.75v-4.5c0-.966.784-1.75 1.75-1.75h7.5a3.75 3.75 0 003.75-3.75V1.875z" />
                        </svg>
                      )}
                      {channel.logo === "ppv-football" && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-amber-500 animate-pulse">
                          <path d="M12.375 18.42c-1.377.003-2.031-.316-2.571-.697-.553-.386-1.019-.86-1.428-1.395a8.188 8.188 0 01-1.434-2.82 9.897 9.897 0 01-.371-4.139c.024-.186.05-.37.078-.551.108-.12.218-.239.331-.355.504-.523 1.152-.986 1.851-1.325.723-.349 1.533-.57 2.344-.569.597 0 1.156.112 1.69.232.53.123 1.04.298 1.531.485.489.185.945.409 1.359.637.214.12.42.235.618.361a10.312 10.312 0 01.839 2.131c.097.373.175.758.224 1.149.148 1.174.05 2.406-.29 3.523a7.901 7.901 0 01-1.953 3.114 4.484 4.484 0 01-.818.831z" />
                        </svg>
                      )}
                      {channel.logo === "ppv-hockey" && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-cyan-500 animate-pulse">
                          <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                        </svg>
                      )}
                      {channel.logo === "ppv-baseball" && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-emerald-500 animate-pulse">
                          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                        </svg>
                      )}
                      {channel.logo === "ppv-basketball" && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-orange-500 animate-pulse">
                          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                        </svg>
                      )}
                      {channel.logo === "ppv-racing" && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-yellow-500 animate-pulse">
                          <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                        </svg>
                      )}
                      {channel.logo === "ppv-special" && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-purple-500 animate-pulse">
                          <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  ) : (
                    <img 
                      src={channel.logo} 
                      alt={`${channel.name} logo`} 
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        // Fallback for failed image loads
                        const target = e.target as HTMLImageElement;
                        target.src = `https://via.placeholder.com/150x80/111827/6D28D9?text=${encodeURIComponent(channel.name)}`;
                      }}
                    />
                  )}
                </div>
                <span className="text-xs font-medium text-center truncate w-full">{channel.name}</span>
                {activeCategory.name === "PPV" && (
                  <span className="text-[10px] text-primary/80 mt-1 animate-pulse">Premium Event</span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
