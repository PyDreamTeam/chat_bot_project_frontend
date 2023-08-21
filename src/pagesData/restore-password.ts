import { IInputField } from "../components/entities/forms/FormUniversal";
import * as Yup from "yup";

export const initialValuesRestore = {
    email: "",
};

export const validationSchemaRestore = Yup.object({
    email: Yup.string().min(6, "Минимум 6 символов").email("Invalid email address").required("Введите e-mail"),
});

export const inputFieldDataRestore: Array<IInputField> = [
    {
        htmlFor: "email",
        name: "email",
        placeholder: "example@mail.com",
        textLabel: "E-mail",
        typeField: "email",
    },
];
