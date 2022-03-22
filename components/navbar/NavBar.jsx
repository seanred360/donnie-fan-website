import { useState } from "react";
import NavBarContents from "./NavBarContents";
import MobileMenu from "./MobileMenu";
import styles from "../../styles/NavBar.module.scss";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.container}>
      <NavBarContents isOpen={isOpen} onOpen={setIsOpen} />
      <MobileMenu isOpen={isOpen} onOpen={setIsOpen} />
    </nav>
  );
};

export default NavBar;
