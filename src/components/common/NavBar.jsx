import React from "react";
import HamburgerButton from "./HamburgerButton";

const NavBar = ({ onOpen }) => {
  return (
    <div className="nav-bar__container">
      <nav className="nav-bar flex flex-jc-sb flex-ai-c">
        <div className="__left-content flex">
          <span className="__language">
            <button className="--language-button">English</button> |{" "}
            <button className="--language-button">中文</button>
          </span>
        </div>
        <HamburgerButton onOpen={onOpen} />
      </nav>
    </div>
  );
};

export default NavBar;
