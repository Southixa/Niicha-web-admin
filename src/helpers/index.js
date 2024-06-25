import { EMessage, SECREAT_KEY } from "../constant";
import CryptoJS from "crypto-js";
import { notify } from "../utils";

export const getHeaderConfig = () => {
    const token = localStorage.getItem("token")
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    };
    return config
}

export const formatCurrency = (number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
  return formatter.format(number);
}

export function timeFormatter (value) {
  if(!value || value === '' || (typeof value !== 'string')) return "--";
  return value.match(/^\d{4}-\d{2}-\d{2}/)[0];
}

export const cloudinaryResizeImage = (url, size) => {
  return url.replace("image/upload/", `w_${size}/`)
}

export const autoFetchingData = async (fetchApi, setData) => {
  const response = await fetchApi();
  if(!response) {
     notify.error(EMessage.getData)
     return;
  }
  setData(response);
 }

 export function getCurrentDate () {
  const date = new Date();
  const currentDate = date.getFullYear() + "-" + (date.getMonth() + 1 + "").padStart(2, "0") + "-" + ((date.getDate()) + "").padStart(2, "0");
  return currentDate;
}

 export function encryptData (data) {
  return CryptoJS.AES.encrypt(data, SECREAT_KEY).toString();
}

export function decryptData (data) {
  return CryptoJS.AES.decrypt(data, SECREAT_KEY).toString(CryptoJS.enc.Utf8);
}

export function convertDateTimeToSeconds (date) {
  return new Date(date).getTime() / 1000;
}

export function isAllowedRole (allowedRoles) {
  const encryptedRole = localStorage.getItem("role");
  const currentRole = decryptData(encryptedRole);
  if (!(allowedRoles.includes(currentRole))) {
    return false;
  }
  return true;
}

export function getCurrentUsername () {
  const username = localStorage.getItem("username");
  if(!username) return "";
  return username
}