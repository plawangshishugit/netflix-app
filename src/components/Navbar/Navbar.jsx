import React from 'react'
import './Navbar.css';
import logo from '../../assets/logo.jpg'
import search_icon from '../../assets/search_icon.png'
import bell_icon from '../../assets/bell-icon.svg'
import profile_icon from '../../assets/profile_img.png'
import dropdown_icon from '../../assets/caret-icon.svg'


const Navbar = () => {
  return (
    <div className="navbar">
      <div className='navbar-left'>
        <img src={logo} alt="Logo" className='navbar-logo' />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New and Popular</li>
          <li>My list</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className='navbar-right'>
        <img src={search_icon} alt="Search Icon" className='icons' />
        <p>Children</p>
        <img src={bell_icon} alt="Bell Icon" className='icons' />
        <div className="navbar-profile">
          <img src={profile_icon} alt="Profile Icon" className='profile'/>
          <img src={dropdown_icon} alt="Dropdown Icon" className='dropdown-icon'/>
          <div className='dropdown'>
            <p>
              Sign Out of Netflix
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar