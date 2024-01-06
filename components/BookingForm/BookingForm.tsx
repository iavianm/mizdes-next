"use client";
import styles from "./BookingForm.module.css";
import React, { useEffect, useState } from "react";
import { Formik, ErrorMessage, Field, useFormik } from "formik";
import {
  StyledForm,
  FormRow,
  StyledField,
  StyledButton,
  ErrorText,
  ErrorMessageContainer,
  FieldContainer,
  FormRowNumber,
  NumberContainer,
  FormRowName,
} from "./StyledComponents";
import NumberInput from "./NumberInput";
import { createBooking, getLatestBookings } from "@/api/api";
import { BookingSchema, today } from "@/components/BookingForm/BookingSchema";
import { options } from "../../content/additionalOptionsContent.json";

interface FormValues {
  arrivalDate: string;
  departureDate: string;
  cottage: string;
  additional: string;
  adults: number;
  children: number;
  name: string;
  phone: string;
  email: string;
}

interface Props {
  onSuccess: () => void;
}

const initialValues: FormValues = {
  arrivalDate: "",
  departureDate: "",
  cottage: "",
  additional: "",
  adults: 1,
  children: 0,
  name: "",
  phone: "",
  email: "",
};

interface TotalCottages {
  [key: string]: number;
}

interface Booking {
  cottage: string;
  arrivalDate: string;
  departureDate: string;
  name: string;
  adults: number;
  children: number;
  phone: string;
  email: string;
  additional: Array<string>;
}

const checkAvailability = (
  cottage: string,
  arrival: string,
  departure: string,
  bookings: Booking[],
  totalCottages: TotalCottages,
) => {
  const arrivalDate = new Date(arrival);
  const departureDate = new Date(departure);

  const countBookings = bookings.filter((booking) => {
    if (booking.cottage !== cottage) {
      return false;
    }

    const bookedArrival = new Date(booking.arrivalDate);
    const bookedDeparture = new Date(booking.departureDate);

    return !(bookedDeparture <= arrivalDate || bookedArrival >= departureDate);
  }).length;

  return countBookings < totalCottages[cottage];
};

const BookingForm: React.FC<Props> = ({ onSuccess }) => {
  const capitalize = require("capitalize");
  const [bookedDates, setBookedDates] = useState([]);

  useEffect(() => {
    getLatestBookings().then((res) => {
      setBookedDates(res);
    });
  }, []);

  const [availableCottages, setAvailableCottages] = useState<string[]>([]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={BookingSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        createBooking(values)
          .then((r) => {
            actions.setSubmitting(false);
            onSuccess();
          })
          .catch((e) => {
            console.log(e);
            actions.setSubmitting(false);
          });
      }}
    >
      {(formikProps) => {
        const { values, setFieldValue, isSubmitting, isValid, dirty } =
          formikProps;

        const totalCottages = {
          riviera: 3,
          grandis: 2,
        };

        useEffect(() => {
          const newAvailableCottages = Object.keys(totalCottages).filter(
            (cottageType) =>
              checkAvailability(
                cottageType,
                values.arrivalDate,
                values.departureDate,
                bookedDates,
                totalCottages,
              ),
          );

          setAvailableCottages(newAvailableCottages);
        }, [values.arrivalDate, values.departureDate, bookedDates]);

        return (
          <StyledForm onSubmit={formikProps.handleSubmit}>
            <FormRow>
              <FieldContainer>
                <label htmlFor="arrivalDate">Дата заезда *</label>
                <StyledField
                  type="date"
                  name="arrivalDate"
                  min={today}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                    setFieldValue("arrivalDate", e.target.value);

                    if (e.target.value >= values.departureDate) {
                      const newDepartureDate = new Date(e.target.value);
                      newDepartureDate.setDate(newDepartureDate.getDate() + 1);
                      setFieldValue(
                        "departureDate",
                        newDepartureDate.toISOString().split("T")[0],
                      );
                    }
                  }}
                />
                <ErrorMessageContainer>
                  <ErrorMessage name="arrivalDate" component={ErrorText} />
                </ErrorMessageContainer>
              </FieldContainer>
              <FieldContainer>
                <label htmlFor="departureDate">Дата выезда *</label>
                <StyledField
                  type="date"
                  name="departureDate"
                  min={
                    values.arrivalDate
                      ? new Date(values.arrivalDate).toISOString().split("T")[0]
                      : today
                  }
                />
                <ErrorMessageContainer>
                  <ErrorMessage name="departureDate" component={ErrorText} />
                </ErrorMessageContainer>
              </FieldContainer>
            </FormRow>

            <FieldContainer>
              <label htmlFor="cottage">Выберите коттедж *</label>
              <Field as="select" name="cottage" className={styles.selectStyle}>
                <option value="">Выбрать...</option>
                {availableCottages.length > 0 ? (
                  availableCottages.map((cottageType) => (
                    <option key={cottageType} value={cottageType}>
                      {capitalize(cottageType)}
                    </option>
                  ))
                ) : (
                  <option value="">Все виллы заняты в этот период</option>
                )}
              </Field>
              <ErrorMessageContainer>
                <ErrorMessage name="cottage" component={ErrorText} />
              </ErrorMessageContainer>
            </FieldContainer>

            <FieldContainer>
              <label htmlFor="additional">Дополнительные опции</label>
              <Field
                as="select"
                name="additional"
                className={styles.selectStyle}
              >
                <option value="">Выбрать...</option>
                {options.map((option) => (
                  <option key={option} value={capitalize(option)}>
                    {capitalize(option)}
                  </option>
                ))}
              </Field>
              <ErrorMessageContainer>
                <ErrorMessage name="additional" component={ErrorText} />
              </ErrorMessageContainer>
            </FieldContainer>

            <NumberContainer>
              <FormRowNumber>
                <NumberInput label="Взрослые" name="adults" />

                <NumberInput label="Дети" name="children" />
              </FormRowNumber>
            </NumberContainer>

            <FormRow>
              <FieldContainer>
                <label htmlFor="phone">Телефон *</label>
                <StyledField
                  type="tel"
                  name="phone"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const trimmedValue = e.target.value.trim();
                    setFieldValue("phone", trimmedValue);
                  }}
                  placeholder="+79998887766"
                />
                <ErrorMessageContainer>
                  <ErrorMessage name="phone" component={ErrorText} />
                </ErrorMessageContainer>
              </FieldContainer>
              <FieldContainer>
                <label htmlFor="email">Email</label>
                <StyledField
                  type="email"
                  name="email"
                  placeholder="email@gmail.com"
                />
                <ErrorMessageContainer>
                  <ErrorMessage name="email" component={ErrorText} />
                </ErrorMessageContainer>
              </FieldContainer>
            </FormRow>

            <FormRowName>
              <label htmlFor="name">Ваше имя</label>
              <StyledField type="text" name="name" />
            </FormRowName>

            <StyledButton
              type="submit"
              disabled={!isValid || !dirty || isSubmitting}
            >
              Создать бронирование
            </StyledButton>
          </StyledForm>
        );
      }}
    </Formik>
  );
};

export default BookingForm;
