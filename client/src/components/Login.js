import '../css/reglog.css';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import loader from '../images/Settings.gif'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(Boolean)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(true)

    const userLogin = async (e) => {
        e.preventDefault();
        if (username === '' || password === '')
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
            const body = { username, password }
            const getUser = await fetch('http://localhost:5000/login', {
                method: "POST",
                credentials: 'include',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            }).then(res => res.json()).then(data => {
                if (data.length > 0) {
                    toast.success(`Welcome, ${username.toUpperCase()}!`, {
                        position: "top-right",
                        autoClose: 1500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    navigate('/profile')
                } else {
                    toast.error('Incorrect Credentials!', {
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
        document.title = 'E-Mart - Login';
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
                {!isLoggedIn ? <div className='wrap'>
                    <div className='containLogin'>
                        <div style={{ width: "85%", margin: "0 auto" }}>
                            <h2>Login</h2>
                            <p>Please enter the following information to login to your account.</p>
                        </div>
                        <div className="contain">
                            <div className="box">
                                <div className="title">New Customer</div>
                                <hr />
                                <div className="des">Registration is free and easy</div>
                                <div className="points">
                                    <div className="pt">&#9679;&nbsp;Faster checkout</div>
                                    <div className="pt">&#9679;&nbsp;Save multiple shipping addresses</div>
                                    <div className="pt">&#9679;&nbsp;View and track orders and more</div>
                                </div>
                                <Link to="/register">Sign Up</Link>
                            </div>
                            <div className="box">
                                <div className="title">Registered Customers</div>
                                <hr />
                                <div className="des">If you have an account with us, please log in.</div>
                                <form onSubmit={userLogin}>
                                    <div className="loginInput">Username *</div>
                                    <input type="text" className="username" onChange={
                                        e => setUsername(e.target.value)
                                    } />
                                    <div className="loginInput">Password *</div>
                                    <input type="password" onChange={
                                        e => setPassword(e.target.value)
                                    } />
                                    <button type="submit">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div> : <div className='profile'>
                    <div className='des'>You are alredy Logged In!</div>
                    <Link to="/profile">Profile</Link>
                </div>
                } </>
            }
        </>
    )
}

export default Login