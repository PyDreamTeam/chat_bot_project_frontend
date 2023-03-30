import React, { FC } from "react";

import styles from "./AuthRightBlock.module.css";
import { WithChildren } from "@/src/shared/types/withChildren";
import AuthTitle from "@/src/components/shared/textfields/AuthTitle";
import { useRouter } from "next/router";
import Link from "next/link";
import IconsAuthBar from "@/src/components/entities/iconbars/IconsAuthBar";
import { svgArray } from "@/src/components/entities/iconbars/pictures/svgConfig";
import { clientEndpoints } from "@/src/shared/routes/client-endpoints";
export interface IAuthRightBlock {
     titleText: string;
}

const AuthRightBlock: FC<WithChildren & IAuthRightBlock> = ({ children, titleText }) => {
     const isSignIn = useRouter().pathname === clientEndpoints.signIn.get;
     const isSignUp = useRouter().pathname === clientEndpoints.signUp.get;
     const isRestorePassword = useRouter().pathname === clientEndpoints.restorePassword.get;
     const isUpdatePassword = useRouter().pathname === clientEndpoints.updatePassword.get;

     return (
          <div className={styles.authRightBlock}>
               <div className={styles.authContentBlock}>
                    <AuthTitle text={titleText} />

                    {isSignIn && (
                         <>
                              <h4 className={`${styles.h4} ${styles.questionRoute}`}>
                                   Ещё нет аккаунта?
                                   <Link href={clientEndpoints.signUp.get}> Регистрация </Link>
                              </h4>
                              <h3 className={`${styles.h3} ${styles.questionSocials}`}>Войдите через соцсеть</h3>
                              <IconsAuthBar className="iconsSignIn" svgConfig={svgArray} />
                              <h3 className={`${styles.h3} ${styles.signIn}`}>Или с помощью почты и пароля</h3>
                         </>
                    )}
                    {isSignUp && (
                         <h4 className={`${styles.h4} ${styles.questionSignIn}`}>
                              Уже есть аккаунт?
                              <Link href={clientEndpoints.signIn.get}> Войдите </Link>
                         </h4>
                    )}
                    {isRestorePassword && (
                         <h2 className={`${styles.h2} ${styles.addEmail}`}>Укажите Email, на который вы создавали личный кабинет</h2>
                    )}
                    {isUpdatePassword && (
                         <>
                              <div className={styles.updateName}>
                                   <h2 className={styles.h2}>Иван Иванов</h2>
                                   <h2 className={styles.h2}>example@mail.com</h2>
                              </div>
                         </>
                    )}
                    <div className={styles.formCenter}>{children}</div>
                    {isSignIn && (
                         <h4 className={styles.h4}>
                              Забыли пароль? <Link href={clientEndpoints.restorePassword.get}>Восстановите здесь</Link>
                         </h4>
                    )}
                    {isSignUp && (
                         <h4 className={`${styles.h4} ${styles.agreement}`}>
                              Нажимая кнопку «Зарегистрироваться», вы принимаете условия
                              <Link href={clientEndpoints.home.get}> пользовательского соглашения</Link>
                         </h4>
                    )}
               </div>
          </div>
     );
};

export default AuthRightBlock;
