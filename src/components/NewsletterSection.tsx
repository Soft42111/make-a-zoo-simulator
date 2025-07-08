
import { useState } from 'react';
import { Mail, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      toast.success("🎉 Welcome to the zoo family! Check your email for exclusive content!");
      setEmail('');
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white/95 rounded-3xl p-12 shadow-2xl">
          <div className="text-6xl mb-6 animate-bounce">🎁</div>
          
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Join the Zoo Family!
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get exclusive updates, early access to new animals, and special in-game rewards! 
            Plus, receive a <strong>FREE starter pack</strong> when you sign up! 🦁✨
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-full border-2 border-gray-200 focus:border-green-500 text-lg"
                required
              />
              <Button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Mail className="mr-2 h-5 w-5" />
                Join Now
              </Button>
            </form>
          ) : (
            <div className="mb-8">
              <div className="text-4xl mb-4">🎉</div>
              <p className="text-xl font-semibold text-green-600">
                Welcome to the zoo family! Check your email for goodies! 📧
              </p>
            </div>
          )}

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Gift className="h-4 w-4" />
              <span>Free starter pack</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🔔</span>
              <span>Early access updates</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🎮</span>
              <span>Exclusive in-game rewards</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🚫</span>
              <span>No spam, ever!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
