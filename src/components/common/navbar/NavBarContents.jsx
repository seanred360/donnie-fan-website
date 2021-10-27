import HamburgerButton from "./HamburgerButton";

const NavBarContents = ({ isOpen, onOpen }) => {
  return (
    <div className="nav-bar-contents flex flex-jc-sb flex-ai-c">
      <div className="__left-content flex">
        <span className="__language">
          <button className="--language-button">English</button> |{" "}
          <button className="--language-button">中文</button>
        </span>
      </div>
      <HamburgerButton isOpen={isOpen} onOpen={onOpen} />
    </div>
  );
};

export default NavBarContents;
