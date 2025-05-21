import React from "react";
import { motion } from "framer-motion";
import { SetupGuideCard } from "./SetupGuideCard";
import { TrialRequestButton } from "./TrialRequestButton";

export function SetupGuidesSection() {
  // State for filtered guides
  const [filter, setFilter] = React.useState("all");
  
  // Device setup guides
  // Define static device images to ensure they don't disappear
  const deviceImages = {
    onnBox: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjIyIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PVwiQXJpYWwsIHNhbnMtc2VyaWZcIiBmb250LXdlaWdodD1cImJvbGRcIiBmb250LXNpemU9XCIzNlwiIGZpbGw9XCIjNmI3MjgwXCI+T05OIEJveDwvdGV4dD48L3N2Zz4=",
    fireStick: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjIyIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PVwiQXJpYWwsIHNhbnMtc2VyaWZcIiBmb250LXdlaWdodD1cImJvbGRcIiBmb250LXNpemU9XCIzNlwiIGZpbGw9XCIjNmI3MjgwXCI+RmlyZSBTdGljazwvdGV4dD48L3N2Zz4=",
    androidTv: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjIyIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PVwiQXJpYWwsIHNhbnMtc2VyaWZcIiBmb250LXdlaWdodD1cImJvbGRcIiBmb250LXNpemU9XCIzNlwiIGZpbGw9XCIjNmI3MjgwXCI+QW5kcm9pZCBUVjwvdGV4dD48L3N2Zz4=",
    appleTv: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjIyIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PVwiQXJpYWwsIHNhbnMtc2VyaWZcIiBmb250LXdlaWdodD1cImJvbGRcIiBmb250LXNpemU9XCIzNlwiIGZpbGw9XCIjNmI3MjgwXCI+QXBwbGUgVFY8L3RleHQ+PC9zdmc+",
    smartTv: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjIyIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PVwiQXJpYWwsIHNhbnMtc2VyaWZcIiBmb250LXdlaWdodD1cImJvbGRcIiBmb250LXNpemU9XCIzNlwiIGZpbGw9XCIjNmI3MjgwXCI+U21hcnQgVFY8L3RleHQ+PC9zdmc+",
    magBox: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjIyIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PVwiQXJpYWwsIHNhbnMtc2VyaWZcIiBmb250LXdlaWdodD1cImJvbGRcIiBmb250LXNpemU9XCIzNlwiIGZpbGw9XCIjNmI3MjgwXCI+TUFHIEJveDwvdGV4dD48L3N2Zz4=",
    mobile: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjIyIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PVwiQXJpYWwsIHNhbnMtc2VyaWZcIiBmb250LXdlaWdodD1cImJvbGRcIiBmb250LXNpemU9XCIzNlwiIGZpbGw9XCIjNmI3MjgwXCI+TW9iaWxlIERldmljZTwvdGV4dD48L3N2Zz4=",
  };

  const setupGuides = [
    {
      title: "ONN Box (Recommended)",
      description: "Our recommended device - 4K Streaming Box with Google TV for only $19.99 from Walmart",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z" />
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z" clipRule="evenodd" />
        </svg>
      ),
      steps: [
        "1️⃣ Go to Walmart and buy an ONN Box for $19.99 - it's a small box that connects to your TV.",
        "2️⃣ Plug the ONN Box into your TV using the HDMI cable that comes in the box.",
        "3️⃣ Plug the power cable into the ONN Box and into a wall outlet.",
        "4️⃣ Turn on your TV and select the correct HDMI input (use your TV remote to press the 'Source' or 'Input' button).",
        "5️⃣ Follow the on-screen instructions to connect to your home WiFi - you'll need your WiFi password.",
        "6️⃣ When you reach the home screen, find and click on the 'Google Play Store' (it looks like a colorful triangle).",
        "7️⃣ In the search bar at the top, type 'Downloader' and press enter.",
        "8️⃣ Click on the Downloader app (it has a red icon) and then click 'Install'.",
        "9️⃣ After installation, click 'Open' to start the Downloader app.",
        "🔟 When the app asks for permission, click 'Allow'.",
        "1️⃣1️⃣ You'll see a place to type a number - type: 1464977 and click 'Go'.",
        "1️⃣2️⃣ If a message appears asking about downloading a file, click 'OK' or 'Allow'.",
        "1️⃣3️⃣ When it asks if you want to install the app, click 'Install'.",
        "1️⃣4️⃣ After installation is complete, click 'Open'.",
        "1️⃣5️⃣ In the new app, click on 'Add Playlist'.",
        "1️⃣6️⃣ Select 'Lou Frank TV' from the options.",
        "1️⃣7️⃣ Type in your username and password (these were sent to your email).",
        "1️⃣8️⃣ Wait for the app to load all channels - this might take a few minutes.",
        "1️⃣9️⃣ When it's done, click 'Done' and you'll see all your TV channels!",
        "2️⃣0️⃣ Enjoy watching your favorite shows!"
      ],
      downloadUrl: "#download-onn",
      downloadLabel: "Download ONN Box Guide",
      imageUrl: deviceImages.onnBox,
      category: "tv",
      isRecommended: true
    },
    {
      title: "Amazon Firestick",
      description: "Quick and easy setup for Amazon Firestick devices",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z" />
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z" clipRule="evenodd" />
        </svg>
      ),
      steps: [
        "1️⃣ Turn on your Firestick and go to the home screen.",
        "2️⃣ Look for the magnifying glass (🔍) icon at the top of the screen and click on it.",
        "3️⃣ Type 'Downloader' using the on-screen keyboard.",
        "4️⃣ Click on the 'Downloader' app in the search results (it has a red icon).",
        "5️⃣ Click the 'Download' or 'Get' button to install it.",
        "6️⃣ IMPORTANT: We need to allow installation from unknown sources. Go back to the home screen.",
        "7️⃣ Go to 'Settings' (gear icon ⚙️ at the top right).",
        "8️⃣ Scroll right and select 'My Fire TV' or 'Device'.",
        "9️⃣ Select 'Developer Options'.",
        "🔟 Find 'Apps from Unknown Sources' and turn it ON (click to toggle it).",
        "1️⃣1️⃣ If a warning appears, click 'Turn On' - this is safe and necessary.",
        "1️⃣2️⃣ Press the home button to return to the home screen.",
        "1️⃣3️⃣ Find and open the 'Downloader' app you just installed.",
        "1️⃣4️⃣ Click 'Allow' if it asks for permission.",
        "1️⃣5️⃣ You'll see a place to type a number - type: 1464977 and click 'Go'.",
        "1️⃣6️⃣ When asked to download, click 'OK'.",
        "1️⃣7️⃣ When it finishes downloading, click 'Install'.",
        "1️⃣8️⃣ After installation completes, click 'Open'.",
        "1️⃣9️⃣ In the new app, click on 'Add Playlist'.",
        "2️⃣0️⃣ Select 'LouFrank TV' from the options.",
        "2️⃣1️⃣ Enter your username and password (these were sent to your email).",
        "2️⃣2️⃣ Click 'OK' or 'Submit' and wait for channels to load.",
        "2️⃣3️⃣ That's it! You can now watch all your channels."
      ],
      downloadUrl: "#download-firestick",
      downloadLabel: "Download Firestick Guide",
      imageUrl: deviceImages.fireStick,
      category: "tv"
    },
    {
      title: "Android TV",
      description: "Native app installation for Android TV devices",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm2.25-3a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0113.5 9zm3.75-1.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0v-9z" clipRule="evenodd" />
        </svg>
      ),
      steps: [
        "1️⃣ On your Android TV, go to the home screen.",
        "2️⃣ Find and open the 'Google Play Store' app (it looks like a colorful triangle).",
        "3️⃣ Click on the search icon at the top of the screen (magnifying glass 🔍).",
        "4️⃣ Type 'Downloader' using the on-screen keyboard.",
        "5️⃣ Find and click on the 'Downloader' app (it has a red icon).",
        "6️⃣ Click the 'Install' button and wait for it to finish.",
        "7️⃣ IMPORTANT: We need to allow installation from unknown sources.",
        "8️⃣ Go back to the home screen and find 'Settings' (gear icon ⚙️).",
        "9️⃣ Look for 'Security' or 'Security & Restrictions'.",
        "🔟 Find and click on 'Unknown Sources' or 'Install unknown apps'.",
        "1️⃣1️⃣ Find 'Downloader' in the list and turn it ON (some TVs might have a different menu).",
        "1️⃣2️⃣ Go back to the home screen and open the 'Downloader' app you installed earlier.",
        "1️⃣3️⃣ When asked for permission, click 'Allow'.",
        "1️⃣4️⃣ You'll see a place to type a number - type: 1464977 and click 'Go'.",
        "1️⃣5️⃣ The app will download automatically. When it asks if you want to install, click 'Install'.",
        "1️⃣6️⃣ When installation is complete, click 'Open'.",
        "1️⃣7️⃣ In the new app, click on 'Add Playlist'.",
        "1️⃣8️⃣ Select 'LouFrank TV' from the options.",
        "1️⃣9️⃣ Enter your username and password (these were sent to your email).",
        "2️⃣0️⃣ Wait for the app to load all channels - this might take a few minutes.",
        "2️⃣1️⃣ When it's done, you'll see all your TV channels ready to watch!"
      ],
      downloadUrl: "#download-android",
      downloadLabel: "Download LouFrank TV Player",
      imageUrl: deviceImages.androidTv,
      category: "tv"
    },
    {
      title: "Apple TV",
      description: "Setup instructions for Apple TV devices",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M10.5 3.798v5.02a3 3 0 01-.879 2.121l-2.377 2.377a9.845 9.845 0 015.091 1.013 8.315 8.315 0 005.713.636l.285-.071-3.954-3.955a3 3 0 01-.879-2.121v-5.02a23.614 23.614 0 00-3 0zm4.5.138a.75.75 0 00.093-1.495A24.837 24.837 0 0012 2.25a25.048 25.048 0 00-3.093.191A.75.75 0 009 3.936v4.882a1.5 1.5 0 01-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0115 8.818V3.936z" clipRule="evenodd" />
        </svg>
      ),
      steps: [
        "1️⃣ On your Apple TV, go to the home screen.",
        "2️⃣ Find and click on the 'App Store' (it's a blue icon with an 'A').",
        "3️⃣ Click on the 'Search' option at the top of the screen.",
        "4️⃣ Type 'IPTV Smarters' using the on-screen keyboard.",
        "5️⃣ Find and click on the 'IPTV Smarters Pro' app in the search results.",
        "6️⃣ Click the 'Get' or 'Download' button (if you've downloaded it before, it might show a cloud icon).",
        "7️⃣ Wait for the app to download and install - this should only take a minute.",
        "8️⃣ When it's finished, click 'Open' to start the app.",
        "9️⃣ On the main screen, click on 'Add User'.",
        "🔟 Select the option 'Add User with Xtream Codes'.",
        "1️⃣1️⃣ You'll need to fill out four fields:",
        "1️⃣2️⃣ For 'Name' type: LouFrank TV",
        "1️⃣3️⃣ For 'Domain' or 'Server URL' type: http://dt-vee.com:80",
        "1️⃣4️⃣ For 'Username' type: your username (sent to your email)",
        "1️⃣5️⃣ For 'Password' type: your password (sent to your email)",
        "1️⃣6️⃣ Click 'Add User' or 'Save' button.",
        "1️⃣7️⃣ The app will connect to our servers - this might take a moment.",
        "1️⃣8️⃣ You'll see the LouFrank TV profile - click on it.",
        "1️⃣9️⃣ You'll see options like 'Live TV', 'Movies', 'Series' - click on what you want to watch.",
        "2️⃣0️⃣ That's it! Enjoy your entertainment!"
      ],
      downloadUrl: "#download-appletv",
      downloadLabel: "Download Apple TV Guide",
      imageUrl: deviceImages.appleTv,
      category: "tv"
    },
    {
      title: "Smart TV (Samsung/LG)",
      description: "Setup for popular Smart TV platforms",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M19.5 6h-15v9h15V6z" />
          <path fillRule="evenodd" d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 006 21h12a.75.75 0 000-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375zm0 13.5h17.25a.375.375 0 00.375-.375V4.875a.375.375 0 00-.375-.375H3.375A.375.375 0 003 4.875v11.25c0 .207.168.375.375.375z" clipRule="evenodd" />
        </svg>
      ),
      steps: [
        "👉 For Samsung Smart TVs:",
        "1️⃣ Press the Home button on your Samsung remote.",
        "2️⃣ Go to the 'Apps' section (looks like a grid of squares).",
        "3️⃣ Click on the 'Search' icon in the top right corner.",
        "4️⃣ Type 'Smart IPTV' or 'SIPTV' and press enter.",
        "5️⃣ Click on the 'Smart IPTV' app and then click 'Install'.",
        "6️⃣ After installation, open the app.",
        "7️⃣ You'll see a message with a MAC address on your screen.",
        "8️⃣ On your computer or phone, go to: siptv.app/activation",
        "9️⃣ Enter your MAC address from the TV screen.",
        "🔟 For 'M3U URL' type: http://dt-vee.com:80/get.php?username=YOUR_USERNAME&password=YOUR_PASSWORD&type=m3u_plus",
        "1️⃣1️⃣ Replace YOUR_USERNAME and YOUR_PASSWORD with your account details.",
        "1️⃣2️⃣ Click 'Send' on the website.",
        "1️⃣3️⃣ Go back to your TV and restart the Smart IPTV app.",
        "1️⃣4️⃣ Your channels should now appear!",
        "",
        "👉 For LG Smart TVs:",
        "1️⃣ Press the Home button on your LG remote.",
        "2️⃣ Go to the 'LG Content Store' (the app store).",
        "3️⃣ Click on the 'Search' icon at the top.",
        "4️⃣ Search for 'SS IPTV' and press enter.",
        "5️⃣ Click on the 'SS IPTV' app and then click 'Install'.",
        "6️⃣ After installation, open the app.",
        "7️⃣ Write down the device ID shown on the screen.",
        "8️⃣ On your computer or phone, go to: ss-iptv.com/en/users/playlist",
        "9️⃣ Create an account if you don't have one.",
        "🔟 Click 'Add Playlist' and use these settings:",
        "1️⃣1️⃣ Title: LouFrank TV",
        "1️⃣2️⃣ URL: http://dt-vee.com:80/get.php?username=YOUR_USERNAME&password=YOUR_PASSWORD&type=m3u_plus",
        "1️⃣3️⃣ Replace YOUR_USERNAME and YOUR_PASSWORD with your account details.",
        "1️⃣4️⃣ Click 'Save' and then click 'Push'.",
        "1️⃣5️⃣ Enter your device ID from step 7 and click 'Push' again.",
        "1️⃣6️⃣ Go back to your TV and restart the SS IPTV app.",
        "1️⃣7️⃣ Your channels should now appear!"
      ],
      downloadUrl: "#download-smarttv",
      downloadLabel: "Download Smart TV Guide",
      imageUrl: deviceImages.smartTv,
      category: "tv"
    },
    {
      title: "MAG Box",
      description: "Configuration for MAG and IPTV set-top boxes",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M11.25 3v4.046a3 3 0 00-4.277 4.204H1.5v-6A2.25 2.25 0 013.75 3h7.5zM12.75 3v4.011a3 3 0 014.239 4.239H22.5v-6A2.25 2.25 0 0020.25 3h-7.5zM22.5 12.75h-8.983a4.125 4.125 0 004.108 3.75.75.75 0 010 1.5 5.623 5.623 0 01-4.875-2.817V21h7.5a2.25 2.25 0 002.25-2.25v-6zM11.25 21v-5.817A5.623 5.623 0 016.375 18a.75.75 0 010-1.5 4.126 4.126 0 004.108-3.75H1.5v6A2.25 2.25 0 003.75 21h7.5z" />
        </svg>
      ),
      steps: [
        "1️⃣ Turn on your MAG box and wait for it to fully start up.",
        "2️⃣ Using your MAG box remote, press the MENU button.",
        "3️⃣ Use the arrow keys to navigate to 'System Settings' and press OK.",
        "4️⃣ Look for 'Servers' or 'Portals' and press OK.",
        "5️⃣ You'll see options for Portal 1, Portal 2, etc. Select 'Portal 1' and press OK.",
        "6️⃣ For 'Portal Name', enter: LouFrank TV (use the on-screen keyboard).",
        "7️⃣ For 'Portal URL', carefully type: http://dt-vee.com:80/c/ (don't forget the /c/ at the end).",
        "8️⃣ After entering the URL, press the OK or Enter button on your remote.",
        "9️⃣ Press the BACK button on your remote to go back to the previous menu.",
        "🔟 Look for an option like 'Restart Portal' or 'Restart Device' and select it.",
        "1️⃣1️⃣ Confirm that you want to restart by selecting 'Yes' or 'OK'.",
        "1️⃣2️⃣ Your MAG box will restart - this might take a minute.",
        "1️⃣3️⃣ When it starts back up, you should see a login screen.",
        "1️⃣4️⃣ Enter your username and password (these were sent to your email).",
        "1️⃣5️⃣ Press the OK button on your remote to log in.",
        "1️⃣6️⃣ After logging in, you'll see the TV guide with all your channels.",
        "1️⃣7️⃣ Use the arrow keys on your remote to navigate between channels.",
        "1️⃣8️⃣ Press OK on any channel to start watching it.",
        "1️⃣9️⃣ To switch between live TV, movies, and series, use the MENU button on your remote.",
        "2️⃣0️⃣ That's it! Enjoy your LouFrank TV service on your MAG box."
      ],
      downloadUrl: "#download-magbox",
      downloadLabel: "Download MAG Setup Guide",
      imageUrl: deviceImages.magBox,
      category: "box"
    },
    {
      title: "Smartphones & Tablets",
      description: "Mobile setup for iOS and Android devices",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
          <path fillRule="evenodd" d="M8.625 3.75A2.625 2.625 0 006 6.375v11.25A2.625 2.625 0 008.625 20.25h6.75A2.625 2.625 0 0018 17.625V6.375A2.625 2.625 0 0015.375 3.75h-6.75zM7.5 6.375A1.125 1.125 0 018.625 5.25h6.75A1.125 1.125 0 0116.5 6.375v11.25a1.125 1.125 0 01-1.125 1.125h-6.75A1.125 1.125 0 017.5 17.625V6.375z" clipRule="evenodd" />
        </svg>
      ),
      steps: [
        "👉 For Android Phones/Tablets:",
        "1️⃣ On your Android phone or tablet, find and tap the 'Play Store' app (it's colorful with a triangle).",
        "2️⃣ Tap on the search bar at the top and type 'Downloader'.",
        "3️⃣ Tap on the 'Downloader' app with the red icon.",
        "4️⃣ Tap 'Install' and wait for it to finish downloading.",
        "5️⃣ IMPORTANT: We need to allow installation from unknown sources.",
        "6️⃣ Open your device 'Settings' (gear icon ⚙️).",
        "7️⃣ Scroll down and tap on 'Security' or 'Privacy'.",
        "8️⃣ Look for 'Unknown sources' or 'Install unknown apps' and tap on it.",
        "9️⃣ Find 'Downloader' in the list and turn it ON.",
        "🔟 Now go back to your home screen and open the 'Downloader' app.",
        "1️⃣1️⃣ If the app asks for permission, tap 'Allow'.",
        "1️⃣2️⃣ You'll see a place to type a number - type: 1464977 and tap 'Go'.",
        "1️⃣3️⃣ When it asks if you want to download, tap 'OK'.",
        "1️⃣4️⃣ When download is complete, tap 'Install'.",
        "1️⃣5️⃣ After installation, tap 'Open'.",
        "1️⃣6️⃣ Tap on 'Add Playlist'.",
        "1️⃣7️⃣ Select 'LouFrank TV'.",
        "1️⃣8️⃣ Enter your username and password (from your welcome email).",
        "1️⃣9️⃣ Wait for channels to load and enjoy!",
        "",
        "👉 For iPhones/iPads:",
        "1️⃣ Open the 'App Store' on your iPhone or iPad (blue icon with 'A').",
        "2️⃣ Tap on the 'Search' tab at the bottom right of your screen.",
        "3️⃣ In the search bar at the top, type 'IPTV Smarters'.",
        "4️⃣ You'll see two options: the free 'IPTV Smarters' app and the paid 'IPTV Smarters Pro'. Either one will work, but the Pro version ($2.99) has more features.",
        "5️⃣ Tap 'Get' on the version you want to install.",
        "6️⃣ You might need to enter your Apple ID password or use Face ID/Touch ID to approve.",
        "7️⃣ Wait for the app to download and install.",
        "8️⃣ Tap 'Open' when it's done installing.",
        "9️⃣ The app might ask for permissions - tap 'Allow' for any permissions it requests.",
        "🔟 On the main screen, tap 'Add User'.",
        "1️⃣1️⃣ Tap on 'Xtream Codes API'.",
        "1️⃣2️⃣ Fill in the following information exactly as shown:",
        "1️⃣3️⃣ For 'Name' type: LouFrank TV",
        "1️⃣4️⃣ For 'Domain' or 'URL' type: http://dt-vee.com:80",
        "1️⃣5️⃣ For 'Username' type: your username (from your welcome email)",
        "1️⃣6️⃣ For 'Password' type: your password (from your welcome email)",
        "1️⃣7️⃣ Tap on 'Add User' at the bottom.",
        "1️⃣8️⃣ Tap on the LouFrank TV profile that appears.",
        "1️⃣9️⃣ You'll see options for Live TV, VOD (movies), Series, etc. - tap on what you want to watch.",
        "2️⃣0️⃣ You're all set! Enjoy watching on your mobile device!"
      ],
      downloadUrl: "#download-mobile",
      downloadLabel: "Download Mobile App",
      imageUrl: deviceImages.mobile,
      category: "mobile"
    }
  ];

  // Additional resources
  const additionalResources = [
    {
      title: "LouFrank TV Player for Android",
      description: "Our dedicated player app with advanced features",
      url: "#download-player"
    },
    {
      title: "Premium TV Guide (EPG)",
      description: "Electronic program guide compatible with all devices",
      url: "#download-epg"
    },
    {
      title: "Troubleshooting Guide",
      description: "Common issues and their solutions",
      url: "#troubleshooting"
    }
  ];

  return (
    <section id="setup-guides" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-background/95 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?q=80&w=2076&auto=format&fit=crop')] opacity-[0.02] bg-cover bg-center bg-no-repeat"></div>
      <div className="absolute -bottom-64 -left-64 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -top-32 -right-32 w-[30rem] h-[30rem] bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        {/* Section header */}
        <motion.div 
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary animate-gradient-flow">Setup Guides</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Easy setup on any device! Follow our step-by-step instructions to start watching your favorite channels
            in just a few minutes. Our guides make setup simple and hassle-free.
          </p>
        </motion.div>
        
        {/* Filters for device types */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button 
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full ${filter === "all" ? "bg-primary text-primary-foreground" : "bg-card border border-border hover:bg-card/80"} text-xs sm:text-sm font-medium transition-colors`}
            onClick={() => setFilter("all")}
          >
            All Devices
          </button>
          <button 
            className={`px-4 py-2 rounded-full ${filter === "tv" ? "bg-primary text-primary-foreground" : "bg-card border border-border hover:bg-card/80"} text-sm font-medium transition-colors`}
            onClick={() => setFilter("tv")}
          >
            TV Devices
          </button>
          <button 
            className={`px-4 py-2 rounded-full ${filter === "mobile" ? "bg-primary text-primary-foreground" : "bg-card border border-border hover:bg-card/80"} text-sm font-medium transition-colors`}
            onClick={() => setFilter("mobile")}
          >
            Mobile
          </button>
          <button 
            className={`px-4 py-2 rounded-full ${filter === "box" ? "bg-primary text-primary-foreground" : "bg-card border border-border hover:bg-card/80"} text-sm font-medium transition-colors`}
            onClick={() => setFilter("box")}
          >
            Set-top Boxes
          </button>
          <button 
            className={`px-4 py-2 rounded-full ${filter === "smart" ? "bg-primary text-primary-foreground" : "bg-card border border-border hover:bg-card/80"} text-sm font-medium transition-colors`}
            onClick={() => setFilter("smart")}
          >
            Smart TVs
          </button>
        </motion.div>
        
        {/* Setup guides grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
          {setupGuides
            .filter(guide => filter === "all" || guide.category === filter)
            .map((guide, index) => (
            <SetupGuideCard 
              key={guide.title}
              title={guide.title}
              description={guide.description}
              icon={guide.icon}
              steps={guide.steps}
              downloadUrl={guide.downloadUrl}
              downloadLabel={guide.downloadLabel}
              imageUrl={guide.imageUrl}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        {/* Additional resources */}
        <motion.div 
          className="bg-card/50 border border-border rounded-xl p-4 sm:p-6 md:p-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center">Additional Resources</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {additionalResources.map((resource, index) => (
              <motion.a 
                key={resource.title}
                href={resource.url}
                className="block p-3 sm:p-4 bg-background border border-border rounded-lg hover:border-primary transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
              >
                <h4 className="text-sm sm:text-base font-medium mb-1 sm:mb-2">{resource.title}</h4>
                <p className="text-sm text-muted-foreground">{resource.description}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
        
        {/* Support message */}
        <motion.div 
          className="mt-8 sm:mt-10 md:mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-sm sm:text-base text-muted-foreground">
            Need personalized assistance with setup? Our support team is available 24/7.
          </p>
          <div className="mt-3 sm:mt-4">
            <TrialRequestButton asLink={true} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
