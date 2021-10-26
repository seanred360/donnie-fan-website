import React from "react";
import djTalking from "../images/djTalking.jpeg";
import FadeInSection from "./common/FadeInSection";

const VideoPreviewButton = ({ label, linkAddress }) => {
  return (
    <FadeInSection>
      <button
        className="video-preview-button"
        onClick={() => window.open(linkAddress)}
      >
        <h2 className="__video-label">{label}</h2>
        <img className="__video" src={djTalking} alt="Donnie performing" />
      </button>
    </FadeInSection>
  );
};

export default VideoPreviewButton;
