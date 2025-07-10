
import { Clock, Shield, Star, Award, Phone, CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Same-Day Service",
      description: "Emergency pest problems? We can be at your door within hours, not days."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Eco-Friendly Products",
      description: "Child and pet-safe treatments that effectively eliminate pests without harmful chemicals."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "5-Star Rated Service",
      description: "Consistently rated as Sydney's #1 pest control service by satisfied customers."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Licensed Professionals",
      description: "Fully qualified technicians with years of experience and ongoing training."
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Free Quotes",
      description: "Transparent, upfront pricing with no hidden fees or surprise charges."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Satisfaction Guarantee",
      description: "If pests return within warranty period, we'll re-treat at no extra cost."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Why Sydney Homeowners Choose Ecovia
          </h2>
          <p className="text-2xl text-gray-600 leading-relaxed">
            We're not just another pest control company. We're your neighbors, 
            committed to protecting Sydney homes with reliable, eco-friendly solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 mb-20 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-start space-x-6 p-8 rounded-2xl hover:bg-gray-50 transition-colors duration-300"
            >
              <div className="text-emerald-600 bg-emerald-100 p-4 rounded-2xl flex-shrink-0">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-emerald-700 to-teal-600 rounded-3xl p-16 text-white">
          <div className="grid md:grid-cols-4 gap-12 text-center max-w-6xl mx-auto">
            <div>
              <div className="text-6xl font-bold text-teal-200 mb-4">1000+</div>
              <div className="text-2xl text-emerald-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-6xl font-bold text-teal-200 mb-4">4.9★</div>
              <div className="text-2xl text-emerald-100">Average Rating</div>
            </div>
            <div>
              <div className="text-6xl font-bold text-teal-200 mb-4">24/7</div>
              <div className="text-2xl text-emerald-100">Emergency Service</div>
            </div>
            <div>
              <div className="text-6xl font-bold text-teal-200 mb-4">100%</div>
              <div className="text-2xl text-emerald-100">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
