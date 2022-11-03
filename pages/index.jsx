import { useEffect, useRef } from "react";
import { gsap, Expo } from "gsap";
import Link from "next/link";
import MediaItem from "../components/MediaItem";
import Meta from "../components/Meta";
import Image from "next/image";
import { client, urlFor } from "../lib/client";

export default function Home({ events, news }) {
  const home = useRef();

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.to(".first", {
        duration: 1.5,
        delay: 0.2,
        left: "-100%",
        ease: Expo.easeInOut,
      });

      gsap.to(".second", {
        duration: 1.5,
        delay: 0.4,
        left: "-100%",
        ease: Expo.easeInOut,
      });

      gsap.to(".third", {
        duration: 1.5,
        delay: 0.6,
        left: "-100%",
        ease: Expo.easeInOut,
      });

      // gsap.from(".call-to-action", {
      //   duration: 1,
      //   delay: 2.8,
      //   opacity: 0,
      //   x: -20,
      //   ease: Expo.easeInOut,
      // });

      gsap.from(".border-bottom", {
        delay: 1.4,
        duration: 1,
        width: "0%",
        ease: Expo.easeInOut,
      });

      gsap.from(".title", {
        duration: 1,
        delay: 2.2,
        width: "0%",
        ease: Expo.easeInOut,
      });
    }, home);

    return () => context.revert();
  }, []);

  return (
    <div ref={home}>
      <Meta
        title="Donnie Fan | Standup Comedy in Beijing"
        keywords="Standup comedy in beijing donnie fan from hero to zero"
        description="Longtime Beijing local is doing English stand up comedy in Beijing"
      />
      <Overlay />
      <hr className="border-bottom m-0" />
      <main>
        <SectionBanner />
        <SectionShowtimes events={events} />
        <SectionAbout />
        <SectionNews news={news} />
      </main>
    </div>
  );
}

const Overlay = () => {
  return (
    <>
      <div className="overlay first top-0"></div>
      <div className="overlay second top-[33.3%]"></div>
      <div className="overlay third top-[66.6%]"></div>
    </>
  );
};

const SectionBanner = () => {
  return (
    <section className="relative h-[calc(100vh-98px) 2xl:flex-row mt-0 pt-[32px]">
      <span className="w-full title overflow-hidden lg:w-auto">
        <h1 className="block h-[100px] m-0 mb-[32px] p-0 font-black text-[64px] lg:text-[100px] lg:h-[155px] lg:leading-[80px] lg:border-l-[20px]">
          DONNIE <br /> FAN
        </h1>
      </span>
      <div>
        <picture>
          <source
            media="(min-width: 992px)"
            srcSet="/images/dj-comic-clean-lines-extended.png"
          />
          <img src="images/dj-comic-clean-lines-crop.png" alt="Donnie" />
        </picture>
      </div>
      <hr className="m-0" />
    </section>
  );
};

const SectionShowtimes = ({ events }) => {
  return (
    <section className="flex justify-center items-center flex-wrap">
      <h2>SHOWTIMES</h2>
      {events.map((event) => (
        <Event key={event.date} event={event} />
      ))}

      <button
        href="/shows"
        className="w-[340px] px-[32px] py-[12px] border-yellow border-[4px] text-[24px] hover:bg-yellow hover:text-[black]"
      >
        <Link href="/showtimes">View All</Link>
      </button>
    </section>
  );
};

const SectionAbout = () => {
  return (
    <section className="mb-0 bg-yellow text-[black]">
      <h3 className="my-[32px] text-[48px] font-black text-center">About</h3>
      <div className="h-full flex flex-wrap justify-center items-center gap-[32px] mx-auto mb-[32px] md:pb-[32px]">
        <Image
          src="/images/dj-gatsbys-close.jpg"
          width="340"
          height="340"
          layout="fixed"
          objectFit="cover"
          alt="Donnie performing at Gatsby's"
        />
        <p className="max-w-[500px] text-[black] font-[500]">
          Donnie Fan is a long time Beijing local. He joined the comedy scene in
          2020. Since then he has performed all over China including Hangzhou,
          Nanjing, Ningbo and many others. <br />
          <strong className="hover:border-b-[1px]">
            <Link href="/about">Read more</Link>
          </strong>
        </p>
      </div>
    </section>
  );
};

const SectionNews = ({ news }) => {
  return (
    <section className="min-h-[500px] py-[32px] mb-0">
      <h4 className="my-[32px] mb-[48px]">News</h4>
      <div className="flex flex-wrap justify-center items-start gap-[16px]">
        {news.map((newsItem) => (
          <MediaItem
            key={newsItem._id}
            href={newsItem.url}
            img={urlFor(newsItem.image).width(300).url()}
            text={newsItem.title}
          />
        ))}
      </div>
    </section>
  );
};

const Event = ({ event }) => {
  const { date, time, city, venue } = event;
  return (
    <div className="flex flex-col items-center justify-center my-[38px]">
      <span className="font-black text-[12px] capitalize">
        {date}
        {" @"}
        {time}
      </span>
      <span className="my-[12px] font-black text-[32px] capitalize">
        {city}
      </span>
      <span className="font-[500] text-[24px] capitalize">{venue}</span>
    </div>
  );
};

export async function getStaticProps() {
  const eventQuery = '*[_type == "events"] | order(_createdAt desc)[0...4]';
  const eventData = await client.fetch(eventQuery);
  const newsQuery = '*[_type == "news"][0...4] | order(_createdAt desc)';
  const newsData = await client.fetch(newsQuery);

  return {
    props: {
      events: eventData,
      news: newsData,
    },
  };
}
