import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";

const Event = ({ date, cityName, eventTimeLocation, eventPoster }) => {
  return (
    <React.Fragment>
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

      <img
        className="__event-poster"
        src={eventPoster}
        alt="a poster advertising the event"
      />
    </React.Fragment>
  );
};

export default Event;
