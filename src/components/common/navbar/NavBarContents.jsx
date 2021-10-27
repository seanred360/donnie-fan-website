import useViewport from "../../utility/useViewport";
import HamburgerButton from "./HamburgerButton";
import Navigationbutton from "./NavigationButton";

const NavBarContents = ({ isOpen, onOpen }) => {
  const { width } = useViewport();
  const breakpoint = 992;

  return width < breakpoint ? (
    <div className="nav-bar-contents flex flex-jc-sb flex-ai-c">
      <div className="__left-content flex">
        <span className="__language">
          <button className="--language-button">English</button> |{" "}
          <button className="--language-button">中文</button>
        </span>
      </div>
      <HamburgerButton isOpen={isOpen} onOpen={onOpen} />
    </div>
  ) : (
    <div className="nav-bar-contents flex flex-jc-sb flex-ai-c">
      <div className="__left-content flex">
        <div className="__logo flex flex-ai-c flex-jc-c">DF</div>
      </div>
      <div className="__nav-links">
        <Navigationbutton label="About" />
        <Navigationbutton label="Events" />
        <Navigationbutton label="Videos" />
        <Navigationbutton label="Contact" />
      </div>
    </div>
  );
};

export default NavBarContents;
