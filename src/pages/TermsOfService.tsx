import React from "react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { SEO } from "../components/SEO";
import { Navigation } from "components/Navigation";
import { Footer } from "components/Footer";
import { Toaster } from "sonner";

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen text-foreground overflow-x-hidden overflow-y-visible relative max-w-[100vw]">
      <SEO 
        pageName="terms-of-service" 
        customTitle="Terms of Service - LouFrank TV" 
        customDescription="Terms and conditions for using LouFrank TV's premium IPTV service."
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Terms of Service", url: "/TermsOfService" }
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
              { name: "Terms of Service", url: "/TermsOfService" }
            ]}
            className="mb-8"
          />
        </div>
        
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Terms of Service</h1>
          
          <div className="max-w-3xl mx-auto bg-background/40 backdrop-blur-sm rounded-xl border border-border/40 p-6 md:p-8 shadow-xl">
            <div className="prose prose-invert max-w-none">
              <p><strong>Last Updated:</strong> March 6, 2025</p>
              
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using LouFrank TV's services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.
              </p>
              
              <h2>2. Service Description</h2>
              <p>
                LouFrank TV provides access to streaming television channels and on-demand content via internet protocol television (IPTV) technology. Our service is available on various devices including but not limited to Firestick, Apple products, Smart TVs, PCs, tablets, MAG boxes, and smartphones.
              </p>
              
              <h2>3. Subscription and Billing</h2>
              <p>
                3.1. Our service requires a paid subscription.
              </p>
              <p>
                3.2. All subscription fees are non-refundable except as specifically provided in our Refund Policy.
              </p>
              <p>
                3.3. We reserve the right to change subscription pricing with appropriate notice to subscribers.
              </p>
              
              <h2>4. User Responsibilities</h2>
              <p>
                4.1. You are responsible for maintaining the confidentiality of your account information.
              </p>
              <p>
                4.2. You agree to use our service only for lawful purposes and in accordance with these Terms.
              </p>
              <p>
                4.3. You may not share your subscription credentials with individuals outside your household.
              </p>
              
              <h2>5. Content Usage Rights</h2>
              <p>
                5.1. The content provided through our service is licensed, not sold, to you for personal, non-commercial use only.
              </p>
              <p>
                5.2. You may not redistribute, broadcast, or publicly perform any content accessed through our service.
              </p>
              
              <h2>6. Service Availability</h2>
              <p>
                6.1. We strive to provide uninterrupted service, but do not guarantee that the service will be available at all times.
              </p>
              <p>
                6.2. We are not liable for any service interruptions or technical difficulties you may experience.
              </p>
              
              <h2>7. Termination</h2>
              <p>
                7.1. We reserve the right to terminate or suspend your account for violation of these Terms.
              </p>
              <p>
                7.2. You may cancel your subscription at any time through your account settings.
              </p>
              
              <h2>8. Limitation of Liability</h2>
              <p>
                8.1. To the maximum extent permitted by law, LouFrank TV shall not be liable for any indirect, incidental, special, consequential, or punitive damages.
              </p>
              
              <h2>9. Changes to Terms</h2>
              <p>
                9.1. We reserve the right to modify these Terms at any time. Continued use of our service after such modifications constitutes acceptance of the updated Terms.
              </p>
              
              <h2>10. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at support@loufrankiptv.com.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
