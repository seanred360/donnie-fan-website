import Link from "next/link";
import styles from "../../styles/MobileMenu.module.scss";

const MobileMenu = ({ isOpen, onOpen }) => {
  return (
    <>
      <div
        className={
          styles["fade-overlay"] +
          " " +
          `${isOpen ? styles.open : ``}` +
          " hide-for-desktop"
        }
      ></div>
      <div className={styles.container + " " + `${isOpen ? styles.open : ``}`}>
        <div className={styles.panel}>
          <ul>
            <li className="hide-for-desktop" onClick={() => onOpen(false)}>
              <Link href="/about">About</Link>
            </li>
            <li className="hide-for-desktop" onClick={() => onOpen(false)}>
              <Link href="/shows">Events</Link>
            </li>
            <li className="hide-for-desktop" onClick={() => onOpen(false)}>
              <Link href="/videos">Videos</Link>
            </li>
            <li className="hide-for-desktop" onClick={() => onOpen(false)}>
              <Link href="/photos">Photos</Link>
            </li>
            <li className="hide-for-desktop" onClick={() => onOpen(false)}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
