import React from 'react';

const Hero = () => {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Expert Guidance for
                <span className="text-soft-purple block">New Parents</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join Dr. Ekaterina Kutsia, a renowned pediatrician and neonatologist, 
                for comprehensive online courses covering pregnancy, childbirth, and 
                baby care from birth to 12 months.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-soft-green rounded-full"></div>
                  <span className="text-gray-700">Expert Medical Knowledge</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-soft-blue rounded-full"></div>
                  <span className="text-gray-700">Evidence-Based Care</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-soft-yellow rounded-full"></div>
                  <span className="text-gray-700">Practical Tips & Advice</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-soft-pink rounded-full"></div>
                  <span className="text-gray-700">24/7 Course Access</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-soft-purple hover:bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
                Start Learning Today
              </button>
              <button className="border-2 border-soft-purple text-soft-purple hover:bg-soft-purple hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200">
                View Courses
              </button>
            </div>
          </div>

          {/* Photo Placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-pastel-pink to-pastel-purple rounded-3xl p-8 shadow-2xl">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="w-64 h-80 mx-auto bg-gradient-to-br from-soft-pink to-soft-purple rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-16 h-16 mx-auto text-white/60 mb-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <p className="text-white/80 text-sm">Dr. Ekaterina Kutsia</p>
                    <p className="text-white/60 text-xs">Photo Coming Soon</p>
                  </div>
                </div>
                <div className="mt-6 space-y-2">
                  <h3 className="text-xl font-semibold text-gray-800">Dr. Ekaterina Kutsia</h3>
                  <p className="text-soft-purple font-medium">Pediatrician • Neonatologist</p>
                  <p className="text-gray-600 text-sm">France</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-soft-green rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-soft-blue rounded-full opacity-60"></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-soft-yellow rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
