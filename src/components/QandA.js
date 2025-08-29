import React, { useState } from "react";

const QandA = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
    {
      id: 1,
      question:
        "What makes Dr. Ekaterina's courses different from other parenting resources?",
      answer:
        "Dr. Ekaterina combines her medical expertise as a pediatrician and neonatologist with practical parenting experience. Her courses are evidence-based, comprehensive, and specifically designed for the French healthcare system and cultural context. Unlike generic resources, her courses provide personalized, professional medical guidance that you can trust.",
    },
    {
      id: 2,
      question: "Are the courses suitable for first-time parents?",
      answer:
        "Absolutely! Dr. Ekaterina's courses are designed with first-time parents in mind. They start from the basics and gradually build up to more advanced topics. The video format allows you to learn at your own pace, and you can revisit lessons whenever you need a refresher.",
    },
    {
      id: 3,
      question: "How long do I have access to the courses?",
      answer:
        "You have lifetime access to all courses you purchase. This means you can revisit the content as your child grows, or use it for future pregnancies. The courses are regularly updated with the latest medical guidelines and research.",
    },
    {
      id: 4,
      question: "Can I get a refund if I'm not satisfied?",
      answer:
        "Yes, we offer a 30-day money-back guarantee. If you're not completely satisfied with your course within 30 days of purchase, we'll provide a full refund, no questions asked. We're confident you'll find tremendous value in Dr. Ekaterina's expert guidance.",
    },
    {
      id: 5,
      question: "Do the courses cover breastfeeding and formula feeding?",
      answer:
        "Yes, our courses provide comprehensive coverage of both breastfeeding and formula feeding. Dr. Ekaterina offers evidence-based guidance on both approaches, helping you make informed decisions that work best for your family. The courses include practical tips, troubleshooting advice, and support for both feeding methods.",
    },
    {
      id: 6,
      question:
        "What if I have specific medical concerns about my pregnancy or baby?",
      answer:
        "While Dr. Ekaterina's courses provide excellent general guidance, they are not a substitute for personalized medical care. Always consult with your healthcare provider for specific medical concerns. The courses are designed to complement, not replace, your regular prenatal and pediatric care.",
    },
    {
      id: 7,
      question: "Are the courses available in multiple languages?",
      answer:
        "Currently, the courses are available in French and English. We're working on adding more languages to make Dr. Ekaterina's expertise accessible to more families worldwide. All course materials, including transcripts and resources, are provided in the same language as the video content.",
    },
    {
      id: 8,
      question: "Can I access the courses on mobile devices?",
      answer:
        "Yes! All courses are fully responsive and can be accessed on any device - smartphones, tablets, laptops, or desktop computers. The video player is optimized for mobile viewing, and you can download course materials for offline access.",
    },
  ];

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <section id="qa" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about Dr. Ekaterina's courses and
            parenting guidance
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(faq.id)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-6 h-6 text-soft-purple transition-transform duration-200 ${
                      openQuestion === faq.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {openQuestion === faq.id && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-soft-purple to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-lg mb-6 opacity-90">
              Can't find what you're looking for? Dr. Ekaterina and her team are
              here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-soft-purple hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Contact Support
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-soft-purple font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QandA;
