import React from "react";
import styles from "./ProductsCard.module.css"
const ProductsCard = ({image_url,tags,name,price,discount,rating,n_ratings,n_reviews,}) => {


  return <div className={styles.container}>
    <p>{tags}</p>
    <img src={image_url} alt="" />
  </div>;
};

export default ProductsCard;
