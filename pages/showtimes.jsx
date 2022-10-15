import EventData from "../public/EventData.json";
import { Icon } from "@iconify/react";
import Meta from "../components/Meta";

const showtimes = () => {
  const events = EventData["events"];
  return (
    <section className="max-w-[1400px] mx-auto">
      <Meta
        title="Stand-up Comedy in Beijing"
        keywords="where can I see standup comedy in beijing english comedy club china"
        description="The best stand up comedy in Beijing! See showtimes and get tickets for Donnie Fan live. Presented by Comedy Club China."
      />
      <h1 className="lg:text-[64px] lg:my-[100px]">Showtimes</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
        {events.map((event) => (
          <Event
            key={event.poster}
            date={event.date}
            time={event.time}
            city={event.city}
            venue={event.venue}
            poster={event.poster}
          />
        ))}
      </div>
    </section>
  );
};

const Event = ({ date, time, city, venue, poster }) => {
  return (
    <div className="event">
      <div className="w-full flex justify-start items-center pb-[24px] border-b-yellow border-b-[15px]">
        <Icon className="text-[100px]" icon="ant-design:calendar-outlined" />
        <div className="flex flex-col leading-[30px]">
          <span className="text-[14px] font-[300]">{date}</span>
          <span className="text-[18px] font-black">{city}</span>
          <span className="text-[14px]">
            {venue}@{time}
          </span>
        </div>
      </div>
      <img src={poster} alt="event poster" />
    </div>
  );
};

export default showtimes;
