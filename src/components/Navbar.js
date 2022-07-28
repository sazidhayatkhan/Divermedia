import React from 'react'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';

function Navbar({placeholder,data}) {
  return (
   
          <div className='search'>
            <div className='searchInputs'>
              <input type='text' placeholder={placeholder}/>
              <div className='searchIcon'>
                <SearchIcon />
              </div>
            </div> 
            <div className='dataResult'></div>
          </div>
    
  )
}

export default Navbar