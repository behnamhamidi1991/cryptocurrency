import React from "react";
import "./header.scss";
import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/about-us">About</Link>
    </header>
  );
};

export default Header;
