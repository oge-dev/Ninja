import Image from "next/image";
import Link from "next/link";
import React from "react";
import img from "../public/logo.png"

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
       <Image src={img} width={128} height={77} alt="logo" />
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/ninjasList">Ninja Listing</Link>
    </nav>
  );
};

export default NavBar;
