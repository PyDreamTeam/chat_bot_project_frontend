import Text from "@/src/components/shared/text/Text";
import Title from "@/src/components/shared/text/Title";
import {useState, useEffect} from "react";
import ComponentSignIn from "../../sign-in/componentSignIn/ComponentSignIn";
import css from "./signInNewPassword.module.css";
import Image from "next/image";

const SignInNewPassword = () => {

     const [isOpen, setIsOpen] = useState<boolean>(true);
     const changeIsOpen = () => {
          setIsOpen(false);
     };

     useEffect(() => {
          setTimeout(() => {
               setIsOpen(false);
          }, 10000);
     }, []);


     return (
          <div className={css.container}>
               <div className={css.backGround}></div>
               <div className={css.wrapper}>
                    <Title type="h1" color="black">Вход</Title>
                    <ComponentSignIn />

                    {isOpen && <div className={css.infoBlock}>
                         <div className={css.closeBlock}>
                              <Text type="reg20" color="dark">Ваш пароль успешно изменен</Text>
                              <Image src="/sign/close.svg" alt="close" width={24} height={24} onClick={changeIsOpen} className={css.img}/>
                         </div>

                         <div className={css.textInfo}>
                              <Text type="reg16" color="grey">Для продолжения войдите, пожалуйста, в аккаунт с новым паролем</Text>
                         </div>
                    </div>}
               </div>
          </div>
     );
};

export default SignInNewPassword;