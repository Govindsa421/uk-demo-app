import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between gap-8 bg-black text-white lg:px-20 px-6  p-7">
      <div>Logo</div>
      <div className="flex gap-4">
        <p>About </p>
        <p>Contact</p>
      </div>
    </nav>
  );
};

export default Navbar;
