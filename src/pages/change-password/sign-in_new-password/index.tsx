import {useState, useEffect} from "react";
import ComponentSignIn from "../../sign-in/componentSignIn/ComponentSignIn";
import AuthWrapper from "@/src/components/wrappers/AuthWrapper";
import Text from "@/src/components/shared/text/Text";
import Image from "next/image";

import css from "./signInNewPassword.module.css";

interface UserInfo {
     htmlFor: string
     label: string
     type: string
     name: "email" | "password";
     placeholder: string
}

const SignInNewPassword = () => {
     const [typePassword, setTypePassword] = useState<string>("password");

     const [isOpen, setIsOpen] = useState<boolean>(true);
     const changeIsOpen = () => {
          setIsOpen(false);
     };

     useEffect(() => {
          setTimeout(() => {
               setIsOpen(false);
          }, 7000);
     }, []);

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
               <AuthWrapper titleText={"Вход"}>
                    <div className={css.wrapper}>
                         {isOpen && <div className={css.infoBlock}>
                              <div className={css.closeBlock}>
                                   <Text type="reg20" color="dark">Ваш пароль успешно изменен</Text>
                                   <Image src="/sign/close.svg" alt="close" width={24} height={24} onClick={changeIsOpen} className={css.img}/>
                              </div>

                              <div className={css.textInfo}>
                                   <Text type="reg16" color="grey">Для продолжения войдите, пожалуйста, в аккаунт с новым паролем</Text>
                              </div>
                         </div>}
                         <ComponentSignIn schema={schema} open={open} close={close}/>
                    </div>
               </AuthWrapper> 
          </div>
     );
};

export default SignInNewPassword;