import { useState } from "react";
import NavBarContents from "./NavBarContents";
import MobileMenu from "./MobileMenu";
import styles from "../../styles/NavBar.module.scss";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = (openBool) => {
    setIsOpen(openBool);
    if (isOpen) document.body.classList.remove("no-scroll");
    if (!isOpen) document.body.classList.add("no-scroll");
  };

  return (
    <nav className={styles.container}>
      <NavBarContents isOpen={isOpen} onOpen={handleOpen} />
      <MobileMenu isOpen={isOpen} onOpen={handleOpen} />
    </nav>
  );
};

export default NavBar;
