import axios from "../../lib/api";
import {loadData} from "../reducers/categorySlice";

export const getCategory = () => async (dispatch, getState) => {
  try {
    console.log(axios);
    const res = await axios.get("/categories");
    console.log(res.data);
    await dispatch(loadData(res.data));
  } catch (error) {
    console.log("error :", error);
  }
};
