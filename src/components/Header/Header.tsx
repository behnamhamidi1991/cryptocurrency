"use client";
import React from "react";
import "./header.scss";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "@/redux/features/themeSlice";

const Header = () => {
  const theme = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  const toggleBtn = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <header className="header">
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/about-us">About</Link>

      <button onClick={toggleBtn}>
        {theme ? "IT IS TRUE" : "IT IS FALSE"}
      </button>
    </header>
  );
};

export default Header;
