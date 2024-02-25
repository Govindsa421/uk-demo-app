import React from "react";

import ImageTextLayout from "@/app/common";

const About = () => {
  return (
    <div className="bg-[#f3f4f6]">
      <ImageTextLayout
        contentDirection="md:flex-row flex-col"
        header="About Us"
        imgUrl="https://plus.unsplash.com/premium_photo-1663054378169-8ffea2e11c42?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Our mission is to empower drone operators with advanced AI technology that enhances their capabilities, improves safety, and unlocks new possibilities."
        content="Shaping the future of drone technology with advanced AI algorithms that enable swarming capabilities. Leveraging advanced AI algorithms and communication protocols, enabling the drones to collaborate in real-time, dynamically adapting to changing environments and mission objectives."
      />
    </div>
  );
};

export default About;
