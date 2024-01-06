"use client";
import React, { useState } from "react";
import { Modal, Button } from "antd";
import styles from "./OrderButton.module.css";
import BookingForm from "@/components/BookingForm/BookingForm";

type OrderButtonProps = {
  buttonClass?: string;
};

const OrderButton = ({ buttonClass }: OrderButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formKey, setFormKey] = useState(0);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormKey((prevKey) => prevKey + 1);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setFormKey((prevKey) => prevKey + 1);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setFormKey((prevKey) => prevKey + 1);
  };

  const closeIcon = (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        backgroundColor: "orange",
        width: "30px",
        boxShadow: "0 0 0 2px white",
      }}
    >
      <svg fill="currentColor" viewBox="0 0 20 20" width={28} height={28}>
        <path
          fillRule="evenodd"
          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
          clipRule="evenodd"
        ></path>
      </svg>
    </div>
  );

  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        className={`${styles.order__button} ${styles[buttonClass || ""]}`}
      >
        Забронировать
      </Button>
      <Modal
        title="Оформление заказа"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        closeIcon={closeIcon}
      >
        <BookingForm key={formKey} onSuccess={closeModal} />
      </Modal>
    </>
  );
};

export default OrderButton;
