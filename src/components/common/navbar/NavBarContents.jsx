import useViewport from "../../utility/useViewport";
import LogoLink from "./LogoLink";
import HamburgerButton from "./HamburgerButton";
import Navigationbutton from "./NavigationButton";

const NavBarContents = ({ isOpen, onOpen }) => {
  const { width } = useViewport();
  const breakpoint = 992;

  const handleClick = () => {
    window.location.href = "https://weibo.com/u/7708697903?tabtype=newVideo";
  };

  return width < breakpoint ? (
    <div className="nav-bar-contents flex flex-jc-sb flex-ai-c">
      <div className="__left-content flex">
        <LogoLink />
      </div>

      <div className="__left-content flex"></div>

      <HamburgerButton isOpen={isOpen} onOpen={onOpen} />
    </div>
  ) : (
    <div className="nav-bar-contents flex flex-jc-sb flex-ai-c">
      <div className="__left-content flex">
        <LogoLink />
        <div className="__website-name">Donnie Fan Comedy</div>
      </div>
      <div className="__nav-links">
        <Navigationbutton label="About" url={"about"} />
        <Navigationbutton label="Events" url={"events"} />
        {/* <Navigationbutton label="Videos" url={"videos"} /> */}
        <button className="--navigation-button" onClick={handleClick}>
          Videos
        </button>
        <Navigationbutton label="Contact" url={"contact"} />
      </div>
      {/* <div className="__language">
        <button className="--english-button --language-button">En</button>|
        <button className="--chinese-button --language-button">中文</button>
      </div> */}
    </div>
  );
};

export default NavBarContents;
