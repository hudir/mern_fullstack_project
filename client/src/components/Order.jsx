import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { Context } from '../context/context'

export default function Order() {
    const { userInfo } = useContext(Context)
    const [order, setOrder] = useState([])

    useEffect(()=>{
        fetch('/order/my/' + userInfo.id)
        .then(res=>res.json(res))
        .then(data=>{
           setOrder(data)
        })
    },[])

  return (
    <div>
      {order.length>0 && <>

        {order.map((ele, i)=>( <div key={i}>
          <h3>Order on {ele.created_at}</h3>
          
           <ul>
            {ele.order.map((product,index)=>( <div key={index}>
              <li>{product.product_title}  price: {product.price}€  quantity: {product.quantity}</li>
            </div> ))}
           </ul>

           <h3>Total: {ele.totalPrice} €</h3>
        </div> ))}
      </>}
    </div>
  )
}
