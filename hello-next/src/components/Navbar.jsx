import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="border text-black flex py-2 justify-between">
      <Link href={"/"} className="text-2xl font-bold">
        DevStory
      </Link>

      <nav className="space-x-5">
        <Link href={"/about"}>About</Link>
        <Link href={"/tutorials"}>Tutorials</Link>
        <Link href={"/stories"}>Stories</Link>
        <Link href={"/login"}>Login</Link>
        <Link href={"/register"}>Register</Link>
      </nav>
    </div>
  );
};

export default Navbar;
git 