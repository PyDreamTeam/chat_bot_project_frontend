import React, { FC } from "react";

import styles from "./AuthRightBlock.module.css";
import { WithChildren } from "@/src/shared/types/withChildren";
import AuthTitle from "@/src/components/shared/text/AuthTitle";
import { useRouter } from "next/router";
import Link from "next/link";
import IconsAuthBar from "@/src/components/entities/iconbars/IconsAuthBar";
import { clientEndpoints } from "@/src/shared/routes/client-endpoints";
import { svgArray } from "@/src/components/entities/iconbars/img/svgConfig";
import Text from "@/src/components/shared/text/Text";
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
                         <div className={styles.questionRoute}>
                              <Text type={"reg16"} color={"grey"} >
                                   Ещё нет аккаунта?
                                   <Link href={clientEndpoints.signUp.get}> Регистрация </Link>
                              </Text>
                              <div className={styles.centerText}>
                                   <Text type={"reg18"} color={"black"} >Войдите через соцсеть</Text>
                              </div>
                              <IconsAuthBar className="iconsSignIn" svgConfig={svgArray} />
                              <div className={styles.signIn}>
                                   <Text type={"reg18"} color={"black"}>Или с помощью почты и пароля</Text>
                              </div>
                         </div>
                    )}
                    {isSignUp && (
                         <div className={styles.questionSignIn}>
                              <Text type={"reg16"} color={"grey"}>
                                   Уже есть аккаунт?
                                   <Link href={clientEndpoints.signIn.get}> Войдите </Link>
                              </Text>
                         </div>
                    )}
                    {isRestorePassword && (
                         <div className={styles.addEmail}>
                              <Text type={"reg20"} color={"grey"}>
                                   Укажите Email, на который вы создавали личный кабинет
                              </Text>
                         </div>
                    )}
                    {isUpdatePassword && (
                         <div className={styles.updateName}>
                              <Text type={"reg20"} color={"black"}>Иван Иванов</Text>
                              <Text type={"reg20"} color={"black"}>example@mail.com</Text>
                         </div>
                    )}
                    <div className={styles.formCenter}>{children}</div>
                    {isSignIn && (
                         <div className={styles.centerText}>
                              <Text type={"reg16"} color={"grey"} >
                                   Забыли пароль?
                                   <Link href={clientEndpoints.restorePassword.get}>Восстановите здесь</Link>
                              </Text>
                         </div>
                    )}
                    {isSignUp && (
                         <div className={styles.agreement}>
                              <Text type={"reg16"} color={"grey"}>
                                   Нажимая кнопку «Зарегистрироваться», вы принимаете условия
                                   <Link href={clientEndpoints.home.get}> пользовательского соглашения</Link>
                              </Text>
                         </div>
                    )}
               </div>
          </div>
     );
};

export default AuthRightBlock;