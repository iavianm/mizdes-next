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
      >
        <BookingForm key={formKey} onSuccess={closeModal} />
      </Modal>
    </>
  );
};

export default OrderButton;
