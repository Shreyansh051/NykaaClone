import * as api from "../api/index.js";
import { FETCH_ALL } from "../constants/actionTypes.js";

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

export const AddToCart = () => async (dispatch) => {
    try {
        
    } catch (error) {
        
    }
}
