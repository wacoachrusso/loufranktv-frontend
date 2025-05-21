import { motion } from "framer-motion";
import { Star, StarHalf } from "lucide-react";
import { LazyImage } from "./LazyImage";
import { TrialRequestButton } from "./TrialRequestButton";

interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  avatarUrl?: string;
  highlight?: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Michael Rodriguez",
    location: "Dallas, TX",
    quote: "Switching to LouFrank TV was the best decision I've made. The picture quality is outstanding and I never experience buffering even during peak hours. Their customer service is exceptional too!",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2952&auto=format&fit=crop",
    highlight: true
  },
  {
    id: "2",
    name: "Sarah Johnson",
    location: "Miami, FL",
    quote: "After trying multiple IPTV services, LouFrank TV stands out with its reliability and channel selection. No more missing my favorite shows due to outages. Highly recommended!",
    rating: 4.5,
  },
  {
    id: "3",
    name: "David Chen",
    location: "Los Angeles, CA",
    quote: "The international channel selection is impressive. As someone who watches shows from multiple countries, having access to over 16,000 channels from 50+ countries in one place is perfect.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop",
  },
  {
    id: "4",
    name: "Emily Parker",
    location: "Chicago, IL",
    quote: "The on-demand library is massive and regularly updated. My kids love the children's content, and I love having access to new releases so quickly. Worth every penny.",
    rating: 5,
  },
  {
    id: "5",
    name: "James Wilson",
    location: "Atlanta, GA",
    quote: "Ultra-fast channel switching is no joke. My previous provider had a 2-3 second delay when changing channels, but with LouFrank TV it's instant. The app interface is intuitive too.",
    rating: 4.5,
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop",
  }
];

function RatingStars({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star key={`star-${i}`} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
      ))}
      {hasHalfStar && <StarHalf className="w-4 h-4 fill-yellow-500 text-yellow-500" />}
      <span className="text-sm text-muted-foreground ml-1">{rating.toFixed(1)}</span>
    </div>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  const cardVariants = {
    hover: { y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)" },
  };
  return (
    <motion.div
      className={`p-6 rounded-lg ${testimonial.highlight 
        ? 'bg-gradient-to-br from-primary/20 via-purple-500/10 to-primary-foreground/5 border border-primary/20' 
        : 'bg-card/30 backdrop-blur-sm border border-border/40'} 
        flex flex-col h-full transition-all duration-300 hover:border-primary/20 shadow-lg`}
      variants={cardVariants}
      whileHover="hover"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <div className="flex items-start mb-4">
        {testimonial.avatarUrl ? (
          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 border border-primary/20">
            <LazyImage 
              src={testimonial.avatarUrl || ''} 
              alt={`${testimonial.name}'s avatar`} 
              className="w-full h-full object-cover"
              threshold={0.2}
              delay={0.1 * index}
              placeholder={`data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzExMSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjIwIiBmaWxsPSIjNkI2MUZGIj4ke3Rlc3RpbW9uaWFsLm5hbWUuY2hhckF0KDApfTwvdGV4dD48L3N2Zz4=`}
            />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary-foreground mr-4">
            {testimonial.name.charAt(0)}
          </div>
        )}
        <div>
          <h4 className="font-medium">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
          <RatingStars rating={testimonial.rating} />
        </div>
      </div>

      <blockquote className="flex-1">
        <p className="text-sm italic text-muted-foreground leading-relaxed">"{testimonial.quote}"</p>
      </blockquote>
    </motion.div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 relative overflow-hidden">
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
      <div className="container px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-secondary via-yellow-400 to-primary animate-gradient-flow">What Our Customers Say</h2>
          <p className="text-muted-foreground">
            Join thousands of satisfied viewers who have made the switch to premium entertainment with LouFrank TV.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
        
        <motion.div
          className="text-center mt-12 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-muted-foreground">
            Experience the LouFrank TV difference for yourself.
          </p>
          <TrialRequestButton asLink={true}>
            Try our $1 trial now
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300">
              <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
            </svg>
          </TrialRequestButton>
        </motion.div>
      </div>
    </section>
  );
}
