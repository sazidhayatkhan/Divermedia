import React from 'react'
import './Premium.css'
import { FcLock,FcMultipleInputs,FcPicture } from "react-icons/fc";



function Premium(){


 
  return (
    <div className='premium'>
       <div className='heading'>
       <p>Premium</p>
       </div>
        <h3>Unlimited Drama only at<br/>CMV Entertainment</h3>


        <div className='small-world'>
          
            <p><FcLock/>    Unlock premium Natok and dramas</p>
            <p><FcMultipleInputs/>  Unlimited download</p>
            <p><FcPicture/>  Watch in HD upto 4K resolution</p>
            
        </div>
        
        <div className='sampleBox'>
            
            <h1>Monthly</h1>
            <p>30 Days</p>

        </div>
        <div className='sampleBox2'>
            <h1>15 days package</h1>
            <p>15 days</p>
        </div>

        <div className='register'>
            <button type="button" class="btn btn-primary">Register</button>
        </div>
        
    </div>
  )
}

export default Premium