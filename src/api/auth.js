import axios from "axios";
import ApiPath from "./apiPath";
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
       console.log(response.data);
      if (response.data.success === true) {
        localStorage.setItem("token", response.data.data.token);
        //localStorage.setItem("expiresIn", response.data.data.expiresIn);
       localStorage.setItem("refreshToken", response.data.data.refreshToken);
            
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
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