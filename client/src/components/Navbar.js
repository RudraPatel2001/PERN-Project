import '../css/navbar.css';
import { React, useState } from 'react'
import logo from '../images/logo.svg';
import ham from '../images/ham.png';
import cross from '../images/cross.png';
import { Link } from 'react-router-dom';

function Navbar() {

    const [cn, setCn] = useState('togdown')
    const [status, setStatus] = useState(false);
    const [toggle, setToggle] = useState({});

    const toggleHandler = () => {
        if (status) {
            setStatus(false)
            setCn('togup')
            setToggle({
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "fixed",
                backgroundColor: "#212529",
                margin: "0",
                top: "60px",
                left: "0",
                right: "0",
                bottom: "0",
            })
        }
        else {
            setStatus(true)
            setCn('togdown')
            setToggle({
                left: "100%",
                overflow: "hidden",
            })
        }
    }

    return (
        <nav>
            <Link to="/" className='first'><img className='lg' src={logo} height='30px' /></Link>
            <img src={status ? ham : cross} id='rotHam' className='ham' onClick={() => {
                toggleHandler()
            }} />
            <div style={toggle} className={cn}>
                {/* <Link to="/about">About Me</Link>
                <Link to="/games">Games</Link> */}
                <Link to="/products">Products</Link>
                <Link to="/register">Sign Up</Link>
                <Link to="/login">Login</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/profile">Profile</Link>
            </div>
        </nav>
    )
}

export default Navbar