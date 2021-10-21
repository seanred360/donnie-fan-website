import React, { Component } from "react";
import donnieAtWindyCity from "../../images/pic.jpeg";
import { FaWeibo } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillWechat } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <div className="header">
          <p>Hi, I am</p>
          <h1>Donnie Fan!</h1>
        </div>
        {/* <div className="hero-image"></div> */}
        <img src={donnieAtWindyCity} alt="" className="hero-image" />
        <div className="social-media flex flex-ai-c flex-jc-c">
          <button className="__social-button">
            <FaWeibo />
          </button>
          <button className="__social-button">
            <AiFillInstagram />
          </button>
          <button className="__social-button">
            <AiFillWechat />
          </button>
          <button className="__social-button">
            <AiFillYoutube />
          </button>
        </div>
      </div>
    );
  }
}

export default HomePage;
