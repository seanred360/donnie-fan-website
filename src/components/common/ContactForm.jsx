import React, { useRef, useEffect, useState } from "react";
import emailjs from "emailjs-com";
import FadeInSection from "./FadeInSection";
import { GiMicrophone } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";
import { BsBookHalf } from "react-icons/bs";
import { FaNewspaper } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";

const ContactForm = (props) => {
  const contactForm = useRef();
  const [selectedReason, setSelectedReason] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const [mailSent, setMailSent] = useState(false);
  // const [error, setError] = useState(null);

  useEffect(() => {
    if (selectedReason && contactForm.current) {
      contactForm.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [selectedReason]);

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "DonnieFanGmailService",
        "DonnieFanEmailTemplate",
        event.target,
        "user_aHJJrmyRNc0qGAYv0sKKe"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  if (!selectedReason)
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
              onClick={() => setSelectedReason("I want to book you")}
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
              onClick={() => setSelectedReason("I have a business opportunity")}
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
              onClick={() => setSelectedReason("I am a publisher")}
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
              onClick={() => setSelectedReason("I am in the media")}
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
              onClick={() => setSelectedReason("I just wanted to say hi!")}
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
      <div className="contact-form">
        <FadeInSection>
          <div className="section-header-group">
            <h3 className="__header">Let's meet</h3>
            <p className="__label">
              Send me a message so we can start a conversation
            </p>
          </div>
          <form
            className="__contact-form"
            ref={contactForm}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              className="--option-input"
              name="selectedReason"
              defaultValue={selectedReason}
            />
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
              value="Send"
              // onClick={(e) => sendEmail(e)}
            />
          </form>
        </FadeInSection>
      </div>
    );
};

export default ContactForm;
