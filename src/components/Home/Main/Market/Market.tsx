import React from "react";
import "./market.scss";

const Market = () => {
  return (
    <div className="market">
      <div className="market-header">
        <div>داغ</div>
        <div>برنده</div>
        <div>بازنده</div>
        <div>جدیدترین</div>
        <div>حجم معاملات</div>
      </div>

      <div className="market-list">
        <div className="market-list-coin"></div>
        <div className="market-list-price"></div>
        <div className="market-list-rate"></div>
      </div>
    </div>
  );
};

export default Market;
