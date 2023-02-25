import React, { FC } from "react";

import styles from "./AuthRightBlock.module.css";
import { WithChildren } from "@/src/types/withChildren";
import AuthTitle from "@/src/components/shared/textfields/AuthTitle";
import { useRouter } from "next/router";
import Link from "next/link";

export interface IAuthRightBlock {
  titleText: string;
}

const AuthRightBlock:FC <WithChildren & IAuthRightBlock> = ({children, titleText}) => {


     const isSignIn = useRouter().pathname === "/sign-in";
     const isSignUp = useRouter().pathname === "/sign-up";
     const isRestorePassword = useRouter().pathname === "/restore-password";
     const isChangePassword = useRouter().pathname === "/change-password";


     return (
          <div className={styles.authRightBlock}>
               <div className={styles.authContentBlock}>
                    <AuthTitle text={titleText}/>
                    {isSignIn && <>
                         <p>
                              Ещё нет аккаунта?
                              <Link href={"/sign-up"}> Регистрация </Link>
                         </p>
                         <p>Войдите через соцсеть</p>
                         <p>Или с помощью почты и пароля</p>
                    </>}
                    {isSignUp && <p>
                        Уже есть аккаунт?
                         <Link href={"/sign-in"}> Войдите </Link>
                    </p>}
                    {isRestorePassword && <p>
                        Укажите Email, на который вы создавали личный кабинет
                    </p>}
                    {isChangePassword && <>
                         <p>Иван Иванов</p>
                         <p>example@mail.com</p>
                    </>}
                    {children}
                    {isSignIn && <p> Забыли пароль?{" "}
                         <Link href={"/restore-password"}>Восстановите здесь</Link>
                    </p>}
                    {isSignUp && <p> Нажимая кнопку «Зарегистрироваться», вы принимаете условия
                         <Link href={"/home"}> пользовательского соглашения</Link>
                    </p>}
               </div>
          </div>
     );
};

export default AuthRightBlock;
