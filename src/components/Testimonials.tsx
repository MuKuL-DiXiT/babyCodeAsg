import { FaUser, FaUserMd, FaUserTie, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer",
      country: "Singapore",
      score: "8.5",
      image: FaUser,
      testimonial: "IELTS Academy transformed my preparation journey. The AI-powered feedback helped me identify weak areas, and I achieved my target score of 8.5 in just 2 months!",
      rating: 5
    },
    {
      name: "Ahmed Hassan",
      role: "Medical Student",
      country: "Egypt",
      score: "8.0",
      image: FaUserMd,
      testimonial: "The mock tests were incredibly realistic and the speaking practice sessions boosted my confidence. Scored 8.0 overall - exactly what I needed for medical school!",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      role: "Business Analyst",
      country: "Spain",
      score: "7.5",
      image: FaUserTie,
      testimonial: "Excellent platform with amazing instructors. The personalized study plan and expert mentorship made all the difference. Highly recommend to anyone serious about IELTS!",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar 
        key={index} 
        className={`inline-block ${index < rating ? "text-yellow-400" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-blue-600">Students Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from students who achieved their dream IELTS scores with our help.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="text-blue-600 text-4xl mb-4">"</div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                {testimonial.testimonial}
              </p>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              {/* User Info */}
              <div className="flex items-center">
                <div className="mr-4">
                  <testimonial.image className="text-4xl text-gray-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-blue-600">{testimonial.country}</p>
                </div>
                <div className="ml-auto text-center">
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                    Band {testimonial.score}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">50,000+</div>
                <div className="text-blue-100">Happy Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">8.2</div>
                <div className="text-blue-100">Average Band Score</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">95%</div>
                <div className="text-blue-100">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-blue-100">Support Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;