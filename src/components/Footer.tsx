
import { Facebook, Twitter, Instagram, Youtube, Mail, Shield, FileText } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">🦁</div>
              <h3 className="text-2xl font-bold">Make a Zoo Simulator</h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Create the ultimate zoo experience! Build habitats, collect amazing animals, 
              and manage your very own wildlife paradise. Fun for the whole family!
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors duration-300 hover:scale-110 transform"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Screenshots</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Download</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hello@zoogame.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🎮</span>
                <span>Game Support</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🌍</span>
                <span>Available Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Make A Zoo Simulator. All rights reserved.
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
