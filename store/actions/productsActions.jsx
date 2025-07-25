import axios from "../../lib/api";
import { loadData } from "../reducers/productsSlice";

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
