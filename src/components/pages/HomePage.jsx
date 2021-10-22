import React, { Component } from "react";
import donnieAtWindyCity from "../../images/pic.jpeg";
import djTalking from "../../images/djTalking.jpeg";
import { FaWeibo } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillWechat } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { GiMicrophone } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";
import { GiNewspaper } from "react-icons/gi";
import { FaNewspaper } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";

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
          <button className="__circle-button">
            <FaWeibo />
          </button>
          <button className="__circle-button">
            <AiFillInstagram />
          </button>
          <button className="__circle-button">
            <AiFillWechat />
          </button>
          <button className="__circle-button">
            <AiFillYoutube />
          </button>
        </div>

        <button className="video-button">
          <h2 className="__video-label">WATCH MY COMEDY</h2>
          <img className="__video" src={djTalking} alt="Donnie performing" />
        </button>

        <div className="social-feed">
          <div className="section-header-group">
            <h3 className="__header">Latest Weibo</h3>
            <p className="__label">See What I'm currently doing</p>
          </div>
          <div className="__social-window"></div>
        </div>

        <div className="contact">
          <div className="section-header-group">
            <h3 className="__header">Let's Chat</h3>
            <p className="__label">How can I help?</p>
          </div>
          <div className="contact-options flex flex-ai-c flex-jc-c">
            <div className="__contact-option">
              <button className="__circle-button">
                <GiMicrophone />
              </button>
              <p className="--label">I want to book you</p>
            </div>

            <div className="__contact-option">
              <button className="__circle-button">
                <FaHandshake />
              </button>
              <p className="--label">I have a business opportunity</p>
            </div>

            <div className="__contact-option">
              <button className="__circle-button">
                <GiNewspaper />
              </button>
              <p className="--label">I am a publisher</p>
            </div>

            <div className="__contact-option">
              <button className="__circle-button">
                <FaNewspaper />
              </button>
              <p className="--label">I am in the media</p>
            </div>

            <div className="__contact-option">
              <button className="__circle-button">
                <MdWavingHand />
              </button>
              <p className="--label">I just wanted to say hi!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
