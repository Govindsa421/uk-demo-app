import Image from "next/image";
import React from "react";
// import styles from "./common.module.css";

interface ImageTextLayoutProps {
  imgUrl: string;
  title: string;
  content: string;
  contentDirection: "flex-row" | "flex-row-reverse";
}
const ImageTextLayout = ({
  imgUrl,
  title,
  content,
  contentDirection = "flex-row",
}: ImageTextLayoutProps) => {
  return (
    <div className="px-20 py-20">
      <div className={`flex items-center ${contentDirection}`}>
        <div className="flex-1">
          <Image
            src={imgUrl}
            alt={imgUrl}
            width={100}
            height={100}
            className="w-80 h-96 object-cover mx-auto"
            style={{ boxShadow: "30px -30px #000" }}
          />
        </div>
        <div className="flex-1 text-left space-y-4 ">
          <h1 className="font-bold text-xl">{title}</h1>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageTextLayout;
