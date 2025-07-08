
import { useEffect, useState } from 'react';

const AnimatedParticles = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; emoji: string; delay: number }>>([]);

  useEffect(() => {
    const animalEmojis = ['🦁', '🐘', '🦒', '🐼', '🐯', '🦜', '🐵', '🦋', '🐨', '🦊'];
    
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      emoji: animalEmojis[Math.floor(Math.random() * animalEmojis.length)],
      delay: Math.random() * 10
    }));
    
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute text-2xl opacity-20 animate-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${8 + Math.random() * 4}s`
          }}
        >
          {particle.emoji}
        </div>
      ))}
    </div>
  );
};

export default AnimatedParticles;
