import TemplateSignUp from "./componentSignUp/componentSignUp";
import {useState} from "react";

interface UserInfo {
     htmlFor: string
     label: string
     type: string
     name: "first_name" | "last_name" | "email" | "password" | "re_password" | "get_email_notifications";
     placeholder: string
}

const SignUp = () => {

     const [typePassword, setTypePassword] = useState<string>("password");

     const open = () => setTypePassword("text");
     const close = () => setTypePassword("password");

     

     const singUpUser: Array<UserInfo> = [
          {
               htmlFor: "first_name",
               label: "Имя",
               type: "text",
               name: "first_name",
               placeholder: "Иван"
          },
          {
               htmlFor: "last_name",
               label: "Фамилия",
               type: "text",
               name: "last_name",
               placeholder: "Иванов"
          },
          {
               htmlFor: "email",
               label: "E-mail",
               type: "email",
               name: "email",
               placeholder: "example@mail.com"
          },
          {
               htmlFor: "password",
               label: "Пароль",
               type: typePassword,
               name: "password",
               placeholder: "Придумайте пароль"
          },
          {
               htmlFor: "re_password",
               label: "Подтверждение пароля",
               type: typePassword,
               name: "re_password",
               placeholder: "Повторите пароль"
          }
     ];

     return (
          <div>
               <TemplateSignUp schema={singUpUser} open={open} close={close}/>
          </div>
     );
};

export default SignUp;