import React, { useState, useEffect } from 'react'
import Cozycottage from '../assets/Cozycottage.jpg'
import Apartment from '../assets/Apartment.jpg'
import Villa from '../assets/Villa.jpg'

const banners = [
  {
    id: 1,
    title: "Beautiful Apartment",
    description: "Find your dream apartment today.",
    image: Apartment,
  },
  {
    id: 2,
    title: "Luxury Villa",
    description: "Discover luxury living in a serene environment.",
    image: Villa,
  },
  {
    id: 3,
    title: "Cozy Cottage",
    description: "Feel at home in this cozy cottage.",
    image: Cozycottage,
  }
];

const BannerProperty = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-slide function
  useEffect(() => {
    if (!isHovered) {
      const slideInterval = setInterval(() => {
        setCurrentBanner((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
      }, 4000); 

      return () => clearInterval(slideInterval);
    }
  }, [currentBanner, isHovered]);

  const handleDotClick = (index) => {
    setCurrentBanner(index);
  };

  return (
    <div 
      className="relative w-full h-[500px] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Banner Container */}
      <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentBanner * 100}%)` }}>
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className="min-w-full h-[500px] flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${banner.image})` }}
          >
            <div className="bg-black bg-opacity-50 p-8 text-center rounded-lg">
              <h2 className="text-white text-4xl font-bold mb-4">{banner.title}</h2>
              <p className="text-white text-lg mb-4">{banner.description}</p>
              <a href="#explore" className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition">
                Explore
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Dots for navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full cursor-pointer ${currentBanner === index ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BannerProperty;
