import trailor from "../../images/medea-trailor.mp4";
import ticketBg from "../../images/ticket-bg.png";
import { HiLocationMarker } from "react-icons/hi";
import { BsCalendarXFill } from "react-icons/bs";
import { IoTicket } from "react-icons/io5";
import FadeInSection from "../utility/FadeInSection";

const Hero = () => {
  return (
    <div className="hero">
      <video className="__video" loop autoPlay muted>
        <source src={trailor} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <FadeInSection>
        <div className="__description">
          <div className="__left-content">
            <h1>MEDEA</h1>
            <p>
              Medea is a modern reimagining of what happens in the aftermath of
              the original greek tragedy. This two character, one act play
              explores motive, consequence, and how breakdown of communication
              is often at the root of tragedy. THE PLAY IS IN CHINESE
            </p>
            <div className="__left-bottom">
              <span className="__date">
                <BsCalendarXFill />
                2022/01/20 ~ 21
              </span>
              <span className="__location">
                <HiLocationMarker />
                北京市东城区美术馆后街77号
              </span>
            </div>
          </div>
          <div className="__right-content">
            <div
              className="__tickets-box"
              style={{ backgroundImage: `url(${ticketBg})` }}
            >
              <span className="__admission">ADMISSION</span>
              <span className="__price">200元</span>
              <button
                className="__get-tickets"
                onClick={() =>
                  (window.location.href = "https://yoopay.cn/event/14512145")
                }
              >
                <IoTicket />
                Get Tickets
              </button>
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Hero;
