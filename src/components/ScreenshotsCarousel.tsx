
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ScreenshotsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const screenshots = [
    {
      id: 1,
      title: 'Build Your Zoo',
      description: 'Design amazing habitats for your animals',
      emoji: '🏗️',
      gradient: 'from-blue-400 to-purple-500'
    },
    {
      id: 2,
      title: 'Happy Animals',
      description: 'Watch your animals play and interact',
      emoji: '🦁🐘🦒',
      gradient: 'from-green-400 to-blue-500'
    },
    {
      id: 3,
      title: 'Visitor Management',
      description: 'Keep your guests entertained and happy',
      emoji: '👥🎪',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      id: 4,
      title: 'Special Events',
      description: 'Host amazing shows and educational programs',
      emoji: '🎉🎭',
      gradient: 'from-pink-400 to-red-500'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section className="py-20 px-4 bg-white/10 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            📸 See It In Action
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Take a peek at the amazing gameplay and features waiting for you!
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {screenshots.map((screenshot, index) => (
                <div key={screenshot.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${screenshot.gradient} h-96 flex items-center justify-center relative`}>
                    <div className="text-center">
                      <div className="text-8xl mb-4 animate-bounce">
                        {screenshot.emoji}
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                        {screenshot.title}
                      </h3>
                      <p className="text-xl text-white/90 drop-shadow">
                        {screenshot.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {screenshots.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsCarousel;
