"use client"
import Link from "next/link";
import React from "react";
import {usePathname,useRouter} from "next/navigation"; 
import { Header } from "./Header";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import {
  
  SignOutButton,
  SignedIn,
  
} from "@clerk/nextjs";

export const LeftSideBar = () => {
  const router=useRouter();
  const pathname=usePathname();

  return (
    <div className={` hidden md:block sm:block fixed top-0 left-0 pt-20  bg-purple-900 h-screen  flex-col text-xl  mx-auto `}>
      <div className="flex flex-col flex-1 gap-6 text-center font-semibold p-2  ">
        {sidebarLinks.map((link) => {
          const isActive=(pathname.includes(link.route)&& link.route.length>1 )|| pathname==link.route;

          return (
            <Link
              className={`text-gray-300  flex space-x-2 text-center items-center justify-start px-3 py-2${isActive &&` bg-[#220139] rounded-2xl`}`}
              href={link.route}
              key={link.label}
            >
              <Image
                className="invert"
                src={link.imgURL} 
                alt={link.label}
                width={24}
                height={24}
              />
              <p className=" max-lg:hidden">{link.label}</p>
            </Link>
          );
        })}
        
      </div>
      <div className="text-center font-semibold p-4 text-gray-300">
      <SignedIn>
              <SignOutButton signOutCallback={()=>{
                router.push("/sign-in")
              }}>
                <div className="flex cursor-pointer gap-3 p-2">
                  <Image
                  
                    src="/Images/menu_icons/logout.png"
                    width={24}
                    height={24}
                    alt="logout"
                    className="invert"
                  />
                  <p className=" max-lg:hidden">Logout</p>
                </div>
              </SignOutButton>
            </SignedIn>
      </div>
    </div>
  );
};
