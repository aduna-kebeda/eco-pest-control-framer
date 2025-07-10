
import { Shield, Phone, Mail, MapPin, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-teal-400" />
              <span className="text-2xl font-bold">Ecovia Pest Control</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Sydney's trusted pest control experts, providing eco-friendly solutions 
              that protect your home and family.
            </p>
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-sm text-gray-300">4.9/5 Rating</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Termite Treatment</li>
              <li>Cockroach Control</li>
              <li>Rodent Removal</li>
              <li>Ant Extermination</li>
              <li>Spider Control</li>
              <li>Wasp Nest Removal</li>
              <li>General Pest Inspection</li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Sydney CBD</li>
              <li>North Shore</li>
              <li>Eastern Suburbs</li>
              <li>Inner West</li>
              <li>Western Sydney</li>
              <li>Northern Beaches</li>
              <li>South Sydney</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-teal-400" />
                <span className="text-gray-300">1300 ECO VIA</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-teal-400" />
                <span className="text-gray-300">info@ecovia.com.au</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-teal-400" />
                <span className="text-gray-300">Sydney Metro Area</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-emerald-700 rounded-lg">
              <div className="text-center">
                <div className="font-bold text-lg">24/7 Emergency</div>
                <div className="text-emerald-200">Same-day service available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 Ecovia Pest Control. All rights reserved. | Licensed & Insured
            </div>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Warranty</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
