import { IInputField } from "../components/entities/forms/FormUniversal";
import * as Yup from "yup";

export const googleId = "149315774337-b84cvdjcif34r3gdihgusfs7benh122j.apps.googleusercontent.com";
export const vkAuthURL =
    "https://oauth.vk.com/oauth/authorize?client_id=51572250&display=popup&redirect_uri=localhost:3000/sign-in&scope=email&response_type=code&v=5.120&slogin_h=a59ea5a1bd59a5c9f1.66130bc2542a68f499&__q_hash=5d45c4401c047ba9d22f2ba3e37cf2eb";

export const facebookId = 150296077905954;
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
