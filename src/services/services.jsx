import toast from "react-hot-toast";

const styles = {
  backgroundColor: "#D8B4FE",
  padding: "1rem",
  borderRadius: "15px",
  fontWeight: "500",
};

const toastError = (textToast) =>
  toast.error(textToast, {
    style: styles,
  });

const toastSuccess = (textToast) =>
  toast.success(textToast, {
    style: styles,
  });

export { toastError, toastSuccess };
