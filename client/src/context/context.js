const { createContext, useState, useEffect } = require("react");


const Context = createContext()

function ContextProvider({children}) {
    const [isLogin, setIsLogin] = useState(false)
        , [userInfo, setUserInfo] = useState()
        , [allProducts, setAllProducts] = useState()
        , [updateProductList, setUpdateProductList] = useState(0)
        , [cart, setCart] = useState([])
        , [showCart, setShowCart] = useState(false)

        useEffect(()=>{
          fetch('/product/all')
          .then(res=>res.json())
          .then(data=>{
            console.log(data)
            setAllProducts(data)
          })
        }, [updateProductList])
    return(
        <Context.Provider value={{
            isLogin, setIsLogin,
            userInfo, setUserInfo,
            allProducts, setAllProducts,
            setUpdateProductList, updateProductList,
            cart, setCart,
            showCart, setShowCart

        }}>{children}</Context.Provider>
    )
}

export {Context, ContextProvider}