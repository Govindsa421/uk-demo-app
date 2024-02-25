import React from "react";
import ImageTextLayout from "@/app/common";

const RightImageText = () => {
  return (
    <div>
      <ImageTextLayout
        contentDirection="md:flex-row-reverse flex-col-reverse "
        imgUrl="https://images.unsplash.com/photo-1503919483171-9ffc1debc390?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Automated Mission Planning"
        content="Choose your mission, set your parameters, and let our AI-driven system take care of the rest. Our mission planner algorithm maps the most efficient routes and sets role-based tasks for each drone in the swarm."
      />
    </div>
  );
};

export default RightImageText;
