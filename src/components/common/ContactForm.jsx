import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { GiMicrophone } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";
import { BsBookHalf } from "react-icons/bs";
import { FaNewspaper } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";
import FadeInSection from "./FadeInSection";

const ContactForm = (props) => {
  const history = useHistory();
  const contactform = useRef();
  const [isOptionSelected, setisOptionSelected] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const [mailSent, setMailSent] = useState(false);
  // const [error, setError] = useState(null);

  useEffect(() => {
    if (isOptionSelected && contactform.current) {
      contactform.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [isOptionSelected]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("name " + name + " email " + email + " message " + message);
  };

  if (!isOptionSelected)
    return (
      <div className="contact-form">
        <div className="section-header-group">
          <h3 className="__header">Let's Chat</h3>
          <FadeInSection>
            <p className="__label">How can I help?</p>
          </FadeInSection>
        </div>
        <div className="contact-options flex flex-ai-c flex-jc-c">
          <div className="__contact-option">
            <button
              className="__circle-button"
              onClick={() => setisOptionSelected(!isOptionSelected)}
            >
              <GiMicrophone />
            </button>
            <FadeInSection>
              <p className="--label">I want to book you</p>
            </FadeInSection>
          </div>

          <div className="__contact-option">
            <button
              className="__circle-button"
              onClick={() => setisOptionSelected(!isOptionSelected)}
            >
              <FaHandshake />
            </button>
            <FadeInSection>
              <p className="--label">I have a business opportunity</p>
            </FadeInSection>
          </div>

          <div className="__contact-option">
            <button
              className="__circle-button"
              onClick={() => setisOptionSelected(!isOptionSelected)}
            >
              <BsBookHalf />
            </button>
            <FadeInSection>
              <p className="--label">I am a publisher</p>
            </FadeInSection>
          </div>

          <div className="__contact-option">
            <button
              className="__circle-button"
              onClick={() => setisOptionSelected(!isOptionSelected)}
            >
              <FaNewspaper />
            </button>
            <FadeInSection>
              <p className="--label">I am in the media</p>
            </FadeInSection>
          </div>

          <div className="__contact-option">
            <button
              className="__circle-button"
              onClick={() => setisOptionSelected(!isOptionSelected)}
            >
              <MdWavingHand />
            </button>
            <FadeInSection>
              <p className="--label">I just wanted to say hi!</p>
            </FadeInSection>
          </div>
        </div>
      </div>
    );
  else
    return (
      <div className="contact-form" ref={contactform}>
        <FadeInSection>
          <div className="section-header-group">
            <h3 className="__header">Let's meet</h3>
            <p className="__label">
              Send me a message so we can start a conversation
            </p>
          </div>
          <form className="__contact-form" action="/action_page.php">
            <input
              type="text"
              className="--name-input"
              name="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className="--email-input"
              name="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              type="text"
              className="--message-input"
              name="message"
              placeholder="Write your message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <input
              type="submit"
              className="--send-message"
              value="Submit"
              onClick={(e) => handleFormSubmit(e)}
            />
          </form>
        </FadeInSection>
      </div>
    );
};

export default ContactForm;
