import React from 'react'
import Header from '../layouts/Header'
import Home2 from '../layouts/Home2'
import ArivalPart from '../layouts/ArivalPart'
import Land from '../layouts/Land'
import { motion, useScroll } from "motion/react"
import BestSell from '../layouts/BestSell'
import SpecialOffer from '../layouts/SpecialOffer'

const  Home = () => {

  const scrollY = useScroll().scrollYProgress
   

  return (
    <>
    <motion.div
    style={{
      scaleX:scrollY
    }}
    className="h-[10px] w-full fixed origin-left bg-kala3 top-0 left-0 z-50"></motion.div>
    <Land/>
    <Home2/>
    <ArivalPart/>
    <BestSell/>
    <SpecialOffer/>
    </>
  )
}

export default Home
