import {useState, useEffect} from "react";
import ComponentSignIn from "../../sign-in/componentSignIn/ComponentSignIn";
import AuthWrapper from "@/src/components/wrappers/AuthWrapper";
import Text from "@/src/components/shared/text/Text";
import Image from "next/image";

import css from "./signInNewPassword.module.css";

<<<<<<< HEAD
=======

>>>>>>> origin/main
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
<<<<<<< HEAD

=======
>>>>>>> origin/main
               <AuthWrapper titleText={"Вход"}>
                    <div className={css.wrapper}>
                         {isOpen && <div className={css.infoBlock}>
                              <div className={css.closeBlock}>
                                   <Text type="reg20" color="dark">Ваш пароль успешно изменен</Text>
                                   <Image src="/sign/close.svg" alt="close" width={24} height={24} onClick={changeIsOpen} className={css.img}/>
                              </div>
<<<<<<< HEAD

=======
>>>>>>> origin/main

                              <div className={css.textInfo}>
                                   <Text type="reg16" color="grey">Для продолжения войдите, пожалуйста, в аккаунт с новым паролем</Text>
                              </div>
                         </div>}
                         <ComponentSignIn/>
                    </div>
               </AuthWrapper> 
          </div>
     );
};

export default SignInNewPassword;
