import React from 'react'
import { useContext } from 'react'
import { Context } from '../context/context'

export default function Cart() {
    const {cart, userInfo,setCart} = useContext(Context)

    const payOrderHandler = e =>{
        // console.log(userInfo)
        fetch('/order/add', {
            method: 'POST',
            body: JSON.stringify({
                order:cart,
                customerId: userInfo.id,
                totalPrice: cart.reduce((acc, item)=>acc + item.price * item.quantity , 0),
                address: userInfo.address,
                created_at:Date.now()
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then(json=>{
                // console.log(json)
                alert('Thanks for your purchase/n'+JSON.stringify(json))
                setCart([])
                
            })
    }
    
  return (
    <div>
        <h2>Shopping Cart</h2>
        {cart.map((item, i)=>(<div key={i}>
         <h3>{item.product_title}</h3>
         <p>quantity: {item.quantity}</p>
         <p>price: {item.price * item.quantity} €</p>
        </div>))}
        <h2>Total: {cart.reduce((acc, item)=>acc + item.price * item.quantity , 0)} €</h2>

        {cart.length>0 && <button onClick={payOrderHandler}>Pay the order</button>}
    </div>
  )
}
