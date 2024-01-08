"use client";
import styles from "./AdminComponent.module.css";
import React, { useEffect, useState } from "react";
import { Table, Button, Modal } from "antd";
import BookingForm from "../BookingForm/BookingForm";
import { getBookings, removeBooking } from "@/app/api/api";

interface Booking {
  _id: string;
  name: string;
  phone: string;
  email: string;
  cottage: string;
  additional: string[];
  arrivalDate: string;
  departureDate: string;
  adults: number;
  kids: number;
  wishes: string;
}

interface Booking {
  _id: string;
  name: string;
  phone: string;
  email: string;
  cottage: string;
  additional: string[];
  arrivalDate: string;
  departureDate: string;
  adults: number;
  kids: number;
}

const AdminComponent = () => {
  const [bookedDates, setBookedDates] = useState<Booking[]>([]);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
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

  const handleView = (booking: Booking) => {
    setSelectedBooking(booking);
    setIsViewModalVisible(true);
  };

  const handleEdit = (booking: Booking) => {
    setSelectedBooking(booking);
    setIsEditModalVisible(true);
  };

  const handleConfirmDelete = (booking: Booking) => {
    if (booking) {
      setSelectedBooking(booking);
      setIsDeleteModalVisible(true);
    }
  };

  const handleDelete = () => {
    if (selectedBooking) {
      removeBooking(selectedBooking._id)
        .then(() => {
          setBookedDates((state) =>
            state.filter((el) => el._id !== selectedBooking._id),
          );
          setIsDeleteModalVisible(false);
        })
        .catch((e) => console.log(e));
    }
  };

  const columns = [
    { title: "Имя", dataIndex: "name", key: "name" },
    { title: "Телефон", dataIndex: "phone", key: "phone" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Коттедж", dataIndex: "cottage", key: "cottage" },
    {
      title: "Доп.услуги",
      dataIndex: "additional",
      key: "additional",
      render: (additional: string[]) => (
        <>
          {additional.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </>
      ),
    },
    { title: "Дата заезда", dataIndex: "arrivalDate", key: "arrivalDate" },
    { title: "Дата выезда", dataIndex: "departureDate", key: "departureDate" },
    { title: "Взрослые", dataIndex: "adults", key: "adults" },
    { title: "Дети", dataIndex: "kids", key: "kids" },
    { title: "Пожелания", dataIndex: "wishes", key: "wishes" },
    {
      title: "Действия",
      key: "actions",
      render: (_: unknown, booking: Booking) => (
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
      <Table
        dataSource={bookedDates}
        columns={columns}
        rowKey="_id"
        scroll={{ x: "max-content" }}
      />

      <Modal
        title={
          <div className={styles.modal__title}>Информация о бронировании</div>
        }
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
            <p>Дата заезда: {selectedBooking.arrivalDate}</p>
            <p>Дата выезда: {selectedBooking.departureDate}</p>
            <p>Взрослые: {selectedBooking.adults}</p>
            <p>Дети: {selectedBooking.kids}</p>
            <p>Пожелания: {selectedBooking.wishes}</p>
            <p>Доп. услуги:</p>
            <ul>
              {selectedBooking.additional.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </>
        )}
      </Modal>

      <Modal
        title="Edit Booking"
        open={isEditModalVisible}
        onCancel={() => {
          setFormKey((prevKey) => prevKey + 1);
          setIsEditModalVisible(false);
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
              wishes: selectedBooking.wishes,
            }}
            onSuccess={() => {
              setFormKey((prevKey) => prevKey + 1);
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
