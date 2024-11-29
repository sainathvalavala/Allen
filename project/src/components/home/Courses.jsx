import React from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const courses = [
    {
      title: "JEE (Main + Advanced)",
      description: "Comprehensive preparation for engineering entrance",
      image: "/courses/jee.jpg"
    },
    {
      title: "NEET-UG",
      description: "Expert guidance for medical aspirants",
      image: "/courses/neet.jpg"
    },
    {
      title: "Foundation Courses",
      description: "Building strong basics for future success",
      image: "/courses/foundation.jpg"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Courses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <Link 
                  to="/courses" 
                  className="bg-allen-blue text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 inline-block"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;