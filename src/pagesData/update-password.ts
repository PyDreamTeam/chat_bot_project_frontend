import { IInputField } from "../components/entities/forms/FormUniversal";
import * as Yup from "yup";
import {
    PasswordRegExp,
    PasswordRegExpEightSymbols,
    PasswordRegExpMatchLowercaseAndUppercase,
    PasswordRegExpMatchNumber,
    PasswordRegExpMatchSpecialCharacter,
} from "../shared/constants/regExps";

export const initialValuesUpdate = {
    repeatPassword: "",
    password: "",
};

export const validationSchemaUpdate = Yup.object({
    password: Yup.string()
        // .matches(
        //      PasswordRegExp,
        //      "Cодержит не менее 8 символов, содержит как строчные (a–z), так и прописные буквы (A–Z), содержит по крайней мере одну цифру (0–9), содержит по крайней мере один спецсимвол",
        // )
        .matches(PasswordRegExpEightSymbols, "Cодержит не менее 8 символов")
        .matches(PasswordRegExpMatchLowercaseAndUppercase, "содержит как строчные (a–z), так и прописные буквы (A–Z)")
        .matches(PasswordRegExpMatchNumber, "содержит по крайней мере одну цифру (0–9)")
        .matches(PasswordRegExpMatchSpecialCharacter, "содержит по крайней мере один спецсимвол")
        .max(15, "Максимум 15 символов")
        .min(8, "Минимум 8 символов")
        .required("Введите пароль"),
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
