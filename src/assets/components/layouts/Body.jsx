import React from 'react'
import { FiAlignLeft } from "react-icons/fi";
import Container from '../Container';
import Flex from '../Flex';
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";


const Body = () => {
return (
    <div className="bg-kala2">
        <Container className={"py-[40px] px-[20px]"}>
            <Flex className={"justify-between"}>
                <div>
                    <button className='cursor-pointer flex items-center gap-x-[20px] font-menu text-[14px]'><FiAlignLeft className='text-[20px]'/>Shop by Category</button>
                </div>
                <div className="relative m-auto">
                    <input className="bg-white py-[16px] w-[100px] sm:w-[300px] lg:w-[600px] px-[30px] pr-[15px] placeholder:font-menu placeholder:text-[14px]" placeholder='Search Products'/>
                    <button className="z-50 absolute right-2 top-5 mr-[16px] cursor-pointer"><CiSearch /></button>
                </div>

                <div className="relative flex items-center">
                    <button><FaUser /></button>
                    <div className="relative group">
                        <button className='mr-[40px] cursor-pointer drop'><MdOutlineArrowDropDown /></button>
                        <div className="hidden group-hover:block absolute right-0 logIN transition-all duration-700">
                            <div className="py-[10px] px-[80px] bg-black text-white">
                                <p className='font-bold text-[14px] font-menu cursor-pointer text-center'>My Account</p>
                            </div>
                            <div className="py-[20px] px-[70px] bg-white text-black">
                                <p className='font-bold text-[14px] font-menu cursor-pointer text-center'>Log Out</p>
                            </div>
                        </div>
                    </div>
                    <button><FaShoppingCart /></button>
                </div>
            </Flex>
        </Container>
    </div>
)
}

export default Body
