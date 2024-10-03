import React from 'react';
import Logo from '../assets/logo.jpeg'; 

const About = () => {
  return (
    <div className="relative min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="absolute w-full h-full" width="100%" height="100%">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#111827', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path
            fill="url(#grad1)"
            d="M0,50 Q50,100 100,50 T200,50 T300,50 T400,50 T500,50 V0 H0 Z"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 pointer-events-none z-0">
        <svg className="absolute w-full h-full" width="100%" height="100%">
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#111827', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path
            fill="url(#grad2)"
            d="M0,0 Q50,100 100,0 T200,0 T300,0 T400,0 T500,0 V100 H0 Z"
          />
        </svg>
      </div>
      <div className="container mx-auto p-8 flex flex-col md:flex-row items-center justify-center z-10">
        <div className="md:w-1/2 p-4">
          <h1 className="text-5xl font-bold text-gray-900">About Us</h1>
          <p className="mt-6 text-xl text-blue-950">
            Welcome to our company! We are dedicated to providing the best services and products to our customers. Our mission is to create value and make a positive impact on the community.
          </p>
          <p className="mt-4 text-xl text-gray-300">
            Our team consists of experienced professionals who are passionate about what they do. We strive for excellence and aim to exceed customer expectations.
          </p>
        </div>
        <div className="md:w-1/2 p-4 flex justify-center items-center">
          <img src={Logo} alt="Company Logo" className="w-1/2 md:w-3/4 h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default About;
