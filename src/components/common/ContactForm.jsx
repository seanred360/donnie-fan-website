import React from "react";
import FadeInSection from "./FadeInSection";

const ContactForm = ({ selectedReason, sendEmail }) => {
  return (
    <div className="contact">
      <FadeInSection>
        <div className="section-header-group">
          <h3 className="__header">Let's meet</h3>
          <p className="__label">
            Send me a message so we can start a conversation
          </p>
        </div>
        <form className="__contact-form" onSubmit={sendEmail}>
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
          />
          <input
            type="email"
            className="--email-input"
            name="email"
            placeholder="Your email"
          />
          <textarea
            type="text"
            className="--message-input"
            name="message"
            placeholder="Write your message here"
          />
          <input type="submit" className="--send-message" value="Send" />
        </form>
      </FadeInSection>
    </div>
  );
};

export default ContactForm;
