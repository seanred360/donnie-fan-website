import React from "react";
import { FaWeibo } from "react-icons/fa";
// import { AiFillInstagram } from "react-icons/ai";
import { AiFillWechat } from "react-icons/ai";
// import { AiFillYoutube } from "react-icons/ai";

const SocialMediaButtons = () => {
  return (
    <div className="social-media-buttons">
      <button className="__circle-button">
        <FaWeibo />
      </button>
      {/* <button className="__circle-button">
        <AiFillInstagram />
      </button> */}
      <button className="__circle-button">
        <AiFillWechat />
      </button>
      {/* <button className="__circle-button">
        <AiFillYoutube />
      </button> */}
    </div>
  );
};

export default SocialMediaButtons;
