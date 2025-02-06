"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import routePages from "./routes";

const Topbar = () => {
  const pathname = usePathname();
  
  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center px-10 py-4 bg-white shadow-md z-50">
      <Link href={"/"}><h1 className="text-purple-600 text-2xl font-extrabold">ILOVATION</h1></Link>
      <div className="flex gap-6">
        {routePages.map((route) => (
          <Link key={route.href} href={route.href}>
            <Button variant={pathname === route.href ? "outline" : "ghost"} className={`${route.color} ${route.background_color} font-medium`}>
              {route.label}
            </Button>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Topbar;
