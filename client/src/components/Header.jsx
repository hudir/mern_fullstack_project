import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Context } from '../context/context'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

export default function Header() {
    const [login, setLogin] = useState(false)
        , [signUp, setSignUp] = useState(false)
        , {isLogin} = useContext(Context)
        
  return (
    <div>
        { !isLogin && <>
            <button onClick={e=>setLogin(!login)}>Login</button>
            <button onClick={e=>setSignUp(!signUp)}>signUp</button>
        </>}

        {
            login && <LoginForm setLogin={setLogin}/>
        }
        {
            signUp && <SignUpForm setSignUp={setSignUp}/>
        }
        

    </div>
  )
}
