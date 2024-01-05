"use client";
import React from "react";
import { Modal, Button, Input, InputNumber } from "antd";
import { Formik, Form, Field, FieldProps } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface FormValues {
  arrivalDate: Date | null;
  departureDate: Date | null;
  cottageType: string;
  additionalOptions: string[];
  adults: number;
  children: number;
  name: string;
  phone: string;
  email: string;
}

const BookingSchema = Yup.object().shape({
  arrivalDate: Yup.date().required("Дата заезда обязательна"),
  departureDate: Yup.date().required("Дата выезда обязательна"),
  // ... other fields with validation
});

const BookingPopup: React.FC<{}> = () => {
  const initialValues: FormValues = {
    arrivalDate: null,
    departureDate: null,
    cottageType: "",
    additionalOptions: [],
    adults: 1,
    children: 0,
    name: "",
    phone: "",
    email: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={BookingSchema}
      onSubmit={(values) => {
        console.log(values);
        // Handle form submission
      }}
    >
      {({ setFieldValue }) => (
        <Form>
          <label htmlFor="arrivalDate">Дата заезда *</label>
          <Field name="arrivalDate">
            {({ field, form }: FieldProps<Date>) => (
              <DatePicker
                selected={field.value}
                onChange={(date: Date) => form.setFieldValue(field.name, date)}
              />
            )}
          </Field>
          {/* Repeat for departureDate and other fields... */}

          <Button type="primary" htmlType="submit">
            Создать
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default BookingPopup;
