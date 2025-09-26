import { 
  FaMicrophone, 
  FaFileAlt, 
  FaRobot, 
  FaUserGraduate 
} from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: FaMicrophone,
      title: "Speaking Practice",
      description: "Interactive speaking sessions with AI feedback and real-time pronunciation analysis to boost your confidence.",
      color: "bg-blue-50 border-blue-200 hover:bg-blue-100"
    },
    {
      icon: FaFileAlt,
      title: "Mock Tests",
      description: "Comprehensive practice tests that simulate real IELTS conditions with detailed performance analytics.",
      color: "bg-green-50 border-green-200 hover:bg-green-100"
    },
    {
      icon: FaRobot,
      title: "AI Band Score",
      description: "Get instant band score predictions powered by advanced AI algorithms trained on thousands of tests.",
      color: "bg-purple-50 border-purple-200 hover:bg-purple-100"
    },
    {
      icon: FaUserGraduate,
      title: "Expert Mentorship",
      description: "One-on-one guidance from certified IELTS instructors with years of teaching experience.",
      color: "bg-yellow-50 border-yellow-200 hover:bg-yellow-100"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-blue-600">IELTS Academy?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive approach combines cutting-edge technology with proven teaching methods 
            to help you achieve your target IELTS band score faster than ever.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`${feature.color} p-8 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}
              >
                {/* Icon */}
                <div className="text-center mb-6">
                  <IconComponent className="text-5xl mx-auto text-gray-700" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
                
                {/* CTA Link */}
                <div className="mt-6 text-center">
                  <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm uppercase tracking-wide transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your IELTS Journey?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of successful students who achieved their dream scores with us.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
              Start Your Free Trial Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;