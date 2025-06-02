'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Database, Globe, HardDrive, BarChart3, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { staggerContainer, fadeIn } from '@/lib/animations';

const services = [
  {
    icon: <Database className="h-8 w-8 text-chart-1" />,
    title: "ERP Consulting",
    description: "Streamline operations with custom ERP solutions that grow with your business.",
  },
  {
    icon: <Globe className="h-8 w-8 text-chart-2" />,
    title: "Website Development",
    description: "Create a powerful online presence with custom websites designed for results.",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-chart-3" />,
    title: "Data Dashboards",
    description: "Transform your data into actionable insights with custom reporting solutions.",
  },
  {
    icon: <HardDrive className="h-8 w-8 text-chart-4" />,
    title: "Local IT Setup",
    description: "Comprehensive IT solutions tailored to your local business needs.",
  },
];

export default function ServiceSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">What We Do</h2>
          <p className="text-lg text-muted-foreground">
            We provide practical IT solutions that help businesses operate more efficiently and grow sustainably.
          </p>
        </motion.div>

        <motion.div 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={fadeIn}
              custom={index}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="h-full flex flex-col border-2 hover:border-primary/20 transition-all duration-300">
                <CardHeader>
                  <div className="mb-2">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Link href="/services" className="w-full">
                    <Button variant="outline" className="w-full group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}