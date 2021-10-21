import React, { Component } from "react";
import NavBar from "./common/NavBar";
import MobileMenu from "./MobileMenu";

class Menu extends Component {
  state = { isOpen: false };

  handleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div className="menu">
        <NavBar onOpen={this.handleOpen} />
        <MobileMenu isOpen={this.state.isOpen} />
      </div>
    );
  }
}

export default Menu;
