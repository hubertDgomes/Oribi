import { useState } from 'react'
import './App.css'
import Home from './assets/components/pages/Home'
import Footer from './assets/components/layouts/Footer'
import Header from './assets/components/layouts/Header'
import Body from './assets/components/layouts/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
