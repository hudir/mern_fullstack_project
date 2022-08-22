import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Product() {
  const [allProducts, setAllProducts] = useState()

  useEffect(()=>{
    fetch('http://localhost:5000/product/all')
    .then(res=>res.json(res))
    .then(data=>setAllProducts(data))
  }, [])

  // console.log(allProducts)
  
  return (
    <div>
      {
         allProducts && allProducts.map((ele,i) => (
           <div key={i}>
              <h3>{ele.product_title}</h3>
              <h5>quantity: {ele.quantity}</h5>
              <h5>price: {ele.price}</h5>
           </div>
         ))
      }
    </div>
  )
}
