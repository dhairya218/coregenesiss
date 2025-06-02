'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { staggerContainer, fadeIn } from '@/lib/animations';

const successStories = [
  {
    id: 'web-1',
    title: 'E-Commerce Transformation',
    clientType: 'Retail Business',
    clientName: 'Urban Essentials',
    quote: "The new website increased our online sales by 150% in just three months. The team's attention to detail was exceptional.",
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    category: 'Web Development'
  },
  {
    id: 'web-2',
    title: 'Professional Services Portal',
    clientType: 'Law Firm',
    clientName: 'Mitchell & Associates',
    quote: "Our clients love the new booking system. It's streamlined our operations and reduced administrative work by 40%.",
    image: 'https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg',
    category: 'Web Development'
  },
  {
    id: 'web-3',
    title: 'Community Platform',
    clientType: 'Non-Profit Organization',
    clientName: 'Green Future Initiative',
    quote: "The platform has transformed how we engage with volunteers. User registrations have doubled since launch.",
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    category: 'Web Development'
  },
  {
    id: 'erp-1',
    title: 'Inventory Management System',
    clientType: 'Manufacturing Company',
    clientName: 'PrecisionCraft Industries',
    quote: "The ERP implementation reduced our inventory costs by 23% and improved order fulfillment times by 35%.",
    image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg',
    category: 'ERP Consulting'
  }
];

export default function SuccessStoriesPage() {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-3xl mx-auto text-center mb-12"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1 className="text-4xl font-bold tracking-tight text-primary mb-4">Success Stories</h1>
        <p className="text-lg text-muted-foreground">
          Real results for real businesses. Explore how we've helped our clients achieve their goals.
        </p>
      </motion.div>

      <motion.div 
        className="grid gap-8 md:grid-cols-2"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {successStories.map((story, index) => (
          <motion.div key={story.id} variants={fadeIn} custom={index}>
            <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative h-48 w-full">
                <Image 
                  src={story.image} 
                  alt={story.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                  {story.category}
                </div>
              </div>
              <CardHeader>
                <h2 className="text-xl font-semibold">{story.title}</h2>
                <CardDescription>
                  {story.clientType} - {story.clientName}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <blockquote className="italic text-muted-foreground border-l-2 border-primary/20 pl-4">
                  "{story.quote}"
                </blockquote>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button variant="ghost" size="sm" className="group" asChild>
                  <Link href="/inquiry">
                    Discuss your project
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div
        className="mt-16 max-w-3xl mx-auto text-center py-8 px-6 rounded-lg bg-secondary"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Ready to become our next success story?</h2>
        <p className="mb-6 text-muted-foreground">
          Let's discuss how we can help your business achieve similar results.
        </p>
        <Link href="/inquiry">
          <Button size="lg" variant="default">
            Start Your Project
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}