const { createContext, useState, useEffect } = require("react");


const Context = createContext()

function ContextProvider({children}) {
    const [isLogin, setIsLogin] = useState(false)
        , [userInfo, setUserInfo] = useState()
        , [allProducts, setAllProducts] = useState()
        , [updateProductList, setUpdateProductList] = useState(0)

        useEffect(()=>{
          fetch('http://localhost:5000/product/all')
          .then(res=>res.json(res))
          .then(data=>setAllProducts(data))
        }, [updateProductList])
    return(
        <Context.Provider value={{
            isLogin, setIsLogin,
            userInfo, setUserInfo,
            allProducts, setAllProducts,
            setUpdateProductList, updateProductList

        }}>{children}</Context.Provider>
    )
}

export {Context, ContextProvider}