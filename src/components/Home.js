import React from 'react'

import './Home.css'
import Carousal from './Carousal'
import Carousal_2 from './Carousal_2'
import Explore from './Explore'



function Home() {
  return (
    <div className='home'>
              <div>
                <h1>Your top genres</h1>
                <Explore />
              </div>

              <div>
                <h1>Made for you</h1>
                <Carousal />
              </div>

              <div>
                <h1>New Release</h1>
                <Carousal_2/>
              </div>
    </div>
  )
}

export default Home