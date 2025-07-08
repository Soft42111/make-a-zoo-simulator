
import { Play, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onPlayClick: () => void;
}

const HeroSection = ({ onPlayClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-orange-300 rounded-full opacity-50 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-pink-300 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
        <div className="absolute bottom-40 right-10 w-28 h-28 bg-purple-300 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3.5s' }}></div>
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto">
        {/* Logo and Title */}
        <div className="mb-8 animate-fade-in">
          <div className="mb-6">
            <img 
              src="/lovable-uploads/f811c0ca-a011-455b-9e1d-7dbfcfcd9d8e.png" 
              alt="Make a Zoo Simulator Logo" 
              className="w-80 h-80 mx-auto rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-lg">
            Make a Zoo
            <span className="block text-yellow-300 animate-pulse">Simulator</span>
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          🎮 Build your dream zoo, collect amazing animals, and create the ultimate wildlife adventure! 🌟
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            size="lg" 
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            onClick={onPlayClick}
          >
            <Play className="mr-2 h-6 w-6" />
            Play Now - FREE!
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white/90 hover:bg-white text-green-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Download className="mr-2 h-6 w-6" />
            Download
          </Button>
        </div>

        <div className="flex justify-center gap-4 text-white/80">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            <span>Family Friendly</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🏆</span>
            <span>Award Winning</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌟</span>
            <span>4.9/5 Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
