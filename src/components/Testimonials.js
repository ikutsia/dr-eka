import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Marie Dubois",
      role: "First-time mother",
      location: "Paris, France",
      rating: 5,
      content: "Dr. Ekaterina's pregnancy course was a lifesaver! Her practical advice and medical expertise gave me confidence throughout my pregnancy. The video format made it easy to learn at my own pace.",
      avatar: "👩‍🦰",
      course: "Pregnancy Journey"
    },
    {
      id: 2,
      name: "Sophie Martin",
      role: "Mother of twins",
      location: "Lyon, France",
      rating: 5,
      content: "As a mother of twins, I was overwhelmed. Dr. Ekaterina's newborn care course provided clear, actionable guidance that helped me establish routines and understand my babies' needs.",
      avatar: "👩‍🦱",
      course: "Newborn Care (1-3 months)"
    },
    {
      id: 3,
      name: "Isabelle Rousseau",
      role: "Working mother",
      location: "Marseille, France",
      rating: 5,
      content: "The childbirth preparation course was incredibly comprehensive. I felt prepared and confident going into labor. Dr. Ekaterina's expertise as a neonatologist really shines through.",
      avatar: "👩‍🦳",
      course: "Childbirth & Delivery"
    },
    {
      id: 4,
      name: "Camille Moreau",
      role: "Mother of 2",
      location: "Toulouse, France",
      rating: 5,
      content: "I wish I had found Dr. Ekaterina's courses with my first child! The 4-6 months course helped me understand my baby's development and provided great activities for bonding.",
      avatar: "👩‍🦲",
      course: "Baby Development (4-6 months)"
    },
    {
      id: 5,
      name: "Julie Leroy",
      role: "Expecting mother",
      location: "Nice, France",
      rating: 5,
      content: "Dr. Ekaterina's approach is both professional and warm. Her courses combine medical expertise with practical parenting wisdom. I feel much more prepared for motherhood.",
      avatar: "👩‍🦯",
      course: "Pregnancy Journey"
    },
    {
      id: 6,
      name: "Anne Petit",
      role: "Mother of 3",
      location: "Bordeaux, France",
      rating: 5,
      content: "The toddler care course helped me navigate the challenging transition from baby to toddler. Dr. Ekaterina's evidence-based approach and practical tips are invaluable.",
      avatar: "👩‍🦼",
      course: "Toddler Care (6-12 months)"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
        ★
      </span>
    ));
  };

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pastel-blue to-pastel-green">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            What Parents Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied parents who have transformed their parenting journey 
            with Dr. Ekaterina's expert guidance and evidence-based courses.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  {renderStars(testimonial.rating)}
                </div>
                <span className="ml-2 text-sm text-gray-600">5.0</span>
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Course Badge */}
              <div className="mb-4">
                <span className="inline-block bg-soft-purple text-white text-xs px-3 py-1 rounded-full font-medium">
                  {testimonial.course}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center">
                <div className="text-3xl mr-4">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white/60 backdrop-blur-sm rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-soft-purple mb-2">2,500+</div>
              <div className="text-gray-600">Happy Parents</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-soft-blue mb-2">5.0</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-soft-green mb-2">98%</div>
              <div className="text-gray-600">Completion Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-soft-pink mb-2">24/7</div>
              <div className="text-gray-600">Course Access</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-soft-purple hover:bg-purple-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
            Join Our Community
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
