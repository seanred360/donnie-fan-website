import useViewport from "../../utility/useViewport";
import LogoLink from "../LogoLink";
import HamburgerButton from "./HamburgerButton";
import Navigationbutton from "./NavigationButton";

const NavBarContents = ({ isOpen, onOpen }) => {
  const { width } = useViewport();
  const breakpoint = 992;

  return width < breakpoint ? (
    <div className="nav-bar-contents flex flex-jc-sb flex-ai-c">
      <div className="__left-content flex">
        <LogoLink />
      </div>

      <div className="__left-content flex"></div>
      <div className="__language">
        <button className="--english-button --language-button">En</button>|
        <button className="--chinese-button --language-button">中文</button>
      </div>

      <HamburgerButton isOpen={isOpen} onOpen={onOpen} />
    </div>
  ) : (
    <div className="nav-bar-contents flex flex-jc-sb flex-ai-c">
      <div className="__left-content flex">
        <LogoLink />
        <div className="__website-name">Donnie Fan Comedy</div>
      </div>
      <div className="__nav-links">
        <Navigationbutton label="About" />
        <Navigationbutton label="Events" />
        <Navigationbutton label="Videos" />
        <Navigationbutton label="Contact" />
      </div>
      <div className="__language">
        <button className="--english-button --language-button">En</button>|
        <button className="--chinese-button --language-button">中文</button>
      </div>
    </div>
  );
};

export default NavBarContents;
