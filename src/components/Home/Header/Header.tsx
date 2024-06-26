"use client";
import Link from "next/link";
import React, { useState } from "react";
import "./header.scss";
import { IoMdHome } from "react-icons/io";
import { FaChartSimple } from "react-icons/fa6";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { RiCoinsFill } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import { MdCardGiftcard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className="header">
      <div className="header-right">
        <button className="hamburgerBtn" onClick={() => setMenu(!menu)}>
          <GiHamburgerMenu className="hamburgerIcon" />
        </button>
        <ul className={menu === true ? "nav-links showMenu" : "nav-links"}>
          <li className="nav-item">
            <Link href="/" className="nav-link">
              <IoMdHome className="nav-link-icon" />
              <p>خانه</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/" className="nav-link">
              <FaChartSimple className="nav-link-icon" />
              <p>قیمت لحظه ای</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/" className="nav-link">
              <CgArrowsExchangeAlt className="nav-link-icon" />
              <p>بازار</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/" className="nav-link">
              <RiCoinsFill className="nav-link-icon" />
              <p>تبدیلگر</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/" className="nav-link">
              <FaWallet className="nav-link-icon" />
              <p>کیف پول</p>
            </Link>
          </li>
        </ul>
      </div>

      <div className="header-left">
        <div className="gifts">
          <p>امتیاز</p>
          <MdCardGiftcard className="gift-icon" />
        </div>
        <div className="header-user">
          <FaUser className="header-user-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
