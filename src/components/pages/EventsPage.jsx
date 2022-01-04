import Event from "../Event";
import EventData from "../../EventData.json";

const EventsCalendar = () => {
  const events = EventData["events"];

  return (
    <div className="events-calendar">
      <div className="section-header-group">
        <h1 className="__header">Event Calendar</h1>
        <p className="__label">Come see me live</p>
      </div>

      <div className="events-group">
        {events.map((event) => (
          <Event
            date={event["date"]}
            cityName={event["cityName"]}
            timeLocation={event["timeLocation"]}
            poster={event["poster"]}
          />
        ))}
      </div>
    </div>
  );
};

export default EventsCalendar;
