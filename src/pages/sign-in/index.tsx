import { useState } from "react";
import ComponentSignIn from "./componentSignIn/ComponentSignIn";
import Text from "@/src/components/shared/text/Text";
import Link from "next/link";
import Title from "@/src/components/shared/text/Title";
import css from "./componentSignIn/componentSignIn.module.css";

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
          <div className={css.container}>
               <div className={css.backGround}></div>
               <div className={css.wrapper}>
                    <Title type="h1" color="black">Вход</Title>
                    <div className={css.account}>
                         <Text type="reg16" color="grey">Ещё нет аккаунта?
                              <Link href={"/sign-up"} className={css.link}> Регистрация</Link>
                         </Text>
                    </div>
                    <div className={css.text}>
                         <Text type="reg16" color="grey">Или с помощью почты и пароля</Text>
                    </div>
                    <ComponentSignIn schema={schema} open={open} close={close}/>
               </div>
          </div>
     );
}

export default SignIn;