import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
         
          <div className="mb-8 md:mb-0">
            <h3 className="text-white text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are a real estate company committed to providing top-notch services to help you find your dream home.
            </p>
          </div>

          
          <div className="mb-8 md:mb-0">
            <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-white">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">About</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Properties</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Contact Us</a>
              </li>
            </ul>
          </div>

         
          <div className="mb-8 md:mb-0">
            <h3 className="text-white text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Email: info@realestate.com</li>
              <li>Phone: +123 456 7890</li>
              <li>Address: 123 Main Street, City, Country</li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.56v15.08a4.56 4.56 0 0 1-4.56 4.56H4.56A4.56 4.56 0 0 1 0 19.64V4.56A4.56 4.56 0 0 1 4.56 0h14.88A4.56 4.56 0 0 1 24 4.56zM9.61 19.64V9.69h-3v9.95h3zm-1.5-11.31c-.96 0-1.75-.79-1.75-1.75s.79-1.75 1.75-1.75 1.75.79 1.75 1.75-.79 1.75-1.75 1.75zm13.63 11.31v-5.28c0-2.6-1.39-3.81-3.24-3.81-1.5 0-2.18.82-2.55 1.4v-1.2h-3v9.95h3v-5.47c0-.78.13-1.54.99-1.54.85 0 .87.9.87 1.61v5.4h3z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.41 3.61 8.07 8.26 8.93v-6.32h-2.5V12h2.5v-1.66c0-2.47 1.49-3.83 3.75-3.83 1.07 0 2.2.2 2.2.2v2.4h-1.24c-1.22 0-1.6.76-1.6 1.53V12h2.75l-.44 2.65h-2.31v6.32C18.39 20.11 22 16.45 22 12.04c0-5.52-4.48-10-10-10z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a8.5 8.5 0 0 1-2.44.67 4.26 4.26 0 0 0 1.87-2.36 8.51 8.51 0 0 1-2.7 1.03 4.24 4.24 0 0 0-7.23 3.87A12.03 12.03 0 0 1 3.35 5.15a4.24 4.24 0 0 0 1.31 5.66 4.24 4.24 0 0 1-1.92-.53v.05c0 2.04 1.46 3.74 3.39 4.12a4.23 4.23 0 0 1-1.91.07 4.25 4.25 0 0 0 3.96 2.95A8.51 8.51 0 0 1 2 19.54a12.03 12.03 0 0 0 6.49 1.9c7.79 0 12.05-6.46 12.05-12.05 0-.18 0-.35-.01-.53a8.56 8.56 0 0 0 2.11-2.19z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2024 RealState Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
