import { FETCH_ALL, FILTER_PRODUCTS, SORT_PRODUCTS } from "../constants/actionTypes";

export default (products = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        products: action.payload,
      };
    case SORT_PRODUCTS:
      return {
        ...products,
        products: products.products.sort((a, b) => {
          if (action.payload == "Price: Low To High") {
            return a.price - b.price;
          } else if (action.payload == "Price: High To Low") {
            return b.price - a.price;
          } else if (action.payload == "Discount") {
            return b.discount - a.discount;
          } else if (action.payload == "Rating") {
            return b.rating - a.rating;
          }
        }),
      };

      case FILTER_PRODUCTS: 
      return {
        ...products,
        products: products.products.filter((e) => e.tags == action.payload )
      }

    default:
      return products;
  }
};
