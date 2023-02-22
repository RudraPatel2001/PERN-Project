import '../css/prodcart.css';
import React, { useState, useEffect } from 'react'
import spinner from '../images/Settings.gif';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Products() {

    const [proArr, setProArr] = useState([])
    const [search, setSearch] = useState('')
    const [loader, setLoader] = useState(true)

    const fetchProducts = async () => {
        await fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => {
                setProArr(data)
                setLoader(false)
            })
    }

    const sortProducts = async (e) => {
        let eTarVal = e.target.value;
        if (eTarVal == 2) {
        await fetch("http://localhost:5000/sortproducts")
            .then(res => res.json())
            .then(data => {
                setProArr(data)
                setLoader(false)
            })
        } else if (eTarVal == 3) {
            await fetch("http://localhost:5000/revsortprods")
            .then(res => res.json())
            .then(data => {
                setProArr(data)
                setLoader(false)
            })
        }
    }

    const addToCart = async (x, y, z) => {
        const body = { x, y, z }
        await fetch("http://localhost:5000/addtocart", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        }).then(r => {
            toast.success(`${x} added to cart!`, {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        })
    }

    useEffect(() => {
        fetchProducts();
        fetch('http://localhost:5000/login',{credentials: 'include'})
            .then(r => r.json())
    }, [])

    return (
        <div className='proContainer'>
            <ToastContainer />
            <div className='proHead'>Products</div>
            <div className='filter'>
                <div style={{display: "flex", alignItems: "center"}}>
                    <input type='text' className='search' placeholder='Search...' onChange={(e) => setSearch(e.target.value)} />
                    <select>
                        <option value={1} onClick={fetchProducts}>Original</option>
                        <option value={2} onClick={e => sortProducts(e)}>a - z</option>
                        <option value={3} onClick={e => sortProducts(e)}>z - a</option>
                    </select>
                    {/* <button onClick={sortProducts}>Sort</button>
                    <button onClick={fetchProducts}>Original</button> */}
                </div>
            </div>
            {loader ? <img src={spinner} style={{
                position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", height: "75px"
            }} /> : <div className='gridContainer' id='proPage'>
                {proArr.filter(product => {
                    if (search === "")
                        return product
                    else if (product.name.toLowerCase().includes(search.toLowerCase()))
                        return product
                }).map(product => (
                    <div className="gridBox" key={product.id}>
                        <img src={product.img} alt="" />
                        <div className="boxDetails">
                            <div className="title">{product.name}</div>
                            <div className="category">Lorem</div>
                            <div className="prodDes">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                            <div className="discount">MRP <del>{product.price}</del>&nbsp;&nbsp;<span>{product.discount}% OFF</span></div>
                            <div className="price">₹ {parseInt(product.price * (100 - product.discount) / 100)}</div>
                            <button title='Click to ADD Item!' className="addToCart" onClick={() => {
                                addToCart(product.name, (product.price * (100 - product.discount) / 100), product.img);
                            }}
                            >Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>}
        </div>
    )
}

export default Products