import React from "react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { SEO } from "../components/SEO";
import { Navigation } from "components/Navigation";
import { Footer } from "components/Footer";
import { Toaster } from "sonner";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen text-foreground overflow-x-hidden overflow-y-visible relative max-w-[100vw]">
      <SEO
        pageName="privacy-policy"
        customTitle="Privacy Policy - LouFrank TV"
        customDescription="Privacy policy for LouFrank TV's premium IPTV service."
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Privacy Policy", url: "/PrivacyPolicy" }
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
              { name: "Privacy Policy", url: "/PrivacyPolicy" }
            ]}
            className="mb-8"
          />
        </div>
        
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Privacy Policy</h1>
          
          <div className="max-w-3xl mx-auto bg-background/40 backdrop-blur-sm rounded-xl border border-border/40 p-6 md:p-8 shadow-xl">
            <div className="prose prose-invert max-w-none">
              <p><strong>Last Updated:</strong> March 6, 2025</p>
              
              <h2>1. Introduction</h2>
              <p>
                LouFrank TV respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our IPTV service.
              </p>
              
              <h2>2. Information We Collect</h2>
              <p>
                2.1. <strong>Account Information:</strong> When you register, we collect your name, email address, billing address, and payment information.
              </p>
              <p>
                2.2. <strong>Device Information:</strong> We collect information about the devices you use to access our service, including device type, operating system, and IP address.
              </p>
              <p>
                2.3. <strong>Usage Information:</strong> We collect data about how you interact with our service, including viewing history, preferred channels, and service usage patterns.
              </p>
              
              <h2>3. How We Use Your Information</h2>
              <p>
                3.1. To provide and maintain our service
              </p>
              <p>
                3.2. To process payments and manage your subscription
              </p>
              <p>
                3.3. To improve our service and develop new features
              </p>
              <p>
                3.4. To communicate with you about your account or service updates
              </p>
              <p>
                3.5. To provide personalized content recommendations
              </p>
              
              <h2>4. Data Sharing and Disclosure</h2>
              <p>
                4.1. <strong>Service Providers:</strong> We may share information with third-party service providers who help us operate our business.
              </p>
              <p>
                4.2. <strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid requests by public authorities.
              </p>
              <p>
                4.3. <strong>Business Transfers:</strong> In the event of a merger, acquisition, or asset sale, your personal data may be transferred as a business asset.
              </p>
              
              <h2>5. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
              </p>
              
              <h2>6. Your Privacy Rights</h2>
              <p>
                Depending on your location, you may have rights regarding your personal data, including:
              </p>
              <ul>
                <li>The right to access your personal data</li>
                <li>The right to correct inaccurate data</li>
                <li>The right to delete your data</li>
                <li>The right to restrict or object to processing</li>
                <li>The right to data portability</li>
              </ul>
              
              <h2>7. Children's Privacy</h2>
              <p>
                Our service is not directed to individuals under 18 years of age, and we do not knowingly collect personal information from children.
              </p>
              
              <h2>8. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              
              <h2>9. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at support@loufrankiptv.com.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
