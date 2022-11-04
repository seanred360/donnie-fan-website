import MediaItem from "../components/MediaItem";
import Meta from "../components/Meta";
import { client, urlFor } from "../lib/client";

const news = ({ news }) => {
  return (
    <section>
      <Meta
        title="Donnie Fan's News"
        keywords="Standup comedy in beijing donnie steven siriski podcast cow pen comedy club china the beijinger"
        description="Get the latest updates on Beijing comedian Donnie Fan. Stay up to date on his latest projects and media appearences."
      />
      <h1>News</h1>
      <div className="flex justify-center items-start flex-wrap gap-[24px] my-[48px]">
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

export default news;

export async function getStaticProps() {
  const query = '*[_type == "news"] | order(date asc)';
  const newsData = await client.fetch(query);

  return {
    props: { news: newsData.reverse() },
  };
}
