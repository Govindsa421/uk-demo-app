"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
// import { slideInFromLeft, slideInFromRight } from "../utils/motion";
// import styles from "./common.module.css";

interface ImageTextLayoutProps {
  imgUrl: string;
  title: string;
  content: string;
  header?: string;
  contentDirection: string;
}
const ImageTextLayout = ({
  imgUrl,
  title,
  content,
  header,
  contentDirection = "md:flex-row flex-col",
}: ImageTextLayoutProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      className="lg:px-20 px-6 lg:py-20 py-6"
    >
      <motion.div
        className={`flex items-center mx-auto max-w-6xl ${contentDirection}`}
      >
        <motion.div
          className="flex-auto py-10 lg:py-0"
          style={{
            transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <Image
            src={imgUrl}
            alt={imgUrl}
            width={100}
            height={100}
            className="lg:w-80 w-64 lg:h-96 h-80 object-cover mx-auto"
            style={{ boxShadow: "30px -30px #000" }}
          />
        </motion.div>
        <motion.div className="flex-auto lg:w-60 w-full space-y-4 ">
          <h2 className="  uppercase">{header}</h2>
          <h1 className="font-bold lg:text-xl text-lg">{title}</h1>
          <p className="">{content}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ImageTextLayout;
