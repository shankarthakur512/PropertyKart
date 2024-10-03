import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Layout from './Pages/Layout';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import LogoutPage from './Pages/LogoutPage';
import PropertyListing from './Pages/PropertyListing';
import PropertyDetail from './Pages/PropertyDetail';
import UserProfile from './Pages/UserProfile';
import SignUp from './Pages/SignUp';
import PropertyDetails from './Pages/PropertyDetail';

const App = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
       <Route path="/login" element={<LoginPage />} />
       <Route path='/signup' element={<SignUp />} />
       <Route path="/logout" element={<LogoutPage />} />
       <Route path="/properties" element={<PropertyListing />} />
        <Route path="/property-details" element={<PropertyDetails />} />
           <Route path="/profile" element={<UserProfile />} />
           </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
