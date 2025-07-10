
import { Button } from "@/components/ui/button";
import { Phone, Shield, Clock } from "lucide-react";

const Hero = () => {
  const scrollToBooking = () => {
    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-20 h-20 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>
      
      <div className="relative container mx-auto px-4 pt-20 pb-32">
        {/* Header */}
        <div className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-3">
            <Shield className="w-8 h-8 text-teal-300" />
            <span className="text-2xl font-bold">Ecovia Pest Control</span>
          </div>
          <div className="hidden md:flex items-center space-x-2 text-teal-200">
            <Phone className="w-4 h-4" />
            <span className="font-semibold">1300 ECO VIA</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Sydney's Most
                <span className="text-teal-300"> Trusted</span>
                <br />
                Pest Control
              </h1>
              <p className="text-xl text-emerald-100 leading-relaxed">
                Same-day service • Eco-friendly solutions • Child & pet safe treatments
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-orange-400" />
                <span>Same Day Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-orange-400" />
                <span>Licensed & Insured</span>
              </div>
              <div className="bg-white/10 px-3 py-1 rounded-full">
                ⭐ 4.9/5 Rating
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToBooking}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Book Free Inspection
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-emerald-800 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
                onClick={() => window.open('tel:1300326842')}
              >
                Call Now: 1300 ECO VIA
              </Button>
            </div>

            <p className="text-emerald-200 text-sm">
              🎯 <strong>Free quotes</strong> • No obligation • Upfront pricing
            </p>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Protect Your Home</h3>
                  <p className="text-emerald-100">Professional pest control that Sydney families trust</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center text-sm">
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="font-bold text-2xl text-teal-300">1000+</div>
                    <div>Happy Customers</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="font-bold text-2xl text-teal-300">Same Day</div>
                    <div>Service Available</div>
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
