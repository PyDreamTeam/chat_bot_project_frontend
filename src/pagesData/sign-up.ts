import { EmailEngRegExp, NameRegExp, PasswordRegExp } from "./../utils/regExps";
import { IInputField } from "../components/entities/forms/FormUniversal";
import * as Yup from "yup";

export const inputFieldDataSignUp: Array<IInputField> = [
     {
          htmlFor: "name",
          name: "name",
          placeholder: "Иван",
          textLabel: "Имя",
          typeField: "name",
     },
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
          placeholder: "Придумайте пароль",
          textLabel: "Пароль",
          typeField: "password",
     },
];

export const initialValuesSignUp = {
     name: "",
     email: "",
     password: "",
     get_email_notifications: "",
};

export const validationSchemaSignUp = Yup.object({
     name: Yup.string()
          .matches(NameRegExp, "Допустимы только английские символы и цифры")
          .max(15, "Максимум 15 символов")
          .min(4, "Минимум 4 символа")
          .required("Введите имя"),
     password: Yup.string()
          .matches(
               PasswordRegExp,
               "Cодержит не менее 8 символов, содержит как строчные (a–z), так и прописные буквы (A–Z), содержит по крайней мере одну цифру (0–9), содержит по крайней мере один спецсимвол"
          )
          .max(15, "Максимум 15 символов")
          .min(8, "Минимум 8 символов")
          .required("Введите пароль"),
     email: Yup.string()
          .matches(EmailEngRegExp, "Допустимы только английские символы, цифры и @")
          .email("Invalid email address")
          .required("Введите e-mail"),
});
