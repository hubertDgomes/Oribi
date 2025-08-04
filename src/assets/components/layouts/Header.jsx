import React, { useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import Logo from "../../logoOr.png";
import Menus from "../Menus";
import { TfiAlignRight } from "react-icons/tfi";
import { motion } from "motion/react";
import { FiAlignLeft } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import Check from "../../CheckOut.png";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { h1 } from "motion/react-client";

const Header = () => {

  const [show, setShow] = useState(false)

  const showSome = ()=>{
    setShow(!show)
  }

  return (
    <>
    <div>
      <Container className={"py-[40px] px-[20px]"}>
        <Flex className={""}>
          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            transition={{
              duration: 2,
            }}
            className="logo"
          >
            <Images src={Logo} />
          </motion.div>

          <div className="flex gap-x-[40px] m-auto">
            <Link to={"/"}>
            <Menus>
              <motion.li
              initial={{
                y: -100
              }}
              animate={{
                y: 0
              }}
              transition={{
                duration: 1,
                delay: 0.2
              }}
              className="font-bold">Home</motion.li>
            </Menus>
            </Link>


           <Link to={"/shop"}>
            <Menus>
              <motion.li
              initial={{
                y: -100
              }}
              animate={{
                y: 0
              }}
              transition={{
                duration: 1,
                delay: 0.4
              }}
              className="font-bold">Shop</motion.li>
            </Menus>
           </Link>


            <Menus>
              <motion.li
              initial={{
                y: -100
              }}
              animate={{
                y: 0
              }}
              transition={{
                duration: 1,
                delay: 0.6
              }}
              className="font-bold">About</motion.li>
            </Menus>



            <Menus>
              <motion.li
              initial={{
                y: -100
              }}
              animate={{
                y: 0
              }}
              transition={{
                duration: 1,
                delay: 0.8
              }}
              className="font-bold">Contacts</motion.li>
            </Menus>



            <Menus>
              <motion.li
              initial={{
                y: -100
              }}
              animate={{
                y: 0
              }}
              transition={{
                duration: 1,
                delay: 1
              }}
              className="font-bold">Journal</motion.li>
            </Menus>
          </div>

          <motion.button
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 1,
            }}
            className=""
            onClick={showSome}
          >
            <TfiAlignRight className="block sm:hidden cursor-pointer" />

            {show && 
             <div className="absolute right-0 sm:hidden">
              <h1>More Option</h1>
             </div>
            }

          </motion.button>
        </Flex>
      </Container>


    </div>

    <div className="bg-kala2 py-[20px]">
      <Container className={"mt-[10px] px-[20px]"}>
        
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
          <div className="relative m-auto w-full max-w-[600px]">
            <div className="hidden lg:block relative">
              <motion.input
                initial={{ scaleX: 0, originX: 0.5 }}
                animate={{ scaleX: 1, originX: 0.5 }}
                transition={{ duration: 2 }}
                className="bg-white py-[16px] w-[600px] px-[30px] placeholder:font-menu placeholder:text-[14px] origin-center"
                placeholder="Search Products"
                style={{ transformOrigin: "center" }}
              />
              <motion.button
                initial={{ x:-100, display: "none" }}
                animate={{ x:0, display: "block" }}
                transition={{ duration: 1}}
                className="z-50 absolute right-2 top-5 mr-[16px] cursor-pointer"
              >
                <CiSearch className="text-[20px]" />
              </motion.button>
            </div>

            <div className="block lg:hidden">
              <input
                className="bg-white py-[16px] w-[100px] sm:w-[300px] px-[30px] pr-[15px] placeholder:font-menu placeholder:text-[14px]"
                placeholder="Search Products"
              />
              <button className="z-50 absolute right-2 top-5 mr-[16px] cursor-pointer">
                <CiSearch className="text-[20px]" />
              </button>
            </div>
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

        

      </Container>
    </div>
    </>

    
  );
};

export default Header;
