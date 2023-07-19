import { ToastOptions, toast } from "react-toastify";
import axios, { AxiosError } from "axios";

const toastSettings: ToastOptions = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "colored",
  progress: undefined,
};
const isBackEndError = (err: any): err is AxiosError<{ message: string }> => {
  if (err.response.data) {
    return true;
  }
  return false;
};

export const notifyError = (message: string) =>
  toast.error(message, toastSettings);
const notifySuccess = (message: string) =>
  toast.success(message, toastSettings);

function handleError(err: any) {
  if (axios.isAxiosError(err) && isBackEndError(err)) {
    return notifyError(err.response?.data.message as string);
  }
  if (err instanceof Error) {
    return notifyError(err.message);
  }
}

export function handleSuccess(message: string) {
  return notifySuccess(message);
}

export default handleError;
