
import { Shield, Phone, Mail, MapPin, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Shield className="w-10 h-10 text-teal-400" />
              <span className="text-3xl font-bold">Ecovia Pest Control</span>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              Sydney's trusted pest control experts, providing eco-friendly solutions 
              that protect your home and family.
            </p>
            <div className="flex items-center space-x-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-300 text-lg">4.9/5 Rating</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3 text-gray-300 text-lg">
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
            <h3 className="text-2xl font-semibold mb-6">Service Areas</h3>
            <ul className="space-y-3 text-gray-300 text-lg">
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
            <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-teal-400" />
                <span className="text-gray-300 text-lg">1300 ECO VIA</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-teal-400" />
                <span className="text-gray-300 text-lg">info@ecovia.com.au</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-teal-400" />
                <span className="text-gray-300 text-lg">Sydney Metro Area</span>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-emerald-700 rounded-2xl">
              <div className="text-center">
                <div className="font-bold text-2xl">24/7 Emergency</div>
                <div className="text-emerald-200 text-lg">Same-day service available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-lg">
              © 2024 Ecovia Pest Control. All rights reserved. | Licensed & Insured
            </div>
            <div className="flex space-x-8 text-gray-400 mt-6 md:mt-0 text-lg">
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
