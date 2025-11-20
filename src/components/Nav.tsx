"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";
import { ModeToggle } from "../../components/ModeToggle";

const Nav = () => {
  return (
    <div className=" container flex items-center  justify-between px-8 ">
      <ModeToggle />

      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  );
};

export default Nav;
