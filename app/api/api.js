export const BASE_URL = "https://www.mizdes.com/api";

function getResponse(res) {
  if (!res.ok) {
    return res.json().then((data) => {
      return Promise.reject({
        status: `Ошибка: ${res.status}`,
        message: data.message,
      });
    });
  }
  return res.json();
}

export const login = ({ email, password }) =>
  fetch(`${BASE_URL}/signin`, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(getResponse);

export const logout = () =>
  fetch(`${BASE_URL}/signout`, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then(getResponse);

export const loginWithCookie = () =>
  fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then(getResponse);

export const removeBooking = (bookingId) => {
  return fetch(`${BASE_URL}/bookings/${bookingId}`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then(getResponse);
};

export const getBookings = () =>
  fetch(`${BASE_URL}/bookings`, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then(getResponse);

export function getLatestBookings() {
  return fetch(`${BASE_URL}/bookings/latest`, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then(getResponse);
}

export function updateBooking(bookingId, booking) {
  return fetch(`${BASE_URL}/bookings/${bookingId}`, {
    method: "PATCH",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cottage: booking.cottage,
      name: booking.name || "",
      arrivalDate: booking.arrivalDate,
      departureDate: booking.departureDate,
      adults: booking.adults || 1,
      kids: booking.kids || 0,
      phone: booking.phone,
      email: booking.email || "",
      additional: booking.additional || [],
    }),
  }).then(getResponse);
}

export function createBooking(booking) {
  return fetch(`${BASE_URL}/bookings`, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cottage: booking.cottage,
      name: booking.name || "",
      arrivalDate: booking.arrivalDate,
      departureDate: booking.departureDate,
      adults: booking.adults || 1,
      kids: booking.kids || 0,
      phone: booking.phone,
      email: booking.email || "",
      additional: booking.additional || [],
    }),
  }).then(getResponse);
}
