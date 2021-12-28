import donnieRooftop from "../images/donnie-rooftop.jpg";
import FadeInSection from "../components/utility/FadeInSection";

const VideoPreviewButton = ({ label, linkAddress }) => {
  return (
    <FadeInSection>
      <a href={linkAddress} className="video-preview-button">
        <h2 className="__video-label">{label}</h2>
        <img className="__video" src={donnieRooftop} alt="Donnie performing" />
      </a>
    </FadeInSection>
  );
};

export default VideoPreviewButton;
