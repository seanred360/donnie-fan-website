import Meta from "../components/Meta";
import SectionHeader from "../components/common/SectionHeader";
import FadeInSection from "../components/common/utility/FadeInSection";
import styles from "../styles/pages/About.module.scss";

const about = () => {
  return (
    <div className={styles.container}>
      <Meta
        title="Who is Donnie Fan?"
        keywords="Who is donnie fan comedy beijing china comedian"
        description="Donnie Fan is an American comedian, playwrite, actor and director based in Beijing."
      />
      <FadeInSection>
        <SectionHeader
          header="Who is Donnie Fan?"
          subHeader="A comedian, playwrite, director and actor."
        />
        <section>
          Donnie Fan (NYC & BJ), is a relatively new comedian in the stand-up
          scene, beginning in October 2020. He has quickly risen to touring
          comedian based in Beijing but performing in cities like Wuhan,
          Changsha, Nanjing, Shenyang, Kunming, Chengdu, and Chongqing, with a
          long list of shows awaiting in 2022 as he prepares his first
          headliner: From Hero to Zero.
        </section>
        <video className={styles.photo} autoPlay loop muted>
          <source src="/images/telling-jokes-preview.webm" type="video/webm" />
        </video>
        <section>
          Fan performs both English and Chinese language comedy. As a writer
          he's worked on the opera play, The Spring River Flows to the
          East(2014), The Return of Kesai(2017-AST Director/writer) The Tony
          Show(2019), Medea(2022-Director/Writer) and Haves and Have Lots
          (2022-Writer/Creative Director).
        </section>
      </FadeInSection>
    </div>
  );
};

export default about;
