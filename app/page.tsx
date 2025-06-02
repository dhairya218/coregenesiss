import { Button } from '@/components/ui/button';
import Hero from '@/components/home/hero';
import ServiceSection from '@/components/home/service-section';
import TestimonialSection from '@/components/home/testimonial-section';
import CtaSection from '@/components/home/cta-section';

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceSection />
      <TestimonialSection />
      <CtaSection />
    </>
  );
}