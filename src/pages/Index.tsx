
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ScreenshotsCarousel from '@/components/ScreenshotsCarousel';
import HowToPlaySection from '@/components/HowToPlaySection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';
import AnimatedParticles from '@/components/AnimatedParticles';

const Index = () => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Add jungle/zoo themed gradient background
    document.body.style.background = 'linear-gradient(135deg, #81c784 0%, #66bb6a 25%, #4caf50 50%, #43a047 75%, #388e3c 100%)';
    
    return () => {
      document.body.style.background = '';
    };
  }, []);

  const playSound = () => {
    // Placeholder for animal sound effects
    console.log('🦁 Animal sound effect played!');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedParticles />

      <HeroSection onPlayClick={playSound} />
      <FeaturesSection />
      <ScreenshotsCarousel />
      <HowToPlaySection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
