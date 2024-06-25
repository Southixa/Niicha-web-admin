import axios from "axios";
import ApiPath from "./apiPath";
import { getHeaderConfig } from "../helpers";
export const GetEmployeeApi = async () => {
    try {
      const response = await axios.get(ApiPath.getAllEmployee, getHeaderConfig());
      // console.log("res of GetEmployeeApi =>> ");
      // console.log(response?.data?.data);
      return response?.data?.data;
    } catch (error) {
        // console.log("error occured in GetEmployeeApi ==> ", error);
      return false;
    }
};

export const GetOneEmployeeApi = async (id) => {
    try {
      const response = await axios.get(`${ApiPath.getOneEmployee}${id}`, getHeaderConfig());
      // console.log("res of GetOneEmployeeApi =>> ");
      // console.log(response?.data?.data);
      return response?.data?.data;
    } catch (error) {
        // console.log("error occured in GetOneEmployeeApi ==> ", error);
      return false;
    }
};

export const GetOrderDetailByOrderIdApi = async (id) => {
  try {
    const response = await axios.get(`${ApiPath.getAllOrderDetailsByOrderId}${id}`, getHeaderConfig());
    // console.log("res of GetOrderDetailByOrderIdApi =>> ");
    // console.log(response?.data?.data);
    return response?.data?.data;
  } catch (error) {
      // console.log("error occured in GetOrderDetailByOrderIdApi ==> ", error);
    return false;
  }
};

export const AddOrderDetailApi = async (data) => {
    const mappingData = {
        orders_id: data?.orders_id || "",
        product_id: data?.product_id || "",
        qty: data?.qty || "",
        total: data?.total || "",
    };
    try {
      const response = await axios.post(ApiPath.addOrderDetail, mappingData, getHeaderConfig());
      // console.log("res of AddOrderDetailApi =>> ");
      // console.log(response);
      return response;
    } catch (error) {
        // console.log("error occured in AddOrderDetailApi ==> ", error);
      return false;
    }
};

export const UpdateEmployeeApi = async (id, data) => {
    const mappingData = {
        firstname: data?.firstname || "",
        lastname: data?.lastname || "",
        gender: data?.gender || "",
        birthday: data?.birthday || "",
        address: data?.address || "",
        phoneNumber: parseInt(data?.phoneNumber) || 0,
    };
    try {
      const response = await axios.put(`${ApiPath.updateEmployee}${id}`, mappingData, getHeaderConfig());
      // console.log("res of UpdateEmployeeApi =>> ");
      // console.log(response);
      return response;
    } catch (error) {
        // console.log("error occured in UpdateEmployeeApi ==> ", error);
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