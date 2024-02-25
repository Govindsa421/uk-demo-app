"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
// import { CustomIcon } from "@/app/custom/icon/CustomIcon";
import styles from "./button.module.css";

const routes = [
  { id: 0, path: "/", title: "About" },
  { id: 1, path: "/", title: "Contact" },
];
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isActive, setIsActive] = useState("Home");
  const [backgroundColor, setBackgroundColor] = useState("transparent");

  const handleNav = () => setNav(!nav);
  const navbarHandle = (item: any) => setIsActive(item);

  const changeColor = () => {
    const newBackgroundColor = window.scrollY >= 90 ? "#000" : "transparent";
    setBackgroundColor(newBackgroundColor);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);

    return () => window.removeEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{
        backgroundColor,
        zIndex: 1000,
      }}
      className="fixed w-full duration-500 text-white px-6 md:px-20 py-6 z-10"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex justify-between items-center font-bold">
          <Link href="/" as="/">
            LOGO
          </Link>
          <div className="hidden list-none sm:flex ">
            {routes.map((el) => (
              <Link href={el.path} key={el.path}>
                <p
                  onClick={() => navbarHandle(el.title)}
                  className={`ml-6  duration-300 rounded ${
                    isActive === el.title ? "text-textColor-secondary" : ""
                  }`}
                >
                  {el.title}
                </p>
              </Link>
            ))}
          </div>

          {/* Mobile Button */}
          <div
            onClick={handleNav}
            className={`sm:hidden  block z-10 ${styles.buttons}`}
          >
            <div
              className={`${styles.burger} ${nav ? styles.burgerActive : ""}`}
            ></div>
            {/* <CustomIcon icon={nav ? "cross" : "menu"} color="white" size={25} /> */}
          </div>
          {/* Mobile Menu */}
          <div
            className={
              nav
                ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
                : "sm:hidden absolute top-0 left-[100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
            }
          >
            <ul>
              {routes.map((el) => (
                <li
                  key={el.path}
                  className="p-4 text-3xl hover:text-gray-500"
                  onClick={handleNav}
                >
                  <Link href={el.path} as={el.path}>
                    {el.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
