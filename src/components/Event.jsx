import { AiOutlineCalendar } from "react-icons/ai";
import FadeInSection from "../components/utility/FadeInSection";

const Event = ({ date, cityName, eventTimeLocation, eventPoster }) => {
  return (
    <div className="event">
      <div className="__top-content">
        <div className="__calendar">
          <AiOutlineCalendar className="__calendar--icon" />
          <span className="__calendar--label">{date}</span>
        </div>
        <div className="event--text-group">
          <p className="__event--city-name">{cityName}</p>
          <p className="__event--time-location">{eventTimeLocation}</p>
        </div>
      </div>

      <FadeInSection>
        <img
          className="__event--poster"
          src={eventPoster}
          alt="a poster advertising the event"
        />
      </FadeInSection>
    </div>
  );
};

export default Event;
