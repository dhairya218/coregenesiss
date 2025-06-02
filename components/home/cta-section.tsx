'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { fadeIn } from '@/lib/animations';

export default function CtaSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl p-8 sm:p-12 shadow-sm relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-10 right-10 w-40 h-40 bg-chart-1/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-chart-2/10 rounded-full blur-3xl"></div>
          </div>
          
          {/* Content */}
          <div className="relative text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our practical IT solutions can help your business grow, 
              improve efficiency, and achieve your goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/inquiry">
                <Button size="lg" className="w-full sm:w-auto group">
                  Let's Talk
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}