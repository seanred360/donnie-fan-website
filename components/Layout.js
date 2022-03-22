import Meta from "./Meta";
import NavBar from "./navbar/NavBar";
import styles from "../styles/Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <NavBar />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
      <footer className={styles.footer} />
    </>
  );
};

export default Layout;
