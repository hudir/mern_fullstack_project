import React from 'react'
// import { useState } from 'react'
import { useContext } from 'react'
import { Context } from '../context/context'

export default function HeaderLogined() {

    const {userInfo, setUpdateProductList, updateProductList} = useContext(Context)
    

    const addFakerProduct = e =>{
        fetch('http://localhost:5000/product/add/'+ userInfo.id)
        .then(res=>res.json(res))
        .then(data=>{
            alert(data.msg + ' by '+ userInfo.username)
            setUpdateProductList(pre=>+pre+1)
            // console.log(updateProductList)
        }) 
    }

  return (
    <div>
        <p>UserName: {userInfo.username}</p>
        <p>Email: {userInfo.email}</p>
        <p>Id: {userInfo.id}</p>

        <button onClick={addFakerProduct}>Add Faker Product</button>
        <button>My Product</button>
    </div>
  )
}
