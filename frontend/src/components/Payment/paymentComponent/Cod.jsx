import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCart } from "../../../actions/products";
import Style from "../payment.module.css";

export const Cod = () => {
  const { total } = useSelector((state) => state.cart);
  console.log(total);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCart());
  }, [dispatch]);
  return (
    <div>
      <div>
        <h3>CASH ON DELIVERY</h3>
      </div>
      <hr />
      <div>
        <button
          className={Style.cbutton}
          style={{ marginTop: "15px" }}
        >{`Pay By ₹${total} Cash`}</button>
      </div>
    </div>
  );
};
