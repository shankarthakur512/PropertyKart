import React, { useState, useEffect } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from "../assets/logo.jpeg"
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // To toggle between profile and sign-in/sign-up
  const [userInfo, setUserInfo] = useState(null); // To store user information
  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/#about', current: false },
    { name: 'Properties', href: '/properties', current: false },
  ];
  
  const navigate = useNavigate();

  // Check local storage for user info
  const handleLocalStorageChange = () => {
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      const user = JSON.parse(storedUserInfo);
      setUserInfo(user);
      setIsAuthenticated(true);
    } else {
      setUserInfo(null);
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    // Initial check when component mounts
    handleLocalStorageChange();

    // Adding event listener for 'storage' changes
    window.addEventListener('storage', handleLocalStorageChange);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('storage', handleLocalStorageChange);
    };
  }, []);

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <Disclosure as="nav" className="bg-gray-800 py-3 fixed w-full z-50 ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                src={Logo} // Use your custom logo here
                alt="Company Logo"
                className="h-12 w-auto rounded-full"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium'
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
           
            {!isAuthenticated ? (
              <div className="flex space-x-4">
                <button
                  className="text-white bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                  onClick={() => navigate('/login')}
                >
                  Sign In
                </button>
                <button
                  className="text-white bg-blue-600 hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                  onClick={() => navigate('/signup')}
                >
                  Sign Up
                </button>
              </div>
            ) : (
              <>
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

              
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      {userInfo && userInfo.avatar ? ( // Check if user info and avatar exists
                        <img
                          src={userInfo.avatar} // Use user's avatar
                          alt="User Profile"
                          className="h-8 w-8 rounded-full"
                        />
                      ) : (
                        <img
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt="Default User Profile"
                          className="h-8 w-8 rounded-full"
                        />
                      )}
                    </MenuButton>
                  </div>
                  <MenuItems
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <MenuItem>
                      <a href="/profile" className="block px-4 py-2 text-sm text-gray-700">
                        Your Profile
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                        Settings
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700" onClick={() => {
                        localStorage.removeItem('userInfo'); // Clear user info from local storage
                        setIsAuthenticated(false); // Set authenticated to false
                        setUserInfo(null); // Clear user info
                      }}>
                        Sign Out
                      </a>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </>
            )}
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
