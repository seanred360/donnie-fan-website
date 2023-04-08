import { Icon } from "@iconify/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap, Expo } from "gsap";
import Image from "next/image";
import Script from "next/script";

const Layout = ({ children }) => {
  return (
    <>
      <GoogleAnalytics />
      <Nav />
      {children}
      <Footer />
    </>
  );
};

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-LJZNFQN96K"
      />
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-LJZNFQN96K');`}
      </Script>
    </>
  );
};

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);
  const links = [
    "about",
    "showtimes",
    "blog",
    "news",
    "medea",
    "specials",
    "contact",
  ];

  return (
    <nav className="max-w-[1110px] mx-auto">
      <div className="flex justify-between items-center p-[24px] md:px-[40px]">
        <Link href="/">
          <div className="cursor-pointer">
            <Image
              src="/images/logo.png"
              width="50px"
              height="50px"
              layout="fixed"
              alt="logo"
            />
          </div>
        </Link>
        <NavLinks links={links} />
        {/* mobile */}
        <button className="lg:hidden" onClick={handleToggle}>
          <Icon
            width="50"
            icon={`${toggle ? "eva:close-fill" : "dashicons:menu-alt"}`}
          />
        </button>
      </div>
      {toggle && (
        <MobileMenu links={links} toggle={toggle} clickEvent={handleToggle} />
      )}
    </nav>
  );
};

const MobileMenu = ({ links, toggle, clickEvent }) => {
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
      className="bg-[white]/90 dark:bg-[black]/90 absolute z-[999] flex justify-between items-end flex-col text-right w-screen h-screen lg:hidden"
    >
      {links.map((link) => (
        <li
          key={link + "mobile"}
          className="link mr-[24px] text-[48px] font-[900] cursor-pointer"
        >
          <Link href={`/${link}`}>
            <span className="capitalize" onClick={clickEvent}>
              {link}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

const NavLinks = ({ links }) => {
  return (
    <ul className="hidden lg:flex items-center">
      {links.map((link) => (
        <li
          key={link + "desktop"}
          className="link mr-[24px] text-[24px] cursor-pointer hover:border-b-[4px] border-solid border-yellow transition-all"
        >
          <Link href={`/${link}`}>
            <span className="capitalize">{link}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Footer = () => {
  return (
    <footer className="flex flex-col items-center mt-auto py-[24px] px-[32px] bg-yellow text-[black]">
      <Image
        src="/images/logo-reverse.png"
        width="100px"
        height="100px"
        layout="fixed"
        alt="logo"
      />
      <section
        id="contact"
        className="flex-col my-[32px] lg:flex-row max-w-[1110px]"
      >
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
        <div className="relative m-[24px]">
          <Image
            src="/images/donnie-wechat-qr.jpg"
            width="200px"
            height="200px"
            layout="fixed"
            alt="Wechat QR"
          />
        </div>
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
