import React from 'react'
import vivo from './Images/vivo.webp';
import Oppo from './Images/oppo.webp';
import Poco from './Images/91.webp';
import nine from './Images/vivoti.webp';
import redmi from './Images/Redmi10.webp';
import {Link} from 'react-router-dom';


function Main() {
  return (
    <div className='main'>
    <div className='left-main'>
        <p>Fliters</p><hr/>
        <p>Mobiles & Accessories</p>
        <p>Mobiles</p>
        <hr/>
        <p>Price</p>
        <hr/>
        <p>Brand</p>
    </div>
    <div className='right-main'>
    
        <div className='mobiles'>

            <img src={Oppo } />
            
            <div className='details'>
            <h3>
            <Link className='links' to={'/oppo'}>OPPO K10 (Black Carbon,128 GB)</Link>
            
            </h3>
            <p>35,666 Ratings & 3,241 Reviews</p>
            <ul>
                <li>
6 GB RAM | 128 GB ROM | Expandable Upto 1 TB</li>
                <li>16.74 cm (6.59 inch) Full HD+ Display</li>
                <li>50MP + 2MP + 2MP | 16MP Front Camera</li>
                <li>5000 mAh Lithium Ion Battery</li>
                <li>Qualcomm Snapdragon 680 Processor</li>
                <li>33W SUPERVOOC Charger | Dual Speaker | Super Adaptive Refresh Rate</li>
                <li>AI Photo Suite | OPPO Glow Design with Dirt and Scratch Resistant</li>
            </ul>
            </div>
            
            <div className='right-corner'>
                <span className='price'>₹12,990</span>
                <p>Free Delivery</p>
                <p>Lowest price since launch</p>
            </div>
            
        </div>
        <hr/>
        <div className='mobiles'>
        <img src={Poco} />

        <div  className='details'>
        <h3><Link className='links' to={'/poco'}>POCO M4 Pro 5G (Cool Blue, 128 GB)</Link></h3>
        <p>
        
             82,430 Ratings & 6,008 Reviews
        </p>
        <ul>
                <li>
6 GB RAM | 128 GB ROM | Expandable Upto 1 TB</li>
                <li>16.74 cm (6.59 inch) Full HD+ Display</li>
                <li>50MP + 2MP + 2MP | 16MP Front Camera</li>
                <li>5000 mAh Lithium Ion Battery</li>
                <li>Qualcomm Snapdragon 680 Processor</li>
                <li>33W SUPERVOOC Charger | Dual Speaker | Super Adaptive Refresh Rate</li>
                <li>AI Photo Suite | Poco Glow Design with Dirt and Scratch Resistant</li>
            </ul></div>

            <div className='right-corner'>
                <span className='price'>₹15,990</span>
                <p>Free Delivery</p>
                <p>Lowest price since launch</p>
            </div>
            
        
        </div>
        <hr/>
        <div className='mobiles'>
        <img src={redmi} />
        <div  className='details'>
        <h3> 
        <Link className='links' to={'/redmi'} >REDMI 9i Sport (Coral Green, 64 GB)</Link>
        </h3>
        <p>31,88,472 Ratings & 10,968 Reviews</p>
        <ul>
                <li>
6 GB RAM | 128 GB ROM | Expandable Upto 1 TB</li>
                <li>16.74 cm (6.59 inch) Full HD+ Display</li>
                <li>50MP + 2MP + 2MP | 16MP Front Camera</li>
                <li>5000 mAh Lithium Ion Battery</li>
                <li>Qualcomm Snapdragon 680 Processor</li>
                <li>33W SUPERVOOC Charger | Dual Speaker | Super Adaptive Refresh Rate</li>
                <li>AI Photo Suite | REDMI Glow Design with Dirt and Scratch Resistant</li>
            </ul>
        </div>

        <div className='right-corner'>
                <span className='price'>₹19,990</span>
                <p>Free Delivery</p>
                <p>Lowest price since launch</p>
            </div>
            
        
        </div>
        <hr/>
        <div className='mobiles'>
        <img src={vivo} />
        <div  className='details'>
        <h3> <Link className='links' to={'/vivo'}>vivo T1X (Space Blue, 64 GB)</Link></h3>
        <p>58,774 Ratings & 3,189 Reviews</p>
        <ul>
                <li>
6 GB RAM | 128 GB ROM | Expandable Upto 1 TB</li>
                <li>16.74 cm (6.59 inch) Full HD+ Display</li>
                <li>50MP + 2MP + 2MP | 16MP Front Camera</li>
                <li>5000 mAh Lithium Ion Battery</li>
                <li>Qualcomm Snapdragon 680 Processor</li>
                <li>33W SUPERVOOC Charger | Dual Speaker | Super Adaptive Refresh Rate</li>
                <li>AI Photo Suite |Vivo Glow Design with Dirt and Scratch Resistant</li>
            </ul>
        </div>

        <div className='right-corner'>
                <span className='price'>₹17,990</span>
                <p>Free Delivery</p>
                <p>Lowest price since launch</p>
            </div>
            
        
        </div>
        <hr/>
        <div className='mobiles'>
        <img src={nine} />
        <div className='details'>
        <h3>
         <Link className='links' to={'/nine'}>REDMI 9i Sport (Metallic Blue, 64 GB)</Link>
         </h3>
        <p>1,88,472 Ratings & 10,968 Reviews</p>
        <ul>
                <li>6 GB RAM | 128 GB ROM | Expandable Upto 1 TB</li>
                <li>16.74 cm (6.59 inch) Full HD+ Display</li>
                <li>50MP + 2MP + 2MP | 16MP Front Camera</li>
                <li>5000 mAh Lithium Ion Battery</li>
                <li>Qualcomm Snapdragon 680 Processor</li>
                <li>33W SUPERVOOC Charger | Dual Speaker | Super Adaptive Refresh Rate</li>
                <li>AI Photo Suite | Redmi Glow Design with Dirt and Scratch Resistant</li>
            </ul>
        </div>
        <div className='right-corner'>
                <span className='price'>₹22,990</span>
                <p>Free Delivery</p>
                <p>Lowest price since launch</p>
            </div>
            
        
        </div>
    </div>
      
    </div>
  )
}

export default Main
