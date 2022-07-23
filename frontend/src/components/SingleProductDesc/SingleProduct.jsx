import React from "react";
import Style from "./singleproduct.module.css";
import RoomIcon from "@mui/icons-material/Room";

export const SingleProduct = () => {
  return (
    <div className={Style.sgCont}>
      <div className={Style.sgParent}>
        <div className={Style.sgimg}>
          <img
            src="https://images-static.nykaa.com/media/catalog/product/8/9/8904245706623_03.jpg?tr=w-344,h-344,cm-pad_resize"
            alt=""
          />
        </div>
        <div className={Style.sgProminiD}>
          <div className={Style.sgpq}>
            <h2>{"Namya"}</h2>
            <p>{"(33g)"}</p>
          </div>
          <div className={Style.sgra}>
            <p>{"Rating"}</p>
          </div>
          <div className={Style.sgmrp}>
            <span style={{ margin: "4px 0" }}>MRP: </span>
            <span
              style={{ fontWeight: "550", color: "black", fontSize: "18px" }}
            >
              ₹{"200"}
            </span>
            <p style={{ margin: "8px 0", fontWeight: "400" }}>
              inclusive of all taxes
            </p>
          </div>
          <div className={Style.freeDiv}>
            <p>Free Molten Matte Lipstick worth Rs. 525 on Rs. 800</p>
          </div>
          <div className={Style.addPin}>
            <div className={Style.sgabag}>
              <button>Add to Bag</button>
            </div>
            <div className={Style.sgdel}>
              <div className={Style.sgloc}>
                <span style={{ marginTop: "5px" }}>
                  <RoomIcon color="#fff" />
                </span>
                <span style={{ fontSize: "16px" }}>Delivery Options</span>
              </div>
              <div className={Style.sgCheck}>
                <span>
                  <input
                    type="text"
                    maxLength="6"
                    placeholder="Enter pincode"
                    required
                  />
                </span>
                <button>Check</button>
              </div>
            </div>
          </div>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
