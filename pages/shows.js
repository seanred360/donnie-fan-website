import Meta from "../components/Meta";
import Event from "../components/Event";
import EventData from "../public/EventData.json";
import SectionHeader from "../components/common/SectionHeader";

const shows = () => {
  const events = EventData["events"];

  return (
    <>
      <Meta
        title="Stand-up Comedy in Beijing"
        keywords="where can I see standup comedy in beijing english comedy club china"
        description="The best stand up comedy in Beijing! See showtimes and get tickets for Donnie Fan live. Presented by Comedy Club China."
      />
      <div className="events-calendar">
        <SectionHeader
          header="The Best Stand-up Comedy in Beijing"
          subHeader="Showtimes"
        />
        <div className="events-group">
          {events.map((event) => (
            <Event
              key={event["poster"]}
              date={event["date"]}
              cityName={event["cityName"]}
              timeLocation={event["timeLocation"]}
              poster={event["poster"]}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default shows;
