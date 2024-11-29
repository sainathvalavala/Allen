import React from 'react';
import { FaGraduationCap, FaUsers, FaTrophy, FaChalkboardTeacher } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaGraduationCap className="text-4xl text-allen-blue" />,
      title: "Expert Faculty",
      description: "Learn from India's most experienced educators"
    },
    {
      icon: <FaUsers className="text-4xl text-allen-blue" />,
      title: "Personal Attention",
      description: "Individual guidance for every student"
    },
    {
      icon: <FaTrophy className="text-4xl text-allen-blue" />,
      title: "Proven Results",
      description: "Consistent top ranks in competitive exams"
    },
    {
      icon: <FaChalkboardTeacher className="text-4xl text-allen-blue" />,
      title: "Modern Learning",
      description: "Blend of traditional and digital education"
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose ALLEN?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;