import React from "react";
import djTalking from "../images/djTalking.jpeg";


const VideoPreviewButton = () => {
  return (
    <button className="video-preview-button">
      <h2 className="__video-label">WATCH MY COMEDY</h2>
      <img className="__video" src={djTalking} alt="Donnie performing" />
    </button>
  );
};

export default VideoPreviewButton;
