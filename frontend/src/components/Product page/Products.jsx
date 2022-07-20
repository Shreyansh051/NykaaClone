import React, { useEffect } from "react";
import ProductsHeader from "./ProductsHeader";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../actions/products";
import ProductsCard from "./ProductsCard";
import styles from "./Products.module.css";

const Products = () => {
  const { products } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <ProductsHeader />
      <div className={styles.cardContainer}>
        {products.map((e, i) => (
          <ProductsCard {...e} />
        ))}
      </div>
    </div>
  );
};

export default Products;
