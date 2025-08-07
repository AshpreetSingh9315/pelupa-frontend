import axios from "../../lib/api";
import { loadData, loadProduct } from "../reducers/productsSlice";

export const getProducts = () => async (dispatch, getState) => {
  try {
    console.log(axios);
    const res = await axios.get("/products");
    console.log(res.data);
    await dispatch(loadData(res.data));
  } catch (error) {
    console.log("error :", error);
  }
};



export const getProductDetails = (id)=>async(dispatch, getState) => {
  try {
    const res = await axios.get(`/products/show/${id}`)
    console.log(res.data);
    await dispatch(loadProduct(res.data))
  } catch (error) {
      console.log(error)
  }
}

