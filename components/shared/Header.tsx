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

export const Header = () => {
 
  return (
    <nav className="sticky bg-[#1d0a2b] p-3   border-b-2 border-b-gray-700 flex z-30 w-full items-center gap-2  ">
     
    
    
        <Link href="/" className="flex items-center ">
          
          <Image
            src="/Images/logo.png"
            alt="logo"
            width={50}
            height={50}
            className=" "
          />
          <h1 className="text-xl font-semibold text-gray-300">Aware/Connect</h1>
          
        </Link>
        <input type="text" placeholder="Search" className="w-full mx-20 bg-gray-700 py-2 rounded-3xl px-5 "/>
       
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
     
    </nav>
  );
};
