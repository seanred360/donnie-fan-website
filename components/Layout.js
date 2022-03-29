import Meta from "./Meta";
import NavBar from "./navbar/NavBar";
import styles from "../styles/Layout.module.scss";
import { useRouter } from "next/router";
import FadeInSection from "./common/utility/FadeInSection";
import Shows from "../components/Shows";

export const config = { amp: "hybrid" };

const Layout = ({ children }) => {
  const router = useRouter();
  const path = router?.asPath;

  return (
    <>
      <Meta />
      <NavBar />
      {path === "/" && (
        <>
          <FadeInSection>
            <div className={styles["hero-banner"]}>
              <span>
                <h1>From Hero to Zero</h1>
              </span>
              <h2>Donnie Fan's debut standup comedy special!</h2>
              <img
                src="images/hero.webp"
                alt="From Hero to Zero a 1 hour standup comedy special"
              />
            </div>
          </FadeInSection>
          <FadeInSection>
            <Shows />
          </FadeInSection>
        </>
      )}
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
      <footer className={styles.footer}>
        <span>Copyright © 2022 Donnie Fan </span>
        <span>
          Created by <a href="https://seanred.io">seanred.io</a>
        </span>
      </footer>
    </>
  );
};

export default Layout;
