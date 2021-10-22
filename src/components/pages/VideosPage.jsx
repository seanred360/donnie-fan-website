import React from "react";
import VideoPreviewButton from "../VideoPreviewButton";

const VideosPage = () => {
  return (
    <div className="video-page">
      <div className="section-header-group">
        <h1 className="__header">Videos</h1>
        <p className="__label">Watch my comedy bits</p>
      </div>
      <VideoPreviewButton label="THE BUTTER JOKE" />
      <VideoPreviewButton label="TAXI DRIVERS ARE THE WORST" />
      <VideoPreviewButton label="THE BAD HABIT STORY" />
      <VideoPreviewButton label="WHY KIDS ARE SO HONEST" />
      <VideoPreviewButton label="CROWD WORK" />
      <VideoPreviewButton label="WHY I WEAR BIG SOCKS" />
    </div>
  );
};

export default VideosPage;
