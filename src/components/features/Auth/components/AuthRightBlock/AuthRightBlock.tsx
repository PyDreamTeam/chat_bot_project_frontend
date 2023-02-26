import React, { FC } from "react";

import styles from "./AuthRightBlock.module.css";
import { WithChildren } from "@/src/types/withChildren";
import AuthTitle from "@/src/components/shared/textfields/AuthTitle";
import { useRouter } from "next/router";
import Link from "next/link";

export interface IAuthRightBlock {
     titleText: string;
}

const AuthRightBlock: FC<WithChildren & IAuthRightBlock> = ({ children, titleText }) => {
     const isSignIn = useRouter().pathname === "/sign-in";
     const isSignUp = useRouter().pathname === "/sign-up";
     const isRestorePassword = useRouter().pathname === "/restore-password";
     const isChangePassword = useRouter().pathname === "/change-password";

     return (
          <div className={styles.authRightBlock}>
               <div className={styles.authContentBlock}>
                    <AuthTitle text={titleText} />
                    {isSignIn && (
                         <>
                              <h4 className={styles.h4}>
                                   Ещё нет аккаунта?
                                   <Link href={"/sign-up"}> Регистрация </Link>
                              </h4>
                              <h3 className={styles.h3}>Войдите через соцсеть</h3>
                              <h3 className={styles.h3}>Или с помощью почты и пароля</h3>
                         </>
                    )}
                    {isSignUp && (
                         <h4 className={styles.h4}>
                              Уже есть аккаунт?
                              <Link href={"/sign-in"}> Войдите </Link>
                         </h4>
                    )}
                    {isRestorePassword && <h2 className={styles.h2}>Укажите Email, на который вы создавали личный кабинет</h2>}
                    {isChangePassword && (
                         <>
                              <h2 className={styles.h2}>Иван Иванов</h2>
                              <h2 className={styles.h2}>example@mail.com</h2>
                         </>
                    )}
                    {children}

                    {isSignIn && (
                         <h4 className={styles.h4}>
                              Забыли пароль? <Link href={"/restore-password"}>Восстановите здесь</Link>
                         </h4>
                    )}
                    {isSignUp && (
                         <h4 className={styles.h4}>
                              Нажимая кнопку «Зарегистрироваться», вы принимаете условия
                              <Link href={"/home"}> пользовательского соглашения</Link>
                         </h4>
                    )}
               </div>
          </div>
     );
};

export default AuthRightBlock;
