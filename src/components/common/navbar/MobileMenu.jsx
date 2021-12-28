import Navigationbutton from "./NavigationButton";

const MobileMenu = ({ isOpen, onOpen }) => {
  return (
    <>
      <div className={`fade-overlay ${isOpen ? `--open` : ``}`}></div>
      <div
        className={`mobile-menu-container hide-for-desktop ${
          isOpen ? `--open` : ``
        }`}
      >
        <div className="__mobile-menu">
          <Navigationbutton onOpen={onOpen} url={"home"} label="Home" />
          {/* <Navigationbutton onOpen={onOpen} url={"about"} label="About" /> */}
          <Navigationbutton onOpen={onOpen} url={"events"} label="Events" />
          <Navigationbutton
            onOpen={onOpen}
            url={"https://weibo.com/u/7708697903?tabtype=newVideo"}
            label="Videos"
          />
          <Navigationbutton onOpen={onOpen} url={"contact"} label="Contact" />
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
