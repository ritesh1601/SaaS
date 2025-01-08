import React from 'react'
import { Outlet } from 'react-router-dom';
import './OrderNow.css';
import { Half_green_moon , Cart_Bag} from './imports.js';
const OrderNow = () => {
  return (
    <div className='OrderNow'>
      <div className='OrderNow-heading '>
        <div className='OrderNow-heading_image'>
        <img src={Half_green_moon} alt="Half_green_moon" />
        </div>
        <div className='OrderNow-heading_text'>
          <h1 className='gradient__text'>Order Now</h1>
          </div>
      </div>
      <div className='OrderNow-Cart_bag'>
        <img src={Cart_Bag} alt="Cart_Bag" />
      </div>
      <Outlet/>
 
    </div>
  )
}

export default OrderNow;
