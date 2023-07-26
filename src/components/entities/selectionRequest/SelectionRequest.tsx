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

interface IPropsRequest {
     schema?: {
          htmlFor: string;
          label: string;
          type: string;
          name: "first_name" | "email" | "tel" | "comment";
          placeholder: string;
     }[];
     open?: () => void;
     close?: () => void;
}

interface IUserRequest {
     htmlFor: string;
     label: string;
     type: string;
     name: "first_name" | "email" | "tel" | "comment";
     placeholder: string;
}

const selectionRequest: Array<IUserRequest> = [
     {
          htmlFor: "first_name",
          label: "Имя",
          type: "text",
          name: "first_name",
          placeholder: "Имя",
     },
     {
          htmlFor: "email",
          label: "E-mail",
          type: "email",
          name: "email",
          placeholder: "example@mail.com",
     },
     {
          htmlFor: "telephone",
          label: "Телефон",
          type: "tel",
          name: "tel",
          placeholder: "+7",
     },
     {
          htmlFor: "comment",
          label: "Комментарий",
          type: "text",
          name: "comment",
          placeholder: "Текст (200 символов)",
     },
];

const SelectionRequest: FC<IPropsRequest> = ({ schema = selectionRequest, close, open }) => {
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
                                        tel: "",
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
                                        tel: Yup.string()
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
                                                  {schema.map(({ htmlFor, label, type, name, placeholder }) => (
                                                       <div key={name} className={styles.blockInput}>
                                                            <label htmlFor={htmlFor}>
                                                                 <Text type="reg18" color="black">
                                                                      {label}
                                                                 </Text>
                                                            </label>
                                                            <div className={styles.errorIcon}>
                                                                 {errors[name] && touched[name] && (
                                                                      <Image
                                                                           src="/sign/errorIcon.svg"
                                                                           width={24}
                                                                           height={24}
                                                                           alt="errorIcon"
                                                                      />
                                                                 )}
                                                            </div>

                                                            <div className={styles.groupStateEye}>
                                                                 <Field
                                                                      as={name === "comment" ? "textarea" : ""}
                                                                      type={type}
                                                                      name={name}
                                                                      placeholder={placeholder}
                                                                      className={
                                                                           errors[name] && touched[name]
                                                                                ? `${styles.inputError}`
                                                                                : `${styles.input}`
                                                                      }
                                                                 />
                                                            </div>
                                                            <div className={styles.error}>
                                                                 <Text type="reg16" color="red">
                                                                      <ErrorMessage name={name} />
                                                                 </Text>
                                                            </div>
                                                       </div>
                                                  ))}
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
