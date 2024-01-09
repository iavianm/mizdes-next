import * as Yup from "yup";

export const today = new Date().toISOString().split("T")[0];

export const BookingSchema = Yup.object().shape({
  arrivalDate: Yup.date()
    .min(today, "Дата заезда не может быть раньше сегодняшнего дня")
    .required("Необходимо указать дату заезда"),
  departureDate: Yup.date()
    .min(Yup.ref("arrivalDate"), "Дата выезда не может быть раньше даты заезда")
    .required("Необходимо указать дату выезда"),
  cottage: Yup.string()
    .notOneOf([""], "Выбор коттеджа обязателен")
    .required("Выбор коттеджа обязателен"),
  phone: Yup.string()
    .matches(/^\+?\d[\d \-]{8,}\d$/, "Некорректный формат")
    .required("Телефон обязателен"),
});

export const UpdateBookingSchema = Yup.object().shape({
  arrivalDate: Yup.date().required("Необходимо указать дату заезда"),
  departureDate: Yup.date()
    .min(Yup.ref("arrivalDate"), "Дата выезда не может быть раньше даты заезда")
    .required("Необходимо указать дату выезда"),
  cottage: Yup.string()
    .notOneOf([""], "Выбор коттеджа обязателен")
    .required("Выбор коттеджа обязателен"),
  phone: Yup.string()
    .matches(/^\+?\d[\d \-]{8,}\d$/, "Некорректный формат")
    .required("Телефон обязателен"),
});
