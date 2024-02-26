"use client";
import { useEffect, useState } from "react";
import styles from "./scroll.module.css";
import { CustomIcon } from "@/app/custom/icon/CustomIcon";

const ScrollUpButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300 ? true : false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`${styles.scrollUpBtn} ${showButton ? styles.show : ""}`}
      onClick={handleScrollUp}
    >
      <CustomIcon icon="arrow-up2" color="white" size={20} />
    </button>
  );
};

export default ScrollUpButton;
