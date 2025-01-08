import React from 'react'
import {useSelector} from 'react-redux'
import {getItemSelector} from '../../redux/slices/CartSlice';
const Cart = () => {
    // const items = useSelector(getItemSelector);
    //we can also do this if we do not have any getItemSelector export in the CartSlice
    const items = useSelector(state => state.Cart);
    console.log(items);
  return (
    <div>
      <ul>
        {items.map((item)=>{
            return (
                <li>
                    {item.name}        {item.quantity}
                </li>
            )
        })}
      </ul>
    </div>
  )
}

export default Cart
