import React from "react";

const MobileMenu = ({ isOpen }) => {

  return (
    <React.Fragment>
      <div className={`fade-overlay ${isOpen ? `--open` : ``}`}></div>
      <div className={`mobile-menu-container ${isOpen ? `--open` : ``}`}>
        <div className="__mobile-menu">
          <button className="--menu-item">About</button>
          <button className="--menu-item">Events</button>
          <button className="--menu-item">Comedy</button>
          <button className="--menu-item">Portfolio</button>
          <button className="--menu-item">Contact</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MobileMenu;
