import React, { useState } from "react";
import toast from "react-hot-toast";

const styles = {
  backgroundColor: "#D8B4FE",
  padding: "1rem",
  borderRadius: "15px",
  fontWeight: "500",
};

const useToastError = ({ text }) => {
  const [textToast, setText] = useState({ text });

  const notify = () =>
    toast.error(textToast, {
      style: styles,
    });

  return { notify };
};

export { useToastError };
