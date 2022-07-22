import Meta from "../components/Meta";
import SocialMediaFeed from "../components/common/SocialMediaFeed";
import styles from "../styles/pages/Home.module.scss";

const home = () => {
  return (
    <>
      <Meta
        title="Donnie Fan | Standup Comedy in Beijing"
        keywords="Standup comedy in           beijing donnie fan from zero to hero"
        description="Longtime Beijing local is doing English stand up comedy in Beijing"
      />
      <div className={styles.container}>
        {/* the rest of the page is in layout */}
        <SocialMediaFeed />
      </div>
    </>
  );
};

export default home;
