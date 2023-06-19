import { useState } from "react";
import ComponentSignIn from "./componentSignIn/ComponentSignIn";

interface UserInfo {
     htmlFor: string
     label: string
     type: string
     name: "email" | "password";
     placeholder: string
}




function SignIn() {

     const [typePassword, setTypePassword] = useState<string>("password");

     const open = () => setTypePassword("text");
     const close = () => setTypePassword("password");

     const schema: Array<UserInfo> = [
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
               placeholder: "Введите пароль"
          }
     ];

     return (
          <div>
               <ComponentSignIn schema={schema} open={open} close={close}/>
          </div>
     );
}

export default SignIn;