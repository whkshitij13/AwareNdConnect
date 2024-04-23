import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css"
import { ClerkProvider } from "@clerk/nextjs";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { shadesOfPurple } from "@clerk/themes";
import { LeftSideBar } from "@/components/shared/LeftSideBar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aware and Connect",
  description: "Connect People and Share knowledge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
    <ClerkProvider 
    appearance={{baseTheme:shadesOfPurple}}>
    <html lang="en">
      <body className={inter.className}>
        <Header  />
        <div className="h-full bg-[#1d0a2b] flex ">
          <LeftSideBar/>
        <div className="flex-1">
          {children}
          </div>
        </div>
        <Footer/>
        </body>
    </html>
    </ClerkProvider>
  );
}
