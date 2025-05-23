import React from 'react'
import {Route, Routes, useLocation } from 'react-router-dom'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import { About } from './pages/About'
import Home from './pages/Home'
import Hotels from './pages/Hotels'

const App = () => {
  const isOwnerPath=useLocation().pathname.includes("owner")
  return (
    
    <div>
    {!isOwnerPath &&  <Navbar/>}
    <div className='m-h-[70vh]'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Hotels' element={<Hotels/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
     
    </div>
    <Footer/>

    </div>
  )
}

export default App