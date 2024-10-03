import React, { useState } from 'react';
import Logo from '../assets/logo.jpeg';
import axios from 'axios';
import { RegisterUser } from '../Apihandle';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    Name: '',
    email: '',
    password: '',
    avatar: ''
  });

  const [avatarPreview, setAvatarPreview] = useState(null); // To preview the image
  const [avatarFile, setAvatarFile] = useState(null); // To store the selected file
const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Set file for submission
      setAvatarFile(file);

      // Preview the selected image
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result); // base64 image preview
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    
    try {
      const formDataToSubmit = new FormData();
      formDataToSubmit.append('Name', formData.Name);
      formDataToSubmit.append('email', formData.email);
      formDataToSubmit.append('password', formData.password);
      formDataToSubmit.append('avatar', avatarFile); 

      const response = await axios.post(RegisterUser, formDataToSubmit, {
        headers: {
          'Content-Type': 'multipart/form-data', // To handle file uploads
        }
      });

      const { user } = response.data;
      console.log(user);
      localStorage.setItem('userInfo', JSON.stringify(user));
      navigate('/');
    } catch (error) {
      console.error('RegisterUser error', error);
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img className="mx-auto h-24 w-auto rounded-full" src={Logo} alt="Company Logo" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Already have an account?{' '}
            <a href="/login" className="font-medium text-blue-600 hover:text-blue-500">
              Sign in here
            </a>
          </p>
        </div>

        {avatarPreview && (
          <div className="flex justify-center">
            <img src={avatarPreview} alt="Avatar Preview" className="h-24 w-24 rounded-full mt-4" />
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSignUp}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="Name"
                type="text"
                required
                value={formData.Name}
                onChange={handleInputChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleInputChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="avatar" className="sr-only">
                Avatar
              </label>
              <input
                id="avatar"
                name="avatar"
                type="file"
                accept="image/*"
                required
                onChange={handleAvatarChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
