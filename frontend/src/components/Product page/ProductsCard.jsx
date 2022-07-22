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
    <div  onMouseOver={() => setShow(true)}  onMouseOut={() => setShow(false)} className={styles.container}>
      <div style={{height:"53vh"}}>
      <div>
        {tags == "FEATURED" ? (
          <p
            style={{
              marginLeft: "-10vw",
              color: "rgb(253,120,171)",
              fontSize: "13px",
              fontWeight: "bold",
            }}
          >
            {tags}
          </p>
        ) : (
          <p
            style={{
              marginLeft: "-10vw",
              color: "rgb(145,229,211)",
              fontSize: "13px",
              fontWeight: "bold",
            }}
          >
            {tags}
          </p>
        )}
        <img src={image_url} alt="" />
        <div style={{padding:"10px"}}>
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
      {show && (
        <div onClick={() => dispatch(AddToCart(_id))} className={styles.add_to_bag}>
        <div><img src={pic} alt="" /></div>
        <div><h3>Add To Bag</h3></div>
      </div>
      )
        
      }
      
    </div>
  );
};

export default ProductsCard;
