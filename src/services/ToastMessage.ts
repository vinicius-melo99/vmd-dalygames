import { toast, ToastPosition } from 'react-toastify';

interface ToastMessageInterface {
  toastSuccess(message: string, toastPosition?: ToastPosition): void;
  toastError(message: string, toastPosition?: ToastPosition): void;
}

export default class ToastMessage implements ToastMessageInterface {
  public toastSuccess(
    message: string,
    toastPosition: ToastPosition = 'top-right',
  ) {
    return toast.success(message, {
      position: toastPosition,
      autoClose: 2000,
      pauseOnHover: false,
      theme: 'dark',
    });
  }

  public toastError(
    message: string,
    toastPosition: ToastPosition = 'top-right',
  ) {
    return toast.error(message, {
      position: toastPosition,
      autoClose: 2000,
      pauseOnHover: false,
      theme: 'dark',
    });
  }
}
