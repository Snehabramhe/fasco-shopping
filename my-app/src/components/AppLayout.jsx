import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './layout/Footer'
import Navbar from './layout/navbar/Navbar'
import Toaster from './ui/sonner'


const AppLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Toaster/>
    <Footer/>
    </>
  )
}

export default AppLayout