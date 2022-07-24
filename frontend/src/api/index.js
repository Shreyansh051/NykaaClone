import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8080" });

export const fetch_AllProducts = () => API.get("/getAllProducts");
export const Add_to_cart = (id,userID) => API.post(`/AddToBag/${id}`,{ userID: userID})
export const get_all_cart = (id) => API.get(`/getAllCart/${id}`);
export const set_quantity = (id,quant) => API.patch(`/setQuantity/${id}`,{ quant});
export const delete_item = (id) => API.delete(`/cart/${id}`);
