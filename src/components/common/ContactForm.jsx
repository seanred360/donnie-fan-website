import React from "react";
import { useState } from "react";
import { GiMicrophone } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";
import { BsBookHalf } from "react-icons/bs";
import { FaNewspaper } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";

const ContactForm = () => {
  const [isOptionSelected, setisOptionSelected] = useState(false);

  if (!isOptionSelected)
    return (
      <div className="contact-form">
        <div className="section-header-group">
          <h3 className="__header">Let's Chat</h3>
          <p className="__label">How can I help?</p>
        </div>
        <div className="contact-options flex flex-ai-c flex-jc-c">
          <div className="__contact-option">
            <button
              className="__circle-button"
              onClick={() => setisOptionSelected(!isOptionSelected)}
            >
              <GiMicrophone />
            </button>
            <p className="--label">I want to book you</p>
          </div>

          <div className="__contact-option">
            <button
              className="__circle-button"
              onClick={() => setisOptionSelected(!isOptionSelected)}
            >
              <FaHandshake />
            </button>
            <p className="--label">I have a business opportunity</p>
          </div>

          <div className="__contact-option">
            <button
              className="__circle-button"
              onClick={() => setisOptionSelected(!isOptionSelected)}
            >
              <BsBookHalf />
            </button>
            <p className="--label">I am a publisher</p>
          </div>

          <div className="__contact-option">
            <button
              className="__circle-button"
              onClick={() => setisOptionSelected(!isOptionSelected)}
            >
              <FaNewspaper />
            </button>
            <p className="--label">I am in the media</p>
          </div>

          <div className="__contact-option">
            <button
              className="__circle-button"
              onClick={() => setisOptionSelected(!isOptionSelected)}
            >
              <MdWavingHand />
            </button>
            <p className="--label">I just wanted to say hi!</p>
          </div>
        </div>
      </div>
    );
  else
    return (
      <div className="contact-form">
        <div className="section-header-group">
          <h3 className="__header">Let's meet</h3>
          <p className="__label">
            Send me a message so we can start a conversation
          </p>
        </div>
        <form action="" className="__contact-form">
          <input type="text" className="--name-input" name='name' placeholder="Your name" />
          <input
            type="text"
            className="--email-input" name='email'
            placeholder="Your email"
          />
          <textarea
            type="text"
            className="--message-input" name='message'
            placeholder="Write your message here"
          />
          <input type="submit" className="--send-message" value='Submit' />
        </form>
      </div>
    );
};

export default ContactForm;
