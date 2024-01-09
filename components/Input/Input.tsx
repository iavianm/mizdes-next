"use client";
import "./Input.css";
import { errorEmail, errorPass } from "../InputErrors/InputErrors";

interface InputProps {
  text: string;
  label: string;
  type: string;
  name: string;
  register: (...args: any) => {};
  errors: { [key: string]: any };
}

function Input(props: InputProps) {
  function checkErrorName(error: string): {} {
    if (error === "email") {
      return errorEmail;
    }
    if (error === "password") {
      return errorPass;
    }
    return {};
  }

  return (
    <>
      <label className={"input__label"} htmlFor={props.label}>
        {props.text}
      </label>
      <input
        className={`input ${
          props.errors[props.name] ? "input__border-red input__text-red" : ""
        }`}
        id={props.label}
        type={props.type}
        name={props.name}
        {...props.register(props.name, checkErrorName(props.name))}
        required
        autoComplete="off"
      />
      <span
        className={`input__error ${props.errors ? "input__error-show" : ""}`}
      >
        {props.errors ? props.errors[props.name]?.message || "" : ""}
      </span>
    </>
  );
}

export default Input;
