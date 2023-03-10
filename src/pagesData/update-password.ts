import { IInputField } from "../components/entities/forms/FormUniversal";
import * as Yup from "yup";

export const initialValuesUpdate = {
     repeatPassword: "",
     password: "",
};

export const validationSchemaUpdate = Yup.object({
     password: Yup.string().max(15, "Максимум 15 символов").min(8, "Минимум 8 символов").required("Введите пароль"),
     repeatPassword: Yup.string().oneOf([Yup.ref("password")], "Указанные пароли должны быть идентичными"),
});

export const inputFieldDataUpdate: Array<IInputField> = [
     {
          htmlFor: "password",
          name: "password",
          placeholder: "Введите новый пароль",
          textLabel: "Новый пароль",
          typeField: "password",
     },
     {
          htmlFor: "repeatPassword",
          name: "repeatPassword",
          placeholder: "Повторите новый пароль",
          textLabel: "Повторить пароль",
          typeField: "password",
     },
];

export const inputFieldDataChange: Array<IInputField> = [
     {
          htmlFor: "password",
          name: "password",
          placeholder: "Введите пароль",
          textLabel: "Придумайте пароль",
          typeField: "password",
     },
     {
          htmlFor: "repeatPassword",
          name: "repeatPassword",
          placeholder: "Подтвердите пароль",
          textLabel: "Подтвердите новый пароль",
          typeField: "password",
     },
];