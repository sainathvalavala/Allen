import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
      <div className="space-y-6">
        <div className="flex items-start">
          <FaMapMarkerAlt className="text-allen-blue text-xl mt-1 mr-4" />
          <div>
            <h3 className="font-medium mb-1">Address</h3>
            <p className="text-gray-700">
              ALLEN Career Institute<br />
              Career Point Road, Kota<br />
              Rajasthan, India
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <FaPhone className="text-allen-blue text-xl mt-1 mr-4" />
          <div>
            <h3 className="font-medium mb-1">Phone</h3>
            <p className="text-gray-700">
              Toll Free: 1800-XXX-XXXX<br />
              Support: +91-XXX-XXX-XXXX
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <FaEnvelope className="text-allen-blue text-xl mt-1 mr-4" />
          <div>
            <h3 className="font-medium mb-1">Email</h3>
            <p className="text-gray-700">
              info@allen.ac.in<br />
              support@allen.ac.in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;