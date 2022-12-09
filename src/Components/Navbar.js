import React , {useState} from 'react'
import mango from './Images/the-mango-jelly-logo-text.svg';
import search from './Images/search-outline.svg';
import {Link} from 'react-router-dom';
import {FaShoppingCart}  from 'react-icons/fa';
import { FaListUl } from 'react-icons/fa';
import { FaCompressArrowsAlt } from 'react-icons/fa';


function Navbar() {
  const [click , setClick ]= useState(false);
  const handleClick =()=> setClick(!click);
  const closeMobileMenu =()=> setClick (false);


  return (
    <nav className='navbar'>
    <img className='mango' src={mango} alt='mango'/>
    <div className='input-search'>
    <input  type='text' placeholder='mobiles phones' />
    <div className='search-icon'>
    <img  src={search} alt='search' /></div> 
    </div>
    <div className="right-div">
      <ul className= {click? 'nav-menu active': 'nav-menu'} >
        <li className='nav-item'> 
        <Link  className='nav-links' to='/' onClick={closeMobileMenu}>Home </Link>
         </li>
        <li className='nav-item'>
        <Link className='nav-links' to='/Buynow' onClick={closeMobileMenu}>More</Link>
         </li>
        <li className='nav-item icon'>
        <Link className='nav-links ' to='/Buynow' onClick={closeMobileMenu}>Cart</Link> 

         <FaShoppingCart className='iconwhite'/></li>
      </ul>
      <div className='menu-icon' onClick={handleClick}>
     <div> {click? <FaCompressArrowsAlt/>:<FaListUl/>  }</div>


    </div>
      
    </div>
    
    
        
     
      
    </nav>
  )
}

export default Navbar
