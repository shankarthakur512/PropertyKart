import React from 'react';
import { Outlet } from 'react-router-dom'; 


import { Navbar } from '../components/Navbar';
import Footer from '../components/footer';

const Layout = () => {
  return (
    <div >
        <div>
        <Navbar />
        </div>
     
      <main className='py-10'>
        <Outlet /> 
      </main>
    <Footer />
    </div>
  );
};

export default Layout;
