import React from "react";
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


const ArivalPart = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Container className={"py-[20px]"}>
        <Slider {...settings}>
          <div>
            <Products
              badgeValue={"10%"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"44.00"}
              src={pro1}
            />
          </div>
          <div>
            <Products
              badgeValue={"New"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"44.00"}
              src={pro2}
            />
          </div>
          <div>
            <Products
              badgeValue={"New"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"44.00"}
              src={pro3}
            />
          </div>
          <div>
            <Products
              badgeValue={"New"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"44.00"}
              src={pro4}
            />
          </div>
          <div>
            <Products
              badgeValue={"New"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"44.00"}
              src={pro4}
            />
          </div>
        </Slider>
      </Container>
    </div>
  );
};

export default ArivalPart;
