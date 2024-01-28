import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../store/cartSlice';

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const handleRemove = (prodId) => {
    dispatch(remove(prodId));
  };

  if (cartItems.length <= 0) {
    return (
      <>
        <h3>No items in the cart</h3>
        <h3>Total Cost: $0.00</h3>
      </>
    );
  }

  // Create a map to count the quantity of each unique item
  const itemQuantityMap = cartItems.reduce((acc, item) => {
    if (!acc[item.id]) {
      acc[item.id] = { ...item, quantity: 1 };
    } else {
      acc[item.id].quantity += 1;
    }
    return acc;
  }, {});

  // Calculate total cost using reduce
  const totalCost = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h3>Cart</h3>
      <div className='cartWrapper'></div>
      {Object.values(itemQuantityMap).map((item) => (
        <div className='cartCard' key={item.id}>
          <img src={item.image} alt=""></img>
          <h4>{item.title} {item.quantity > 1 ? `x${item.quantity}` : ''}</h4>
          <h5>{item.price}</h5>
          <button onClick={() => handleRemove(item.id)} className='btn'>
            Remove
          </button>
        </div>
      ))}
      <h3>Total Cost: ${totalCost.toFixed(2)}</h3>
    </div>
  );
}
