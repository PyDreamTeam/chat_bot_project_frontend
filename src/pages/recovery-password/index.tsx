import Text from "@/src/components/shared/text/Text";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./recovoryPassword.module.css";
import { useRecoveryPasswordMutation } from "@/src/store/services/userAuth";
import AuthWrapper from "@/src/components/wrappers/AuthWrapper";
import { ButtonLogin } from "@/src/components/shared/buttons/ButtonLogin";
import { EmailInput } from "@/src/components/shared/login/EmaiInput/EmailInput";
import Image from "next/image";

const RecoveryPassword = () => {

     const [recoveryPassword, {isSuccess, isLoading, error}] = useRecoveryPasswordMutation();

     return (
          <div>
               {!isSuccess ? <div className={css.container}>
                    <AuthWrapper titleText={"Восстановление пароля"}>
                         <div className={css.wrapper}>
                              <div className={css.email}>
                                   <Text type="reg20" color="grey">Укажите Email, на который вы создавали личный кабинет</Text>
                              </div>
                              <Formik
                                   initialValues={{
                                        email: ""
                                   }}
                                   validationSchema={Yup.object({
                                        email: Yup.string().required("Введите email").email("Неккоректный email")
                                   })}
                                   onSubmit={(values) => {
                                        recoveryPassword(values);
                                   }}
                              >
                                   {({ errors, touched, isValid }) => {

                                        return (
                                             <Form className={css.form}>
                                                  <EmailInput errors={errors} touched={touched} error={error}/>

                                                  <ButtonLogin disabled={isLoading} active={!isLoading} type="submit">Отправить</ButtonLogin>

                                             </Form>
                                        );
                                   }}
                              </Formik>
                         </div>
                    </AuthWrapper>
               </div> : 
               <div className={css.container}>
                    <Image src={"/sign/success-filled.svg"} alt={"Success"}/>
                    <AuthWrapper titleText={"Письмо отправлено"}>
                         <div className={css.wrapperLetterSent}>
                              <div className={css.account}>
                                   <Text type="reg20" color="grey">Мы отправили Вам письмо со ссылкой для восстановления пароля. </Text>
                              </div>
                         </div>
                    </AuthWrapper>
               </div>}
          </div>
     );
};

export default RecoveryPassword;