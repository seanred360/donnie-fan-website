import HamburgerButton from "./HamburgerButton";
import Link from "next/link";
import styles from "../../styles/NavBar.module.scss";

const NavBarContents = ({ isOpen, onOpen }) => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles["left-content"]}>
          <Link href="/">DF</Link>
          <div className={styles["website-name"] + " hide-for-mobile"}>
            Donnie Fan Comedy
          </div>
        </div>
        <ul>
          <li className="hide-for-mobile">
            <Link href="/about">About</Link>
          </li>
          <li className="hide-for-mobile">
            <Link href="/shows">Shows</Link>
          </li>
          <li className="hide-for-mobile">
            <Link href="/videos">Videos</Link>
          </li>
          <li className="hide-for-mobile">
            <Link href="/photos">Photos</Link>
          </li>
          <li className="hide-for-mobile">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <HamburgerButton isOpen={isOpen} onOpen={onOpen} />
      </div>
    </>
  );
};

export default NavBarContents;
