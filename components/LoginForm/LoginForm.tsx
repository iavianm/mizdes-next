"use client";
import styles from "./LoginForm.module.css";
import AuthForm from "@/components/AuthForm/AuthForm";
import { login } from "@/app/api/api";
import Input from "@/components/Input/Input";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface UserCredentials {
  email: string;
  password: string;
}

const LoginForm = () => {
  const router = useRouter();
  const { register, errors, isValid, handleSubmit, reset } = AuthForm();
  const [errorMessage, setErrorMessage] = useState("");

  // @ts-ignore
  const onSubmit = (data) => {
    handleLogin(data);
    // props.reset();
  };

  function handleLogin({ email, password }: UserCredentials) {
    login({ email, password })
      .then((res) => {
        if (res !== false) {
          router.push("/admin");
        }
      })
      .catch((e) => {
        console.log(e.status);
        setErrorMessage(e.message);
      });
  }

  return (
    <div className={"forms"}>
      <h3 className={"forms__title"}>{"Рады видеть!"}</h3>
      <form className={"form"} onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={"form__body"}>
          <Input
            text={"E-mail"}
            label={"email"}
            type={"email"}
            name="email"
            register={register}
            errors={errors}
          />
          <Input
            text={"Пароль"}
            label={"password"}
            type={"password"}
            name="password"
            register={register}
            errors={errors}
          />
        </div>

        <span className={"form__error-message"}>{errorMessage}</span>
        <button
          className={`form__button ${!isValid ? "form__button-disable" : ""}`}
          type={"submit"}
          disabled={!isValid}
        >
          {"Войти"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
