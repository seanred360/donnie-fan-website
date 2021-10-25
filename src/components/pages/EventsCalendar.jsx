import React from "react";
import Event from "../Event";
import eventPoster from "../../images/donnie-fan-headliner.jpg";
import eventPoster2 from "../../images/comic-league.png";
import eventPoster3 from "../../images/kunming-poster.jpg";
import eventPoster4 from "../../images/joe-wong-poster.jpg";
import FadeInSection from "../common/FadeInSection";

const EventsCalendar = () => {
  return (
    <div className="events-calendar">
      <div className="section-header-group">
        <h1 className="__header">Event Calendar</h1>
        <p className="__label">Come see me live</p>
      </div>

      <Event
        date="Jun 8"
        cityName="Shanghai"
        eventTimeLocation="8pm | The Bund Bar"
        eventPoster={eventPoster}
      />
      <Event
        date="Jul 12"
        cityName="Shenyang"
        eventTimeLocation="10pm | The Lotus Club"
        eventPoster={eventPoster2}
      />
      <Event
        date="Aug 25"
        cityName="Qingdao"
        eventTimeLocation="5pm | White Rabbit Restaurant"
        eventPoster={eventPoster3}
      />
      <Event
        date="Sept 31"
        cityName="Chongqing"
        eventTimeLocation="12pm | The Tencent Arena"
        eventPoster={eventPoster4}
      />
    </div>
  );
};

export default EventsCalendar;
