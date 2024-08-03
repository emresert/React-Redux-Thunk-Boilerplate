import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import i18n from "i18next";

const throwCatchErrorToast = (errorCode: string) => {
    toast.error(i18n.t(errorCode))
}


type TErrorType = "success" | "error"
const throwCustomToast = (errorText: string, status: TErrorType) => {

    if (status == "error") {
        toast.error(errorText)
    } else if (status == "success") {
        toast.success(errorText)
    }

}

export { throwCatchErrorToast, throwCustomToast }