import { useState } from 'react'
import './App.css'
import Home from './assets/components/pages/Home'
import { Routes, Route } from 'react-router-dom'
import RootLayout from './assets/components/layouts/RootLayout'
import Shop from './assets/components/pages/Shop'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/shop" element={<Shop/>}/>
        </Route>
      </Routes>
    </>
  )
}
  
export default App
