import React from "react";
import { GiMicrophone } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";
import { GiNewspaper } from "react-icons/gi";
import { FaNewspaper } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";

const ContactForm = () => {
  return (
    <div className="contact-form">
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
  );
};

export default ContactForm;
