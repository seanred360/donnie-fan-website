import React from "react";
import styles from "../../styles/Header.module.scss";
import FadeInSection from "./utility/FadeInSection";

const SectionHeader = ({ header, subHeader }) => {
  return (
    <div className={styles["section-header-style-wrapper"]}>
      <div className={styles["section-header-group"]}>
        <FadeInSection>
          <h1 className={styles.header}>{header}</h1>
          <h2 className={styles.label}>{subHeader}</h2>
        </FadeInSection>
      </div>
    </div>
  );
};

export default SectionHeader;
