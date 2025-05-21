import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "components/Navigation";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Toaster } from "sonner";
import { applyDarkTheme } from "../utils/theme";
import { useEffect } from "react";
import { SEO } from "../components/SEO";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "@/components/ui/accordion";

export default function FAQ() {
  const navigate = useNavigate();
  
  // Apply dark theme on mount
  useEffect(() => {
    applyDarkTheme();
  }, []);
  const [openCategory, setOpenCategory] = useState<string | null>("general");
  
  const faqCategories = [
    {
      id: "general",
      title: "General Information",
      questions: [
        {
          question: "What is LouFrank TV?",
          answer: "LouFrank TV is a premium IPTV service offering over 16,000 HD and FHD channels from more than 50 countries. We provide ultra-fast zapping, no freezing, and access to over 50,000 on-demand movies and TV series."
        },
        {
          question: "How does IPTV work?",
          answer: "Internet Protocol Television (IPTV) delivers television content over Internet Protocol (IP) networks. Unlike traditional TV that receives broadcast signals via antenna, cable or satellite, IPTV streams content directly through your internet connection to your device."
        },
        {
          question: "What internet speed do I need for LouFrank TV?",
          answer: "For optimal performance, we recommend an internet connection of at least 25 Mbps for HD content and 50 Mbps for FHD/4K content. A stable connection is more important than raw speed for smooth streaming experience."
        }
      ]
    },
    {
      id: "subscription",
      title: "Subscriptions & Pricing",
      questions: [
        {
          question: "What subscription plans do you offer?",
          answer: "LouFrank TV offers flexible subscription plans with varying numbers of connections, starting at $15 for one connection. All plans include access to our full channel lineup, video-on-demand library, and premium support. Visit our Pricing page for current rates and promotions."
        },
        {
          question: "Can I try before I subscribe?",
          answer: "Yes! We offer a FREE trial for 36 hours that gives you full access to our services. This allows you to test compatibility with your devices and experience our channel quality before committing to a subscription."
        },
        {
          question: "How many devices can I use with one subscription?",
          answer: "Depending on your subscription plan, you can use LouFrank TV on 1, 2, 3, or more devices simultaneously. Each connection allows you to stream on one device at a time."
        },
        {
          question: "How do I pay for my subscription?",
          answer: "We accept PayPal, Venmo, Cash App, and Zelle for payment. All transactions are processed securely through these payment services."
        },
        {
          question: "Is there a contract or commitment?",
          answer: "No, LouFrank TV operates on a flexible, pay-as-you-go model. There are no long-term contracts or commitments. You can cancel your subscription at any time."
        }
      ]
    },
    {
      id: "technical",
      title: "Technical Support & Setup",
      questions: [
        {
          question: "Which devices are compatible with LouFrank TV?",
          answer: "LouFrank TV is compatible with a wide range of devices including Firestick, Apple TV, Android devices, Smart TVs, PCs, tablets, MAG boxes, and smartphones. Any device that can run IPTV player applications can typically work with our service."
        },
        {
          question: "How do I set up LouFrank TV on my device?",
          answer: "Setup is simple and varies slightly by device. Generally, you'll need to download an IPTV player app on your device, then enter your LouFrank TV credentials. We provide detailed setup guides for all supported devices in our Setup Guide section."
        },
        {
          question: "What apps do you recommend for watching?",
          answer: "For Android/Firestick, we recommend the LouFrank TV Player (our custom app) or TiviMate. For iOS/Apple TV, we recommend IPTV Smarters or GSE Smart IPTV. For other platforms, VLC Player or Perfect Player work well. Full recommendations are available in our setup guides."
        },
        {
          question: "My stream is buffering or freezing. How can I fix it?",
          answer: "First, check your internet connection speed and stability. Try connecting via ethernet instead of WiFi if possible. Restart your device and router. Make sure no other bandwidth-heavy services are running simultaneously. If issues persist, contact our 24/7 support team."
        },
        {
          question: "Do you provide EPG (TV Guide) services?",
          answer: "Yes, all our subscriptions include a comprehensive electronic program guide (EPG) that shows program schedules for most channels. The guide is updated regularly and works with compatible IPTV players."
        }
      ]
    },
    {
      id: "content",
      title: "Channels & Content",
      questions: [
        {
          question: "How many channels do you offer?",
          answer: "LouFrank TV provides access to over 16,000 live TV channels in HD and FHD quality from more than 50 countries worldwide. Our library is constantly updated with new channels."
        },
        {
          question: "What types of channels are available?",
          answer: "We offer a comprehensive selection including sports, news, entertainment, movies, documentaries, kids programming, music channels, and international channels from around the world. Premium channels that would normally require separate subscriptions are included."
        },
        {
          question: "Do you offer video-on-demand content?",
          answer: "Yes, in addition to live TV channels, we provide over 50,000 on-demand movies and TV series that you can watch anytime. Our VOD library is regularly updated with new releases."
        },
        {
          question: "Can I request specific channels to be added?",
          answer: "We're always looking to improve our channel lineup. You can request specific channels through our customer support, and we'll do our best to add them when possible."
        },
        {
          question: "Do you provide sports packages?",
          answer: "Yes, our service includes comprehensive sports coverage from around the world, including premium sports channels, PPV events, and sports packages that would typically require separate subscriptions."
        }
      ]
    },
    {
      id: "account",
      title: "Account Management",
      questions: [
        {
          question: "How do I change my password?",
          answer: "You can change your password by logging into your account on our website and navigating to the Account Settings section. If you're having trouble accessing your account, contact our support team."
        },
        {
          question: "Can I share my subscription with family members?",
          answer: "Yes, depending on your subscription plan, you can use LouFrank TV on multiple devices simultaneously. However, sharing your account with people outside your household is against our terms of service."
        },
        {
          question: "How do I cancel my subscription?",
          answer: "You can cancel your subscription at any time by logging into your account on our website and navigating to the Subscription section. Your service will continue until the end of your current billing period."
        },
        {
          question: "What happens if I forget my username or password?",
          answer: "If you forget your login credentials, you can use the 'Forgot Password' option on our login page. Alternatively, contact our customer support team, and they'll assist you in recovering your account."
        }
      ]
    }
  ];

  // Function to toggle active category
  const toggleCategory = (categoryId: string) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <SEO 
        pageName="faq" 
        customDescription="Find answers to frequently asked questions about LouFrank TV's premium IPTV service, setup guides, pricing, channels, and technical support."
        customMetaTags={[
          { property: "og:type", content: "website" },
          { property: "og:title", content: "Frequently Asked Questions | LouFrank TV" },
          { property: "og:description", content: "Answers to common questions about LouFrank TV premium IPTV service" }
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "FAQ", url: "/FAQ" }
        ]}
      />
      <Navigation />
      <main className="flex-1 relative overflow-hidden">
      {/* Premium background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-[#050118]/90 to-black/95 z-0"></div>
      
      {/* Decorative lighting effects */}
      <div className="absolute top-0 right-1/4 w-1/2 h-1/2 bg-gradient-radial from-secondary/10 to-transparent blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-gradient-radial from-primary/10 to-transparent blur-3xl z-0"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute top-1/5 left-1/3 w-1 h-1 rounded-full bg-yellow-500/30 animate-float-medium"></div>
        <div className="absolute bottom-1/3 right-1/5 w-1 h-1 rounded-full bg-primary/30 animate-float-slow"></div>
        <div className="absolute top-2/3 left-1/5 w-2 h-2 rounded-full bg-secondary/20 animate-float-reverse"></div>
      </div>
      
      {/* Star pattern background */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(white_1px,transparent_0)] bg-[size:20px_20px] z-0"></div>
      
      <div className="container px-4 sm:px-6 py-8 relative z-10">
        <Breadcrumbs 
          items={[
            { name: "Home", url: "/" },
            { name: "FAQ", url: "/FAQ" }
          ]}
          className="mb-8"
        />
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-secondary via-yellow-400 to-primary animate-gradient-flow">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground text-lg mb-4">
            Find answers to common questions about LouFrank TV's premium IPTV service.
            Can't find what you're looking for? <a href="Contact" className="text-primary hover:underline">Contact our support team</a>.
          </p>
          <Button 
            onClick={() => navigate('/')} 
            className="bg-gradient-to-r from-primary/80 to-secondary/80 hover:from-primary hover:to-secondary transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Return to Home
          </Button>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => toggleCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${openCategory === category.id 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-card/30 text-muted-foreground hover:bg-primary/20'}`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* FAQ Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {faqCategories.map((category) => (
              <div 
                key={category.id} 
                className={`${openCategory === category.id ? 'block' : 'hidden'}`}
              >
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="bg-card/30 backdrop-blur-md border border-primary/20 mb-4 rounded-lg overflow-hidden"
                    >
                      <AccordionTrigger className="px-6 py-4 text-left hover:bg-primary/10 text-lg font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4 text-muted-foreground">
                        <div className="prose prose-invert max-w-none">
                          {faq.answer}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </motion.div>
          
          {/* Still need help section */}
          <motion.div
            className="mt-16 text-center bg-card/30 backdrop-blur-md p-8 rounded-lg border border-primary/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-4">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our support team is available 24/7 to help you with any questions or issues you may have.
            </p>
            <a 
              href="Contact"
              className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-500 text-white font-medium"
            >
              Contact Support
            </a>
          </motion.div>
        </div>
      </div>
      <Toaster position="top-right" theme="dark" richColors />
    </main>
    </div>
  );
}
