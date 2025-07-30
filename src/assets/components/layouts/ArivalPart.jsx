import React, { useEffect, useState } from "react";
import Container from "../Container";
import Products from "./Products";
import Flex from "../Flex";
import pro1 from "/src/assets/pro1.png";
import pro2 from "/src/assets/pro2.png";
import pro3 from "/src/assets/pro3.png";
import pro4 from "/src/assets/pro4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";


const ArivalPart = () => {
  const [myPro, setMyPro] = useState([])

  useEffect(()=>{
    async function all(){
      let data = await axios.get("https://dummyjson.com/products")
      setMyPro(data.data.products)
    }
    all()
  }, [])



  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Container className={"py-[20px]"}>
        <p className="font-menu font-bold text-[40px] mb-[50px]">New Arrivals</p>
        <Slider {...settings}>
          {myPro.map((item)=>(  
            <div key={item.id} className="px-3">
            <Products
              badgeValue={"10%"}
              productName={item.title}
              productPrice={item.price}
              src={item.thumbnail}
              className={"px-[20px] shadow-lg"}
            />
          </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default ArivalPart;
