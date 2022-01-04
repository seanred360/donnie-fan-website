import Navigationbutton from "./NavigationButton";

const MobileMenu = ({ isOpen, onOpen }) => {
  const handleClick = () => {
    window.location.href = "https://weibo.com/u/7708697903?tabtype=newVideo";
  };

  return (
    <>
      <div className={`fade-overlay ${isOpen ? `--open` : ``}`}></div>
      <div
        className={`mobile-menu-container hide-for-desktop ${
          isOpen ? `--open` : ``
        }`}
      >
        <div className="__mobile-menu">
          <Navigationbutton onOpen={onOpen} url={""} label="Home" />
          <Navigationbutton onOpen={onOpen} url={"about"} label="About" />
          <Navigationbutton onOpen={onOpen} url={"events"} label="Events" />
          {/* <Navigationbutton
            onOpen={onOpen}
            url={"/videos"}
            label="Videos"
          /> */}
          <button className="--navigation-button" onClick={handleClick}>
            Videos
          </button>
          <Navigationbutton onOpen={onOpen} url={"contact"} label="Contact" />
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
