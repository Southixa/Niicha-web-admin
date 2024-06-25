import axios from "axios";
import ApiPath from "./apiPath";
import { getHeaderConfig } from "../helpers";
export const GetProductApi = async () => {
    try {
      const response = await axios.get(ApiPath.getAllProducts, getHeaderConfig());
      // console.log("res of GetProductApi =>> ");
      // console.log(response?.data?.data);
      return response?.data?.data;
    } catch (error) {
        // console.log("error occured in GetProductApi ==> ", error);
      return false;
    }
};

export const GetOneProductApi = async (id) => {
  try {
    const response = await axios.get(`${ApiPath.getOneProduct}${id}`, getHeaderConfig());
    // console.log("res of GetOneProductApi =>> ");
    // console.log(response?.data?.data);
    return response?.data?.data;
  } catch (error) {
      // console.log("error occured in GetOneProductApi ==> ", error);
    return false;
  }
};

export const AddProductApi = async (data) => {
    const token = localStorage.getItem("token");
    const headerConfig = {
        headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${token}`
        }
    }

    const formData = new FormData();
    formData.append("product_type", data?.typeId || "");
    formData.append("name", data?.name || "");
    formData.append("detail", data?.detail || "");
    formData.append("price", parseInt(data?.price) || 0);
    formData.append("file", data?.image || "");

    try {
      const response = await axios.post(ApiPath.addProduct, formData, headerConfig);
      // console.log("res of AddProductApi =>> ");
      // console.log(response);
      return response;
    } catch (error) {
        // console.log("error occured in AddProductApi ==> ", error);
      return false;
    }
};

export const UpdateProductApi = async (id, data) => {
    const token = localStorage.getItem("token");
    const headerConfig = {
        headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${token}`
        }
    }

    const formData = new FormData();
    formData.append("product_type", data?.typeId || "");
    formData.append("name", data?.name || "");
    formData.append("detail", data?.detail || "");
    formData.append("price", parseInt(data?.price) || 0);
    formData.append("file", data?.image || "");

    try {
      const response = await axios.put(`${ApiPath.updateProduct}${id}`, formData, headerConfig);
      // console.log("res of UpdateProductApi =>> ");
      // console.log(response);
      return response;
    } catch (error) {
        // console.log("error occured in UpdateProductApi ==> ", error);
      return false;
    }
};

export const DeleteProductApi = async (id) => {
  try {
    const response = await axios.delete(`${ApiPath.deleteProduct}${id}`, getHeaderConfig());
    // console.log("res of DeleteProductApi =>> ");
    // console.log(response);
    return response;
  } catch (error) {
      // console.log("error occured in DeleteProductApi ==> ", error);
    return false;
  }
};