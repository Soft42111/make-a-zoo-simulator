
const HowToPlaySection = () => {
  const steps = [
    {
      number: '1',
      title: 'Choose Your Location',
      description: 'Pick the perfect spot for your zoo and start with basic facilities',
      icon: '🗺️',
      color: 'from-green-400 to-blue-500'
    },
    {
      number: '2',
      title: 'Build & Collect',
      description: 'Construct habitats and start collecting your favorite animals',
      icon: '🔨',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      number: '3',
      title: 'Grow & Manage',
      description: 'Expand your zoo, keep animals happy, and welcome visitors!',
      icon: '🌟',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            🎯 How to Play
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Get started with your zoo adventure in just 3 simple steps!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className={`w-24 h-24 mx-auto mb-6 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-4xl">{step.icon}</span>
              </div>
              
              <div className="bg-white/95 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-green-700 mb-3">
                  Step {step.number}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-2xl text-white/90 mb-4">
            🎮 Ready to start your zoo adventure?
          </p>
          <div className="flex justify-center gap-4 text-lg text-white/80">
            <span>✅ Easy to learn</span>
            <span>✅ Fun for all ages</span>
            <span>✅ Endless possibilities</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToPlaySection;
