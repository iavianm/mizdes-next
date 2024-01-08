"use client";
import styles from "./AdminComponent.module.css";
import React, { useEffect, useState } from "react";
import { Table, Button, Modal } from "antd";
import BookingForm from "../BookingForm/BookingForm";
import { getBookings, removeBooking } from "@/app/api/api";
import { useSession } from "next-auth/react";

const AdminComponent = () => {
  const [bookedDates, setBookedDates] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isViewModalVisible, setIsViewModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [formKey, setFormKey] = useState(0);
  function Bookings() {
    getBookings().then((res) => {
      setBookedDates(res.reverse());
    });
  }

  useEffect(() => {
    Bookings();
  }, []);

  const handleView = (booking) => {
    setSelectedBooking(booking);
    setIsViewModalVisible(true);
  };

  const handleEdit = (booking) => {
    setSelectedBooking(booking);
    setIsEditModalVisible(true);
  };

  const handleConfirmDelete = (booking) => {
    if (booking) {
      setSelectedBooking(booking);
      setIsDeleteModalVisible(true);
    }
  };

  const handleDelete = () => {
    removeBooking(selectedBooking._id)
      .then(() => {
        setBookedDates((state) =>
          state.filter((el) => el._id !== selectedBooking._id),
        );
        setIsDeleteModalVisible(false);
      })
      .catch((e) => console.log(e));
  };

  const columns = [
    {
      title: "Имя",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Телефон",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Коттедж",
      dataIndex: "cottage",
      key: "cottage",
    },
    {
      title: "Доп.услуги",
      dataIndex: "additional",
      key: "additional",
      render: (additional) => (
        <>
          {additional.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </>
      ),
    },
    {
      title: "Дата заезда",
      dataIndex: "arrivalDate",
      key: "arrivalDate",
    },
    {
      title: "Дата выезда",
      dataIndex: "departureDate",
      key: "departureDate",
    },
    {
      title: "Взрослые",
      dataIndex: "adults",
      key: "adults",
    },
    {
      title: "Дети",
      dataIndex: "kids",
      key: "kids",
    },
    {
      title: "Действия",
      key: "actions",
      render: (_, booking) => (
        <div className={styles.admin__button_container}>
          <Button
            key={`view-${booking._id}`}
            onClick={() => handleView(booking)}
          >
            View
          </Button>
          <Button
            key={`edit-${booking._id}`}
            type="primary"
            onClick={() => handleEdit(booking)}
          >
            Edit
          </Button>
          <Button
            key={`delete-${booking._id}`}
            type="primary"
            danger
            onClick={() => handleConfirmDelete(booking)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <>
      <Table dataSource={bookedDates} columns={columns} rowKey="_id" />

      <Modal
        title="Информация о бронировании"
        open={isViewModalVisible}
        onCancel={() => setIsViewModalVisible(false)}
        footer={null}
      >
        {selectedBooking && (
          <>
            <p>Имя: {selectedBooking.name}</p>
            <p>Телефон: {selectedBooking.phone}</p>
            <p>Email: {selectedBooking.email}</p>
            <p>Коттедж: {selectedBooking.cottage}</p>
            <p>Доп.услуги: {selectedBooking.additional}</p>
            <p>Дата заезда: {selectedBooking.arrivalDate}</p>
            <p>Дата выезда: {selectedBooking.departureDate}</p>
            <p>Взрослые: {selectedBooking.adults}</p>
            <p>Дети: {selectedBooking.kids}</p>
          </>
        )}
      </Modal>

      <Modal
        title="Edit Booking"
        open={isEditModalVisible}
        onCancel={() => {
          setIsEditModalVisible(false);
          setFormKey((prevKey) => prevKey + 1);
        }}
        footer={null}
      >
        {selectedBooking && (
          <BookingForm
            key={formKey}
            initialBooking={{
              id: selectedBooking._id,
              cottage: selectedBooking.cottage,
              arrivalDate: selectedBooking.arrivalDate,
              departureDate: selectedBooking.departureDate,
              name: selectedBooking.name,
              adults: selectedBooking.adults,
              kids: selectedBooking.kids,
              phone: selectedBooking.phone,
              email: selectedBooking.email,
              additional: selectedBooking.additional,
            }}
            onSuccess={() => {
              setIsEditModalVisible(false);
              Bookings();
            }}
          />
        )}
      </Modal>
      <Modal
        title="Подтвердите удаление"
        open={isDeleteModalVisible}
        onCancel={() => setIsDeleteModalVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setIsDeleteModalVisible(false)}>
            Отмена
          </Button>,
          <Button key="delete" type="primary" danger onClick={handleDelete}>
            Удалить
          </Button>,
        ]}
      >
        <p>Вы уверены, что хотите удалить это бронирование?</p>
      </Modal>
    </>
  );
};
export default AdminComponent;
