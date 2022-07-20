import React from "react";
import { CheckOutHeader } from "./CheckOutHeader";
import "./address.css";

export const Address = () => {
  return (
    <>
      <CheckOutHeader />
      <div
        style={{
          backgroundColor: "#f3f3f3",
          padding: "15px 10px",
        }}
      >
        <div className="hConadd">
          <div className="hparadd">
            <div className="naddbut">
              <div>
                <p>New Address</p>
              </div>
            </div>
            <div className="addDet">
              <div>
                <h4>Guarav </h4>
                <p>abc nagar,mumbai ,maharastra</p>
              </div>
            </div>
            <div className="cartDet"></div>
          </div>
        </div>
      </div>
    </>
  );
};
