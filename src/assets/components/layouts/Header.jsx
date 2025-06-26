import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import Logo from '../../logoOr.png'
import Menus from '../Menus'
const Header = () => {
  return (
    <div>
      <Container className={"py-[40px] px-[20px]"}>
        <Flex className={""}>
            <div className="logo">
                <Images src={Logo}/>
            </div>
            <div className="flex gap-x-[40px] m-auto">
                <Menus><li className='font-bold'>Home</li></Menus>
                <Menus><li>Shop</li></Menus>
                <Menus><li>About</li></Menus>
                <Menus><li>Contacts</li></Menus>
                <Menus><li>Journal</li></Menus>
            </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Header
