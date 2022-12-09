import React from 'react'
import oppo from './Images/oppo.webp';
import {FaShoppingCart}  from 'react-icons/fa';
import {FaGetPocket}  from 'react-icons/fa';
import {FaDiaspora} from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Oppo=() =>{
  return (
    <div className='mobile_details'>
    <div className='oppo-left'>
    <img src={oppo } /> 
    <div className='buttons'>
    <button className='btn-cart'> <FaShoppingCart/>  
    <Link className='link' to='/Buynow'>Add to Cart</Link>
    </button>  
    <button className='buy'> <FaGetPocket/><Link className='link' to='/Buynow'>Buy Now</Link></button>
    </div>
    
    </div>

    <div className='oppo-right'>
    <h3>OPPO K10 (Black Carbon,128 GB)</h3>
    <p className='yellow'>35,666 Ratings & 3,241 Reviews</p>
    <div className='price-details'>
    <span className='price'>₹12,990</span>
    <p className='para'><del>₹18,999</del></p>
    <p className='green'>31% off</p>
    </div>
    <p>+ ₹29 Secured Packaging Fee</p>
    <h2>Available offers</h2>
    <ul className='oppo-list'>
        <li><FaDiaspora/>    <strong>Bank Offer</strong> 10% instant discount on Federal Bank Debit Cards, up to ₹1500 on orders of ₹5,000 and aboveT&C</li>
        <li> <FaDiaspora/>     Special Price Get extra ₹6009 off (price inclusive of cashback/coupon)T&C</li>
        <li> <FaDiaspora/>     Get Google Audio @ 6699T&C</li>
        <li> <FaDiaspora/>     Google Nest mini at just ₹1999T&C</li>
    </ul>

    </div>
      
    </div>
  )
}

export default Oppo
