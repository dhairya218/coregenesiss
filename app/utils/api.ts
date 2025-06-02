const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export interface ContactFormData {
  full_name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface SuccessStory {
  id: number;
  title: string;
  client_name: string;
  service_type: string;
  description: string;
  image: string | null;
}

export async function submitContactForm(data: ContactFormData) {
  try {
    const response = await fetch(`${API_BASE_URL}/contact/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to submit contact form');
    }

    return await response.json();
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
}

export async function getSuccessStories(): Promise<SuccessStory[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/stories/`);
    if (!response.ok) {
      throw new Error('Failed to fetch success stories');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching success stories:', error);
    throw error;
  }
} 