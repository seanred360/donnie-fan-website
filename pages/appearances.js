import styles from "../styles/pages/Appearances.module.scss";
import Meta from "../components/Meta";
import SectionHeader from "../components/common/SectionHeader";

const appearances = () => {
  return (
    <div className={styles.appearances}>
      <Meta
        title="Who is Donnie Fan?"
        keywords="donnie fan comedy beijing china media appearances thebeijinger beijinger"
        description="Donnie Fan is an American coappearancesn, playwrite, actor and director based in Beijing."
      />
      <SectionHeader header="Appearences" subHeader="" />
      <div className={styles["appearances-group"]}>
        <div className={styles["appearances-item"]}>
          <iframe
            width="auto"
            height="auto"
            src="https://www.youtube.com/embed/rLBXEROdjBo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-appearances; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className={styles["appearances-text"]}>
            <h2>Cow Pen Podcast</h2>
          </div>
        </div>

        <div className={styles["appearances-item"]}>
          <a href="https://www.stevensirski.com/ssp28-donnie-fan/">
            <img
              src="https://www.stevensirski.com/wp-content/uploads/2022/02/SSP28-Donnie-Fan-Wednesday-February-9-2022-02-1200-1038x576.png"
              alt=""
            />
            <div className={styles["appearances-text"]}>
              <h2>Steven Sikiski Podcast</h2>
            </div>
          </a>
        </div>

        <div className={styles["appearances-item"]}>
          <a href="https://www.thebeijinger.com/blog/2022/03/17/how-he-went-zero-hero-interview-stand-comedian-donnie-fan">
            <img
              src="images/dj-beijinger.png"
              alt="Donnie Fan's interview with the Beijinger"
            />
            <div className={styles["appearances-text"]}>
              <h2>The Beijinger</h2>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default appearances;
