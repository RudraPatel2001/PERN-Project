import '../css/reglog.css';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import loader from '../images/Settings.gif'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {

    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(Boolean)
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(true)

    const formHandler = async (e) => {
        e.preventDefault();
        if (fName === '' || lName === '' || username === '' || password === '' || email === '')
            toast.warn('Missing Details!', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        else {
            const body = { fName, lName, username, password, email };
            const res = await fetch('http://localhost:5000/register', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            }).then(r => {
                if (r.status === 200) {
                    toast.success(`Registration Successful!`, {
                        position: "top-right",
                        autoClose: 1500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    navigate('/login')
                } else {
                    toast.error('Try Registering Again!', {
                        position: "top-right",
                        autoClose: 1500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            })
        }
    }

    useEffect(() => {
        document.title = 'E-Mart - Register';
        fetch('http://localhost:5000/login', { credentials: 'include' })
            .then(r => r.json())
            .then(d => { setIsLoggedIn(d.loggedIn); setLoading(false); })
    }, [])

    return (
        <>
            {loading ? <img src={loader} style={{
                position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", height: "75px"
            }} /> : <>
                <ToastContainer
                    position="top-right"
                    autoClose={1500}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                {!isLoggedIn ? <div className='wrapReg'>
                    <div className="register">
                        <h2>Sign Up</h2>
                        <p>Please enter the following information to create your account.</p>
                        <form onSubmit={formHandler} className="personalInfo">
                            <div className="flex">
                                <div className="name">
                                    <p>First Name *</p>
                                    <input type="text" id="fname" onChange={
                                        e => setFName(e.target.value)
                                    } />
                                </div>
                                <div className="name">
                                    <p>Last Name *</p>
                                    <input type="text" id="lname" onChange={
                                        e => setLName(e.target.value)
                                    } />
                                </div>
                            </div>
                            <div className="flex">
                                <div className="name">
                                    <p>Username *</p>
                                    <input type="text" id="username" onChange={
                                        e => setUsername(e.target.value)
                                    } />
                                </div>
                                <div className="name">
                                    <p>Password *</p>
                                    <input type="password" id="password" onChange={
                                        e => setPassword(e.target.value)
                                    } />
                                </div>
                            </div>
                            <div className='name'>
                                <p>Email Address *</p>
                                <input type="email" id="email" onChange={
                                    e => setEmail(e.target.value)
                                } />
                            </div>
                            <div className='btnFlex'>
                                <button type="submit" className="btn">Register</button>
                                <div style={{
                                    width: "fit-content",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginTop: "25px"
                                }}>
                                    <div>Already have an account?</div>
                                    <Link to="/login">Login</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div> : <div className='profile'>
                    <div className='des'>Action Unavailable!</div>
                    <Link to="/profile">Profile</Link>
                </div>
                } </>
            }
        </>
    )
}

export default Register