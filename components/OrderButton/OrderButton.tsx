"use client";
import React, { useState } from "react";
import { Modal, Button } from "antd";
import styles from "./OrderButton.module.css";
import BookingPopup from "@/components/BookingPopup/BookingPopup";

type OrderButtonProps = {
  buttonClass?: string;
};

const OrderButton = ({ buttonClass }: OrderButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
      >
        <p>Содержимое модального окна...</p>
        <BookingPopup />
      </Modal>
    </>
  );
};

export default OrderButton;
