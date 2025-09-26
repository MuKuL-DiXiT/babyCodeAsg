import { useState, useEffect } from 'react';
import { 
  FaRocket, 
  FaBookOpen, 
  FaStar, 
  FaBullseye,
  FaRobot,
  FaChalkboardTeacher,
  FaHeadset,
  FaClipboardList
} from 'react-icons/fa';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Start loading animation after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    // Staggered animation for different elements
    const elements = [
      'title', 
      'description', 
      'buttons', 
      'stats', 
      'rightPanel', 
      'features',
      'floatingElements'
    ];
    
    elements.forEach((element, index) => {
      setTimeout(() => {
        setVisibleElements(prev => new Set([...prev, element]));
      }, 300 + index * 200);
    });

    return () => clearTimeout(timer);
  }, []);

  const getAnimationClass = (element: string, baseClasses: string = '') => {
    if (!isLoaded) return `${baseClasses} opacity-0 transform translate-y-8`;
    
    const isVisible = visibleElements.has(element);
    return `${baseClasses} transition-all duration-1000 ease-out ${
      isVisible 
        ? 'opacity-100 transform translate-y-0' 
        : 'opacity-0 transform translate-y-8'
    }`;
  };

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Title with loading animation */}
            <h1 className={getAnimationClass('title', 'text-4xl md:text-6xl font-bold leading-tight mb-6')}>
              {!visibleElements.has('title') ? (
                <div className="space-y-4">
                  <div className="h-12 md:h-16 bg-gray-300 bg-opacity-20 rounded-lg animate-pulse"></div>
                  <div className="h-12 md:h-16 bg-gray-300 bg-opacity-20 rounded-lg animate-pulse w-3/4"></div>
                </div>
              ) : (
                <>
                  Master IELTS with 
                  <span className="text-yellow-400 inline-block animate-pulse"> Expert Guidance</span>
                </>
              )}
            </h1>
            
            {/* Description with loading animation */}
            <div className={getAnimationClass('description', 'mb-8')}>
              {!visibleElements.has('description') ? (
                <div className="space-y-3">
                  <div className="h-6 bg-gray-300 bg-opacity-20 rounded animate-pulse"></div>
                  <div className="h-6 bg-gray-300 bg-opacity-20 rounded animate-pulse w-5/6"></div>
                  <div className="h-6 bg-gray-300 bg-opacity-20 rounded animate-pulse w-4/5"></div>
                </div>
              ) : (
                <p className="text-xl md:text-2xl text-blue-100 leading-relaxed animate-fadeIn">
                  Achieve your dream IELTS band score with our comprehensive courses, 
                  AI-powered practice tests, and personalized learning approach.
                </p>
              )}
            </div>
            
            {/* Buttons with loading animation */}
            <div className={getAnimationClass('buttons', 'flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12')}>
              {!visibleElements.has('buttons') ? (
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="h-14 bg-gray-300 bg-opacity-20 rounded-lg animate-pulse w-48"></div>
                  <div className="h-14 bg-gray-300 bg-opacity-20 rounded-lg animate-pulse w-40"></div>
                </div>
              ) : (
                <>
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-slideInLeft">
                    <FaRocket className="inline-block mr-2 animate-bounce" /> Start Free Trial
                  </button>
                  <button className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 animate-slideInRight">
                    View Courses
                  </button>
                </>
              )}
            </div>
            
            {/* Stats with loading animation */}
            <div className={getAnimationClass('stats', 'grid grid-cols-3 gap-8')}>
              {!visibleElements.has('stats') ? (
                <div className="grid grid-cols-3 gap-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="text-center">
                      <div className="h-8 bg-gray-300 bg-opacity-20 rounded animate-pulse mb-2"></div>
                      <div className="h-4 bg-gray-300 bg-opacity-20 rounded animate-pulse"></div>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <div className="text-center transform transition-all duration-500 hover:scale-110">
                    <div className="text-3xl font-bold text-yellow-400 animate-countUp">50k+</div>
                    <div className="text-blue-100">Students Trained</div>
                  </div>
                  <div className="text-center transform transition-all duration-500 hover:scale-110 animation-delay-200">
                    <div className="text-3xl font-bold text-yellow-400 animate-countUp">8.5+</div>
                    <div className="text-blue-100">Average Band Score</div>
                  </div>
                  <div className="text-center transform transition-all duration-500 hover:scale-110 animation-delay-400">
                    <div className="text-3xl font-bold text-yellow-400 animate-countUp">95%</div>
                    <div className="text-blue-100">Success Rate</div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right Content - Hero Image/Banner with loading animation */}
          <div className={getAnimationClass('rightPanel', 'relative')}>
            {!visibleElements.has('rightPanel') ? (
              <div className="bg-gray-300 bg-opacity-20 rounded-2xl p-8 animate-pulse">
                <div className="h-32 bg-gray-400 bg-opacity-30 rounded-xl mb-6"></div>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-8 bg-gray-400 bg-opacity-30 rounded"></div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 animate-slideInUp">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl p-6 mb-6 animate-glow">
                  <div className="text-blue-900 text-center">
                    <FaBullseye className="text-4xl font-bold mb-2 mx-auto animate-bounce" />
                    <div className="text-xl font-semibold">Your IELTS Success</div>
                    <div className="text-sm">Starts Here</div>
                  </div>
                </div>
                
                {/* Features with staggered animation */}
                <div className={getAnimationClass('features', 'space-y-4')}>
                  {!visibleElements.has('features') ? (
                    <div className="space-y-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-8 bg-gray-400 bg-opacity-30 rounded animate-pulse"></div>
                      ))}
                    </div>
                  ) : (
                    <>
                      {[
                        { text: 'AI-Powered Learning', icon: FaRobot },
                        { text: 'Expert Instructors', icon: FaChalkboardTeacher }, 
                        { text: '24/7 Support', icon: FaHeadset },
                        { text: 'Mock Tests', icon: FaClipboardList }
                      ].map(({ text, icon: IconComponent }, index) => (
                        <div 
                          key={text}
                          className={`flex items-center space-x-3 animate-slideInRight`}
                          style={{ animationDelay: `${index * 150}ms` }}
                        >
                          <IconComponent className="w-4 h-4 text-green-400 animate-ping" />
                          <span className="text-green-400 transition-all duration-300 hover:text-green-300">
                            {text}
                          </span>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            )}
            
            {/* Floating elements with delayed animation */}
            <div className={getAnimationClass('floatingElements', '')}>
              {visibleElements.has('floatingElements') && (
                <>
                  <div className="absolute -top-4 -right-4 bg-yellow-400 text-blue-900 p-4 rounded-full animate-bounce animation-delay-500">
                    <FaBookOpen className="text-2xl" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-green-400 text-white p-4 rounded-full animate-pulse animation-delay-700">
                    <FaStar className="text-2xl" />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;