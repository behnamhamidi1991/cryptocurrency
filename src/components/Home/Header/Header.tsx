import Link from "next/link";
import React from "react";
import { IoMdHome } from "react-icons/io";
import { FaChartSimple } from "react-icons/fa6";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { RiCoinsFill } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import { MdCardGiftcard } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="header-right">
        <ul className="header-nav-links">
          <li>
            <Link href="/">لینک آزمایشی</Link>
          </li>
        </ul>
      </div>

      <div className="header-left"></div>
    </header>
  );
};

export default Header;
