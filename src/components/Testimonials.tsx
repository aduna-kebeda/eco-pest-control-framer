
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Bondi Beach",
      rating: 5,
      text: "Ecovia saved our home from a major termite problem. Their team was professional, punctual, and the eco-friendly treatment gave us peace of mind with our young children.",
      service: "Termite Treatment"
    },
    {
      name: "David Chen",
      location: "Parramatta", 
      rating: 5,
      text: "Called them for a cockroach issue and they came the same day! The treatment worked immediately and we haven't seen a single pest since. Highly recommend!",
      service: "Cockroach Control"
    },
    {
      name: "Emma Rodriguez",
      location: "Manly",
      rating: 5,
      text: "Professional service from start to finish. They explained everything clearly, used safe products around our pets, and followed up to ensure the problem was solved.",
      service: "General Pest Control"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            What Our Sydney Customers Say
          </h2>
          <p className="text-2xl text-gray-600">
            Real reviews from real customers across Sydney
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-16 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-8 leading-relaxed italic text-lg">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-gray-100 pt-6">
                <div className="font-semibold text-gray-900 text-xl">{testimonial.name}</div>
                <div className="text-gray-600 text-lg">{testimonial.location}</div>
                <div className="text-emerald-600 font-medium mt-2 text-lg">
                  {testimonial.service}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="font-bold text-gray-900 text-2xl">4.9/5</span>
            </div>
            <p className="text-gray-600 text-xl">Based on 200+ Google Reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
