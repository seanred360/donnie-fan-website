import Meta from "./Meta";
import NavBar from "./navbar/NavBar";
import styles from "../styles/Layout.module.scss";
import { useRouter } from "next/router";
import FadeInSection from "./common/utility/FadeInSection";

const Layout = ({ children }) => {
  const router = useRouter();
  const path = router?.asPath;
  return (
    <>
      <Meta />
      <NavBar />
      {path === "/" && (
        <FadeInSection>
          <div className={styles["hero-banner"]}>
            <span>
              <h1>From Hero to Zero</h1>
            </span>
          </div>
        </FadeInSection>
      )}
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
      <footer className={styles.footer} />
    </>
  );
};

export default Layout;
