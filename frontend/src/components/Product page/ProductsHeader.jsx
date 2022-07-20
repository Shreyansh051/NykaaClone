import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import styles from "./ProductsHeader.module.css";
import {Link} from "react-router-dom";
import Pic from "./images/header.png"
const images = [
  {
    url: "https://images-static.nykaa.com/uploads/56af97a6-e339-42f1-8add-cc4c3136014c.jpg?tr=w-1200,cm-pad_resize",
  },
  {
    url: "https://images-static.nykaa.com/uploads/22088ac7-681e-48ef-b787-be18b5f3f3a3.jpg?tr=w-1200,cm-pad_resize",
  },
  {
    url: "https://images-static.nykaa.com/uploads/381bc88c-1637-49da-9004-eda6690cf3f1.jpg?tr=w-1200,cm-pad_resize"
  }
];

const ProductsHeader = () => {
  return (
    <div className={styles.container}>
        <div className={styles.links}>
            <Link style={{textDecoration:"none", color:"#888888"}} to="">Home  {'>'}</Link>
            <Link style={{textDecoration:"none", color:"#888888"}} to=""> Makeup  {'>'}</Link>
            <Link style={{textDecoration:"none", color:"#888888"}} to=""> Face</Link>        
        </div>
        <div className={styles.title}>
            <h2>Face Makeup Collection</h2>
            <p >(2978)</p>
        </div>
      <div>
        <SimpleImageSlider
          width={1200}
          height={220}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </div>
      <div>
        <img style={{width:"96%", marginLeft:"-50px", marginTop:"40px"}} className={styles.headerPic} src={Pic} alt="" />
      </div>
      <div>
        <h2>All Products</h2>
      </div>
    </div>
  );
};

export default ProductsHeader;
