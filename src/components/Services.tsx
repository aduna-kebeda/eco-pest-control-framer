
import { Bug, Home, Shield, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Bug className="w-10 h-10" />,
      title: "Termite Treatment",
      description: "Advanced termite detection and elimination with long-lasting protection for your property.",
      features: ["Pre-construction barriers", "Baiting systems", "Annual inspections"]
    },
    {
      icon: <Home className="w-10 h-10" />,
      title: "Cockroach Control",
      description: "Comprehensive cockroach removal using safe, targeted treatments for lasting results.",
      features: ["German cockroach specialists", "Kitchen & bathroom focus", "Child-safe products"]
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Rodent Control",
      description: "Humane rodent removal and prevention strategies to keep your home pest-free.",
      features: ["Mice & rat removal", "Entry point sealing", "Ongoing monitoring"]
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "General Pest Control",
      description: "Complete protection against ants, spiders, wasps and other common household pests.",
      features: ["Ant colony elimination", "Spider web removal", "Wasp nest treatment"]
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Complete Pest Protection for Sydney Homes
          </h2>
          <p className="text-2xl text-gray-600 leading-relaxed">
            From termites to cockroaches, we provide comprehensive pest control solutions 
            using eco-friendly methods that are safe for your family and pets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-emerald-200 transform hover:-translate-y-2"
            >
              <div className="text-emerald-700 mb-6 group-hover:text-emerald-600 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-700 flex items-center text-base">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-4 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block max-w-2xl">
            <p className="text-2xl font-semibold text-gray-800 mb-3">
              🌿 All treatments are eco-friendly and family safe
            </p>
            <p className="text-xl text-gray-600">
              Licensed professionals • Australian standards compliant • Warranty included
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
