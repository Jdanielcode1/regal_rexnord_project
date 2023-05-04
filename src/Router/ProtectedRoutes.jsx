import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
  let isLogged = localStorage.getItem("token")

  //localStorage.getItem("token")
  console.log(isLogged)
  console.log(true)
  
  if(!isLogged){
    return <Navigate to="/Login"/>
  }

  return (
    <Outlet/>
  )
}

export default ProtectedRoutes