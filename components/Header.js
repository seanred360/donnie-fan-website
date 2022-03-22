import styles from "../styles/Header.module.scss";

const Header = ({ headerText, subText }) => {
  return (
    <div className={styles["section-header-group"]}>
      <h1 className={styles["header"]}>{headerText}</h1>
      <p className={styles["label"]}>{subText}</p>
    </div>
  );
};

export default Header;
