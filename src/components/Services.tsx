
import { Bug, Home, Shield, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Bug className="w-8 h-8" />,
      title: "Termite Treatment",
      description: "Advanced termite detection and elimination with long-lasting protection for your property.",
      features: ["Pre-construction barriers", "Baiting systems", "Annual inspections"]
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Cockroach Control",
      description: "Comprehensive cockroach removal using safe, targeted treatments for lasting results.",
      features: ["German cockroach specialists", "Kitchen & bathroom focus", "Child-safe products"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Rodent Control",
      description: "Humane rodent removal and prevention strategies to keep your home pest-free.",
      features: ["Mice & rat removal", "Entry point sealing", "Ongoing monitoring"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "General Pest Control",
      description: "Complete protection against ants, spiders, wasps and other common household pests.",
      features: ["Ant colony elimination", "Spider web removal", "Wasp nest treatment"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Pest Protection for Sydney Homes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From termites to cockroaches, we provide comprehensive pest control solutions 
            using eco-friendly methods that are safe for your family and pets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group hover:border-emerald-200"
            >
              <div className="text-emerald-700 mb-4 group-hover:text-emerald-600 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-700 flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-lg p-6 shadow-md inline-block">
            <p className="text-lg font-semibold text-gray-800 mb-2">
              🌿 All treatments are eco-friendly and family safe
            </p>
            <p className="text-gray-600">
              Licensed professionals • Australian standards compliant • Warranty included
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
