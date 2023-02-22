import '../css/prodcart.css';
import React, { useState, useEffect } from 'react'
import Invoice from './Invoice';
import dummy from '../images/Settings.gif';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

function Cart() {

    const navigate = useNavigate()
    let total = 0;
    const [status, setStatus] = useState(false);
    const [t, setT] = useState(0)
    const [cartArr, setCartArr] = useState([])
    const [invoiceStatus, setInvoiceStatus] = useState(false);
    const [loader, setLoader] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(Boolean)

    const fetchCart = async () => {
        try {
            await fetch("http://localhost:5000/cart")
                .then(r => r.json()).then(data => {
                    setStatus(true);
                    setCartArr(data)
                    setLoader(false)
                    data.map(i => total += i.p_price)
                    setT(total);
                })
        } catch (e) {
            setStatus(false);
            console.log(e);
        }
    }

    const removeFromCart = async (id) => {
        try {
            await fetch(`http://localhost:5000/rfcart/${id}`, { method: "DELETE" })
            setCartArr(cartArr.filter(item => item.p_id !== id))
        } catch (e) {
            setStatus(false);
            console.log(e);
        }
    }

    const addToCart = async (x, y, z) => {
        try {
            await fetch("http://localhost:5000/addtocart", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ x, y, z })
            }).then(re => { }).then(da => { fetchCart() })
        } catch (e) {
            setStatus(false);
            console.log(e);
        }
    }

    const emptycart = async() => {
        await fetch('http://localhost:5000/emptycart')
            .then(r => r.json())
    }

    useEffect(() => {
        document.title = "E-Mart - Cart"
        fetchCart();
        fetch('http://localhost:5000/login', { credentials: 'include' })
            .then(r => r.json()).then(d => setIsLoggedIn(d.loggedIn))
    }, [])

    return (
        <>
            <ToastContainer />
            {loader ? <img src={dummy} style={{
                position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", height: "75px"
            }} /> : <>
                {status && <div className='cart' style={{ marginTop: "60px", padding: "10px 0 15px 0" }}>
                    {cartArr.length > 0 ?
                        <div className='payContainer'>
                            <div className='totprice' style={{ marginBottom: "0" }}>
                                Total Amount : {Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(t)}
                            </div>
                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <button className='viewInvoice'
                                    onClick={() => {
                                        setInvoiceStatus(invoiceStatus => !invoiceStatus)
                                    }}
                                >{invoiceStatus ? 'Hide' : 'View'} Invoice</button>
                                <button className='payBtn' onClick={() => {
                                    if (isLoggedIn) {
                                        navigate('/success')
                                        emptycart()
                                    }
                                    else
                                        toast.warn('Login to Purchase!', {
                                            position: "top-right",
                                            autoClose: 1500,
                                            hideProgressBar: false,
                                            closeOnClick: true,
                                            pauseOnHover: true,
                                            draggable: true,
                                            progress: undefined,
                                        });
                                }}
                                >Purchase</button>
                            </div>
                        </div> : <div className='payContainer'>
                            <div className='totprice' style={{ margin: "auto" }}>Cart is Empty!</div>
                        </div>
                    }
                    <hr />
                    <div className='gridContainer'>
                        {cartArr.map(product => (
                            <div className="gridBox" key={product.p_id}>
                                <img src={product.p_img} alt="" />
                                <div className="boxDetails">
                                    <div className="title">{product.p_name}</div>
                                    <div className="category">Lorem</div>
                                    <div className="price">₹ {product.p_price}</div>
                                    <div className='wrapBtns'>
                                        <button title='Click to REMOVE Item!' id='rem' className="addToCart" onClick={() => {
                                            removeFromCart(product.p_id);
                                            setT(t - product.p_price);
                                        }}>Remove</button>
                                        <button title='Click to ADD Item!' id='add' className='addToCart' onClick={() => {
                                            addToCart(product.p_name, product.p_price, product.p_img);
                                            setT(t + product.p_price);
                                        }}>Add</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {invoiceStatus && <Invoice cart={cartArr} agg={t} />}
                </div>}
            </>
            }
        </>
    )
}

export default Cart