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
          <Navigationbutton onOpen={onOpen} url={"home"} label="Home" />
          <Navigationbutton onOpen={onOpen} url={"about"} label="About" />
          <Navigationbutton onOpen={onOpen} url={"events"} label="Events" />
          <Navigationbutton onOpen={onOpen} url={"videos"} label="Videos" />
          <Navigationbutton onOpen={onOpen} url={"contact"} label="Contact" />
        </div>
      </div>
    </Fragment>
  );
};

export default MobileMenu;
