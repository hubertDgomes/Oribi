import React from "react";
import Container from "../Container";
import Products from "./Products";
import Flex from "../Flex";
import pro1 from '/src/assets/pro1.png'
import pro2 from '/src/assets/pro2.png'
import pro3 from '/src/assets/pro3.png'
import pro4 from '/src/assets/pro4.png'

const ArivalPart = () => {
  return (
    <div>
      <Container className={"py-[20px]"}>
        <Flex className={"gap-x-[20px]"}>
          <Products
            badgeValue={"10%"}
            productName={"Basic Crew Neck Tee"}
            productPrice={"44.00"}
            src={pro1}
          />
          <Products
            badgeValue={"New"}
            productName={"Basic Crew Neck Tee"}
            productPrice={"44.00"}
            src={pro2}
          />
          <Products
            badgeValue={"New"}
            productName={"Basic Crew Neck Tee"}
            productPrice={"44.00"}
            src={pro3}
          />
          <Products
            badgeValue={"New"}
            productName={"Basic Crew Neck Tee"}
            productPrice={"44.00"}
            src={pro4}
          />
        </Flex>
      </Container>
    </div>
  );
};

export default ArivalPart;
