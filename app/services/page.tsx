'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Database, Globe, HardDrive, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import { staggerContainer, fadeIn } from '../utils/animations';

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
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Our Services</h1>
      <div className="prose max-w-none">
        <p>
          Discover our comprehensive range of IT services designed to help your
          business thrive in the digital age.
        </p>
      </div>
    </main>
  );
}