import React from 'react'
import Container from '../Container'
import Products from './Products'
import bottle from '/src/assets/best1.png'
import bag from '/src/assets/best2.png'
import bata from '/src/assets/best3.png'
import bag2 from '/src/assets/best4.png'
import add2 from '/src/assets/add1.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Images from '../Images'


const BestSell = () => {

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
        <p className="font-menu font-bold text-[40px] mb-[50px]">Our Bestsellers</p>
        <Slider {...settings}>
      <div>
        <Products badgeValue={"New"} productName={"Basic Crew Neck Tee"} productPrice={"44.00"} src={bottle}/>
      </div>
      <div>
        <Products badgeValue={"New"} productName={"Basic Crew Neck Tee"} productPrice={"44.00"} src={bag}/>
      </div>
      <div>
        <Products badgeValue={"New"} productName={"Basic Crew Neck Tee"} productPrice={"44.00"} src={bata}/>
      </div>
      <div>
       <Products badgeValue={"New"} productName={"Basic Crew Neck Tee"} productPrice={"44.00"} src={bag2}/>
      </div>
      <div>
        <Products badgeValue={"New"} productName={"Basic Crew Neck Tee"} productPrice={"44.00"} src={bag}/>
      </div>
      <div>
        <Products badgeValue={"New"} productName={"Basic Crew Neck Tee"} productPrice={"44.00"} src={bata}/>
      </div>
    </Slider>
    <div className="w-full mt-[60px]">
        <Images src={add2}/>
    </div>
    </Container>
    </>
  )
}

export default BestSell