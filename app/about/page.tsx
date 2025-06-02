'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeIn } from '@/lib/animations';

export default function AboutPage() {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-3xl mx-auto text-center mb-12"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1 className="text-4xl font-bold tracking-tight text-primary mb-4">About Coregenesis</h1>
        <p className="text-lg text-muted-foreground">
          Practical IT solutions without the buzzwords.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
          <p className="text-muted-foreground mb-4">
            At Coregenesis, we believe in practical solutions that deliver real business value. No jargon, 
            no unnecessary complexity - just straightforward IT services that work for your business.
          </p>
          <p className="text-muted-foreground mb-4">
            Founded with a commitment to local businesses, we bring enterprise-level expertise to companies 
            of all sizes, ensuring you have the technology foundation to thrive in today's digital landscape.
          </p>
          <p className="text-muted-foreground mb-6">
            Our founder has over 15 years of experience working with businesses across various sectors,
            bringing a wealth of knowledge and practical insights to every project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 rounded-lg bg-secondary p-6">
              <h3 className="font-medium mb-2">Our Mission</h3>
              <p className="text-sm text-muted-foreground">To provide practical, efficient IT solutions that help businesses grow and succeed.</p>
            </div>
            <div className="flex-1 rounded-lg bg-secondary p-6">
              <h3 className="font-medium mb-2">Our Values</h3>
              <p className="text-sm text-muted-foreground">Integrity, transparency, excellence, and commitment to client success.</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="relative h-[400px] rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image 
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg" 
            alt="Coregenesis Team" 
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
          />
        </motion.div>
      </div>
      
      <motion.div 
        className="mt-16 bg-card p-8 rounded-lg shadow"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Why Choose Coregenesis?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-background p-6 rounded-md shadow-sm">
            <h3 className="font-medium mb-2">Local Expertise</h3>
            <p className="text-sm text-muted-foreground">Based locally, we understand the unique challenges facing businesses in our community.</p>
          </div>
          <div className="bg-background p-6 rounded-md shadow-sm">
            <h3 className="font-medium mb-2">Practical Solutions</h3>
            <p className="text-sm text-muted-foreground">We focus on what works, not what's trendy. Our solutions are designed for real-world business needs.</p>
          </div>
          <div className="bg-background p-6 rounded-md shadow-sm">
            <h3 className="font-medium mb-2">Personalized Service</h3>
            <p className="text-sm text-muted-foreground">We take the time to understand your business and tailor our solutions to your specific requirements.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}