
import { Button } from "@/components/ui/button";
import { Phone, Shield, Clock } from "lucide-react";

const Hero = () => {
  const scrollToBooking = () => {
    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-emerald-200 rounded-full"></div>
        <div className="absolute top-40 right-20 w-20 h-20 border border-emerald-200 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-emerald-200 rounded-full"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 pt-8 pb-20">
        {/* Header */}
        <div className="flex justify-between items-center mb-20">
          <div className="flex items-center space-x-3">
            <Shield className="w-10 h-10 text-emerald-600" />
            <span className="text-2xl font-bold text-gray-900">Ecovia Pest Control</span>
          </div>
          <div className="hidden md:flex items-center space-x-3 text-emerald-600">
            <Phone className="w-5 h-5" />
            <span className="font-semibold text-lg">1300 ECO VIA</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h1 className="text-5xl xl:text-7xl font-bold leading-tight text-gray-900">
                Sydney's Most
                <span className="text-emerald-600 block"> Trusted</span>
                <span className="block">Pest Control</span>
              </h1>
              <p className="text-xl xl:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                Same-day service • Eco-friendly solutions • Child & pet safe treatments
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 text-base">
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-orange-500" />
                <span className="font-medium text-gray-700">Same Day Service</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-orange-500" />
                <span className="font-medium text-gray-700">Licensed & Insured</span>
              </div>
              <div className="bg-emerald-50 px-4 py-2 rounded-full font-medium text-emerald-700 border border-emerald-200">
                ⭐ 4.9/5 Rating
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Button 
                onClick={scrollToBooking}
                className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-6 text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Book Free Inspection
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-10 py-6 text-xl font-semibold rounded-xl transition-all duration-300"
                onClick={() => window.open('tel:1300326842')}
              >
                Call Now: 1300 ECO VIA
              </Button>
            </div>

            <p className="text-gray-600 text-lg pt-2">
              🎯 <strong>Free quotes</strong> • No obligation • Upfront pricing
            </p>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="bg-gray-50 backdrop-blur-sm rounded-3xl p-10 border border-gray-200 shadow-2xl">
              <div className="space-y-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-900">Protect Your Home</h3>
                  <p className="text-xl text-gray-600">Professional pest control that Sydney families trust</p>
                </div>
                
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="bg-white rounded-2xl p-6 border border-gray-100">
                    <div className="font-bold text-3xl text-emerald-600 mb-2">1000+</div>
                    <div className="text-lg text-gray-700">Happy Customers</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 border border-gray-100">
                    <div className="font-bold text-3xl text-emerald-600 mb-2">Same Day</div>
                    <div className="text-lg text-gray-700">Service Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
