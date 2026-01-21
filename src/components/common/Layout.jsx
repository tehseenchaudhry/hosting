import React from 'react'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import NavbarTop from './NavbarTop'
import NavbarMain from './NavbarMain'


const Layout = () => {
  return (
    <>
    <NavbarTop/>
    <NavbarMain/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout