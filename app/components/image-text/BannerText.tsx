"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const BannerText = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div className="relative">
      <div className="absolute w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="imh"
          width={500}
          height={100}
          className=" w-full h-full bg-center object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <motion.div
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className=" relative md:py-40 py-10 lg:px-40 px-6 text-white text-center space-y-4 "
      >
        <h1 className="font-bold lg:text-3xl text-2xl">
          Where AI and drones meet to revolutionize the industry.
        </h1>
        <p>
          Our team of experienced engineers and data scientists has developed a
          suite of AI-powered tools that can be integrated seamlessly with a
          wide range of drone platforms, enabling them to perform complex tasks
          with ease.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default BannerText;
