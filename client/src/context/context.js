const { createContext, useState } = require("react");


const Context = createContext()

function ContextProvider({children}) {
    const [isLogin, setIsLogin] = useState(false)
        , [userInfo, setUserInfo] = useState()

    return(
        <Context.Provider value={{
            isLogin, setIsLogin,
            userInfo, setUserInfo

        }}>{children}</Context.Provider>
    )
}

export {Context, ContextProvider}