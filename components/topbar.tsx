"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const Topbar = () => {
  const pathname = usePathname();
  
  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center px-10 py-4 bg-white shadow-md z-50">
      <Link href={"/"}><h1 className="text-purple-600 text-2xl font-extrabold">ILOVATION</h1></Link>
      <div className="flex gap-6">
        <Link href={"/"}><Button variant="ghost" className="text-black font-medium">Home</Button></Link>
        <Link href={"/"}><Button variant="ghost" className="text-black font-medium">About</Button></Link>
        <Link href={"/"}><Button variant="ghost" className="text-black font-medium">Contact</Button></Link>
        <Link href={"/sign-in"}><Button variant="outline" className="text-white border-white bg-purple-600 px-6 py-2 rounded-lg">Sign In</Button></Link>
        <Link href={"/sign-up"}><Button variant="outline" className="text-white border-white bg-purple-600 px-6 py-2 rounded-lg">Sign Up</Button></Link>
      </div>
    </nav>
  );
};

export default Topbar;
