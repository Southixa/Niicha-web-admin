import axios from "axios";
import ApiPath from "./apiPath";
import { getHeaderConfig } from "../helpers";
export const GetTableApi = async () => {
    try {
      const response = await axios.get(ApiPath.getAllTables, getHeaderConfig());
      // console.log("res of GetTableApi =>> ");
      // console.log(response?.data?.data);
      return response?.data?.data;
    } catch (error) {
        // console.log("error occured in GetTableApi ==> ", error);
      return false;
    }
};

export const GetOneTableApi = async (id) => {
    try {
      const response = await axios.get(`${ApiPath.getOneTable}${id}`, getHeaderConfig());
      // console.log("res of GetOneTableApi =>> ");
      // console.log(response?.data?.data);
      return response?.data?.data;
    } catch (error) {
        // console.log("error occured in GetOneTableApi ==> ", error);
      return false;
    }
};

export const AddTableApi = async (data) => {
    const mappingData = {
        noTable: parseInt(data?.noTable) || "",
        url: data?.url || "",
        seatAmount: parseInt(data?.seatAmount) || "",
    };
    try {
      const response = await axios.post(ApiPath.addTable, mappingData, getHeaderConfig());
      // console.log("res of AddTableApi =>> ");
      // console.log(response);
      return response;
    } catch (error) {
        // console.log("error occured in AddTableApi ==> ", error);
      return false;
    }
};


export const UpdateTableApi = async (id, data) => {
    const mappingData = {
        noTable: data?.noTable || "",
        url: data?.url || "",
        seatAmount: data?.seatAmount || "",
    };
    try {
      const response = await axios.put(`${ApiPath.updateTable}${id}`, mappingData, getHeaderConfig());
      // console.log("res of UpdateTableApi =>> ");
      // console.log(response);
      return response;
    } catch (error) {
        // console.log("error occured in UpdateTableApi ==> ", error);
      return false;
    }
};

export const DeleteTableApi = async (id) => {
  try {
    const response = await axios.delete(`${ApiPath.deleteTable}${id}`, getHeaderConfig());
    // console.log("res of DeleteTableApi =>> ");
    // console.log(response);
    return response;
  } catch (error) {
      // console.log("error occured in DeleteTableApi ==> ", error);
    return false;
  }
};