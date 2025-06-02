'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Database, Globe, HardDrive, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import { staggerContainer, fadeIn } from '../../lib/animations';

const services = [
  {
    id: 'erp',
    title: 'ERP Consulting',
    icon: <Database className="h-10 w-10 text-chart-1" />,
    description: 'Streamline your operations with tailored ERP solutions',
    points: [
      'Business process analysis and optimization',
      'ERP system selection and implementation',
      'Data migration and system integration',
      'Training and ongoing support'
    ]
  },
  {
    id: 'web',
    title: 'Website Development',
    icon: <Globe className="h-10 w-10 text-chart-2" />,
    description: 'Custom websites that drive results for your business',
    points: [
      'Responsive, mobile-friendly designs',
      'Content management systems',
      'E-commerce solutions',
      'SEO optimization'
    ]
  },
  {
    id: 'dashboard',
    title: 'Data Dashboards',
    icon: <BarChart3 className="h-10 w-10 text-chart-3" />,
    description: 'Turn your data into actionable insights',
    points: [
      'Custom Power BI dashboards',
      'Looker Studio implementation',
      'Data source integration',
      'Automated reporting solutions'
    ]
  },
  {
    id: 'it',
    title: 'Local IT Setup',
    icon: <HardDrive className="h-10 w-10 text-chart-4" />,
    description: 'Comprehensive IT solutions for local businesses',
    points: [
      'Network setup and optimization',
      'Hardware procurement and setup',
      'Cloud integration services',
      'Ongoing IT support'
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-3xl mx-auto text-center mb-12"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1 className="text-4xl font-bold tracking-tight text-primary mb-4">Our Services</h1>
        <p className="text-lg text-muted-foreground">
          Practical IT solutions designed to help your business grow and succeed
        </p>
      </motion.div>

      <motion.div 
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-2"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {services.map((service, index) => (
          <motion.div key={service.id} variants={fadeIn} custom={index}>
            <Card className="h-full transition-all duration-300 hover:shadow-lg overflow-hidden border-2 hover:border-primary/20">
              <CardHeader className="pb-2">
                <div className="mb-3">{service.icon}</div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary/70"></div>
                      <span className="text-sm text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/inquiry" className="w-full">
                  <Button className="w-full group">
                    Enquire Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Button>
                </Link>
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
        <h2 className="text-2xl font-semibold mb-4">Not sure what you need?</h2>
        <p className="mb-6 text-muted-foreground">
          Get in touch for a free consultation to discuss your business needs and how we can help.
        </p>
        <Link href="/inquiry">
          <Button size="lg" variant="default">
            Book a Free Consultation
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}