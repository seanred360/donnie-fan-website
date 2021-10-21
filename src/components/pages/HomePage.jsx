import React, { Component } from "react";
import donnieAtWindyCity from "../../images/pic.jpeg";
import djTalking from "../../images/djTalking.jpeg";
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

        <img
          className="hero-image"
          src={donnieAtWindyCity}
          alt="Donnie performing at Windy City Comedy Club"
        />

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

        <button className="video-button">
          <span className='__video-label'>WATCH MY COMEDY</span>
          <img className="__video" src={djTalking} alt="Donnie performing" />
        </button>
      </div>
    );
  }
}

export default HomePage;
