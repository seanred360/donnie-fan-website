import { useState, useEffect } from "react";
import NavBarContents from "./NavBarContents";
import MobileMenu from "./MobileMenu";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav-bar">
      <NavBarContents isOpen={isOpen} onOpen={setIsOpen} />
      <MobileMenu isOpen={isOpen} onOpen={setIsOpen} />
    </nav>
  );
};

export default NavBar;
