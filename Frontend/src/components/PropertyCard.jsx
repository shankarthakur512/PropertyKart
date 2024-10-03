import React from 'react';
import { useNavigate } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    
    navigate('/property-details', { state: { property } });
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-white rounded-lg shadow-lg p-4 m-4 w-[90%] max-w-sm sm:w-[30vw] cursor-pointer hover:shadow-xl transition-shadow duration-200"
    >
      <img 
        src={property.image} 
        alt={property.description} 
        className="w-full h-56 object-cover rounded-lg" 
      />
      <div className="mt-4">
        <h2 className="text-xl font-semibold text-gray-900">{property.type}</h2>
        <p className="text-gray-700 mt-2">{property.description}</p>
        <p className="text-gray-800 font-medium mt-3">Location: {property.location}</p>
        <p className="text-gray-800 font-medium mt-2">Price: ${property.price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
