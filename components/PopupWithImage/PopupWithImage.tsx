"use client";
import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import Image from "next/image";
import { closeIcon } from "@/components/CloseIcon/CloseIcon";

const PopupWithImage: React.FC = () => {
  const [visible, setVisible] = useState(false);

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
