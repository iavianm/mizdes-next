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
      // height: "100%",
      maxWidth: "1120px",
      width: "95%",
      maxHeight: "95vh",

      height: "95%",
      background: "transparent",
      border: "none",
      padding: 0,
    },
  });

  useEffect(() => {
    const updateModalStyle = () => {
      const isMobile = window.innerWidth <= 1100;
      const isLandscape = window.innerWidth > window.innerHeight;

      const newStyle = isMobile
        ? {
            content: {
              ...modalStyle.content,
              maxHeight: isLandscape ? "95%" : "95%",
              maxWidth: isLandscape ? "63%" : "95%",
              top: isLandscape ? "50%" : "75%",
            },
          }
        : {
            content: {
              ...modalStyle.content,
              maxHeight: "95%",
              maxWidth: "1120px",
              top: "60%",
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
