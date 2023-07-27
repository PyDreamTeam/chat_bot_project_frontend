import { FC, useEffect, useRef } from "react";
import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import Text from "@/src/components/shared/text/Text";
import Title from "@/src/components/shared/text/Title";
import { PhoneRegExp } from "@/src/shared/contsants/regExps";
import Logo, { LogoVariantProps } from "@/src/components/shared/Logo/Logo";
import ElemChooseChatBot, { ElemVariantProps } from "@/src/components/shared/elemChooseChatBot/ElemChooseChatBot";
import styles from "./styles/SelectionRequest.module.css";
import { FirstNameInput } from "../../shared/login/FirstNameInput/FirstNameInput";
import { EmailInput } from "../../shared/login/EmaiInput/EmailInput";
import { PhoneNumberInput } from "../../shared/login/PhoneNumberInput/PhoneNumberInput";
import { CommentInput } from "../../shared/login/CommentInput/CommentInput";

interface IPropsRequest {
     schema?: {
          htmlFor: string;
          label: string;
          type: string;
          name: "first_name" | "email" | "phone_number" | "comment";
          placeholder: string;
     }[];
     open?: () => void;
     close?: () => void;
}

interface IUserRequest {
     htmlFor: string;
     label: string;
     type: string;
     name: "first_name" | "email" | "phone_number" | "comment";
     placeholder: string;
}

const SelectionRequest: FC<IPropsRequest> = ({ close, open }) => {
     const [requestSent, setRequestSent] = useState<boolean>(false);
     const isRequestSent = () => {
          setRequestSent(true);
     };
     const timerRef = useRef<NodeJS.Timeout | null>(null);

     const startCloseTimer = () => {
          timerRef.current = setTimeout(() => {
               close?.();
          }, 5000);
     };

     useEffect(() => {
          return () => clearTimeout(timerRef.current as NodeJS.Timeout); // очистка таймера
     }, []);

     return (
          <div>
               {!requestSent ? (
                    <div className={styles.container}>
                         <div className={styles.backGround}>
                              <Logo variant={LogoVariantProps.header} />
                              <div className={styles.blockBlue}>
                                   <ElemChooseChatBot variant={ElemVariantProps.auth} />
                              </div>
                         </div>
                         <div className={styles.wrapper}>
                              <Image src="/sign/close.svg" alt="close" width={34} height={34} onClick={close} className={styles.imgClose} />
                              <Title type="h4" color="black">
                                   Заявка
                              </Title>
                              <Formik
                                   initialValues={{
                                        first_name: "",
                                        email: "",
                                        phone_number: "",
                                        comment: "",
                                   }}
                                   validationSchema={Yup.object().shape({
                                        first_name: Yup.string()
                                             .required("Поле обязательное для заполнения. Введите имя")
                                             .min(2, "Содержит две или более букв")
                                             .matches(/^\D*$/, "Не должно содержать цифр"),
                                        email: Yup.string()
                                             .email("Некорректный email")
                                             .required("Поле обязательное для заполнения. Введите email"),
                                        //TODO валидация телефона из файла констант
                                        phone_number: Yup.string()
                                             .matches(
                                                  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
                                                  "Некорректный номер телефона"
                                             )
                                             .required("Поле обязательное для заполнения. Введите номер телефона"),
                                        comment: Yup.string().max(200, "Комментарий не должен быть длиннее 200 символов"),
                                   })}
                                   onSubmit={(values, formikBag) => {
                                        setTimeout(() => {
                                             formikBag.setSubmitting(false);
                                        }, 5000);
                                        // dispatch(actions.sendUserRequest(values));
                                        console.log(values);
                                        isRequestSent();
                                        startCloseTimer();
                                   }}
                              >
                                   {({ isSubmitting, errors, touched, getFieldProps, isValid }) => {
                                        return (
                                             <Form className={styles.form}>
                                                  <FirstNameInput errors={errors} touched={touched} />
                                                  <EmailInput errors={errors} touched={touched} />
                                                  <PhoneNumberInput errors={errors} touched={touched} />
                                                  <CommentInput errors={errors} touched={touched} />
                                                  <button
                                                       type="submit"
                                                       disabled={isSubmitting}
                                                       className={isValid ? `${styles.button}` : `${styles.buttonDisabled}`}
                                                  >
                                                       Отправить
                                                  </button>
                                             </Form>
                                        );
                                   }}
                              </Formik>
                         </div>
                    </div>
               ) : (
                    <div className={styles.containerSuccess}>
                         <Image src="/sign/close.svg" alt="close" width={34} height={34} onClick={close} className={styles.imgClose} />
                         <Image
                              src="/img/ep_success-filled.svg"
                              alt="imgSuccess"
                              width={120}
                              height={120}
                              onClick={close}
                              className={styles.imgSuccess}
                         />
                         <div className={styles.textSuccess}>
                              <Title type="h5" color="black">
                                   Заявка успешно отправлена!
                              </Title>
                              <Text type="reg16" color="grey">
                                   Наши специалисты свяжутся с вами в течение суток
                              </Text>
                         </div>
                    </div>
               )}
          </div>
     );
};

export default SelectionRequest;
