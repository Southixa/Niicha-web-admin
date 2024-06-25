import axios from "axios";
import ApiPath from "./apiPath";
import { getHeaderConfig } from "../helpers";
export const GetOrderApi = async () => {
    try {
      const response = await axios.get(ApiPath.getAllOrders, getHeaderConfig());
      // console.log("res of GetOrderApi =>> ");
      // console.log(response?.data?.data);
      return response?.data?.data;
    } catch (error) {
        // console.log("error occured in GetOrderApi ==> ", error);
      return false;
    }
};

export const GetOneOrderApi = async (id) => {
    try {
      const response = await axios.get(`${ApiPath.getOneOrder}${id}`, getHeaderConfig());
      // console.log("res of GetOneOrderApi =>> ");
      // console.log(response?.data?.data);
      return response?.data?.data;
    } catch (error) {
        // console.log("error occured in GetOneOrderApi ==> ", error);
      return false;
    }
};

export const AddEmployeeApi = async (data) => {
    const mappingData = {
        firstname: data?.firstname || "",
        lastname: data?.lastname || "",
        gender: data?.gender || "",
        birthday: data?.birthday || "",
        address: data?.address || "",
        phoneNumber: parseInt(data?.phoneNumber) || 0,
    };
    try {
      const response = await axios.post(ApiPath.addEmployee, mappingData, getHeaderConfig());
      // console.log("res of AddEmployeeApi =>> ");
      // console.log(response);
      return response;
    } catch (error) {
        // console.log("error occured in AddEmployeeApi ==> ", error);
      return false;
    }
};

export const AddOrderForSellApi = async (data) => {
    const mappingData = {
        totalPrice: data?.totalPrice || "",
    };
    try {
      const response = await axios.post(ApiPath.addOrderForSell, mappingData, getHeaderConfig());
      // console.log("res of AddOrderForSellApi =>> ");
      // console.log(response);
      return response?.data?.data;
    } catch (error) {
        // console.log("error occured in AddOrderForSellApi ==> ", error);
      return false;
    }
};


export const UpdateOrderStatusApi = async (id, data) => {
    const mappingData = {
        status: data?.status || "",
    };
    try {
      const response = await axios.put(`${ApiPath.updateOrder}${id}`, mappingData, getHeaderConfig());
      // console.log("res of UpdateOrderStatusApi =>> ");
      // console.log(response);
      return response;
    } catch (error) {
        // console.log("error occured in UpdateOrderStatusApi ==> ", error);
      return false;
    }
};

export const DeleteEmployeeApi = async (id) => {
  try {
    const response = await axios.delete(`${ApiPath.deleteEmployee}${id}`, getHeaderConfig());
    // console.log("res of DeleteEmployeeApi =>> ");
    // console.log(response);
    return response;
  } catch (error) {
      // console.log("error occured in DeleteEmployeeApi ==> ", error);
    return false;
  }
};