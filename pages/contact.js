import Meta from "../components/Meta";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import ContactOptions from "../components/common/ContactOptions";
import ContactForm from "../components/common/ContactForm";
import SectionHeader from "../components/common/SectionHeader";
import { AiFillWechat, AiOutlineWeibo, AiOutlineMail } from "react-icons/ai";
import { IoTicketSharp } from "react-icons/io5";
import { MdPersonSearch } from "react-icons/md";
import { FaTiktok } from "react-icons/fa";

const contact = (props) => {
  const contactForm = useRef();
  const [selectedReason, setSelectedReason] = useState(null);
  const [mailSent, setMailSent] = useState(false);
  const [error, setError] = useState(null);

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
        <SectionHeader
          header="ERROR! Sorry I failed to send your message"
          subHeader="email me at 'donniefan@gmail.com'"
        />
      </div>
    );
  if (mailSent && !error)
    return (
      <div className="contact">
        <SectionHeader
          header="Message Sent!"
          subHeader="I will get back to you as soon as possible"
        />
      </div>
    );
  if (!selectedReason)
    return (
      <>
        <Meta
          title="Contact Donnie Fan"
          keywords="bookings standup comedy in beijing english comedy club china contact"
          description="Contact Donnie Fan for private stand up comedy shows in Beijing. Donnie Fan performs in clubs, restaurants, private parties and more!"
        />
        <div>
          <SectionHeader
            header="Contact Donnie Fan"
            subHeader="Send me a message so we can start a conversation"
          />
          <style jsx>
            {`
              div {
                max-width: 600px;
                margin-right: auto;
                margin-left: auto;
              }
            `}
          </style>
        </div>
        <ContactOptions setSelectedReason={setSelectedReason} />
        <div className="contact-other">
          <h3
            style={{
              fontSize: "24px",
              borderBottom: "1px solid #f4c203",
            }}
          >
            <span>
              <MdPersonSearch style={{ marginRight: "10px" }} color="#f4c203" />
              Or find me here
            </span>
          </h3>
          <span>
            <AiOutlineMail
              style={{ marginRight: "10px" }}
              size="32px"
              color="#f4c203"
            />
            business@donniefan.com
          </span>
          <span>
            <AiFillWechat
              style={{ marginRight: "10px" }}
              size="32px"
              color="#f4c203"
            />
            dj281444
          </span>

          <span>
            <AiOutlineWeibo
              style={{ marginRight: "10px" }}
              size="32px"
              color="#f4c203"
            />
            DONNIEFANCOMEDY
          </span>
          <span>
            <FaTiktok
              style={{ marginRight: "10px" }}
              size="32px"
              color="#f4c203"
            />
            happyherom
          </span>
          <h4
            style={{
              fontSize: "24px",
              borderBottom: "1px solid #f4c203",
            }}
          >
            <IoTicketSharp
              style={{ marginRight: "10px" }}
              size="32px"
              color="#f4c203"
            />
            For tickets and other information
          </h4>
          <span>
            <AiFillWechat
              style={{ marginRight: "10px" }}
              size="32px"
              color="#f4c203"
            />
            vivicoffee66
          </span>
          <style jsx>
            {`
              div {
                display: flex;
                justify-content: center;
                alighn-items: center;
                flex-direction: column;
                max-width: 600px;
                margin-right: auto;
                margin-left: auto;
              }
            `}
          </style>
        </div>
      </>
    );
  else
    return (
      <>
        <Meta
          title="Contact Donnie Fan"
          keywords="bookings standup comedy in beijing english comedy club china contact"
          description="Contact Donnie Fan for private stand up comedy shows in Beijing. Donnie Fan performs in clubs, restaurants, private parties and more!"
        />
        <div className="wrapper-required-for-ref-to-work" ref={contactForm}>
          <SectionHeader
            header="Contact Donnie Fan"
            subHeader="Send me a message so we can start a conversation"
          />
          <ContactForm selectedReason={selectedReason} sendEmail={sendEmail} />
        </div>
      </>
    );
};

export default contact;
