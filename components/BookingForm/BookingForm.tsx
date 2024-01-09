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
import { createBooking, getLatestBookings, updateBooking } from "@/app/api/api";
import {
  BookingSchema,
  today,
  UpdateBookingSchema,
} from "@/components/BookingForm/BookingSchema";
import { options } from "../../content/additionalOptionsContent.json";
import { Select } from "antd";

const { Option } = Select;

interface FormValues {
  arrivalDate: string;
  departureDate: string;
  cottage: string;
  additional: Array<string>;
  adults: number;
  kids: number;
  name: string;
  phone: string;
  email: string;
}

interface Props {
  onSuccess: () => void;
  initialBooking?: Booking;
}

const initialValues: FormValues = {
  arrivalDate: "",
  departureDate: "",
  cottage: "",
  additional: [],
  adults: 1,
  kids: 0,
  name: "",
  phone: "",
  email: "",
};

interface TotalCottages {
  [key: string]: number;
}

interface Booking {
  id: string;
  cottage: string;
  arrivalDate: string;
  departureDate: string;
  name: string;
  adults: number;
  kids: number;
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

  if (isNaN(arrivalDate.getTime()) || isNaN(departureDate.getTime())) {
    return 0;
  }

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

const BookingForm: React.FC<Props> = ({ onSuccess, initialBooking }) => {
  const capitalize = require("capitalize");
  const [bookedDates, setBookedDates] = useState([]);
  const [availableCottages, setAvailableCottages] = useState<string[]>([]);
  const [arrivalDateValue, setArrivalDateValue] = useState<string>("");
  const [departureDateValue, setDepartureDateValue] = useState<string>("");

  const totalCottages = {
    riviera: 3,
    grandis: 2,
  };

  useEffect(() => {
    getLatestBookings().then((res) => {
      setBookedDates(res);
    });
  }, []);

  useEffect(() => {
    const newAvailableCottages = Object.keys(totalCottages).filter(
      (cottageType) => {
        if (initialBooking && cottageType === initialBooking.cottage) {
          return true;
        }
        return checkAvailability(
          cottageType,
          arrivalDateValue,
          departureDateValue,
          bookedDates.filter(
            (booking: { _id: string }) => booking._id !== initialBooking?.id,
          ),
          totalCottages,
        );
      },
    );

    setAvailableCottages(newAvailableCottages);
  }, [arrivalDateValue, departureDateValue, bookedDates, initialBooking]);

  return (
    <Formik
      initialValues={initialBooking || initialValues}
      validationSchema={initialBooking ? UpdateBookingSchema : BookingSchema}
      onSubmit={(values, actions) => {
        if (initialBooking) {
          updateBooking(initialBooking.id, values)
            .then(() => {
              actions.setSubmitting(false);
              onSuccess();
            })
            .catch((e) => {
              console.log(e);
              actions.setSubmitting(false);
            });
        } else {
          createBooking(values)
            .then(() => {
              actions.setSubmitting(false);
              onSuccess();
            })
            .catch((e) => {
              console.log(e);
              actions.setSubmitting(false);
            });
        }
      }}
    >
      {(formikProps) => {
        const { values, setFieldValue, isSubmitting, isValid, dirty } =
          formikProps;

        return (
          <StyledForm onSubmit={formikProps.handleSubmit}>
            <FormRow>
              <FieldContainer>
                <label htmlFor="arrivalDate">Дата заезда *</label>
                <StyledField
                  type="date"
                  name="arrivalDate"
                  min={initialBooking ? undefined : today}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                    setArrivalDateValue(e.target.value);
                    setFieldValue("arrivalDate", e.target.value);

                    if (e.target.value >= values.departureDate) {
                      const newDepartureDate = new Date(e.target.value);
                      newDepartureDate.setDate(newDepartureDate.getDate() + 1);
                      setFieldValue(
                        "departureDate",
                        newDepartureDate.toISOString().split("T")[0],
                      );
                      setDepartureDateValue(
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
                  value={values.departureDate}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                    setFieldValue("departureDate", e.target.value);
                    setDepartureDateValue(e.target.value);
                  }}
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
                  availableCottages.map((cottage) => (
                    <option key={cottage} value={cottage}>
                      {capitalize(cottage)}
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
              <Field name="additional">
                {({ field, form }: { field: { value: any }; form: any }) => (
                  <Select
                    mode="multiple"
                    allowClear
                    placeholder="Выбрать..."
                    onChange={(value) =>
                      form.setFieldValue("additional", value)
                    }
                    value={field.value}
                    className={styles.selectStyle}
                    bordered={false}
                  >
                    {options.map((option) => (
                      <Option key={option} value={capitalize(option)}>
                        {capitalize(option)}
                      </Option>
                    ))}
                  </Select>
                )}
              </Field>
              <ErrorMessageContainer>
                <ErrorMessage name="additional" component={ErrorText} />
              </ErrorMessageContainer>
            </FieldContainer>

            <NumberContainer>
              <FormRowNumber>
                <NumberInput label="Взрослые" name="adults" />

                <NumberInput label="Дети" name="kids" />
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
              {initialBooking
                ? "Обновить бронирование"
                : "Создать бронирование"}
            </StyledButton>
          </StyledForm>
        );
      }}
    </Formik>
  );
};

export default BookingForm;
