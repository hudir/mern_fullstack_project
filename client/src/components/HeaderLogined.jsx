import React, { useState } from 'react'
import { useEffect } from 'react'
// import { useState } from 'react'
import { useContext } from 'react'
import { Context } from '../context/context'

export default function HeaderLogined() {

    const {userInfo, setUpdateProductList, updateProductList} = useContext(Context)
    
    const [userProduct, setUserProduct] = useState()

    const addFakerProduct = e =>{
        fetch('http://localhost:5000/product/add/'+ userInfo.id)
        .then(res=>res.json(res))
        .then(data=>{
            alert(data.msg + ' by '+ userInfo.username)
            setUpdateProductList(pre=>+pre+1)
            // console.log(updateProductList)
        }) 
    }

    const showUserProduct = e =>{
        fetch('http://localhost:5000/product/allByUser/'+ userInfo.id)
        .then(res=>res.json(res))
        .then(data=>{
            setUserProduct(data)      
        }) 
    }

    useEffect(()=>{
        if(userProduct){
            fetch('http://localhost:5000/product/allByUser/'+ userInfo.id)
            .then(res=>res.json(res))
            .then(data=>{
                setUserProduct(data)      
            }) 
        }
    }, [updateProductList])

  return (
    <div>
        <p>UserName: {userInfo.username}</p>
        <p>Email: {userInfo.email}</p>
        <p>Id: {userInfo.id}</p>

        <button onClick={addFakerProduct}>Add Faker Product</button>
        <button onClick={showUserProduct}>My Product</button>

        {userProduct && <>
           <hr />
           <h1>My Product</h1>
            {userProduct.map((ele,i)=>
            <div key={i}>
                <h2>{ele.product_title}</h2>
                <h4>quantity: {ele.quantity}</h4>
                <h4>price: {ele.price}</h4>
            </div>
            )}
            <hr />
        </>}
    </div>
  )
}
