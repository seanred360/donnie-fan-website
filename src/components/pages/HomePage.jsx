import React, { Component } from "react";
import donnieAtWindyCity from "../../images/pic.jpeg";
import SocialMediaButtons from "../common/SocialMediaButtons";
import VideoPreviewButton from "../VideoPreviewButton";
import SocialMediaFeed from "../common/SocialMediaFeed";
import ContactForm from "../common/ContactFrom";

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

        <SocialMediaButtons />

        <VideoPreviewButton />

        <SocialMediaFeed />

        <ContactForm />
      </div>
    );
  }
}

export default HomePage;
