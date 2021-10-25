import React from "react";
import Navigationbutton from "./common/NavigationButton";

const MobileMenu = ({ isOpen, onOpen }) => {
  return (
    <React.Fragment>
      <div className={`fade-overlay ${isOpen ? `--open` : ``}`}></div>
      <div className={`mobile-menu-container ${isOpen ? `--open` : ``}`}>
        <div className="__mobile-menu">
          <Navigationbutton onOpen={onOpen} label="Home" />
          <Navigationbutton onOpen={onOpen} label="About" />
          <Navigationbutton onOpen={onOpen} label="Events" />
          <Navigationbutton onOpen={onOpen} label="Videos" />
          <Navigationbutton onOpen={onOpen} label="Contact" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default MobileMenu;
