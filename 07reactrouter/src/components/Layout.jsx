import React from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet />  // yaha changes hogi
    <Footer />

    </>
  )
}

export default Layout   