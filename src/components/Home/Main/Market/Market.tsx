import React from "react";
import "./market.scss";
import { coinList } from "@/data";
import Image from "next/image";

const Market = () => {
  return (
    <div className="market">
      <div className="market-header">
        <div>همه</div>
        <div>برنده</div>
        <div>بازنده</div>
        <div>جدیدترین</div>
        <div>حجم معاملات</div>
      </div>

      <div className="market-list">
        {coinList.map((item) => (
          <div key={item.id} className="market-list-box">
            <div className="market-list-right">
              <div className="market-list-icon">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={30}
                  height={30}
                />
              </div>
              <div className="market-list-title">
                <h3>{item.abbr}</h3>
                <h4>{item.title}</h4>
              </div>
            </div>
            <div className="market-list-middle">
              <div className="faPrice">
                {item.faPrice.toLocaleString()} تومان
              </div>
              <div className="enPrice">{item.enPrice.toLocaleString()} $</div>
            </div>
            <div className="market-list-left" dir="ltr">
              <div
                className={
                  item.rate > 0 ? "rateList listGreen" : "rateList listRed"
                }
              >
                {item.rate} %
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Market;
