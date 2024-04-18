import React from "react";
import "./welcome.scss";
import { TbLogin } from "react-icons/tb";
import { MdCardGiftcard } from "react-icons/md";

const Welcome = () => {
  return (
    <div className="main-welcome">
      <div className="welcome-top">
        <h2>به اکسچنج کوین خوش آمدید</h2>
        <p>برای استفاده از خدمات اپلیکیشن وارد حساب کاربری خود شوید</p>
      </div>
      <div className="main-welcome-btnContainer">
        <button className="login">
          <TbLogin />
          <span>ورود</span>
        </button>
        <button className="register"></button>
      </div>
    </div>
  );
};

export default Welcome;
