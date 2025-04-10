import { toast } from 'react-toastify';

type ToastType = 'success' | 'error' | 'info' | 'warn';

const useToast = () => {
  const showToast = (message: string, type: ToastType = 'info') => {
    toast[type](message);
  };

  return { showToast };
};

export default useToast;
