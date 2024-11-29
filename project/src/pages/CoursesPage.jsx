import React from 'react';
import CourseCard from '../components/courses/CourseCard';

const CoursesPage = () => {
  const courses = [
    {
      id: 1,
      title: "JEE (Main + Advanced)",
      description: "Comprehensive preparation for engineering entrance examinations with expert faculty and proven study material.",
      duration: "2 Years",
      features: ["Live Classes", "Mock Tests", "Study Material", "Doubt Sessions"]
    },
    {
      id: 2,
      title: "NEET-UG",
      description: "Expert guidance for medical aspirants with focus on NCERT-based preparation and practical approach.",
      duration: "2 Years",
      features: ["Biology Focus", "Chemistry Lab", "Physics Practice", "Regular Tests"]
    },
    {
      id: 3,
      title: "Foundation Courses",
      description: "Building strong basics for future competitive exam preparation starting from class 6th onwards.",
      duration: "1-2 Years",
      features: ["Basic Concepts", "Mental Ability", "Competitive Edge", "Regular Assessment"]
    }
  ];

  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-center text-white">Our Courses</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;