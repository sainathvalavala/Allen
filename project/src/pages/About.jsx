

const About = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-white">About ALLEN</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/90 p-8 rounded-lg backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Legacy</h2>
              <p className="text-gray-700 mb-6">
                Since 1988, ALLEN has been at the forefront of education in India, 
                helping millions of students achieve their dreams of success in competitive examinations.
              </p>
              <p className="text-gray-700">
                Our commitment to excellence, innovative teaching methodologies, and 
                dedicated faculty have made us one of India's most trusted educational institutions.
              </p>
            </div>
            <div className="bg-white/90 p-8 rounded-lg backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h2>
              <p className="text-gray-700 mb-6">
                To provide quality education that empowers students to reach their full potential 
                and achieve their academic goals through personalized attention and comprehensive support.
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Excellence in Education</li>
                <li>Student-Centric Approach</li>
                <li>Innovative Teaching Methods</li>
                <li>Comprehensive Study Material</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;