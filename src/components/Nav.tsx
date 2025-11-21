"use client";

import React from "react";
import { ModeToggle } from "../../components/ModeToggle";

const Nav = () => {
  return (
    <div className=" container flex items-center  justify-between px-8 ">
      <ModeToggle />
    </div>
  );
};

export default Nav;
