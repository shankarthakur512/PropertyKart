import React from 'react';
import { useLocation } from 'react-router-dom';

const PropertyDetails = () => {
  const location = useLocation();
  const { property } = location.state; 

  // Dummy owner data
  const owner = {
    name: "John Doe",
    phone: "+1 234 567 890",
    email: "johndoe@example.com",
  };

  return (
    <div className="p-4 pt-24"> {/* Padding-top to push content below fixed navbar */}
      <img 
        src={property.image} 
        alt={property.description} 
        className="w-full h-64 object-cover rounded-lg" 
      />
      <h2 className="text-2xl font-bold mt-4">{property.type}</h2>
      <p className="text-gray-700 mt-2">{property.description}</p>
      <p className="text-gray-800 font-medium mt-3">Location: {property.location}</p>
      <p className="text-gray-800 font-medium mt-2">Price: ${property.price.toLocaleString()}</p>

      {/* Conditional Purchase/Rent Button */}
      <div className="mt-4">
        {property.type.toLowerCase() === "sell" ? (
          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500">
            Purchase
          </button>
        ) : (
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500">
            Rent
          </button>
        )}
      </div>

      {/* Owner Section */}
      <div className="mt-8 p-4 border rounded-md bg-gray-100">
        <h3 className="text-lg font-semibold">Owner Information</h3>
        <p className="mt-2"><strong>Name:</strong> {owner.name}</p>
        <p className="mt-1"><strong>Phone:</strong> {owner.phone}</p>
        <p className="mt-1"><strong>Email:</strong> {owner.email}</p>
      </div>
    </div>
  );
};

export default PropertyDetails;
