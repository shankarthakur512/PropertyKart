import React from 'react';
import PropertyCard from './PropertyCard'; 
import Cozycottage from '../assets/Cozycottage.jpg';
import Apartment from '../assets/Apartment.jpg';
import Villa from '../assets/Villa.jpg';

const PropertySection = () => {
  const properties = [
    {
      type: 'Luxury Apartment',
      description: 'A beautiful luxury apartment with modern amenities.',
      location: 'New York, NY',
      price: 1200000,
      image: Apartment,
    },
    {
      type: 'Cozy Cottage',
      description: 'A cozy cottage in the countryside, perfect for a getaway.',
      location: 'Austin, TX',
      price: 350000,
      image: Cozycottage,
    },
    {
      type: 'Modern Villa',
      description: 'A spacious modern villa with stunning views.',
      location: 'Los Angeles, CA',
      price: 2500000,
      image: Villa,
    },
    {
      type: 'Urban Loft',
      description: 'An urban loft with a trendy design and close to the city center.',
      location: 'Chicago, IL',
      price: 750000,
      image: Villa,
    },
    {
      type: 'Beachfront Condo',
      description: 'A beachfront condo with spectacular ocean views.',
      location: 'Miami, FL',
      price: 900000,
      image: Cozycottage,
    },
  ];

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-[#111827] mb-8">Available Properties</h1>
      <div className="flex overflow-x-scroll space-x-6 scrollbar-hide">
    
          {properties.map((property, index) => (
            <div
              key={index}
              className="min-w-[300px]  max-w-[300px] flex-shrink-0"
            >
              <PropertyCard property={property} />
            </div>
          ))}
    
      </div>
    </div>
  );
};

export default PropertySection;
