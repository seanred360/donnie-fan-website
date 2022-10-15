import Meta from "../components/Meta";

const about = () => {
  return (
    <section>
      <Meta
        title="Who is Donnie Fan?"
        keywords="Who is donnie fan comedy beijing china comedian"
        description="Donnie Fan is an American comedian, playwrite, actor and director based in Beijing."
      />
      <h1>About</h1>
      <video className="max-w-[900px] w-full my-[24px]" autoPlay loop muted>
        <source src="videos/telling-jokes-preview.webm" type="video/webm" />
      </video>
      <p className="max-w-[900px] w-full text-[14px]">
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
        to have a drink and a laugh, please consider comming out to one of the
        bi-weekly shows.
      </p>
    </section>
  );
};

export default about;
