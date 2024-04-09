'use client'
import {
  OrganizationSwitcher,
  SignOutButton,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { LeftSideBar } from "./LeftSideBar";

export const Header = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const handleSideBar = () => {
    setToggleSideBar(!toggleSideBar);
  };
  return (
    <nav className="sticky bg-purple-900 p-4 flex">
      {toggleSideBar&&<LeftSideBar />}
      <div className="flex z-30 w-full ">
        <Link href="/" className="flex items-center flex-1 ">
          <Image
            src="/Images/logo.png"
            alt="logo"
            width={50}
            height={50}
            className=" w-auto h-auto "
            onClick={handleSideBar}
          />

          <Image
            src="/Images/logo.png"
            alt="logo"
            width={50}
            height={50}
            className=" w-auto h-auto "
          />
          <h1 className="  text-2xl  font-semibold  text-gray-300">
            Aware/Connect
          </h1>
        </Link>
        <div>
          <div className=" block md:hidden">
            <SignedIn>
              <SignOutButton>
                <div>
                  <Image
                    src="/Images/logo.png"
                    width={50}
                    height={50}
                    alt="logout"
                  />
                </div>
              </SignOutButton>
            </SignedIn>
          </div>
        </div>
        <div>
          <OrganizationSwitcher />
        </div>
      </div>
    </nav>
  );
};
