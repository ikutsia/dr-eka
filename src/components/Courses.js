import React from 'react';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Pregnancy Journey",
      subtitle: "Complete Guide for Expecting Mothers",
      description: "Comprehensive course covering all three trimesters, nutrition, exercise, and preparation for childbirth.",
      duration: "12 weeks",
      lessons: "24 lessons",
      level: "All levels",
      color: "pastel-pink",
      icon: "🤰",
      topics: ["First Trimester", "Second Trimester", "Third Trimester", "Nutrition", "Exercise", "Birth Preparation"]
    },
    {
      id: 2,
      title: "Childbirth & Delivery",
      subtitle: "Preparing for the Big Day",
      description: "Everything you need to know about labor, delivery options, pain management, and immediate postpartum care.",
      duration: "6 weeks",
      lessons: "18 lessons",
      level: "All levels",
      color: "pastel-blue",
      icon: "👶",
      topics: ["Labor Signs", "Delivery Options", "Pain Management", "Postpartum Care", "Breastfeeding Basics"]
    },
    {
      id: 3,
      title: "Newborn Care (1-3 months)",
      subtitle: "First Three Months Essentials",
      description: "Essential care for your newborn including feeding, sleeping, development milestones, and health monitoring.",
      duration: "8 weeks",
      lessons: "20 lessons",
      level: "Beginner",
      color: "pastel-green",
      icon: "🍼",
      topics: ["Feeding", "Sleeping", "Development", "Health Monitoring", "Bonding", "Safety"]
    },
    {
      id: 4,
      title: "Baby Development (4-6 months)",
      subtitle: "Growing and Learning Together",
      description: "Support your baby's development through play, nutrition, sleep training, and milestone tracking.",
      duration: "8 weeks",
      lessons: "22 lessons",
      level: "Beginner",
      color: "pastel-yellow",
      icon: "🎾",
      topics: ["Solid Foods", "Sleep Training", "Play Activities", "Milestones", "Safety", "Social Development"]
    },
    {
      id: 5,
      title: "Toddler Care (6-12 months)",
      subtitle: "From Baby to Toddler",
      description: "Navigate the transition from baby to toddler with guidance on nutrition, safety, development, and behavior.",
      duration: "10 weeks",
      lessons: "26 lessons",
      level: "Intermediate",
      color: "pastel-purple",
      icon: "🚶",
      topics: ["Advanced Nutrition", "Mobility", "Communication", "Behavior", "Safety", "Social Skills"]
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      'pastel-pink': 'bg-pastel-pink border-soft-pink',
      'pastel-blue': 'bg-pastel-blue border-soft-blue',
      'pastel-green': 'bg-pastel-green border-soft-green',
      'pastel-yellow': 'bg-pastel-yellow border-soft-yellow',
      'pastel-purple': 'bg-pastel-purple border-soft-purple'
    };
    return colorMap[color] || 'bg-pastel-pink border-soft-pink';
  };

  return (
    <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Expert Video Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive, evidence-based courses designed specifically for pregnant women and new parents. 
            Learn from a certified pediatrician and neonatologist.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`${getColorClasses(course.color)} rounded-2xl p-6 border-2 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              {/* Course Header */}
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{course.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{course.title}</h3>
                <p className="text-gray-600 font-medium">{course.subtitle}</p>
              </div>

              {/* Course Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {course.description}
              </p>

              {/* Course Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-800">{course.duration}</div>
                  <div className="text-sm text-gray-600">Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-800">{course.lessons}</div>
                  <div className="text-sm text-gray-600">Lessons</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-800">{course.level}</div>
                  <div className="text-sm text-gray-600">Level</div>
                </div>
              </div>

              {/* Course Topics */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">What you'll learn:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {course.topics.map((topic, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-soft-purple rounded-full"></div>
                      <span className="text-sm text-gray-700">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Action */}
              <button className="w-full bg-white hover:bg-gray-50 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                Enroll Now
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-soft-purple to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Parenting Journey?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join thousands of parents who trust Dr. Ekaterina's expert guidance
            </p>
            <button className="bg-white text-soft-purple hover:bg-gray-50 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
