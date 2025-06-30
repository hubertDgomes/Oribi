import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import Logo from "../../logoOr.png";
import Menus from "../Menus";
import { TfiAlignRight } from "react-icons/tfi";
import { motion } from "motion/react";
const Header = () => {
  return (
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

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 1,
            }}
            className=""
          >
            <TfiAlignRight className="block sm:hidden cursor-pointer" />
          </motion.div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
