import * as Yup from "yup";

export const today = new Date().toISOString().split("T")[0];

export const BookingSchema = Yup.object().shape({
  arrivalDate: Yup.date()
    .min(today, "Дата заезда не может быть раньше сегодняшнего дня")
    .required("Дата заезда обязательна"),
  departureDate: Yup.date()
    .min(
      Yup.ref("arrivalDate"),
      "Дата выезда должна быть минимум на один день после даты заезда",
    )
    .required("Дата выезда обязательна"),
  cottage: Yup.string()
    .notOneOf([""], "Выбор коттеджа обязателен")
    .required("Выбор коттеджа обязателен"),
  phone: Yup.string()
    .matches(/^\+?\d[\d \-]{8,}\d$/, "Некорректный формат")
    .required("Телефон обязателен"),
});
