import { NameRegExp, PhoneRegExp } from "./../utils/regExps";
import { IInputField } from "../components/entities/forms/FormUniversal";
import * as Yup from "yup";

export const inputPersonalData: Array<IInputField> = [
     {
          htmlFor: "name",
          name: "name",
          placeholder: "Иван",
          textLabel: "Имя",
          typeField: "name",
     },
     {
          htmlFor: "surname",
          name: "surname",
          placeholder: "Иванов",
          textLabel: "Фамилия",
          typeField: "surname",
     },
     {
          htmlFor: "phone",
          name: "tel",
          placeholder: "+375299652084",
          textLabel: "Телефон",
          typeField: "tel",
     },
];

export const initialValuesPersonalData = {
     name: "",
     surname: "",
     tel: "",
};

export const validationSchemaPersonalData = Yup.object({
     name: Yup.string()
          .matches(NameRegExp, "Допустимы только английские символы и цифры")
          .max(15, "Максимум 15 символов")
          .min(4, "Минимум 4 символа")
          .required("Введите имя"),
     surname: Yup.string()
          .matches(NameRegExp, "Допустимы только английские символы и цифры")
          .max(15, "Максимум 15 символов")
          .min(4, "Минимум 4 символа")
          .required("Введите фамилию"),
     tel: Yup.string()
          .required("Введите номер телефона")
          .matches(PhoneRegExp, "Номер телефона не правильный")
          .max(12, "Некорректный номер")
          .min(12, "Некорректный номер"),
});
