import axios from "axios";
import ApiPath from "./apiPath";
import { getHeaderConfig } from "../helpers";
export const GetProductTypeApi = async () => {
    try {
      const response = await axios.get(ApiPath.getAllProductTypes, getHeaderConfig());
      // console.log("res of GetProductTypeApi =>> ");
      // console.log(response?.data?.data);
      return response?.data?.data;
    } catch (error) {
        // console.log("error occured in GetProductTypeApi ==> ", error);
      return false;
    }
};

export const AddProductTypeApi = async (data) => {
    const mappingData = {
        name: data?.title || "",
    };
    try {
      const response = await axios.post(ApiPath.addProductType, mappingData, getHeaderConfig());
      // console.log("res of AddProductTypeApi =>> ");
      // console.log(response);
      return response;
    } catch (error) {
        // console.log("error occured in AddProductTypeApi ==> ", error);
      return false;
    }
};

export const DeleteProductTypeApi = async (id) => {
  try {
    const response = await axios.delete(`${ApiPath.deleteProductType}${id}`, getHeaderConfig());
    // console.log("res of DeleteProductTypeApi =>> ");
    // console.log(response);
    return response;
  } catch (error) {
      // console.log("error occured in DeleteProductTypeApi ==> ", error);
    return false;
  }
};