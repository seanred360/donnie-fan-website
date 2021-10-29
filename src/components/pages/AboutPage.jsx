import React from "react";
import aboutPhoto from "../../images/donnie-at-comedy-club-china.jpg";
import FadeInSection from "../utility/FadeInSection";

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="section-header-group">
        <h1 className="__header">About me</h1>
        <p className="__label">Donnie Fan</p>
      </div>

      <FadeInSection>
        <section>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
          temporibus et velit consequatur accusantium porro placeat deleniti
          reiciendis magni, dolore rem nemo commodi animi suscipit, iusto,
          veritatis quidem minima sint! Excepturi dolorum id doloremque
          architecto quos modi fugiat asperiores deserunt voluptatibus ducimus
          omnis dolorem exercitationem, accusantium temporibus. Illo, eos alias.
        </section>
      </FadeInSection>

      <img
        className="__about-photo"
        src={aboutPhoto}
        alt="Donnie performing at Comedy Club China"
      />

      <section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
        blanditiis excepturi delectus odio deleniti mollitia illum doloremque
        earum repudiandae sequi illo voluptate officia, quasi debitis odit vel
        eius, eum tempore pariatur tempora sed assumenda, dolorem recusandae
        ullam. Maiores perspiciatis harum reprehenderit. Tempora blanditiis est,
        repellendus minima molestias excepturi culpa adipisci odit. Sunt, a.
        Odio consequuntur omnis quo rem, officia veniam, voluptatem quidem,
        inventore soluta obcaecati consectetur a laboriosam aspernatur magni
        fugiat minima reiciendis quibusdam temporibus?
      </section>
    </div>
  );
};

export default AboutPage;
