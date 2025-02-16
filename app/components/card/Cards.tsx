"use client";
import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";
import Image from "next/image";

const Cards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // const cardVariants = {
  //   initial: { y: 50, opacity: 0 },
  //   animate: { y: 0, opacity: 1 },
  // };
  const card = [
    {
      id: 0,
      img: "https://echelon.ai/wp-content/uploads/2023/09/virtual.svg",
      title: "Object detection and tracking",
      content:
        "Our smart Ai based algorithms can identify and track objects in real-time, enabling drones to perform tasks such as surveillance, search and rescue, and inspection with greater accuracy and efficiency.",
    },
    {
      id: 1,
      img: "https://echelon.ai/wp-content/uploads/2023/09/artificial-intelligence.svg",
      title: "Autonomous flight control system",
      content:
        "With autonomous flight control system, drones can fly pre-programmed routes, avoid obstacles, and make real-time adjustments based on environmental conditions.",
    },
    {
      id: 2,
      img: "https://echelon.ai/wp-content/uploads/2023/09/augmented-reality.svg",
      title: "Data analysis and visualization",
      content:
        "Ai driven data analysis and visualization tools enable drone operators to make sense of the vast amounts of data generated by their drones, and extract insights that can inform decision-making.",
    },
  ];
  return (
    <motion.div
      className="lg:py-20 py-10 lg:px-20 px-6 "
      ref={ref}
      id="what_we_do"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="space-y-6 text-center  "
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <p>WHAT WE DO</p>
          <h1 className="lg:text-3xl text-lg font-bold">
            As pioneers in the drone technology landscape, we provide
            cutting-edge solutions designed for today’s complex challenges.
          </h1>
          <p className="lg:text-md text-sm">
            Our objective is to utilize swarm technology to deliver the
            precision and efficiency that our clients require for the successful
            completion of their initiatives. We are committed to enhancing
            businesses and bettering lives through cutting-edge drone swarm
            technologies and AI solutions.
          </p>
        </motion.div>
        <motion.div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-8 lg:mt-10 mt-6   ">
          {card.map((crd) => {
            return (
              <motion.div
                key={crd.id}
                // variants={cardVariants}
                // initial="initial"
                // animate={isInView ? "animate" : "initial"}
                // transition={{ duration: 0.3, delay: crd.id * 0.4 }}
                className="grid gap-3 text-center p-5 rounded shadow-md border hover:scale-105 group  hover:bg-gray-300 cursor-pointer duration-300"
              >
                <div className="mx-auto">
                  <Image
                    src={crd.img}
                    alt={crd.img}
                    width={55}
                    height={55}
                    className="group-hover:bg-white bg-gray-300 rounded-full p-2"
                  />
                </div>
                <h1 className="lg:text-lg text-md font-bold">{crd.title}</h1>
                <p className="lg:text-md text-sm ">{crd.content}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Cards;
