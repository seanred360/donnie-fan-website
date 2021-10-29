import useViewport from "../utility/useViewport";
// import donnieAtWindyCity from "../../images/pic.jpeg";
// import jokePreview from "../../images/joke-preview.gif";
import tellingJokesPreview from "../../images/telling-jokes-preview.mp4";
// import profilePreview from "../../images/profile-preview.mp4";
import SocialMediaButtons from "../common/SocialMediaButtons";
import VideoPreviewButton from "../VideoPreviewButton";
import SocialMediaFeed from "../common/SocialMediaFeed";
import Contact from "../common/Contact";
import FadeInSection from "../utility/FadeInSection";
import { GiMicrophone } from "react-icons/gi";
import NavigationButton from "../common/navbar/NavigationButton";
import Navigationbutton from "../common/navbar/NavigationButton";

const HomePage = () => {
  const { width } = useViewport();
  const breakpoint = 992;

  return width < breakpoint ? (
    // MOBILE PAGE --------------------------------------------------
    <div className="home-page flex flex-ai-c flex-jc-c">
      <div className="__header">
        <FadeInSection>
          <p>Hi, I am</p>
          <h1>Donnie Fan!</h1>
        </FadeInSection>
      </div>

      <div className="__hero-image-wrapper flex flex-ai-c flex-jc-c">
        <video className="--hero-image" autoPlay loop muted>
          <source src={tellingJokesPreview} type="video/mp4" />
        </video>
      </div>

      <SocialMediaButtons />

      <FadeInSection>
        <VideoPreviewButton
          label="WATCH MY COMEDY"
          linkAddress="https://weibo.com/u/7708697903?tabtype=newVideo"
        />
      </FadeInSection>

      <SocialMediaFeed />

      <Contact />
    </div>
  ) : (
    // DESKTOP PAGE --------------------------------------------------
    <div className="home-page ">
      <div className="__top-elements">
        <div className="__left-elements">
          <div className="__header">
            <FadeInSection>
              <p>Hi, I am</p>
              <h1>Donnie Fan!</h1>
            </FadeInSection>
            <div className="__book-me-group">
              <Navigationbutton label={"Book me"} icon={<GiMicrophone />} />
            </div>
          </div>
          <div className="__social-media-group">
            <p className="--social-media-label">Connect with me</p>
            <SocialMediaButtons />
          </div>
        </div>

        <div className="__right-elements">
          <div className="__hero-image-wrapper flex flex-ai-c flex-jc-c">
            <video className="--hero-image" autoPlay loop muted>
              <source src={tellingJokesPreview} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <FadeInSection>
        <VideoPreviewButton
          label="WATCH MY COMEDY"
          linkAddress="https://weibo.com/u/7708697903?tabtype=newVideo"
        />
      </FadeInSection>

      <SocialMediaFeed />

      <Contact />
    </div>
  );
};

export default HomePage;
