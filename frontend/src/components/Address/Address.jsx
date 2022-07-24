import React, { useEffect, useState } from "react";
import { CheckOutHeader } from "./CheckOutHeader";
import "./address.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCart } from "../../actions/products";
import axios from "axios"
export const Address = () => {
  const [cartEdit, setCartEdit] = useState(false);
  const [detail, setDetail] = useState(false);
  const [address, setAddress] = useState({});
  const [total, setTotal] = useState(0)
  const navigate = useNavigate();
  
  const handleEdit = () => {
    setCartEdit(true);
  };
  const handleDetail = () => {
    setDetail(true);
  };
  const handleChange = (e) => {
    const data = e.target.name;
    console.log(data);
    setAddress({
      ...address,
      [data]: e.target.value,
    });
  };
  useEffect(() => {
    const count = JSON.parse(localStorage.getItem("total")).total;
    setTotal(count)
    const Oauth = JSON.parse(localStorage.getItem("oAuth")) || null;
    if (!Oauth) {
      const token = JSON.parse(localStorage.getItem("user")) || "null";
      if (token == "null") {
        navigate("/login");
      } else {
        const data = { token: token };
        axios
          .post("http://localhost:8080/auth/verify", data)
          .then((response) => {
            if (
              response.data.Message == "failed" ||
              response.data == undefined
            ) {
              alert("Session expired, login Again");
              navigate("/login");
            }
          });
      }
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let add = address || "";
    localStorage.setItem("address", JSON.stringify(add));
    navigate("/payment");
  };
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
                  <h4 style={{ marginBottom: "10px" }}>New Address</h4>
                  <hr />
                  <div>
                    <label htmlFor=""></label>
                    <input type="text" name="india" id="" value={"India"} />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="name"
                      id=""
                      placeholder="Name"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor=""></label>
                    <input
                      type="text"
                      name="phonenumber"
                      id=""
                      placeholder="Phone Number"
                      onChange={handleChange}
                      maxLength={10}
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="postalcode"
                      id=""
                      placeholder="Postal Code"
                      maxLength={6}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <fieldset>
                      <legend>Addresss</legend>
                      <textarea
                        name="address"
                        id=""
                        cols="30"
                        rows="3"
                        onChange={handleChange}
                        required
                      ></textarea>
                    </fieldset>
                  </div>
                  <div>
                    <input
                      style={{
                        height: "50px",
                        color: "#fff",
                        backgroundColor: "#fc2779",
                        fontWeight: "500",
                        textAlign: "center",
                      }}
                      type="submit"
                      name=""
                      id=""
                      value={"SHIP TO THIS ADDRESS >"}
                      onClick={handleSubmit}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="cartDet">
              <div>
                <div className="bag">
                  {detail ? (
                    <div>
                      <div>
                        <img src="" alt="" />
                      </div>
                      <div>
                        <div>
                          <p>Swiss Beauty Pro Primer With Vit-C & E</p>
                          <p>25ml</p>
                        </div>
                        <div>
                          <p>Qty : 1</p>
                          <p>
                            <span>399s</span>
                            <span>299d</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <p>3 Items in your Bag</p>
                    </div>
                  )}
                  <button
                    style={{ margin: "-10px 0 0 0", width: "70px" }}
                    onClick={handleEdit}
                  >
                    EDIT ^
                  </button>
                </div>
                <div className="priceDiv">
                  <div>
                    <p>Sub Total</p>
                    <p>₹{total}</p>
                  </div>
                  <div>
                    <p>Shipping Charge</p>
                    <p style={{ color: "#4db6ac" }}>Free</p>
                  </div>
                  <div style={{ paddingBottom: "10px" }}>
                    <p>Discount</p>
                    <p>₹0</p>
                  </div>
                </div>
              </div>
              <hr />
              <div className="grandiv">
                <h4>Grand Total</h4>
                <p>₹{total}</p>
              </div>
              <hr style={{ marginBottom: "20px" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
