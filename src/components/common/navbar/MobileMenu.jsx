import { Fragment } from "react";
import Navigationbutton from "./NavigationButton";

const MobileMenu = ({ isOpen, onOpen }) => {
  return (
    <Fragment>
      <div className={`fade-overlay ${isOpen ? `--open` : ``}`}></div>
      <div
        className={`mobile-menu-container hide-for-desktop ${
          isOpen ? `--open` : ``
        }`}
      >
        <div className="__mobile-menu">
          <Navigationbutton onOpen={onOpen} label="Home" />
          <Navigationbutton onOpen={onOpen} label="About" />
          <Navigationbutton onOpen={onOpen} label="Events" />
          <Navigationbutton onOpen={onOpen} label="Videos" />
          <Navigationbutton onOpen={onOpen} label="Contact" />
        </div>
      </div>
    </Fragment>
  );
};

export default MobileMenu;
