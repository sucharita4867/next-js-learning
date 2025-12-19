"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import NavLink from "./NavLink";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  if (pathname.startsWith("/dashboard")) {
    return <></>;
  }

  return (
    <div className="border text-black flex py-2 justify-between">
      <Link
        href={"/"}
        className="text-2xl font-bold hover:border px-3 py-2 border-gray-400"
      >
        DevStory
      </Link>

      <nav className="space-x-5">
        <NavLink href={"/about"}>About</NavLink>
        <NavLink href={"/tutorials"}>Tutorials</NavLink>
        <NavLink href={"/stories"}>Stories</NavLink>
        <NavLink href={"/login"}>Login</NavLink>
        <NavLink href={"/register"}>Register</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
