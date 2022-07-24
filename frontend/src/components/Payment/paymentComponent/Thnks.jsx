import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckOutHeader } from "../../Address/CheckOutHeader";
import Style from "../payment.module.css";

export const Thnks = () => {
  const navigate = useNavigate();
  const handleNav = () => {
    navigate("/");
  };
  return (
    <div style={{textAlign: "center"}}>
      <CheckOutHeader />
      <div
        style={{
          position: "relative",
          top: "150px",
          color: "##5e5e5e",
          textAlign: "center",
          width: "30%",
          margin: "auto"
        }}
      >
        <h2 style={{ fontWeight: "550", lineHeight: "1.5" }}>
          Thanks Purchasing Product From
        </h2>
        <h3 style={{ fontWeight: "550" }}>Hope you Like our Product</h3>
        <button
          className={Style.cbutton}
          style={{ width: "100%" }}
          onClick={handleNav}
        >
          Buy more Product
        </button>
      </div>
    </div>
  );
};
