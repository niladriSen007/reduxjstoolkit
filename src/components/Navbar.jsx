import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {

    const selector = useSelector((state)=>state.cart)
  return (
    <nav className='navigation'>
            <span>REDUX STORE</span>
            <div>
                <Link to="/">Home</Link>
                <Link to="/cart">Cart</Link>
                <span className="cartCounter">Cart Items : {selector.length}</span>
            </div>
    </nav>
  )
}

export default Navbar