import { toast } from "react-toastify";

const useTostifyMessage = () => {
  const handleNotification = (message, type = "success") => toast.info( message, { 
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    type: type,
   });
  return { handleNotification };
};

export default useTostifyMessage;
