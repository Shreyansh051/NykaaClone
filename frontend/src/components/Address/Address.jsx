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
              {/* <div>
                <h4>Guarav </h4>
                <p>abc nagar,mumbai ,maharastra</p>
              </div> */}
              <div>
                <form action="" className="addFrom">
                  <h4>New Address</h4>
                  <hr />
                  <div>
                    <label htmlFor=""></label>
                    <input type="text" name="" id="" value={"India"} />
                  </div>
                  <div>
                    <input type="text" name="" id="" placeholder="Name" />
                  </div>
                  <div>
                    <label htmlFor=""></label>
                    <input type="text" name="" id="" />
                  </div>
                  <div>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Postal Code"
                    />
                  </div>
                  <div>
                    <fieldset>
                      <legend>Addresss</legend>
                      <textarea name="" id="" cols="30" rows="3"></textarea>
                    </fieldset>
                  </div>
                </form>
              </div>
            </div>
            <div className="cartDet">
              <div>
                <div className="bag">
                  <p>3 Items in your Bag</p>
                  <button>EDIT ^</button>
                </div>
                <div className="priceDiv">
                  <div>
                    <p>Sub Total</p>
                    <p>₹1647</p>
                  </div>
                  <div>
                    <p>Shipping Charge</p>
                    <p style={{ color: "#4db6ac" }}>Free</p>
                  </div>
                  <div style={{ paddingBottom: "10px" }}>
                    <p>Discount</p>
                    <p>₹79.9</p>
                  </div>
                </div>
              </div>
              <hr />
              <div className="grandiv">
                <h4>Grand Total</h4>
                <p>₹848</p>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
