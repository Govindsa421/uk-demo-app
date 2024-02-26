import { CustomIcon } from "@/app/custom/icon/CustomIcon";
import React from "react";

const WhatsappButton = () => {
  return (
    <div>
      <button className="fixed bottom-20 right-7 bg-[#2BB03E] p-3 rounded-full ">
        <a href="https://wa.me/918393499232" target="_blank">
          <CustomIcon icon="whatsapp" size={25} color="white" />
        </a>
      </button>
    </div>
  );
};

export default WhatsappButton;
