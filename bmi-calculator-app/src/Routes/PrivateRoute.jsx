import React, { Children, useContext } from 'react'
import { AuthContextProvider } from '../Context/ContextProvider'
// import { Login } from '../Componants/Login'
import { LoginSignIn } from '../Pages/LoginSignIn'

export const PrivateRoute = ({children}) => {
    const {AuthState}= useContext(AuthContextProvider)
  return !AuthState.isAuth?< LoginSignIn/>:children
}
