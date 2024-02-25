"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
// import { slideInFromLeft } from "@/app/utils/motion";

const Header = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      // initial="hidden"
      // animate="visible"
      className=" relative w-full "
    >
      <div className="absolute w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1689443111384-1cf214df988a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="banner"
          width={100}
          height={100}
          className=" w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div className=" relative flex justify-center items-center h-screen text-white text-center md:px-40 px-6">
        <div className="mx-auto max-w-6xl relative">
          <motion.div
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="space-y-6"
          >
            <h1 className="lg:text-4xl text-2xl font-bold">
              AI Innovations Transforming Industries
            </h1>
            <motion.p className="md:text-lg text-md">
              {`Sure, here's a suggestion for a banner title for an AI website:
            "Empowering Tomorrow: AI Innovations Transforming Industries" This
            title suggests the transformative power of AI and its potential to
            shape the future across various sectors. It conveys a sense of
            progress, innovation`}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
