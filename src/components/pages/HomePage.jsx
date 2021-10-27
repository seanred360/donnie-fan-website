import React, { Component } from "react";
// import donnieAtWindyCity from "../../images/pic.jpeg";
// import jokePreview from "../../images/joke-preview.gif";
import tellingJokesPreview from "../../images/telling-jokes-preview.mp4";
import profilePreview from "../../images/profile-preview.mp4";
import SocialMediaButtons from "../common/SocialMediaButtons";
import VideoPreviewButton from "../VideoPreviewButton";
import SocialMediaFeed from "../common/SocialMediaFeed";
import Contact from "../common/Contact";
import FadeInSection from "../common/FadeInSection";

class HomePage extends Component {
  render() {
    return (
      <div className="home-page flex flex-ai-c flex-jc-c">
        <div className="header">
          <FadeInSection>
            <p>Hi, I am</p>
            <h1>Donnie Fan!</h1>
          </FadeInSection>
        </div>

        <div className="hero-image-wrapper flex flex-ai-c flex-jc-c">
          {/* <img
            className="hero-image"
            src={jokePreview}
            alt="Donnie performing at Windy City Comedy Club"
          /> */}
          <video className="hero-image" autoPlay loop muted>
            <source src={tellingJokesPreview} type="video/mp4" />
          </video>
        </div>

        <SocialMediaButtons />

        <FadeInSection>
          <VideoPreviewButton
            label="WATCH MY COMEDY"
            linkAddress="https://weibo.com/u/7708697903?tabtype=newVideo"
          />
        </FadeInSection>

        <SocialMediaFeed />

        <Contact />
      </div>
    );
  }
}

export default HomePage;
