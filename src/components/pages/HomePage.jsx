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
        <div className="hero-image-wrapper flex flex-ai-c flex-jc-c">
          <img
            className="hero-image"
            src={donnieAtWindyCity}
            alt="Donnie performing at Windy City Comedy Club"
          />
        </div>

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
          <h2 className="__video-label">WATCH MY COMEDY</h2>
          <img className="__video" src={djTalking} alt="Donnie performing" />
        </button>

        <div className="social-feed">
          <div className="text-group">
            <h3 className="__header">Latest Weibo</h3>
            <p className="__label">See What I'm currently doing</p>
          </div>
          <div className="__social-window"></div>
        </div>
      </div>
    );
  }
}

export default HomePage;
