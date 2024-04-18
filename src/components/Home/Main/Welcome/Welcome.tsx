import React from "react";
import "./welcome.scss";
import { TbLogin } from "react-icons/tb";
import { MdCardGiftcard } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";

const Welcome = () => {
  return (
    <div className="main-welcome">
      <div className="welcome-top">
        <h2>به اکسچنج کوین خوش آمدید!</h2>
        <p>برای استفاده از خدمات اپلیکیشن وارد حساب کاربری خود شوید</p>
      </div>
      <div className="main-welcome-btnContainer">
        <button className="login">
          <TbLogin className="loginIcon" />
          <span>ورود</span>
        </button>
        <button className="register">
          <MdCardGiftcard />
          <span>ثبت نام</span>
        </button>
      </div>
      <div className="welcome-links">
        <div className="welcome-giftLink">
          <MdCardGiftcard />
          <span>بدون قرعه کشی هدیه بگیرید!</span>
        </div>
        <div className="welcome-awards">
          <span>مرکز جوایز اکسچنج کوین!</span>
          <IoIosArrowBack />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
