import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PropertyCard from '../components/PropertyCard';
import { SearchProperty } from '../Apihandle';
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const PropertyListing = () => {
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState([]);
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();

  // Dummy data for recommended properties
  const recommendedProperties = [
    { 
      type: 'Rent',
      description: 'A cozy 2-bedroom apartment.',
      location: 'Nearby City 1',
      price: 1000,
      image: image1
    },
    { 
      type: 'Sell',
      description: 'A luxurious 4-bedroom villa.',
      location: 'Nearby City 2',
      price: 500000,
      image: image2
    },
    { 
      type: 'Rent',
      description: 'Spacious 3-bedroom house.',
      location: 'Nearby City 3',
      price: 2000,
      image: image3
    },
  ];

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo'); 
    if (!userInfo) {
      navigate('/login'); 
    }
  }, [navigate]);

  
  const fetchProperties = async () => {
    try {
      setLoading(true);
      const response = await axios.post(SearchProperty, { location });
      setProperties(response.data.properties);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching properties:', error);
      setLoading(false);
    }
  };

  
  const handleSearch = () => {
    if (location) {
      setShowModal(false);  // Close the modal
      fetchProperties(); // Fetch properties after modal is closed
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Modal for entering location */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Enter Location where you are searching property</h2>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location"
              className="p-2 border border-gray-300 rounded-lg w-full"
            />
            <button
              onClick={handleSearch}
              className="mt-4 bg-blue-500 text-white p-2 rounded-lg w-full hover:bg-blue-600"
            >
              Search
            </button>
          </div>
        </div>
      )}

      {/* Show properties and recommendations only when modal is closed */}
      {!showModal && (
        <>
          {loading ? (
            <div className="flex justify-center flex-col gap-5 items-center h-64 pt-16">
              <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-900 h-32 w-32"></div>
              <h1>Loading</h1>
            </div>
          ) : (
            <div className='mt-20'>
              <h1 className='text-3xl text-center text-bg-gray-900'>Available Properties</h1>

              <div className="flex flex-wrap justify-center mt-10">
                {properties.length > 0 ? (
                  properties.map((property, index) => (
                    <PropertyCard key={index} property={property} />
                  ))
                ) : (
                  <p className="text-gray-800 text-xl mt-6">No properties found for this location.</p>
                )}
              </div>

              {/* Recommended properties section */}
              <div className="mt-20">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Recommended Properties</h2>
                <div className="flex flex-wrap justify-center">
                  {recommendedProperties.map((property, index) => (
                    <PropertyCard key={index} property={property} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PropertyListing;
