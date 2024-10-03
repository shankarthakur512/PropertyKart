import React from 'react'
import BannerPoperty from '../components/BannerPoperty'
import About from '../components/About'
import PropertySection from '../components/PropertySection'

const HomePage = () => {
  return (
    <div>
        <BannerPoperty />
        <div className='mt-5' id='about'>
            <About />
        </div>
        <div>
            <PropertySection  />
        </div>
    </div>
  )
}

export default HomePage