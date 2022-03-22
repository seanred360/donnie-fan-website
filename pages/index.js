import Meta from "../components/Meta";
import FadeInSection from "../components/common/utility/FadeInSection";
import SocialMediaFeed from "../components/common/SocialMediaFeed";

const home = () => {
  return (
    <>
      <Meta
        title="Comedy in Beijing"
        keywords="Standup comedy in beijing donnie fan from zero to hero"
        description="Longtime Beijing local is doing English stand up comedy in Beijing"
      />
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
        <SocialMediaFeed />
      </div>
    </>
  );
};

export default home;
