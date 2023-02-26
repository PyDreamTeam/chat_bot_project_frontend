import { IInputField } from "../components/entities/forms/FormUniversal";

export const inputFieldDataSignUp: Array<IInputField> = [
     {
          htmlFor: "name",
          name: "name",
          placeholder: "Иван",
          textLabel: "Имя",
     },
     {
          htmlFor: "email",
          name: "email",
          placeholder: "example@mail.com",
          textLabel: "E-mail",
     },
     {
          htmlFor: "password",
          name: "password",
          placeholder: "Придумайте пароль",
          textLabel: "Пароль",
     },
];

export const initialValuesSignUp = {
     name: "",
     email: "",
     password: "",
     getNotifications: false,
};
