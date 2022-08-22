import React from 'react'
import { useState } from 'react'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

export default function Header() {
    const [login, setLogin] = useState(false)
        , [signUp, setSignUp] = useState(false)
        , [isLogin, setIsLogin] = useState(false)
  return (
    <div>
        { !isLogin && <>
            <button onClick={e=>setLogin(!login)}>Login</button>
            <button onClick={e=>setSignUp(!signUp)}>signUp</button>
        </>}

        {
            login && <LoginForm/>
        }
        {
            signUp && <SignUpForm/>
        }
        

    </div>
  )
}
