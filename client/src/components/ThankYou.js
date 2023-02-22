import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ticklogo from '../images/tick.png'
import '../css/thankyou.css'

function ThankYou() {
  const [progressBar, setProgressBar] = useState(true)
  setTimeout(() => {
    setProgressBar(false)
  }, 2000);
  return (
    <>
      {progressBar ?
        <div className='tycontainer'>
          <div className='progress'>
            <div className='bar'></div>
          </div>
          <div className='process'>Processing...</div>
        </div> :
        <div className='tycontainer'>
          <img src={ticklogo} />
          <div className='head'>Purchase Successful!</div>
          <div className='des'>Hope you had a great customer experience!</div>
          <div className='containLinks'>
            <Link to='/'>Home</Link>
            <Link to='/profile'>Profile</Link>
            <Link to='/rateus'>Rate Us</Link>
          </div>
        </div>
      }
    </>
  )
}

export default ThankYou