"use client";
import styles from "./BookingForm.module.css";
import React from "react";
import { Formik, ErrorMessage, Field } from "formik";
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
import { createBooking } from "@/api/api";
import { BookingSchema, today } from "@/components/BookingForm/BookingSchema";

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

const BookingForm: React.FC<Props> = ({ onSuccess }) => {
  const capitalize = require("capitalize");

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={BookingSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        createBooking(values)
          .then((r) => {
            console.log(r);
            actions.setSubmitting(false);
            onSuccess();
          })
          .catch((e) => console.log(e));
      }}
    >
      {({ values, setFieldValue, isSubmitting, isValid, dirty }) => (
        <StyledForm>
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
              <option value="cottage1">Коттедж 1</option>
              <option value="cottage2">Коттедж 2</option>
              {/* Добавьте дополнительные опции */}
            </Field>
            <ErrorMessageContainer>
              <ErrorMessage name="cottage" component={ErrorText} />
            </ErrorMessageContainer>
          </FieldContainer>

          <FieldContainer>
            <label htmlFor="additional">Дополнительные опции</label>
            <Field as="select" name="additional" className={styles.selectStyle}>
              <option value="">Выбрать...</option>
              {[
                "мангал",
                "квадроцикл",
                "эндуро",
                "снегоход",
                "собака",
                "самовар",
                "ранний заезд",
                "поздний заезд",
                "ранний выезд",
                "поздний выезд",
              ].map((option) => (
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
      )}
    </Formik>
  );
};

export default BookingForm;
