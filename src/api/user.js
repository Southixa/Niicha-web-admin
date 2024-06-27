import axios from "axios";
import ApiPath from "./apiPath";
import { getHeaderConfig } from "../helpers";
export const GetUserApi = async () => {
    try {
      const response = await axios.get(ApiPath.getAllUsers, getHeaderConfig());
      // console.log("res of GetUserApi =>> ");
      // console.log(response?.data?.data);
      return response?.data?.data;
    } catch (error) {
        // console.log("error occured in GetUserApi ==> ", error);
      return false;
    }
};

export const GetOneUserApi = async (id) => {
    try {
      const response = await axios.get(`${ApiPath.getOneUser}${id}`, getHeaderConfig());
      // console.log("res of GetOneUserApi =>> ");
      // console.log(response?.data?.data);
      return response?.data?.data;
    } catch (error) {
        // console.log("error occured in GetOneUserApi ==> ", error);
      return false;
    }
};

export const AddUserApi = async (data) => {
    const mappingData = {
        username: data?.username || "",
        password: data?.password || "",
        role: data?.role || "",
    };
    try {
      const response = await axios.post(ApiPath.addUser, mappingData, getHeaderConfig());
      // console.log("res of AddUserApi =>> ");
      // console.log(response);
      return response;
    } catch (error) {
        // console.log("error occured in AddUserApi ==> ", error);
      return false;
    }
};


export const UpdateUserApi = async (id, data) => {
    const mappingData = {
        username: data?.username || "",
        role: data?.role || "",
        password: data?.password || "",
    };
    try {
      const response = await axios.put(`${ApiPath.updateUser}${id}`, mappingData, getHeaderConfig());
      // console.log("res of UpdateUserApi =>> ");
      // console.log(response);
      return response;
    } catch (error) {
        // console.log("error occured in UpdateUserApi ==> ", error);
      return false;
    }
};

export const DeleteUsereApi = async (id) => {
  try {
    const response = await axios.delete(`${ApiPath.deleteUser}${id}`, getHeaderConfig());
    // console.log("res of DeleteUsereApi =>> ");
    // console.log(response);
    return response;
  } catch (error) {
      // console.log("error occured in DeleteUsereApi ==> ", error);
    return false;
  }
};