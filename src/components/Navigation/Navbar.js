import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

export default function Navbar() {
  return (
    <div className="navBarBox">
        <div className="navBarLeft">
            <span className="logo">fakebook</span>
        </div>
        <div className="navBarCenter">
            <div className="searchBarBox">
                <SearchIcon className='searchIcon'/>
                <input placeholder='Search for your friend' className="searchInput" />
            </div>
        </div>
        <div className="navBarRight"></div>
    </div>
  )
}
