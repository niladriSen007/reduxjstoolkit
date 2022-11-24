import React from 'react'
import Product from '../components/Product'

function Home() {
  return (
   <div className="home" style={{backgroundColor:"rgb(226, 243, 246",textAlign:"center",padding:"20px  0px"}}>
    <h2 style={{marginBottom:"12px"}}>Welcome to the Redux Toolkit Store</h2>
    <section>
        <h3>Products</h3>
                <div>
                    <Product />
                </div>
    </section>
   </div>
  )
}

export default Home