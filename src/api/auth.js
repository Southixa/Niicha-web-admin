import axios from "axios";
import ApiPath from "./apiPath";
import { encryptData } from "../helpers";
//
export const LoginApi = async ( username, password ) => {
    const data = {
      username: username,
      password: password,
    };
  
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    try {
      const response = await axios.post(ApiPath.login, data, config);
      if (response.data.success === true) {
       localStorage.setItem("token", response.data.data.token);
       localStorage.setItem("refreshToken", response.data.data.refreshToken);
       localStorage.setItem("UID", response.data.data.UID);
       localStorage.setItem("username", response.data.data.username);
       localStorage.setItem("role", encryptData(response.data.data.role));
      //  console.log("token ==>");
      //  console.log(response);
      //  console.log(response?.data?.data?.token);
            
        return true;
      } else {
        return false;
      }
    } catch (error) {
      // console.log(error);
      return false;
    }
  };
  export const RegisterApi = async ( username, password ) => {
    const data = {
      username: username,
      password: password,
    };
  
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    try {
      const response = await axios.post(ApiPath.register, data, config);
  
      if (response.data.success === true) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };