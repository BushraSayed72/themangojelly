import React from 'react'

function Buynow() {
  return (
    <div className='buynow'>
    <div className='content-center'>
    <div className='price-content'><p>Price Details</p></div>
        
        <hr/>
        <div className='selling-p' ><p>Price (1 item)</p>
        <p className='amount'>₹12,990</p></div>
        <div className='selling-p'><p>Discount</p>
        <p className='amount'>-₹2,990</p></div>
        <div className='selling-p'><p>Delivery Charges</p>
        <p className='amount'>Free</p></div>
        <div className='selling-p'><p>Secure pakaging Fee</p><p className='amount'>₹29</p></div>
        <hr/>
        <p className='green'>You will save ₹2,871 on this order</p>
        <button className='btn-cart'> Place Order</button>
    </div>
       
    </div>
  )
}

export default Buynow
