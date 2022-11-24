import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice'


function Cart() {
  const products = useSelector(state=>state.cart)

  const dispatch = useDispatch()
  const handleRemoveItem = (productId) =>{
    dispatch(remove(productId))
  }
  return (
    <div className='cartContainer'>
      <h3>Cart</h3>
      <div className="menuContainer">
          <span>Item</span>
          <span>Name</span>
          <span>Price</span>
          <span>Action</span>
        </div>
      <div className="cartWrapper">
       
        {
          products.map(product=>(
            <div className="cartCard" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h5>{product.title}</h5>
              <h5>{product.price}</h5>
              <button className="btn" onClick={()=>handleRemoveItem(product.id)}>Remove</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart