import React from "react";
import { FiAlignLeft } from "react-icons/fi";
import Container from "../Container";
import Flex from "../Flex";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import Images from "../Images";
import Check from "../../CheckOut.png";
import { IoClose } from "react-icons/io5";
import Land from "../../Intro.png"
const Body = () => {
  return (
    <div className="bg-kala2">
      <Container className={"pt-[30px] mt-[10px] px-[20px]"}>
        <Flex className={"justify-between"}>
          <div className="flex gap-x-[10px] relative group">
            <button className="category cursor-pointer flex items-center gap-x-[20px] font-menu text-[14px]">
              <FiAlignLeft className="text-[20px]" />
            </button>
            <p>Shop by Category</p>
            <div className="absolute hidden top-[20px] cursor-pointer text-left font-menu text-[10px] lg:text-[14px] group-hover:block">
              <button className="bg-black p-[10px] lg:py-[15px] lg:pl-[20px] lg:pr-[184px] text-white border-2 border-white lg:hover:text-[20px] transition-all duration-400 cursor-pointer">
                Accesories
              </button>
              <button className="bg-black p-[10px] lg:py-[15px] lg:pl-[20px] lg:pr-[184px] text-white border-2 border-white lg:hover:text-[20px] transition-all duration-400 cursor-pointer">
                Furniture
              </button>
              <button className="bg-black p-[10px] lg:py-[15px] lg:pl-[20px] lg:pr-[184px] text-white border-2 border-white lg:hover:text-[20px] transition-all duration-400 cursor-pointer">
                Electronics
              </button>
              <button className="bg-black p-[10px] lg:py-[15px] lg:pl-[20px] lg:pr-[184px] text-white border-2 border-white lg:hover:text-[20px] transition-all duration-400 cursor-pointer">
                Clothes
              </button>
              <button className="bg-black p-[10px] lg:py-[15px] lg:pl-[20px] lg:pr-[184px] text-white border-2 border-white lg:hover:text-[20px] transition-all duration-400 cursor-pointer">
                Bags
              </button>
              <button className="bg-black p-[10px] lg:py-[15px] lg:pl-[20px] lg:pr-[184px] text-white border-2 border-white lg:hover:text-[20px] transition-all duration-400 cursor-pointer">
                Appliances
              </button>
            </div>
          </div>
          <div className="relative m-auto">
            <input
              className="bg-white py-[16px] w-[100px] sm:w-[300px] lg:w-[600px] px-[30px] pr-[15px] placeholder:font-menu placeholder:text-[14px]"
              placeholder="Search Products"
            />
            <button className="z-50 absolute right-2 top-5 mr-[16px] cursor-pointer">
              <CiSearch />
            </button>
          </div>

          <div className="relative flex items-center">
            <button>
              <FaUser />
            </button>
            <div className="relative group">
              <button className="mr-[40px] cursor-pointer drop">
                <MdOutlineArrowDropDown />
              </button>
              <div className="hidden group-hover:block absolute right-0 logIN transition-all duration-700">
                <div className="lg:py-[10px] lg:px-[80px] py-[10px] px-[20px] bg-black text-white">
                  <p className="font-bold text-[14px] font-menu cursor-pointer text-center">
                    My Account
                  </p>
                </div>
                <div className="lg:py-[20px] lg:px-[70px] py-[10px] px-[20px] bg-white text-black">
                  <p className="font-bold text-[14px] font-menu cursor-pointer text-center">
                    Log Out
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group mt-[8px]">
              <button className="text-[19px] cursor-pointer">
                <FaShoppingCart />
              </button>

              <div className="absolute lg:top-[20px] lg:left-[-160px] top-[20px] left-[-200px] hidden group-hover:block">
                <div className="lg:py-[18px] lg:px-[20px] bg-kala2 flex items-center justify-between gap-x-[20px] border-1">
                  <Images className={"cartPhoto"} src={Check} />
                  <div className="">
                    <p className="cartProductName font-bold text-[8px] lg:text-[14px] font-menu">Black Smart Watch</p>
                    <p className="subTotal font-bold font-menu text-[10px]">$44.00</p>
                  </div>
                  <button className="cartClear text-[30px] cursor-pointer"><IoClose /></button>
                </div>



                <div className="lg:py-[18px] lg:px-[20px] bg-white border-1">
                    <p className="font-menu">Subtotal: <span className="subTotal font-bold font-menu">$44.00</span></p>
                    <div className="flex gap-x-[20px] justify-around mt-[20px]">
                        <div className="lg:py-[20px] lg:px-[45px] border-2 cursor-pointer">
                            <p className="font-bold text-[14px] font-menu">View Cart</p>
                        </div>
                        <div className="lg:py-[20px] lg:px-[45px] border-1 bg-black text-white cursor-pointer">
                            <p className="font-bold text-[14px] font-menu lg:mt-[10px]">Checkout</p>
                        </div>
                    </div>
                </div>


              </div>
            </div>
          </div>
        </Flex>

        <Images className={"mt-[20px] w-[400px] lg:w-full m-auto cursor-pointer"} src={Land}/>



        
      </Container>
    </div>
  );
};

export default Body;
