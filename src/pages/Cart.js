import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { remove } from '../store/cartSlice';


export default function Cart() {
    const dispatch=useDispatch();
    const products=useSelector(state=>state.cart)
    const handleRemove=(prodId)=>{
        dispatch(remove(prodId))
}


const item=useSelector((state)=>state.cart)
if (item.length<=0) {
  return (
    <h3>no item in the cart</h3>
  )
}
  return (
    <div>
      <h3>Cart</h3>
      <div className='cartWrapper'></div>
      {
        products.map(prod=>(
            <div className='cartCard'>    
                <img src={prod.image} alt=""></img>
                <h4>{prod.title}</h4>
                <h5>{prod.price}</h5>
                <button onClick={() => handleRemove(prod.id)} className='btn'>Remove</button>

            </div>
        ))
      }
    </div>
  )
}
