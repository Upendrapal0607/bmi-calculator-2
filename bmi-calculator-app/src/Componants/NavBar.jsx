import React, { useContext } from 'react'
import styled from "styled-components"
import { AuthContextProvider } from '../Context/ContextProvider'
import { Link } from 'react-router-dom'
export const NavBar = () => {
    const {AuthState}= useContext(AuthContextProvider)
    console.log(AuthState.isAuth);
  return (
    <DIV>
    <div className='logo'>
    <Link to ="/" className='logo-text'>BIM CALULATOR</Link>
    </div>
    <div className='profile-login'>
        {!AuthState.isAuth?<Link to={"/login"} className='login'>LOGIN</Link>
        :<Link to={"/profile"} className='login'>PROFILE</Link>}
    </div>
    </DIV>
  )
}
const DIV = styled.div`
    border: 0px solid red;
margin: 0px;
padding:1rem 2rem;
display: flex;
justify-content: space-between;

background-color: #00bcd4;

.logo{
    text-align: center;
}
.logo-text{
    text-decoration: none;
   color: #673ab7;
    font-style: inherit;
    font-size: 30px;
    font-weight: 800;
}

.profile-login{
    /* width: 20%; */
    display: flex;
    gap: 1rem;
    align-items: center;
    /* border: 2px solid red; */
    
}
.login{
    text-decoration: none;
    border: 1px solid red;
    padding: .5rem;
    border-radius: 4px;
    padding: 8px 16px;
  cursor: pointer;
  background-color: #3498db; 
  color: #fff;
  border: none;
  border-radius: 4px;
  transition: background-color .3s ease;
  &:hover {
    background-color: #2980b9;
  }
}

`