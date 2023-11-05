import React from 'react'
import {Routes,Route} from "react-router-dom"
import { BMIPage } from '../Pages/BMIPage'
import { PrivateRoute } from './PrivateRoute'
import { LoginSignIn } from '../Pages/LoginSignIn'
import { Profile } from '../Pages/Profile'
export const MainRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={
                <PrivateRoute>
            <BMIPage/>
                </PrivateRoute>
            } />
            <Route path='/login' element={<LoginSignIn />}/>
            <Route path='/profile' element={<Profile />}/>
        </Routes>
    </div>
  )
}
