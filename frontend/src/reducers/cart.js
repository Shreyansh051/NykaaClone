import { ADD_TO_CART, DELETE_ITEM, GET_ALL_CART, SET_QUANTITY } from "../constants/actionTypes";
import total from "./total";

export default (state = {cart: [], total: null}, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: action.payload,
        total: action.payload.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.price * currentValue.quantity;
          }, 0),
      }

    case GET_ALL_CART:
      return {
        ...state,
        cart: action.payload,
        total: action.payload.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.price * currentValue.quantity;
          }, 0),
      }

    case SET_QUANTITY:
        return {
            ...state,
            cart: action.payload,
            total: action.payload.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.price * currentValue.quantity;
              }, 0),
          } 

    case DELETE_ITEM:
        return {
            ...state,
            cart: action.payload,
            total: action.payload.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.price * currentValue.quantity;
              }, 0),
          }   
    default:
      return state;
  }
};
