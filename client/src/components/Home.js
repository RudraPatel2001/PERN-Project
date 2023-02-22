import '../css/home.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AboutMe from './AboutMe';
import Games from './Games';
import Products from './Products';
import Social from './Social';

function Home() {

  useEffect(() => {
    document.title = 'E-Mart'
  }, [])

  return (
    <>
      <div className='home'>
        <div className='containText'>
          <div className='head'>Welcome to E-Mart</div>
          <div className='des'>We provide our customers the best-in-class products and we also avail them with the doorstep services with minimal delivery charges</div>
          {/* <div className='des'>We also avail them with the doorstep services with minimal delivery charges</div> */}
          <div className='containBtns'>
            <Link to="/login" className='lgBtn'>Login</Link>
            <Link to="/register" className='suBtn'>Sign Up</Link>
          </div>
        </div>
        <div className='blob'></div>
      </div>
      <AboutMe />
      <Games />
      {/* <Products /> */}
      <Social />
    </>
  )
}

export default Home