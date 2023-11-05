import React from 'react'
import { SignIn } from '../Componants/SignIn'
import { Login } from '../Componants/Login'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const LoginSignIn = () => {
    const [isLogin,setIsLogin] = useState(true)

  return (
    <div>
        <MainBox>
       {isLogin?<Login />:<SignIn setIsLogin={setIsLogin}/>}
        <SwitchLogin>
            <Link onClick={()=>setIsLogin(false)} className='switch'>Register</Link>
            <Link onClick={()=>setIsLogin(true)} className='switch'>Login</Link>
        </SwitchLogin>
        </MainBox>
    </div>
  )
}

const MainBox= styled.div`
     width: 300px;
  margin:4rem auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

const SwitchLogin=styled.div`
   display: flex;
   gap: 1rem;
   justify-content: end;
   align-items: center;
    border: 0px solid red;

    .switch:hover{
text-decoration: none;
cursor: pointer;
color: #0505ec;
    }
`