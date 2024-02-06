"use client";
import { useState, useEffect } from "react";

const useModalStyle = () => {
  const [modalStyle, setModalStyle] = useState({
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      maxHeight: "90%",
      maxWidth: "90%",
    },
  });

  useEffect(() => {
    const updateModalStyle = () => {
      const isMobile = window.innerWidth <= 600;
      const isLandscape = window.innerWidth > window.innerHeight;

      const newStyle = isMobile
        ? {
            content: {
              ...modalStyle.content,
              maxHeight: isLandscape ? "80%" : "70%",
              maxWidth: isLandscape ? "70%" : "80%",
            },
          }
        : {
            content: {
              ...modalStyle.content,
              maxHeight: "90%",
              maxWidth: "90%",
            },
          };

      setModalStyle(newStyle);
    };

    updateModalStyle();

    window.addEventListener("resize", updateModalStyle);
    return () => {
      window.removeEventListener("resize", updateModalStyle);
    };
  }, []);

  return modalStyle;
};

export default useModalStyle;
