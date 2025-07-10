import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Phone, MapPin, Clock, CheckCircle } from "lucide-react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    pestType: "",
    urgency: "",
    description: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success("Booking request submitted! We'll contact you within 30 minutes.", {
      duration: 5000,
    });
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="booking-form" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Book Your Free Pest Inspection
          </h2>
          <p className="text-xl text-gray-600">
            Get a free assessment and quote from Sydney's trusted pest control experts
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <Card className="shadow-xl border-0">
            <CardHeader className="bg-emerald-700 text-white rounded-t-lg">
              <CardTitle className="text-2xl text-center">Schedule Your Inspection</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-medium">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="mt-2 border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="mt-2 border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="mt-2 border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <Label htmlFor="address" className="text-gray-700 font-medium">Property Address *</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    placeholder="Include suburb for accurate service"
                    className="mt-2 border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-gray-700 font-medium">Type of Pest Issue</Label>
                    <Select onValueChange={(value) => handleInputChange("pestType", value)}>
                      <SelectTrigger className="mt-2 border-gray-300 focus:border-emerald-500">
                        <SelectValue placeholder="Select pest type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="termites">Termites</SelectItem>
                        <SelectItem value="cockroaches">Cockroaches</SelectItem>
                        <SelectItem value="rodents">Rodents (Mice/Rats)</SelectItem>
                        <SelectItem value="ants">Ants</SelectItem>
                        <SelectItem value="spiders">Spiders</SelectItem>
                        <SelectItem value="wasps">Wasps/Bees</SelectItem>
                        <SelectItem value="general">General Inspection</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-gray-700 font-medium">Urgency Level</Label>
                    <Select onValueChange={(value) => handleInputChange("urgency", value)}>
                      <SelectTrigger className="mt-2 border-gray-300 focus:border-emerald-500">
                        <SelectValue placeholder="How urgent?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="emergency">Emergency (Same Day)</SelectItem>
                        <SelectItem value="urgent">Urgent (1-2 Days)</SelectItem>
                        <SelectItem value="routine">Routine (This Week)</SelectItem>
                        <SelectItem value="flexible">Flexible Timing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="description" className="text-gray-700 font-medium">Additional Details</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    placeholder="Tell us more about the pest problem, preferred inspection time, or any concerns..."
                    rows={4}
                    className="mt-2 border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Book Free Inspection Now
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  By submitting this form, you agree to be contacted by Ecovia Pest Control
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Benefits */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="shadow-lg border border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Need Immediate Help?</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-emerald-100 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Call Now</div>
                      <div className="text-emerald-600 font-bold text-xl">1300 ECO VIA</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-emerald-100 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Service Area</div>
                      <div className="text-gray-600">All Sydney Metro Areas</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-emerald-100 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Response Time</div>
                      <div className="text-gray-600">Within 30 minutes</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What to Expect */}
            <Card className="shadow-lg border border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What to Expect</h3>
                
                <div className="space-y-4">
                  {[
                    "Free comprehensive property inspection",
                    "Detailed pest assessment report", 
                    "Upfront pricing with no hidden fees",
                    "Same-day treatment available",
                    "12-month service warranty"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                  <p className="text-emerald-800 font-medium text-center">
                    🌿 All treatments are eco-friendly and safe for children & pets
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
