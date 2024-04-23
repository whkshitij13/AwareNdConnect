import Post from "@/components/cards/Post";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <h1 className="h-screen bg-[#220139]">Home</h1> */}
      <div className=" items-center justify-center mx-auto p-6 space-y-20" >
       <Post />
       <Post/>
       <Post/>
      </div>
     
    </>
  );
}
