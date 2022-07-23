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
          <div>
            <h2>{"Namya"}</h2>
            <p>{"33g"}</p>
          </div>
          <div>
            <p>{"Rating"}</p>
          </div>
          <div>
            <span>MRP: </span>
            <span>₹{"200"}</span>
            <p>inclusive of all taxes</p>
          </div>
          <div className={Style.freeDiv}>
            <p>Free Molten Matte Lipstick worth Rs. 525 on Rs. 800</p>
          </div>
          <div className={Style.addPin}>
            <div className={Style.sgabag}>
              <button>Add to Bag</button>
            </div>
            <div>
              <div>
                <span>
                  <RoomIcon color="#fff" />
                </span>
                <span>Delivery Options</span>
              </div>
              <div style={{display:"flex"}}>
                <span>
                  <input type="text" maxLength="6"  required/>
                </span>
                <button>Check</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
