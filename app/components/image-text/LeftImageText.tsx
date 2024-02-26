import React from "react";
import ImageTextLayout from "@/app/common";

const LeftImageText = () => {
  return (
    <div>
      <ImageTextLayout
        contentDirection="md:flex-row flex-col"
        imgUrl="https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Synchronized Flight Technology"
        content="Our proprietary AI algorithms create a cohesive and adaptive drone swarm. This allows drones to operate in sync, avoiding collisions while adjusting to dynamic variables such as wind and weather changes in real-time."
      />
    </div>
  );
};

export default LeftImageText;
