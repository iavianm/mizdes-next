"use client";
import React, { useState, useEffect } from "react";
import styles from "./BookingWidget.module.css";

declare global {
  interface Window {
    Bnovo_Widget: any;
  }
}

const BookingWidget: React.FC = () => {
  const [widgetKey, setWidgetKey] = useState(0);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//widget.reservationsteps.ru/js/bnovo.js";
    script.async = true;

    script.onload = () => {
      window.Bnovo_Widget.init(() => {
        window.Bnovo_Widget.open(`_bn_widget_${widgetKey}`, {
          type: "button",
          uid: "3a0ca453-d1aa-4f79-b260-ccbe8b95350c",
          select_list: "Array",
          lang: "ru",
          currency: "RUB",
          border: "on",
          border_color: "#d38c20",
          border_radius: "8",
          button_font_size: "14",
          button_height: "38",
          btn_background: "#d38c20",
          btn_background_over: "#f1a129",
          btn_textcolor: "#FFFFFF",
          btn_textover: "#FFFFFF",
          btn_bordcolor: "#d38c20",
          btn_bordhover: "#f1a129",
          min_age: "0",
          max_age: "17",
          adults_default: "1",
          btn_text: "Забронировать",
        });
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [widgetKey]);

  return (
    <div
      className={styles.order__button}
      id={`_bn_widget_${widgetKey}`}
      style={{ textAlign: "center", maxWidth: "130px" }}
    ></div>
  );
};

export default BookingWidget;
