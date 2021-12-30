import { useRef, useEffect, useState } from "react";
import emailjs from "emailjs-com";
import ContactOptions from "./ContactOptions";
import ContactForm from "./ContactForm";
import FadeInSection from "../utility/FadeInSection";

const Contact = (props) => {
  const contactForm = useRef();
  const [selectedReason, setSelectedReason] = useState(null);
  const [mailSent, setMailSent] = useState(false);
  const [error, setError] = useState(null);

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
          setMailSent(true);
        },
        (error) => {
          setError(error);
        }
      );
  };

  if (error)
    return (
      <div className="contact">
        <div className="section-header-style-wrapper">
          <div className="section-header-group">
            <FadeInSection>
              <h3 className="__header">
                ERROR! Sorry I failed to send your message :(
              </h3>
              <p className="__label">email me at "donniefan@gmail.com"</p>
            </FadeInSection>
          </div>
        </div>
      </div>
    );
  if (mailSent && !error)
    return (
      <div className="contact">
        <div className="section-header-style-wrapper">
          <div className="section-header-group">
            <FadeInSection>
              <h3 className="__header">Message Sent!</h3>
              <p className="__label">
                I will get back to you as soon as possible
              </p>
            </FadeInSection>
          </div>
        </div>
      </div>
    );
  if (!selectedReason)
    return <ContactOptions setSelectedReason={setSelectedReason} />;
  else
    return (
      <div className="wrapper-required-for-ref-to-work" ref={contactForm}>
        <ContactForm selectedReason={selectedReason} sendEmail={sendEmail} />
      </div>
    );
};

export default Contact;
