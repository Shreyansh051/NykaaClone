import axios from "axios";
import * as api from "../api/index.js";
import {
  FETCH_ALL,
  ADD_TO_CART,
  GET_ALL_CART,
  SET_QUANTITY,
  DELETE_ITEM,
  CAL_TOTAL,
  SORT_PRODUCTS,
  FILTER_PRODUCTS,
} from "../constants/actionTypes.js";

export const getAllProducts = () => async (dispatch) => {
  try {
    const { data } = await api.fetch_AllProducts();
    dispatch({
      type: FETCH_ALL,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const AddToCart = (id,userID) => async (dispatch) => {
  try {
    const { data } = await api.Add_to_cart(id,userID);
    dispatch({
      type: ADD_TO_CART,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllCart = (userID) => async (dispatch) => {
  try {
    const { data } = await api.get_all_cart(userID);
    dispatch({
      type: GET_ALL_CART,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const changeQuantity = (id,quant) => async (dispatch) => {
    try {
        const {data} = await api.set_quantity(id,quant);
        dispatch({
            type: SET_QUANTITY,
            payload: data,
        })
    } catch (error) {
        console.log(error);
    }
}

export const deleteItem = (id) => async (dispatch) => {
    try {
        const {data} = await api.delete_item(id);
        dispatch({
            type: DELETE_ITEM,
            payload: data,
        })
    } catch (error) {
        console.log(error);
    }
}

export const SortProducts = (data) => async (dispatch) => {
    try {
        console.log(data);
        dispatch({
            type: SORT_PRODUCTS,
            payload: data,
        })
    } catch (error) {
        console.log(error);
    }
} 
 export const FilterProducts = (data) => async (dispatch) => {
    try {
        console.log(data);
        dispatch({
            type: FILTER_PRODUCTS,
            payload: data,
        })
    } catch (error) {
        console.log(error);
    }
 }