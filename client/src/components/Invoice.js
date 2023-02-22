import React from 'react'
import '../css/invoice.css'
import logo from '../images/logo.svg';
import jsPDF from 'jspdf';

function Invoice({ cart, agg }) {

    const genInvoice = () => {
        // const temp = new jsPDF('l', 'px', 'a2');
        const temp = new jsPDF('p', 'px', 'a1');
        temp.html(document.querySelector('.invoice'), {
            callback: function(pdf) {
                pdf.save("invoice.pdf")
            }
        })
    }

    return (
        <div className='invoice'>
            <div className='companyContain'>
                <div className='head'>Invoice</div>
                <div className='company'>
                    <img src={logo} alt='' />
                    <div className='name'>E - Mart</div>
                </div>
            </div>
            <div className='mop'>Mode of Payment : Cash on Delivery</div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(x => (
                        <tr key={x.p_id}>
                            <td>{x.p_name}</td>
                            <td>1</td>
                            <td>{Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(x.p_price)}</td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan={2} className='total'>Total</td>
                        <td>{Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(agg)}</td>
                    </tr>
                </tbody>
            </table>
            <button className='dload' onClick={genInvoice}>Download</button>
        </div>
    )
}

export default Invoice