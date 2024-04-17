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
    <nav className="sticky bg-purple-900 p-3 flex items-center">
      {toggleSideBar && <LeftSideBar />}
      <div className="flex z-30 w-full items-center gap-2">
        <Link href="/" className="flex items-center flex-1">
          <Image
            src="/Images/menu.png"
            alt="logo"
            width={24}
            height={24}
            className="invert hidden md:block sm:block"
            onClick={handleSideBar}
          />
          <Image
            src="/Images/logo.png"
            alt="logo"
            width={50}
            height={50}
            className=" "
          />
          <h1 className="text-xl font-semibold text-gray-300">Aware/Connect</h1>
        </Link>
        <div className="ml-auto">
          <div className="block md:hidden">
            <SignedIn>
              <SignOutButton>
                <div className="flex cursor-pointer">
                  <Image
                    src="/Images/menu_icons/logout.png"
                    width={24}
                    height={24}
                    alt="logout"
                    className="invert"
                  />
                </div>
              </SignOutButton>
            </SignedIn>
          </div>
        </div>
        <div className="">
          <OrganizationSwitcher
            appearance={{
              elements: {
                organizationSwitcherTrigger: " py-1 px-2 text-sm max-lg:w-20" 
              }
            }}
          />
        </div>
      </div>
    </nav>
  );
};
