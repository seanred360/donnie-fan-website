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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            blanditiis excepturi delectus odio deleniti mollitia illum
            doloremque earum repudiandae sequi illo voluptate officia, quasi
            debitis odit vel eius,
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo rerum
            obcaecati vero deleniti illum eius excepturi nisi totam, et nihil,
            nostrum, ducimus ipsam! Aliquid similique eaque sequi beatae
            blanditiis explicabo nisi itaque, aperiam, reprehenderit reiciendis
            nulla porro aspernatur alias recusandae dolore sapiente incidunt
            velit? Illum a alias nesciunt delectus, adipisci provident rerum
            error vero ut deserunt. Architecto delectus iusto quaerat nisi
            possimus dolorem voluptatem eligendi, velit magnam quos nesciunt,
            earum qui amet eum accusantium mollitia modi debitis incidunt
            recusandae a fugiat ipsum magni? Voluptatem laudantium nihil impedit
          </section>
        </FadeInSection>
      </div>
    </div>
  );
};

export default AboutPage;
