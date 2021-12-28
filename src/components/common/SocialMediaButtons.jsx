import { FaWeibo } from "react-icons/fa";
import { AiFillWechat } from "react-icons/ai";

const SocialMediaButtons = () => {
  return (
    <div className="social-media-buttons">
      <a
        className="__social-button"
        href="https://weibo.com/u/7708697903?tabtype=feed"
      >
        <FaWeibo />
      </a>
      <a className="__social-button" href="weixin://dl/chat?dj281444">
        <AiFillWechat />
      </a>
    </div>
  );
};

export default SocialMediaButtons;
