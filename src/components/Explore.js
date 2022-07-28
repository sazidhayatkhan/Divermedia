import React from 'react'
import './Explore.css'
import {Link} from 'react-router-dom'




function Explore() {
 
  return (
    
         <div className='box'> 
           <Link to='/premium' >
             <div className='Horror' text-decoration='none'>Horror</div>
           </Link>
              
              <div className='Thriller'>Thriller</div>
              <div className='Romantic'>Romantic</div>
              <div className='Comedy'>Comedy</div>
         </div>
          
          
  )
}

export default Explore