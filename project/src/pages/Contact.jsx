import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

const Contact = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-center text-white">Contact Us</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/90 p-8 rounded-lg backdrop-blur-sm">
              <ContactForm />
            </div>
            <div className="bg-white/90 p-8 rounded-lg backdrop-blur-sm">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;