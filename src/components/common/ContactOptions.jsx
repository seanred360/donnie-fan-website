import FadeInSection from "../utility/FadeInSection";
import { GiMicrophone } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";

const ContactOptions = ({ setSelectedReason }) => {
  return (
    <div className="contact">
      <div className="section-header-style-wrapper">
        <div className="section-header-group">
          <h3 className="__header">Let's Chat</h3>
          <FadeInSection>
            <p className="__label">How can I help?</p>
          </FadeInSection>
        </div>
      </div>

      <div className="contact-options">
        <div className="__contact-option">
          <button
            className="__circle-button"
            onClick={() => setSelectedReason("I want to book you")}
          >
            <GiMicrophone />
          </button>
          <p className="--label">I want to book you</p>
        </div>

        <div className="__contact-option">
          <button
            className="__circle-button"
            onClick={() => setSelectedReason("I have a business opportunity")}
          >
            <FaHandshake />
          </button>
          <p className="--label">I have a business opportunity</p>
        </div>
        <div className="__contact-option">
          <button
            className="__circle-button"
            onClick={() => setSelectedReason("I am in the media")}
          >
            <FaNewspaper />
          </button>
          <p className="--label">I am in the media</p>
        </div>

        <div className="__contact-option">
          <button
            className="__circle-button"
            onClick={() => setSelectedReason("I just wanted to say hi!")}
          >
            <MdWavingHand />
          </button>
          <p className="--label">I just wanted to say hi!</p>
        </div>
      </div>
    </div>
  );
};

export default ContactOptions;
