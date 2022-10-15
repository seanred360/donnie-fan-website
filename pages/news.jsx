import MediaItem from "../components/MediaItem";
import Meta from "../components/Meta";

const news = () => {
  return (
    <section>
      <Meta
        title="Donnie Fan's News"
        keywords="Standup comedy in beijing donnie steven siriski podcast cow pen comedy club china the beijinger"
        description="Get the latest updates on Beijing comedian Donnie Fan. Stay up to date on his latest projects and media appearences."
      />
      <h1>News</h1>
      <div className="flex justify-center items-start flex-wrap gap-[24px] my-[48px]">
        <MediaItem
          href="https://www.thebeijinger.com/blog/2022/09/28/help-crowdfund-exciting-comedy-project"
          img="images/dj-beijinger2.png"
          text="Help Comedian Donnie Fan Crowdfund This Exciting Comedy Project"
        />
        <MediaItem
          href="https://youtu.be/rLBXEROdjBo"
          img="images/cowpen.png"
          text="Cow Pen Podcast"
        />
        <MediaItem
          href="https://www.stevensirski.com/ssp28-donnie-fan/"
          img="https://www.stevensirski.com/wp-content/uploads/2022/02/SSP28-Donnie-Fan-Wednesday-February-9-2022-02-1200-1038x576.png"
          text="Steven Siriski Podcast"
        />
        <MediaItem
          href="https://www.thebeijinger.com/blog/2022/03/17/how-he-went-zero-hero-interview-stand-comedian-donnie-fan"
          img="images/dj-beijinger.png"
          text="How He Went From Zero to Hero"
        />
      </div>
    </section>
  );
};

export default news;
