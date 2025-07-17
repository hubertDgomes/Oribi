import React from 'react'
import Images from '../Images'
import pro1 from '/src/assets/pro1.png'
import { FaHeart } from "react-icons/fa";
import { FaSyncAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Flex from '../Flex';
import { Link } from 'react-router-dom';
const Products = ({badgeValue,productName,productPrice,src}) => {
  return (
    <div className="relative w-[330px] group">
        <Link to={"/preview"}>
        <Images src={src}/>
        </Link>
        <div className="py-[10px] px-[30px] bg-black text-white w-[100px] text-center absolute top-4 left-4">{badgeValue}</div>
        <div className="w-full py-[30px] px-[25px] bg-white absolute bottom-[74px] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-in-out cursor-pointer">
            <Flex className={"gap-x-[10px] justify-end"}>
                <p className={`font-menu text-[16px] text-kala3 hover:font-bold hover:text-black`}>Add to Wish List </p><FaHeart />
            </Flex>
            <Flex className={"gap-x-[10px] justify-end my-[10px]"}>
                <p className={`font-menu text-[16px] text-kala3 hover:font-bold hover:text-black`}>Compare </p><FaSyncAlt />
            </Flex>
            <Flex className={"gap-x-[10px] justify-end"}>
                <p className={`font-menu text-[16px] text-kala3 hover:font-bold hover:text-black`}>Add to Cart</p><FaShoppingCart />
            </Flex> 
        </div>
        <div className="py-[25px] bg-white flex justify-between items-center">
            <p className='font-bold text-[20px] font-menu'>{productName}</p>
            <p className='font-menu text-[16px] text-kala3'>{"$"+productPrice}</p>
        </div>
    </div>
  )
}

export default Products