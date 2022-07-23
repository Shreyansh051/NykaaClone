import React from "react";
import styles from "./ProductsCard.module.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { fontSize } from "@mui/system";
import { useState } from "react";
import pic from "./images/heart.png"
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../../actions/products";
import { MuiDrawer } from "./MuiDrawer";

const ProductsCard = ({
  _id,
  image_url,
  tags,
  name,
  price,
  discount,
  rating,
  n_ratings,
  s_price,
  n_reviews,
}) => {
  const dispatch = useDispatch();
  

  const [show, setShow] = useState(false);
  return (
    <div
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(false)}
      className={styles.container}
    >
      <div>
        <div>
          {tags == "FEATURED" && (
            <div
              style={{
                marginLeft: "-10vw",
                color: "rgb(253,120,171)",
                fontSize: "13px",
                fontWeight: "bold",
                padding: "10px 0px",
              }}
            >
              {tags}
            </div>
          )}
          {tags == "BESTSELLER" && (
            <div
              style={{
                marginLeft: "-10vw",
                color: "rgb(145,229,211)",
                fontSize: "13px",
                fontWeight: "bold",
                padding: "10px 0px",
              }}
            >
              {tags}
            </div>
          )}
          {tags != "FEATURED" && tags != "BESTSELLER" && (<div
              style={{
                marginLeft: "-10vw",
                color: "white",
                fontSize: "13px",
                fontWeight: "bold",
                padding: "10px 0px",
              }}
            >
              hhh
            </div>)}
          <img style={{ marginTop: "0px" }} src={image_url} alt="" />
          <div
            style={{
              width: "80%",
              height: "80px",
              margin: "auto",
              fontSize: "14px",
              color: "#444444",
            }}
          >
            <p>{name}</p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "-20px",
            }}
          >
            <p style={{ marginRight: "5px", color: "grey" }}>MRP:</p>
            <p>
              ₹<s style={{ color: "grey" }}>{s_price}</s>
              {price}
            </p>
            {discount > 0 && (
              <p style={{ marginLeft: "10px", color: "green" }}>
                {discount}% Off
              </p>
            )}
          </div>
          <Stack spacing={1}>
            <Rating
              size="small"
              style={{ color: "black", fontSize: "15px", marginLeft: "2vw" }}
              name="half-rating-read"
              defaultValue={rating}
              precision={0.1}
              readOnly
            />
            <p
              style={{
                marginTop: "-16px",
                fontSize: "12px",
                marginLeft: "2vw",
                color: "grey",
              }}
            >
              ( {n_ratings} )
            </p>
          </Stack>
        </div>
      </div>
      <br />
      {show && (
        <div
          onClick={() => dispatch(AddToCart(_id))}
          className={styles.add_to_bag}
        >
          <div>
            <img style={{ height: "100%" }} src={pic} alt="" />
          </div>
          <div>
            <h3>Add To Bag</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsCard;
