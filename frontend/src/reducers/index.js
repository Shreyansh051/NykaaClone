import {combineReducers} from "redux";
import products from "./products";
import cart from "./cart";
import total from "./total";

export default combineReducers({
    products,cart,total
})