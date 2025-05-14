import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './Appwrite/auth'
import {login, logout} from "./store/authSlice"
import {Footer , Header} from "./components"
import { Outlet } from 'react-router-dom'
function App() {

  const [loading, setLoading]= useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({ userData }))
      } else {
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false) )            //finally run hota hi hota hai
  },[])      //JAISE HI APP LOAD HO TOH EK USEEFFECT LO,, OR USEEFFECT SE PUCCHO US SERVICE SE KE AP LOGGED IN HO YA NHI 

  return !loading ? (
    <div className='min-h-screen flex-wrap content-between bg-gray-400'>
      <div className='w-full block' >
        <Header />
        <main>
          TODO: <Outlet/> 
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App