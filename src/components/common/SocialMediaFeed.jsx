import React from "react";
import FadeInSection from "./FadeInSection";
import { Timeline } from "react-twitter-widgets";

const SocialMediaFeed = () => {
  return (
    <div className="social-media-feed">
      <div className="section-header-group">
        <h3 className="__header">Latest Weibo</h3>
        <FadeInSection>
          <p className="__label">See What I'm currently doing</p>
        </FadeInSection>
      </div>
      <FadeInSection>
        <div className="__social-window">
          <Timeline
            dataSource={{
              sourceType: "profile",
              screenName: "markhoppus",
            }}
            options={{
              height: "400",
            }}
          />
        </div>
      </FadeInSection>
    </div>
  );
};

export default SocialMediaFeed;
