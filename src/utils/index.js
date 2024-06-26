import Swal from "sweetalert2";
import * as Yup from 'yup';
import { WMessage } from "../constant";

export const notify =  {
    success: (message) => {
        Swal.fire({
            title: "ສຳເລັດ",
            text: message,
            icon: 'success'
        });
    },
    error: (message) => {
        Swal.fire({
            title: "ຜິດພາດ",
            text: message,
            icon: 'error'
        });
    }
}

export const validationSchema = {
    productType: Yup.object().shape({
        title: Yup.string().required(WMessage.pleaseFillTheField),
    }),
    product: Yup.object().shape({
        typeId: Yup.string().required(WMessage.pleaseChoseData),
        name: Yup.string().required(WMessage.pleaseFillTheField),
        detail: Yup.string().required(WMessage.pleaseFillTheField),
        price: Yup.number().typeError(WMessage.onlyNumber).required(WMessage.pleaseFillTheField),
    }),
    table: Yup.object().shape({
        noTable: Yup.number().typeError(WMessage.onlyNumber).required(WMessage.pleaseFillTheField),
        url: Yup.string().required(WMessage.pleaseFillTheField),
    }),
    user: Yup.object().shape({
        username: Yup.string().required(WMessage.pleaseFillTheField),
        password: Yup.string().required(WMessage.pleaseFillTheField),
        role: Yup.string().required(WMessage.pleaseChoseData),
    }),
    employee: Yup.object().shape({
        firstname: Yup.string().required(WMessage.pleaseFillTheField),
        lastname: Yup.string().required(WMessage.pleaseFillTheField),
        gender: Yup.string().required(WMessage.pleaseChoseData),
        birthday: Yup.string().required(WMessage.pleaseChoseData),
        address: Yup.string().required(WMessage.pleaseFillTheField),
        phoneNumber: Yup.number().typeError(WMessage.onlyNumber).required(WMessage.pleaseFillTheField),
    }),
}
    