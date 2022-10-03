import styles from "../styles/pages/Media.module.scss";
import Meta from "../components/Meta";
import SectionHeader from "../components/common/SectionHeader";

const media = () => {
  return (
    <div className={styles.media}>
      <Meta
        title="Who is Donnie Fan?"
        keywords="donnie fan comedy beijing china medi thebeijinger beijinger"
        description="Donnie Fan is an American comedian, playwrite, actor and director based in Beijing."
      />
      <SectionHeader header="Appearences" subHeader="" />
      <div className={styles["media-group"]}>
        <div className={styles["media-item"]}>
          <iframe
            width="auto"
            height="auto"
            src="https://www.youtube.com/embed/rLBXEROdjBo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className={styles["media-text"]}>
            <h2>Cow Pen Podcast</h2>
          </div>
        </div>

        <div className={styles["media-item"]}>
          <a href="https://www.stevensirski.com/ssp28-donnie-fan/">
            <img
              src="https://www.stevensirski.com/wp-content/uploads/2022/02/SSP28-Donnie-Fan-Wednesday-February-9-2022-02-1200-1038x576.png"
              alt=""
            />
            <div className={styles["media-text"]}>
              <h2>Steven Sikiski Podcast</h2>
            </div>
          </a>
        </div>

        <div className={styles["media-item"]}>
          <a href="https://www.thebeijinger.com/blog/2022/03/17/how-he-went-zero-hero-interview-stand-comedian-donnie-fan">
            <img
              src="images/dj-beijinger.png"
              alt="Donnie Fan's interview with the Beijinger"
            />
            <div className={styles["media-text"]}>
              <h2>The Beijinger</h2>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default media;
