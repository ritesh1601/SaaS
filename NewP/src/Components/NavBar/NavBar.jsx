import React from 'react'
import './NavBar.css';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
  return (
    <div className='Body'>
      <div className="button-container">
        <button className="button">
          <NavLink to="/"  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "inactive"
  } >       <p className='icon'>HOME</p>
          </NavLink>
        </button>
        <button className="button">
          <NavLink to="/About"  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "inactive"
  } >       <p className='icon'>ABOUT</p>
          </NavLink>
        </button>
        <button className="button">
          <NavLink to="/OrderNow"  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "inactive"
  } >       <p className='icon'>ORDER</p>
          </NavLink>
        </button>
        <button className="button">
          <NavLink to="/UserProfile"  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "inactive"
  } >       <p className='icon'>USER</p>
          </NavLink>
        </button>
        
      </div>
    </div>
  )
}

export default NavBar
