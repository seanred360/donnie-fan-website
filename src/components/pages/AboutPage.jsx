import aboutPhoto from "../../images/donnie-at-comedy-club-china.jpg";
import FadeInSection from "../utility/FadeInSection";

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="__left-content">
        <FadeInSection>
          <div className="section-header-group">
            <h1 className="__header">About me</h1>
            <p className="__label">Donnie Fan</p>
          </div>
          <section className="__section-one">
            Donnie Fan (NYC & BJ), is a relatively new comedian in the stand-up
            scene, beginning in October 2020. He has quickly risen to touring
            comedian based in Beijing but performing in cities like Wuhan,
            Changsha, Nanjing, Shenyang, Kunming, Chengdu, and Chongqing, with a
            long list of shows awaiting in 2022 as he prepares his first
            headliner: From Hero to Zero.
          </section>
          <img
            className="__about-photo"
            src={aboutPhoto}
            alt="Donnie performing at Comedy Club China"
          />
        </FadeInSection>
      </div>

      <div className="__right-content">
        <FadeInSection>
          <section className="__section-two">
            Fan performs both English and Chinese language comedy. As a writer
            he's worked on the opera play, The Spring River Flows to the
            East(2014), The Return of Kesai(2017-AST Director/writer) The Tony
            Show(2019), Medea(2022-Director/Writer) and Haves and Have Lots
            (2022-Writer/Creative Director).
          </section>
        </FadeInSection>
      </div>
    </div>
  );
};

export default AboutPage;
