import React from 'react'
import Images from '../Images'
import logo from '../../logoOr.png'
import Container from '../Container'
const Footer = () => {
  return (
    <footer class="bg-[#F5F5F3] py-12 px-3 sm:px-6 lg:px-8 font-menu">
      <Container>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Images className={"w-[111px]"} src={logo}/>
            
          </div>
          <div>
            <h3 class="text-black font-medium mb-4 text-sm">MENU</h3>
            <ul class="space-y-2">
              <li><a href="javascript:void(0)" class="text-gray-400 hover:text-white text-[13px]">Home</a></li>
              <li><a href="javascript:void(0)" class="text-gray-400 hover:text-white text-[13px]">Shop</a></li>
              <li><a href="javascript:void(0)" class="text-gray-400 hover:text-white text-[13px]">About</a></li>
              <li><a href="javascript:void(0)" class="text-gray-400 hover:text-white text-[13px]">Contact</a></li>
              <li><a href="javascript:void(0)" class="text-gray-400 hover:text-white text-[13px]">Journal</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-black font-medium mb-4 text-sm">SHOP</h3>
            <ul class="space-y-2">
              <li><a href="javascript:void(0)" class="text-gray-400 hover:text-white text-[13px]">Category 1</a></li>
              <li><a href="javascript:void(0)" class="text-gray-400 hover:text-white text-[13px]">Category 2</a></li>
              <li><a href="javascript:void(0)" class="text-gray-400 hover:text-white text-[13px]">Category 3</a></li>
              <li><a href="javascript:void(0)" class="text-gray-400 hover:text-white text-[13px]">Category 4</a></li>
              <li><a href="javascript:void(0)" class="text-gray-400 hover:text-white text-[13px]">Category 5</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-black font-medium mb-4 text-sm">HELP</h3>
            <ul class="space-y-2">
              <li><a href="javascript:void(0)" class="text-gray-400 hover:text-white text-[13px]">Privacy Policy</a></li>
              <li><a href="javascript:void(0)" class="text-gray-400 hover:text-white text-[13px]">Terms & Conditions</a></li>
              <li><a href="javascript:void(0)" class="text-gray-400 hover:text-white text-[13px]">Special E-shop</a></li>
              <li><a href="javascript:void(0)" class="text-gray-400 hover:text-white text-[13px]">Shipping</a></li>
              <li><a href="javascript:void(0)" class="text-gray-400 hover:text-white text-[13px]">Secure Payments</a></li>
            </ul>
          </div>
        </div>
        <div class="mt-16 text-sm text-gray-400 text-right">
          <p>&copy; Copyright 2024 ORIBI, All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
