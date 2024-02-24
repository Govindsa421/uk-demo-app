import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className=" relative">
      <div className="absolute w-full h-[750px]">
        <Image
          src="https://images.unsplash.com/photo-1689443111384-1cf214df988a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="banner"
          width={100}
          height={100}
          className=" w-full h-[750px] object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div className=" relative flex justify-center items-center h-[90vh] text-white text-center ">
        <div className="space-y-6 px-44">
          <h1 className="text-4xl font-bold">
            AI Innovations Transforming Industries
          </h1>
          <p>
            {`Sure, here's a suggestion for a banner title for an AI website:
            "Empowering Tomorrow: AI Innovations Transforming Industries" This
            title suggests the transformative power of AI and its potential to
            shape the future across various sectors. It conveys a sense of
            progress, innovation`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
