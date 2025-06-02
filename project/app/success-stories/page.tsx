'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { toast } from '@/components/ui/use-toast';

const API_BASE_URL = 'http://localhost:8000';

// Function to safely construct image URL
const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return '/images/placeholder.jpg';
  
  // If the image path is already a full URL, return it
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  
  // If the image path starts with a slash, remove it to avoid double slashes
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  return `${API_BASE_URL}/media/${cleanPath}`;
};

export default function SuccessStoriesPage() {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/success-stories/`);
        const data = await response.json();
        setStories(data);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load success stories. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchStories();
  }, []);

  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-primary mb-4">Success Stories</h1>
        <p className="text-lg text-muted-foreground">
          Real results for real businesses. Explore how we've helped our clients achieve their goals.
        </p>
      </div>

      {isLoading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading success stories...</p>
        </div>
      ) : stories.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No success stories available at the moment.</p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2">
          {stories.map((story, index) => (
            <div key={story.id}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 w-full">
                  <Image 
                    src={getImageUrl(story.image)}
                    alt={story.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {story.service_type}
                  </div>
                </div>
                <CardHeader>
                  <h2 className="text-xl font-semibold">{story.title}</h2>
                  <CardDescription>
                    {story.client_name}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <blockquote className="italic text-muted-foreground border-l-2 border-primary/20 pl-4">
                    "{story.description}"
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
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-16 max-w-3xl mx-auto text-center py-8 px-6 rounded-lg bg-secondary">
        <h2 className="text-2xl font-semibold mb-4">Ready to become our next success story?</h2>
        <p className="mb-6 text-muted-foreground">
          Let's discuss how we can help your business achieve similar results.
        </p>
        <Link href="/inquiry">
          <Button size="lg" variant="default">
            Start Your Project
          </Button>
        </Link>
      </div>
    </div>
  );
}