import React, { useEffect } from "react";
import ProductsHeader from "./ProductsHeader";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../actions/products";
import ProductsCard from "./ProductsCard";
import styles from "./Products.module.css";
import Accordian from "./Accordian";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const Products = () => {
  const navigate= useNavigate()
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  console.log(products);
  useEffect(() => {
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
  return (
    <div style={{textAlign: 'center'}}>
      <div className={styles.container}>
        <div>
          <ProductsHeader />
        </div>
        <div className={styles.out_container}>
          <Accordian />
          <div className={styles.cardContainer}>
            {products?.map((e, i) => (
                <ProductsCard key={e._id} {...e} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
