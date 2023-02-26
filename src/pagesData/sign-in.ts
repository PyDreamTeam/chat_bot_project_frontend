import { IInputField } from "../components/entities/forms/FormUniversal";
import * as Yup from "yup";

export const initialValuesSignIn = {
     email: "",
     password: "",
};

export const validationSchemaSignIn = Yup.object({
     password: Yup.string().max(15, "Максимум 15 символов").min(8, "Минимум 8 символов").required("Введите пароль"),
     email: Yup.string().min(6, "Минимум 6 символов").email("Invalid email address").required("Введите e-mail"),
});

export const inputFieldDataSignIn: Array<IInputField> = [
     {
          htmlFor: "email",
          name: "email",
          placeholder: "example@mail.com",
          textLabel: "E-mail",
          typeField: "email",
     },
     {
          htmlFor: "password",
          name: "password",
          placeholder: "Введите пароль",
          textLabel: "Пароль",
          typeField: "password",
     },
];
