import React from "react";
import "./icons.scss";
import Link from "next/link";
import { IoTicket } from "react-icons/io5";
import { FaDownload } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";
import { MdCardGiftcard } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { IoIosGift } from "react-icons/io";

const Icons = () => {
  return (
    <div className="main-icons-wrapper">
      <div className="main-icon-container">
        <Link href="/" className="main-icon-link">
          <AiFillDollarCircle className="main-icon-link-icon" />
          <span>کسب درآمد</span>
        </Link>
        <Link href="/" className="main-icon-link">
          <FaChartSimple className="main-icon-link-icon" />
          <span>قیمت لحظه ای</span>
        </Link>
        <Link href="/" className="main-icon-link">
          <FaDownload className="main-icon-link-icon" />
          <span>واریز</span>
        </Link>
        <Link href="/" className="main-icon-link">
          <IoTicket className="main-icon-link-icon" />
          <span>تیکت</span>
        </Link>
        <Link href="/" className="main-icon-link">
          <MdCardGiftcard className="main-icon-link-icon" />
          <span>مرکز جوایز</span>
        </Link>
        <Link href="/" className="main-icon-link">
          <GiTakeMyMoney className="main-icon-link-icon" />
          <span>سرمایه گذاری</span>
        </Link>
        <Link href="/" className="main-icon-link">
          <MdCastForEducation className="main-icon-link-icon" />
          <span>آکادمی</span>
        </Link>
        <Link href="/" className="main-icon-link">
          <IoIosGift className="main-icon-link-icon" />
          <span>کارت هدیه</span>
        </Link>
      </div>
    </div>
  );
};

export default Icons;
