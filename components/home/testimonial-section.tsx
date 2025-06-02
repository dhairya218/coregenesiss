'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { fadeIn } from '@/lib/animations';

const testimonials = [
  {
    quote: "Coregenesis transformed our online presence with a beautifully designed website that actually converts visitors into customers. Their practical approach and focus on results made all the difference.",
    name: "Sarah Johnson",
    role: "CEO, Urban Essentials",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
  },
  {
    quote: "The ERP implementation was smoother than we could have imagined. Their team took the time to understand our unique processes and delivered a system that has increased our efficiency by 40%.",
    name: "Michael Chen",
    role: "Operations Director, PrecisionCraft",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
  },
  {
    quote: "Working with Coregenesis on our data dashboard project gave us insights we never had before. Now we can make decisions based on real-time data instead of guesswork.",
    name: "Jessica Williams",
    role: "Marketing Manager, Green Future Initiative",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
  },
  {
    quote: "Their local IT support has been invaluable for our growing firm. They're responsive, knowledgeable, and actually explain technical issues in terms we can understand.",
    name: "David Miller",
    role: "Partner, Mitchell & Associates",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
  }
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0
    })
  };

  const nextTestimonial = () => {
    setDirection(1);
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto-advance carousel
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      nextTestimonial();
    }, 6000);

    return () => {
      resetTimeout();
    };
  }, [current]);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return (
    <section className="py-16 bg-secondary/50">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Client Testimonials</h2>
          <p className="text-lg text-muted-foreground">
            Hear what our clients have to say about working with us.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden py-6">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 }
                }}
                className="relative"
              >
                <Card className="border-none bg-transparent shadow-none">
                  <CardContent className="flex flex-col items-center p-6">
                    <Quote className="h-12 w-12 text-primary/20 mb-6" />
                    <blockquote className="text-center text-xl italic font-medium text-foreground mb-6">
                      "{testimonials[current].quote}"
                    </blockquote>
                    
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonials[current].image} 
                          alt={testimonials[current].name} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="text-left">
                        <div className="font-semibold">{testimonials[current].name}</div>
                        <div className="text-sm text-muted-foreground">{testimonials[current].role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
              <Button
                variant="ghost" 
                size="icon" 
                className="h-10 w-10 rounded-full bg-background/50 backdrop-blur-sm shadow-sm pointer-events-auto"
                onClick={prevTestimonial}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-10 w-10 rounded-full bg-background/50 backdrop-blur-sm shadow-sm pointer-events-auto"
                onClick={nextTestimonial}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Dots indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current ? 'w-6 bg-primary' : 'w-2 bg-primary/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}