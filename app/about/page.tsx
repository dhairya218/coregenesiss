'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeIn } from '../utils/animations';

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <div className="prose max-w-none">
        <p>
          Welcome to CoreGenesis, your trusted partner in digital transformation.
          We are a team of passionate technologists dedicated to helping businesses
          thrive in the digital age.
        </p>
        <p>
          Our mission is to empower organizations with innovative solutions that
          drive growth, efficiency, and success in an ever-evolving digital
          landscape.
        </p>
      </div>
    </main>
  );
}