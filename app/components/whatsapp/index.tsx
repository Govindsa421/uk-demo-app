"use client";
import { CustomIcon } from "@/app/custom/icon/CustomIcon";
import React, { useEffect, useState } from "react";

const WhatsappButton = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 368);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleClick = () => {
    const url = isMobile ? "https://wa.me" : "https://web.whatsapp.com";
    window.open(url);
    // if (isMobile) {
    //   window.open("https://wa.me", "_blank");
    // } else {
    //   window.open("https://web.whatsapp.com", "_blank");
    // }
  };
  return (
    <div>
      <button
        className="fixed bottom-20 right-7 bg-[#2BB03E] p-3 rounded-full "
        onClick={handleClick}
      >
        <CustomIcon icon="whatsapp" size={25} color="white" />
      </button>
    </div>
  );
};

export default WhatsappButton;
