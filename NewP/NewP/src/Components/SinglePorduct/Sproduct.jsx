import React from 'react'
import {useDispatch} from'react-redux';
import { addItem, removeItem } from '../../redux/slices/CartSlice';
const Sproduct = (product) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = React.useState(1);
  const handleQuantityChange = (e) => {
    const value = Math.max(1, Number(e.target.value)); // Ensure quantity is at least 1
    setQuantity(value);
  };
  return (
    <div>
        <img src={product.Image} alt={product.Name}/>
        <div>
            <h5>{product.Name}</h5>
            <input
          type="number"
          value={quantity}
          name="quantity"
          min="1"
          onChange={handleQuantityChange}
            />
            <button onClick={(e)=>dispatch(addItem({name:product.Name , quantity}))}>Add to Cart</button>
            <button onClick={(e)=>dispatch(removeItem({name:product.Name}))}>Remove</button>
        </div>
    </div>
  )
}

export default Sproduct
