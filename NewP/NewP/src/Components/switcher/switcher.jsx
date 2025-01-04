import React from 'react';
import './switcher.css';
import { NavLink } from 'react-router-dom';

const Switcher = () => {
  return (
    <div className='outerCover'>
      <div className='coverUp'>
        <button className='sButton'>
          <NavLink to="/vegetables" className={({ isActive }) => (isActive ? 'sbactive' : 'sbinactive')}>
            Vegetables
          </NavLink>
        </button>
        <button className='sButton'>
          <NavLink to="/fruits" className={({ isActive }) => (isActive ? 'sbactive' : 'sbinactive')}>
            Fruits
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default Switcher;
