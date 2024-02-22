"use client";
import React, { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import { closeIcon } from "@/components/CloseIcon/CloseIcon";
import styles from "./Prices.module.css";
import { getLatestPrices } from "@/app/api/api";

interface Price {
  _id: string;
  roomTypeId: number;
  day: string;
  price: string;
}

interface Props {
  title: string;
}

const PricesModal = ({ title }: Props) => {
  const [visible, setVisible] = useState(false);
  const [prices, setPrices] = useState<Price[]>([]);

  useEffect(() => {
    if (visible) {
      getLatestPrices()
        .then((data) => {
          if (title === "Ривьера") {
            const riviera = data["riviera"]
              .map((item: Price) => ({
                ...item,
                price: item.price.split(".")[0],
              }))
              .sort(
                (a: Price, b: Price) =>
                  new Date(a.day).getTime() - new Date(b.day).getTime(),
              );
            setPrices(riviera);
          }

          if (title === "Грандис") {
            const grandis = data["grandis"]
              .map((item: Price) => ({
                ...item,
                price: item.price.split(".")[0],
              }))
              .sort(
                (a: Price, b: Price) =>
                  new Date(a.day).getTime() - new Date(b.day).getTime(),
              );
            setPrices(grandis);
          }
        })
        .catch((error) => {
          console.error("Ошибка при получении данных: ", error);
        });
    }
  }, [visible, title]);

  function openModal() {
    setVisible(true);
  }

  return (
    <>
      <Button type="primary" onClick={openModal}>
        СТОИМОСТЬ
      </Button>
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
          top: "-10%",
        }}
        width="auto"
        centered
      >
        <h2 className={styles.prices__title}>{title}</h2>
        {prices.map((price) => (
          <div key={price._id}>
            {price.day}: {price.price} руб.
          </div>
        ))}
      </Modal>
    </>
  );
};

export default PricesModal;
