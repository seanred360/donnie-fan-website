import Meta from "../components/Meta";
// import SocialMediaFeed from "../components/common/SocialMediaFeed";
import FadeInSection from "../components/common/utility/FadeInSection";
import useInView from "react-cool-inview";
import dynamic from "next/dynamic";
const SocialMediaFeed = dynamic(() =>
  import("../components/common/SocialMediaFeed")
);

const home = () => {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(), // only run once
  });

  return (
    <>
      <Meta
        title="Comedy in Beijing"
        keywords="Standup comedy in beijing donnie fan from zero to hero"
        description="Longtime Beijing local is doing English stand up comedy in Beijing"
      />
      <div className="hero-banner">
        <FadeInSection>
          <img
            src="/images/from-zero-to-hero.webp"
            alt="From Zero to Hero"
            layout="fill"
          />
        </FadeInSection>
      </div>

      <div className="home-page">
        <div className="__header">
          <FadeInSection>
            <p>Hi, I am</p>
            <h1>Donnie Fan!</h1>
          </FadeInSection>
        </div>

        <div className="__hero-image-wrapper flex flex-ai-c flex-jc-c">
          <video className="--donnie-image" autoPlay loop muted>
            <source
              src="/images/telling-jokes-preview.webm"
              type="video/webm"
            />
          </video>
        </div>
        <div ref={observe}>{inView && <SocialMediaFeed />}</div>
      </div>
    </>
  );
};

export default home;
