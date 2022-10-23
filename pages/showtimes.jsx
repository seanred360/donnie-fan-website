import EventData from "../public/EventData.json";
import Meta from "../components/Meta";
import Image from "next/image";

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
      <div className="w-full mx-auto">
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
    <div className="event w-full flex mb-[24px] text-[12px] lg:text-[32px] text-[black] lg:font-[500] text-center bg-[white]">
      <div className="relative w-[80px] h-[100px] lg:w-[250px] lg:h-[250px] mr-auto border-[4px] border-yellow">
        <Image
          src={"/" + poster}
          width="80"
          height="100"
          layout="fill"
          objectFit="cover"
          alt="poster"
        />
      </div>
      <div className="w-full grid grid-cols-3 items-center gap-[8px] lg:gap-[24px] ">
        <span className="font-bold text-[11px] lg:text-[32px]">
          {date}
          <br />
          {time}
        </span>
        <span>{city}</span>
        <span>{venue}</span>
      </div>
    </div>
  );
};

export default showtimes;
