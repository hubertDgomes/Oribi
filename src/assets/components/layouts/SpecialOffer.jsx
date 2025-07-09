import React from "react";
import Container from "../Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Products from "./Products";
import proo1 from "/src/assets/cap.png";
import proo2 from '/src/assets/table.png'
import proo3 from '/src/assets/glass.png'
import proo4 from '/src/assets/phone.png'
const SpecialOffer = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <>
      <Container className={"py-[40px]"}>
        <p className="font-menu font-bold text-[40px] mb-[50px]">
          Special Offers
        </p>
        <Slider {...settings}>
          <div>
            <Products
              badgeValue={"new"}
              productName={"dffhd"}
              productPrice={"44.00"}
              src={proo1}
            />
          </div>
          <div>
             <Products
              badgeValue={"new"}
              productName={"dffhd"}
              productPrice={"44.00"}
              src={proo2}
            />
          </div>
          <div>
             <Products
              badgeValue={"new"}
              productName={"dffhd"}
              productPrice={"44.00"}
              src={proo3}
            />
          </div>
          <div>
             <Products
              badgeValue={"new"}
              productName={"dffhd"}
              productPrice={"44.00"}
              src={proo4}
            />
          </div>
          <div>
             <Products
              badgeValue={"new"}
              productName={"dffhd"}
              productPrice={"44.00"}
              src={proo1}
            />
          </div>
          <div>
             <Products
              badgeValue={"new"}
              productName={"dffhd"}
              productPrice={"44.00"}
              src={proo2}
            />
          </div>
        </Slider>
      </Container>
    </>
  );
};

export default SpecialOffer;
