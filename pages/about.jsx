import Meta from "../components/Meta";
import { client } from "../lib/client";
import { PortableText } from "@portabletext/react";

const about = ({ about }) => {
  return (
    <section className="max-w-[1110px] mx-auto md:px-[40px]">
      <Meta
        title="Who is Donnie Fan?"
        keywords="Who is donnie fan comedy beijing china comedian"
        description="Donnie Fan is an American comedian, playwrite, actor and director based in Beijing."
      />
      <h1>About</h1>

      <div className="flex flex-col justify-center items-center lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-[125px] lg:items-start lg:my-[160px]">
        <video
          className="max-w-[900px] w-full my-[24px] md:my-[32px] lg:mt-[0]"
          autoPlay
          loop
          muted
        >
          <source src="videos/telling-jokes-preview.webm" type="video/webm" />
        </video>
        {/* <p className="max-w-[900px] w-full text-[14px]">
        Donnie Fan is a long time Beijing local. He joined the comedy scene in
        2020. Since then he has performed all over China including Hangzhou,
        Nanjing, Ningbo and many others. Fan performs both English and Chinese
        language comedy. As a writer he's worked on the opera play
        <em>The Spring River Flows to the East(2014)</em>,
        <em>The Return of Kesai(2017-AST Director/writer)</em>,
        <em>The Tony Show(2019)</em>, <em>Medea(2022-Director/Writer)</em> and
        <em>Haves and Have Lots(2022-Writer/Creative Director)</em>. Currently
        Donnie performs bi-weekly comedy shows at various venues in Beijing. He
        is truely a workaholic and loves thinking of new ways to make you laugh.
        If you are looking for a community of expats and Chinese people who like
        to have a drink and a laugh, please consider coming out to one of the
        bi-weekly shows.
      </p> */}
        <div className="max-w-[1110px] text-left">
          <PortableText value={about.bio} />
        </div>
      </div>
    </section>
  );
};

export default about;

export async function getStaticProps() {
  const aboutQuery = "*[_type == 'about'][0]";
  const about = await client.fetch(aboutQuery);

  return {
    props: {
      about,
    },
  };
}
