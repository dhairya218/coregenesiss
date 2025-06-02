'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import ConsultModal from '@/components/modals/consult-modal';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Success Stories', href: '/success-stories' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Contact', href: '/inquiry' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-200",
          isScrolled 
            ? "bg-background/95 backdrop-blur-sm shadow-sm py-3" 
            : "bg-transparent py-5"
        )}
      >
        <div className="container flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold">Coregenesis</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors relative",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-primary w-full"
                    layoutId="navbar-indicator"
                    transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="default" onClick={() => setIsConsultOpen(true)}>
              Book a Free Consult
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px] pt-12">
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "px-4 py-2 text-sm font-medium transition-colors rounded-md",
                        pathname === item.href
                          ? "bg-secondary text-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button 
                    className="mt-4" 
                    onClick={() => {
                      setMobileOpen(false);
                      setIsConsultOpen(true);
                    }}
                  >
                    Book a Free Consult
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      
      <ConsultModal 
        open={isConsultOpen} 
        onOpenChange={setIsConsultOpen} 
      />
    </>
  );
}