import { motion } from "motion/react";
const Menus = ({ children }) => {
  return (
    <ul className="font-menu text-[17px] cursor-pointer hidden sm:block">
      {children}
    </ul>
  );
};

export default Menus;
