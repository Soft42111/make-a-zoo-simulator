
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const FeaturesSection = () => {
  const features = [
    {
      icon: '🏗️',
      title: 'Build Habitats',
      description: 'Design and construct amazing animal habitats with trees, rocks, and water features!'
    },
    {
      icon: '🦁',
      title: 'Collect Animals',
      description: 'Discover and collect over 100 different animal species from around the world!'
    },
    {
      icon: '👥',
      title: 'Manage Visitors',
      description: 'Keep your zoo guests happy with food stands, benches, and exciting exhibits!'
    },
    {
      icon: '🎪',
      title: 'Host Events',
      description: 'Organize special events, shows, and educational programs for your visitors!'
    },
    {
      icon: '💰',
      title: 'Earn Rewards',
      description: 'Complete challenges and unlock new animals, decorations, and expansion areas!'
    },
    {
      icon: '🌍',
      title: 'Explore Biomes',
      description: 'Create different climate zones like tropical, desert, arctic, and more!'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            🎮 Amazing Features
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover all the incredible features that make your zoo the best in the world!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-white/95 hover:bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 rounded-2xl overflow-hidden group"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-green-700 mb-2">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center text-lg leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
