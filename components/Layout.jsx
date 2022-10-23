import { Icon } from "@iconify/react";
import Link from "next/link";
import { useEffect, useRef, useState, useMemo } from "react";
import { gsap, Expo } from "gsap";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);

  return (
    <nav className="max-w-[1400px] mx-auto">
      <div className="flex justify-between items-center p-[24px]">
        <Link href="/">
          <img
            className="w-[50px] cursor-pointer"
            src="images/logo.png"
            alt="logo"
          />
        </Link>
        <button className="lg:hidden" onClick={handleToggle}>
          <Icon
            width="50"
            icon={`${toggle ? "eva:close-fill" : "dashicons:menu-alt"}`}
          />
        </button>
        <NavLinks />
      </div>
      {toggle && <NavMenu toggle={toggle} clickEvent={handleToggle} />}
    </nav>
  );
};

const NavMenu = ({ toggle, clickEvent }) => {
  const navMenuRef = useRef();

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".link", {
        duration: 0.7,
        delay: 0,
        x: "-1000",
        stagger: 0.1,
        ease: Expo.easeInOut,
      });
    }, navMenuRef);

    if (toggle) {
      document.body.classList.add("noscroll");
    }

    return function cleanup() {
      document.body.classList.remove("noscroll");
      context.revert();
    };
  }, [toggle]);

  return (
    <ul
      ref={navMenuRef}
      className="bg-[white]/90 dark:bg-[black]/90 absolute z-[999] flex flex-col text-right w-screen h-screen lg:hidden"
    >
      <li className="link">
        <Link href="/about">
          <span onClick={clickEvent}>About</span>
        </Link>
      </li>
      <li className="link">
        <Link href="/showtimes">
          <span onClick={clickEvent}>Showtimes</span>
        </Link>
      </li>
      <li className="link">
        <Link href="/news">
          <span onClick={clickEvent}>News</span>
        </Link>
      </li>
      <li className="link">
        <Link href="/medea">
          <span onClick={clickEvent}>Medea</span>
        </Link>
      </li>
      <li className="link">
        <Link href="#contact">
          <span onClick={clickEvent}>Contact</span>
        </Link>
      </li>
    </ul>
  );
};

const NavLinks = () => {
  return (
    <ul className="hidden lg:flex items-center">
      <li className="link">
        <Link href="/about">
          <span>About</span>
        </Link>
      </li>
      <li className="link">
        <Link href="/showtimes">
          <span>Showtimes</span>
        </Link>
      </li>
      <li className="link">
        <Link href="/news">
          <span>News</span>
        </Link>
      </li>
      <li className="link">
        <Link href="/medea">
          <span>Medea</span>
        </Link>
      </li>
      <li className="link">
        <Link href="#contact">
          <span>Contact</span>
        </Link>
      </li>
    </ul>
  );
};

const Footer = () => {
  return (
    <footer className="flex flex-col items-center mt-auto py-[24px] px-[32px] bg-yellow text-[black]">
      <img className="w-[100px]" src="images/logo-reverse.png" alt="logo" />
      <section id="contact" className="flex-col my-[32px] lg:flex-row">
        <ul>
          <li>
            <a
              className="flex items-center"
              href="mailto:business@donniefan.com"
            >
              <Icon icon="ic:round-email" />
              business@donniefan.com
            </a>
            <br />
            <span className="flex items-center">
              <Icon icon="ant-design:wechat-filled" />
              vivicoffee66 (for tickets)
            </span>
            <br />
            <a
              className="flex items-center"
              href="https://weibo.com/u/7708697903?tabtype=home"
            >
              <Icon icon="ant-design:weibo-circle-filled" />
              DONNIEFANCOMEDY
            </a>
            <br />
            <span className="flex items-center">
              <Icon icon="akar-icons:tiktok-fill" />
              happyherom
            </span>
          </li>
        </ul>
        <img
          className="w-[200px] m-[24px] border-[8px]"
          src="images/donnie-wechat-qr.jpg"
          alt=""
        />
      </section>
      <span className="font-[500] text-[12px]">
        Copyright © 2022 Donnie Fan |{" "}
        <a className="font-black" href="https://seanred.io">
          Created by seanred.io
        </a>
      </span>
    </footer>
  );
};

export default Layout;
