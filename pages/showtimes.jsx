import Meta from "../components/Meta";
import Image from "next/image";
import { client, urlFor } from "../lib/client";

const showtimes = ({ events }) => {
  return (
    <section className="max-w-[1110px] mx-auto">
      <Meta
        title="Stand-up Comedy in Beijing"
        keywords="where can I see standup comedy in beijing english comedy club china"
        description="The best stand up comedy in Beijing! See showtimes and get tickets for Donnie Fan live. Presented by Comedy Club China."
      />
      <h1 className="lg:text-[64px] lg:my-[100px]">Showtimes</h1>
      <div className="w-full mx-auto">
        {events.map((event) => (
          <Event
            key={event._id}
            date={event.date}
            time={event.time}
            city={event.city}
            venue={event.venue}
            poster={
              event?.poster?.asset
                ? urlFor(event.poster).width(250)?.url()
                : null
            }
          />
        ))}
      </div>
    </section>
  );
};

const Event = ({ date, time, city, venue, poster }) => {
  console.log(poster);
  return (
    <div className="event w-full flex mb-[24px] text-[12px] lg:text-[32px] text-[black] lg:font-[500] text-center bg-[black]/5 dark:bg-[white]">
      <div className="relative w-[80px] h-[100px] lg:w-[250px] lg:h-[250px] mr-auto border-[4px] border-yellow">
        <Image
          src={poster ? poster : "/images/logo.png"}
          layout="fill"
          objectFit="cover"
          alt="poster"
        />
      </div>
      <div className="w-full grid grid-cols-3 items-center gap-[8px] lg:gap-[24px] p-[16px] text-left leading-[1.5rem]">
        <p className="font-bold text-[11px] lg:text-[32px] leading-[1.5rem]">
          {date}
          <br />
          {time}
        </p>
        <p className="leading-[1.5rem]">{city}</p>
        <p className="leading-[1.5rem] md:text-[18px]">{venue}</p>
      </div>
    </div>
  );
};

export default showtimes;

export async function getStaticProps() {
  const query = '*[_type == "events"] | order(date desc)';
  const eventData = await client.fetch(query);

  return {
    props: { events: eventData },
    revalidate: 86400,
  };
}
