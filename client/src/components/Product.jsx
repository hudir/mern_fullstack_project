import React from 'react'
import { useContext } from 'react'
import { Context } from '../context/context'

export default function Product() {
  const {allProducts} = useContext(Context)
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
