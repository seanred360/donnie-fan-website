import React from "react";
// import djTalking from "../images/djTalking.jpeg";
import donnieRooftop from "../images/donnie-rooftop.jpg";
import FadeInSection from "../components/utility/FadeInSection";

const VideoPreviewButton = ({ label, linkAddress }) => {
  return (
    <FadeInSection>
      <button
        className="video-preview-button"
        onClick={() => window.open(linkAddress)}
      >
        <h2 className="__video-label">{label}</h2>
        <img className="__video" src={donnieRooftop} alt="Donnie performing" />
      </button>
    </FadeInSection>
  );
};

export default VideoPreviewButton;
