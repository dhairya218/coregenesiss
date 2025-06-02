'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ChevronUp, Mail, Phone } from 'lucide-react';
import { motion, useScroll, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';

export default function Footer() {
  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();

  useEffect(() => {
    const updateScrollToTopVisibility = () => {
      if (scrollYProgress.get() > 0.2) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: 10 });
      }
    };

    const unsubscribe = scrollYProgress.on('change', updateScrollToTopVisibility);
    updateScrollToTopVisibility();

    return () => unsubscribe();
  }, [scrollYProgress, controls]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-4">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-4">Coregenesis</h3>
            <p className="mb-4 text-muted-foreground">
              Practical IT solutions for modern businesses.
              <br />No buzzwords, just results.
            </p>
            <p className="text-sm text-muted-foreground">
              ABN: 12 345 678 901
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Success Stories', href: '/success-stories' },
                { label: 'FAQs', href: '/faqs' },
                { label: 'Contact', href: '/inquiry' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <a href="mailto:info@coregenesis.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  info@coregenesis.com
                </a>
              </li>
              <li className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-foreground transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="pt-3">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/inquiry">Get in Touch</Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Coregenesis. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-8 right-8 p-2 rounded-full bg-primary text-primary-foreground shadow-lg"
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 10 }}
        animate={controls}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronUp className="h-5 w-5" />
      </motion.button>
    </footer>
  );
}