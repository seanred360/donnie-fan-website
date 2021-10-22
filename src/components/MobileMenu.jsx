import React from "react";
import Navigationbutton from "./common/NavigationButton";

const MobileMenu = ({ isOpen }) => {
  return (
    <React.Fragment>
      <div className={`fade-overlay ${isOpen ? `--open` : ``}`}></div>
      <div className={`mobile-menu-container ${isOpen ? `--open` : ``}`}>
        <div className="__mobile-menu">
          <Navigationbutton label="Home" />
          <Navigationbutton label="About" />
          <Navigationbutton label="Events" />
          <Navigationbutton label="Videos" />
          <Navigationbutton label="Portfolio" />
          <Navigationbutton label="Contact" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default MobileMenu;
