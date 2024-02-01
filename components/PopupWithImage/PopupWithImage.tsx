"use client";
import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import Image from "next/image";

const PopupWithImage: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const closeIcon = (
    <svg fill="currentColor" viewBox="0 0 20 20" width={28} height={28}>
      <path
        fillRule="evenodd"
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        clipRule="evenodd"
      ></path>
    </svg>
  );

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Modal
      open={visible}
      footer={null}
      onCancel={() => setVisible(false)}
      closeIcon={
        <div
          style={{
            background: "orange",
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            position: "absolute",
            top: "0px",
            cursor: "pointer",
          }}
        >
          {closeIcon}
        </div>
      }
      style={{
        maxWidth: "600px",
        top: "3%",
      }}
      width="auto"
      centered
    >
      <Image
        src="/images/valentines-day.png"
        alt="Valentine's Day"
        layout="responsive"
        width={500}
        height={500}
      />
      <style jsx global>{`
        @media (max-width: 600px) {
          .ant-modal {
            width: 90% !important;
            max-width: none !important;
          }
        }
      `}</style>
    </Modal>
  );
};

export default PopupWithImage;
