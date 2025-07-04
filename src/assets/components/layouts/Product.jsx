import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { FaAngleRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import Pro2 from '../../pro2.png'
import { FaCircleLeft } from "react-icons/fa6";

const Product = () => {
  return (
    <>
      <Container>
        <Flex className="justify-between">
          <div className="py-[40px]">
            <h1 className="font-bold text-[50px]">Products</h1>
            <p className="flex items-center pb-[90px]">
              Home <FaAngleRight /> Product
            </p>

            <p className="font-bold text-[20px] mb-[30px]">Shop by Category</p>

            <p className="border-b-[1px] w-[300px] text-kala3 border-kala3 text-[16px] py-[10px] mb-[20px]">
              Category 1 <span className="ml-[200px]">+</span>
            </p>
            <p className="border-b-[1px] w-[300px] text-kala3 border-kala3 text-[16px] py-[10px] mb-[20px]">
              Category 2 <span className="ml-[200px]">+</span>
            </p>
            <p className="border-b-[1px] w-[300px] text-kala3 border-kala3 text-[16px] py-[10px] mb-[20px]">
              Category 3 <span className="ml-[200px]">+</span>
            </p>
            <p className="border-b-[1px] w-[300px] text-kala3 border-kala3 text-[16px] py-[10px] mb-[20px]">
              Category 4 <span className="ml-[200px]">+</span>
            </p>
            <p className="border-b-[1px] w-[300px] text-kala3 border-kala3 text-[16px] py-[10px] mb-[20px]">
              Category 5 <span className="ml-[200px]">+</span>
            </p>

            <p className="font-bold text-[20px] mb-[30px] mt-[50px]">
              Shop by Color
            </p>

            <p className="border-b-[1px] w-[300px] text-kala3 border-kala3 text-[16px] py-[10px] mb-[20px] flex items-center">
              <GoDotFill />
              Color 1<span className="ml-[200px]">+</span>
            </p>
            <p className="border-b-[1px] w-[300px] text-kala3 border-kala3 text-[16px] py-[10px] mb-[20px] flex items-center">
              <GoDotFill className="text-[#FF8686]" />
              Color 2 <span className="ml-[200px]">+</span>
            </p>
            <p className="border-b-[1px] w-[300px] text-kala3 border-kala3 text-[16px] py-[10px] mb-[20px] flex items-center">
              <GoDotFill className="text-[#7ED321]" />
              Color 3 <span className="ml-[200px]">+</span>
            </p>
            <p className="border-b-[1px] w-[300px] text-kala3 border-kala3 text-[16px] py-[10px] mb-[20px] flex items-center">
              <GoDotFill className="text-[#B6B6B6]" />
              Color 4 <span className="ml-[200px]">+</span>
            </p>
            <p className="border-b-[1px] w-[300px] text-kala3 border-kala3 text-[16px] py-[10px] mb-[20px] flex items-center">
              <GoDotFill className="text-[#15CBA5]" />
              Color 5 <span className="ml-[200px]">+</span>
            </p>

            <p className="font-bold text-[20px] mb-[30px]">Shop by Brand</p>

            <p className="border-b-[1px] w-[300px] text-kala3 border-kala3 text-[16px] py-[10px] mb-[20px]">
              Brand 1 <span className="ml-[200px]">+</span>
            </p>
            <p className="border-b-[1px] w-[300px] text-kala3 border-kala3 text-[16px] py-[10px] mb-[20px]">
              Brand 2 <span className="ml-[200px]">+</span>
            </p>
            <p className="border-b-[1px] w-[300px] text-kala3 border-kala3 text-[16px] py-[10px] mb-[20px]">
              Brand 3 <span className="ml-[200px]">+</span>
            </p>
            <p className="border-b-[1px] w-[300px] text-kala3 border-kala3 text-[16px] py-[10px] mb-[20px]">
              Brand 4 <span className="ml-[200px]">+</span>
            </p>
            <p className="border-b-[1px] w-[300px] text-kala3 border-kala3 text-[16px] py-[10px] mb-[20px]">
              Brand 5 <span className="ml-[200px]">+</span>
            </p>

            <p className="font-bold text-[20px] mb-[30px]">Shop by Price</p>

            <p className="border-b-[1px] w-[300px] text-kala3 border-kala3 text-[16px] py-[10px] mb-[20px]">
              $0.00 - $9.99 <span className="ml-[200px]">+</span>
            </p>
            <p className="border-b-[1px] w-[300px] text-kala3 border-kala3 text-[16px] py-[10px] mb-[20px]">
              $10.00 - $19.99 <span className="ml-[200px]">+</span>
            </p>
            <p className="border-b-[1px] w-[300px] text-kala3 border-kala3 text-[16px] py-[10px] mb-[20px]">
              $20.00 - $29.99 <span className="ml-[200px]">+</span>
            </p>
            <p className="border-b-[1px] w-[300px] text-kala3 border-kala3 text-[16px] py-[10px] mb-[20px]">
              $30.00 - $39.99 <span className="ml-[200px]">+</span>
            </p>
            <p className="border-b-[1px] w-[300px] text-kala3 border-kala3 text-[16px] py-[10px] mb-[20px]">
              $40.00 - $69.99<span className="ml-[200px]">+</span>
            </p>
          </div>

          <div className="flex items-center text-[#767676] text-[16px] mt-[40px]">
            <p className="mr-[10px]">Sort by:</p>
            <p className="border-1 pr-[90px] pl-[10px] py-[7px] mr-[10px]">Featured</p>
            <p className="mr-[10px]">Show</p>
            <p className="border-1 pr-[90px] pl-[10px] py-[7px]">35</p>


            
          </div>

          
        </Flex>
      </Container>
    </>
  );
};

export default Product;
