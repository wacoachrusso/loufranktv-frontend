import React from "react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { SEO } from "../components/SEO";
import { Navigation } from "components/Navigation";
import { Footer } from "components/Footer";
import { Toaster } from "sonner";

export default function RefundPolicy() {
  return (
    <div className="flex flex-col min-h-screen text-foreground overflow-x-hidden overflow-y-visible relative max-w-[100vw]">
      <SEO 
        pageName="refund-policy" 
        customTitle="Refund Policy - LouFrank TV" 
        customDescription="Refund policy for LouFrank TV's premium IPTV service."
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Refund Policy", url: "/RefundPolicy" }
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
              { name: "Refund Policy", url: "/RefundPolicy" }
            ]}
            className="mb-8"
          />
        </div>
        
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Refund Policy</h1>
          
          <div className="max-w-3xl mx-auto bg-background/40 backdrop-blur-sm rounded-xl border border-border/40 p-6 md:p-8 shadow-xl">
            <div className="prose prose-invert max-w-none">
              <p><strong>Last Updated:</strong> March 6, 2025</p>
              
              <h2>1. Trial Period</h2>
              <p>
                LouFrank TV offers a $1 trial period of 36 hours. If you decide not to continue with our service after the trial period, no additional charges will be applied and no refund is necessary for the trial fee.
              </p>
              
              <h2>2. Regular Subscriptions</h2>
              <p>
                2.1. Due to the nature of our digital service, all subscription payments are generally non-refundable once the service period has begun.
              </p>
              <p>
                2.2. We recommend utilizing our trial period to ensure our service meets your needs before committing to a full subscription.
              </p>
              
              <h2>3. Technical Issues</h2>
              <p>
                3.1. If you experience persistent technical issues that significantly impair your ability to use our service, and our technical support team is unable to resolve these issues within 72 hours, you may be eligible for a partial or full refund at our discretion.
              </p>
              <p>
                3.2. To request a refund due to technical issues:
              </p>
              <ul>
                <li>Contact our support team at support@loufrankiptv.com</li>
                <li>Provide detailed information about the technical issues encountered</li>
                <li>Include information about the troubleshooting steps you've already taken</li>
                <li>Our team will review your case and respond within 48 hours</li>
              </ul>
              
              <h2>4. Service Outages</h2>
              <p>
                4.1. In the event of extended service outages affecting a significant portion of our channel offerings (more than 24 continuous hours), we may offer service credit or partial refunds proportional to the duration of the outage.
              </p>
              <p>
                4.2. Service credits or refunds for outages are provided at our discretion and are not automatic.
              </p>
              
              <h2>5. Subscription Cancellation</h2>
              <p>
                5.1. You may cancel your subscription at any time through your account settings.
              </p>
              <p>
                5.2. Cancellation will stop future billing but does not entitle you to a refund for the current billing period.
              </p>
              <p>
                5.3. Your service will remain active until the end of your current billing period.
              </p>
              
              <h2>6. Special Circumstances</h2>
              <p>
                We understand that exceptional circumstances may arise. If you believe you are entitled to a refund for a reason not covered by this policy, please contact our customer support team, and we will review your case individually.
              </p>
              
              <h2>7. Changes to This Policy</h2>
              <p>
                We may update our Refund Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
              </p>
              
              <h2>8. Contact Us</h2>
              <p>
                If you have any questions about this Refund Policy, please contact us at support@loufrankiptv.com.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
