import Meta from "../components/Meta";
import { Icon } from "@iconify/react";

const specials = () => {
  return (
    <section>
      <Meta
        title="From Hero to Zero"
        keywords="@donniefancomedy beijing comedy special stand up hero to zero"
        description="From Hero to Zero is Donnie Fan's first standup comedy special. Donnie
        wears his heart on his sleeve while showcasing his self deprecating
        humor that is sure to make you laugh. He toured and performed this
        throughout 2022 in cities such as, Beijing, Nanjing, Wuhan,
        Shijiazhuang, Changsha, Ningbo, Nanjing, Hangzhou and many others!"
      />
      <h1 className="h-auto">From Hero to Zero</h1>
      <span className="font-[300] text-[14px]">
        Donnie Fan's debut standup comedy special
      </span>
      <video className="w-[960px] my-[24px] mx-auto" controls muted autoPlay>
        <source src="videos/hero-to-zero.m4v" type="video/mp4"></source>
      </video>
      <p className="max-w-[900px]">
        From Hero to Zero is Donnie Fan's first standup comedy special. Donnie
        wears his heart on his sleeve while showcasing his self deprecating
        humor that is sure to make you laugh. He toured and performed this
        throughout 2022 in cities such as, Beijing, Nanjing, Wuhan,
        Shijiazhuang, Changsha, Ningbo, Nanjing, Hangzhou and many others!
      </p>
      <a
        className="hover:text-yellow transition-all"
        href="https://youtu.be/Tp7OO0EvYHg"
      >
        <Icon width="50" icon="fa:youtube" />
      </a>
    </section>
  );
};

export default specials;
