import React from 'react'
import logo from '../images/dp.jpg';
import '../css/about.css';

function AboutMe() {
    return (
        <div className='about'>
            <img src={logo} />
            <div style={{width: "60%"}}>
                <div className='head'>About Me</div>
                <div className='des'>Rudra Patel, 21, UnderGraduate, Football, Full-Stack Developer, Stack : P.E.R.N (PostgreSQL, ExpressJS, ReactJS, NodeJS)<br />
                I started my 'Coding Journey' 2 years back during the first Lockdown. Initially, I started with Python followed by JavaScript, React.js, Node.js, Express.js and currently I'm learning Web3 and Blockchain!
                </div>
                {/* <div className='des'>(PostgreSQL, ExpressJS, ReactJS, NodeJS)</div> */}
            </div>
        </div>
    )
}

export default AboutMe