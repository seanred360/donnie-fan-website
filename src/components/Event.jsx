import { Fragment } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import FadeInSection from "../components/utility/FadeInSection";

const Event = ({ date, cityName, eventTimeLocation, eventPoster }) => {
  return (
    <Fragment>
      <div className="event">
        <div className="__calendar">
          <AiOutlineCalendar className="--calendar-icon" />
          <span className="--calendar-label">{date}</span>
        </div>
        <div className="__event-text-group">
          <p className="--city-name">{cityName}</p>
          <p className="--event-time-location">{eventTimeLocation}</p>
        </div>
      </div>

      <FadeInSection>
        <img
          className="__event-poster"
          src={eventPoster}
          alt="a poster advertising the event"
        />
      </FadeInSection>
    </Fragment>
  );
};

export default Event;
