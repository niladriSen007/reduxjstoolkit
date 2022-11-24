import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {add} from "../store/cartSlice"
import { fetchProducts } from '../store/productSlice'
import {STATUSES} from "../store/productSlice"


function Product() {
  // const [products,setProducts] = useState([])

  const {data:products,status} = useSelector(state=>state.product)

  const dispatch = useDispatch()


  useEffect(()=>{

    dispatch(fetchProducts())
   

    // const fetchproducts = async() =>{
    //   try
    //   {
    //       const product = await fetch('https://fakestoreapi.com/products')
    //      const jsonData = await product.json()
    //       // .then(json=>console.log(json));
    //       setProducts(jsonData)
    //   }
    //   catch(e)
    //   {
    //     console.log(e)
    //   }
    // }
    // fetchproducts()

  },[])



  const handleAddItem =(product) =>{
      dispatch(add(product))
  }

  if(status === STATUSES.ERROR)
    {
      return <span  style={{fontWeight:"700"}}>Something went wrong ...</span>
    }

  return (
    <div className='products'>
        {
          status === STATUSES.LOADING 
          ? 
           <span style={{fontWeight:"700"}}>Loading...</span>
          :  
            products.map(prod=>(
              <div key={prod.id} className='card'>
                  <img src={prod.image} alt={prod.category} />
                 <h4>{prod.title}</h4>
                 <h4>{prod.price}</h4>
                 <button className='btn' onClick={()=>handleAddItem(prod)}>Add To Cart</button>
              </div>
            ))         
        }
    </div>
  )
}

export default Product