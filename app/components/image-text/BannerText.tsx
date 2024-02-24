import Image from "next/image";
import React from "react";

const BannerText = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-[450px]">
        <Image
          src="https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="imh"
          width={100}
          height={100}
          className=" w-full h-[450px] object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <div className=" relative py-44 px-40 text-white text-center space-y-4 ">
        {/* <div className="space-y-4"> */}
        <h1 className="font-bold text-3xl">
          Where AI and drones meet to revolutionize the industry.
        </h1>
        <p>
          Our team of experienced engineers and data scientists has developed a
          suite of AI-powered tools that can be integrated seamlessly with a
          wide range of drone platforms, enabling them to perform complex tasks
          with ease.
        </p>
        {/* </div> */}
      </div>
    </div>
  );
};

export default BannerText;
