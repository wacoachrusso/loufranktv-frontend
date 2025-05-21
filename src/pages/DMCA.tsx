import React from "react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { SEO } from "../components/SEO";
import { Navigation } from "components/Navigation";
import { Footer } from "components/Footer";
import { Toaster } from "sonner";

export default function DMCA() {
  return (
    <div className="flex flex-col min-h-screen text-foreground overflow-x-hidden overflow-y-visible relative max-w-[100vw]">
      <SEO 
        pageName="dmca-policy" 
        customTitle="DMCA Policy - LouFrank TV" 
        customDescription="Digital Millennium Copyright Act policy for LouFrank TV's premium IPTV service."
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "DMCA Policy", url: "/DMCA" }
        ]}
      />
      
      {/* Premium Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-[#050118] z-[-2]"></div>
      
      {/* Animated subtle gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-tr from-primary/5 via-secondary/5 to-purple-500/5 z-[-1] animate-gradient-slow"></div>
      
      {/* Radial glow effect */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[120%] aspect-square bg-gradient-radial from-primary/10 to-transparent opacity-50 blur-3xl z-[-1]"></div>
      
      {/* Moving particles effect - top layer */}
      <div className="fixed inset-0 z-[-1]" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-primary/40 animate-float-slow"></div>
        <div className="absolute top-3/4 left-2/3 w-1 h-1 rounded-full bg-secondary/40 animate-float-medium"></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 rounded-full bg-purple-500/30 animate-float-fast"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full bg-cyan-500/40 animate-float-reverse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 rounded-full bg-primary/30 animate-pulse-slow"></div>
      </div>
      
      <Navigation />
      <Toaster position="top-right" theme="dark" richColors />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs 
            items={[
              { name: "Home", url: "/" },
              { name: "DMCA Policy", url: "/DMCA" }
            ]}
            className="mb-8"
          />
        </div>
        
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">DMCA Policy</h1>
          
          <div className="max-w-3xl mx-auto bg-background/40 backdrop-blur-sm rounded-xl border border-border/40 p-6 md:p-8 shadow-xl">
            <div className="prose prose-invert max-w-none">
              <p><strong>Last Updated:</strong> March 6, 2025</p>
              
              <h2>1. Introduction</h2>
              <p>
                LouFrank TV respects the intellectual property rights of others and expects its users to do the same. In accordance with the Digital Millennium Copyright Act of 1998 (DMCA), we will respond expeditiously to claims of copyright infringement that are reported to our designated copyright agent.
              </p>
              
              <h2>2. Reporting Copyright Infringement</h2>
              <p>
                If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement and is accessible via our service, please notify our copyright agent as set forth in the DMCA. For your complaint to be valid under the DMCA, you must provide the following information when providing notice of the claimed copyright infringement:
              </p>
              <ul>
                <li>A physical or electronic signature of a person authorized to act on behalf of the copyright owner</li>
                <li>Identification of the copyrighted work claimed to have been infringed</li>
                <li>Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed</li>
                <li>Information reasonably sufficient to permit us to contact the complaining party, such as an address, telephone number, and, if available, an electronic mail address</li>
                <li>A statement that the complaining party "in good faith believes that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or law"</li>
                <li>A statement that the information in the notification is accurate, and under penalty of perjury, that the complaining party is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed</li>
              </ul>
              
              <h2>3. DMCA Counter-Notification Procedure</h2>
              <p>
                If you believe your content that was removed (or to which access was disabled) is not infringing, or that you have the authorization from the copyright owner, the copyright owner's agent, or pursuant to the law, to post and use the material in your content, you may send a counter-notification containing the following information to our copyright agent:
              </p>
              <ul>
                <li>Your physical or electronic signature</li>
                <li>Identification of the content that has been removed or to which access has been disabled and the location at which the content appeared before it was removed or disabled</li>
                <li>A statement that you have a good faith belief that the content was removed or disabled as a result of mistake or a misidentification of the content</li>
                <li>Your name, address, telephone number, and email address</li>
                <li>A statement that you consent to the jurisdiction of the federal court in the district where you live (if you are in the U.S.), or your consent to the jurisdiction of a U.S. federal court in the district where your service provider is located (if you are not in the U.S.)</li>
                <li>A statement that you will accept service of process from the person who provided notification of the alleged infringement</li>
              </ul>
              
              <h2>4. Repeat Infringer Policy</h2>
              <p>
                In accordance with the DMCA and other applicable law, we have adopted a policy of terminating, in appropriate circumstances and at our sole discretion, users who are deemed to be repeat infringers. We may also at our sole discretion limit access to our service and/or terminate the accounts of any users who infringe any intellectual property rights of others, whether or not there is any repeat infringement.
              </p>
              
              <h2>5. Contact Information</h2>
              <p>
                Our Designated Copyright Agent for DMCA notices is:
              </p>
              <p>
                LouFrank TV<br />
                Attn: DMCA Agent<br />
                Email: dmca@loufrankiptv.com
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
