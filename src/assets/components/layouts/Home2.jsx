import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import Add1 from "../../ad_1.png"
import Add2 from "../../Ad_2.png"
import Add3 from "../../Ad_3.png"
const Home2 = () => {
  return (
    <>
    <div
    
    className="bg-white autoAnim">
        <Container className={"py-[20px]"}>
        <Flex className={"justify-around"}>
            <div className="lg:w-[580px]">
                <Images src={Add1}/>
            </div>
            <div className="w-[580px]">
                <Images className={"mb-[20px]"} src={Add2}/>
                <Images src={Add3}/>
            </div>
        </Flex>
    </Container>
    </div>
    </>



  )
}

export default Home2
