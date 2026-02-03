import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './layout/Footer'
import Navbar from './layout/navbar/Navbar'

const AppLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default AppLayout