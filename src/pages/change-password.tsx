import React, { useState } from "react";

import { WrapperRegister, BlockLeft, BlockRight, ChangePasswordBlock } from "@/src/components/StyledRegister.styled";
import { Title } from "@/src/components/Title.styled";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { Label } from "@/src/components/Label.styled";
import { Input, StyledInlineErrorMessage } from "@/src/components/Input.styled";
import { Submit } from "@/src/components/Button.styled";
import Image from "next/image";
import OpenEye from "@/src/images/OpenEye.png";
import CloseEye from "@/src/images/CloseEye.png";

const ChangePassword = () => {
     const [show, setShow] = useState<boolean>(false);
     const showPassword = () => {
          setShow(!show);
     };

     return (
          <WrapperRegister>
               <BlockLeft />
               <BlockRight>
                    <ChangePasswordBlock>
                         <Title>Обновите пароль</Title>
                         <p>Иван Иванов</p>
                         <p>example@mail.com</p>
                         <Formik
                              initialValues={{
                                   password: "",
                                   passwordConfirmation: "",
                              }}
                              onSubmit={() => console.log(1)}
                              validationSchema={Yup.object().shape({
                                   password: Yup.string().min(8, "Пароль слишком короткий").required("Введите новый пароль"),
                                   passwordConfirmation: Yup.string()
                                        .required("Повторите пароль")
                                        .oneOf([Yup.ref("password")], "Пароли должны совпадать"),
                              })}
                         >
                              {({ values, errors, touched, handleSubmit, isSubmitting, isValidating, isValid }) => (
                                   <Form name="contact" method="post" onSubmit={handleSubmit}>
                                        <div
                                             style={{
                                                  height: "120px",
                                             }}
                                        >
                                             <Label htmlFor="email">
                                                  <p>Новый пароль</p>
                                                  <div
                                                       style={{
                                                            width: "100%",
                                                            height: "100%",
                                                            display: "flex",
                                                            flexDirection: "row",
                                                            alignItems: "center",
                                                       }}
                                                  >
                                                       <Input
                                                            type={show ? "text" : "password"}
                                                            name="password"
                                                            autoCapitalize="off"
                                                            autoCorrect="off"
                                                            autoComplete="password"
                                                            placeholder="Введите новый пароль"
                                                            valid={Boolean(touched.password && !errors.password)}
                                                            error={Boolean(touched.password && errors.password)}
                                                       />
                                                       <Image
                                                            src={show ? OpenEye : CloseEye}
                                                            alt="Picture of the author"
                                                            width={20}
                                                            height={20}
                                                            onClick={showPassword}
                                                            style={{
                                                                 margin: "0 -40px",
                                                            }}
                                                       />
                                                  </div>
                                             </Label>
                                             <ErrorMessage name="password">
                                                  {(message) => <StyledInlineErrorMessage>{message}</StyledInlineErrorMessage>}
                                             </ErrorMessage>
                                        </div>
                                        <div
                                             style={{
                                                  height: "120px",
                                             }}
                                        >
                                             <Label htmlFor="email">
                                                  <p>Повторить пароль</p>
                                                  <div
                                                       style={{
                                                            width: "100%",
                                                            height: "100%",
                                                            display: "flex",
                                                            flexDirection: "row",
                                                            alignItems: "center",
                                                       }}
                                                  >
                                                       <Input
                                                            type={show ? "text" : "password"}
                                                            name="passwordConfirmation"
                                                            autoCapitalize="off"
                                                            autoCorrect="off"
                                                            autoComplete="password"
                                                            placeholder="Введите новый пароль"
                                                            valid={Boolean(touched.passwordConfirmation && !errors.passwordConfirmation)}
                                                            error={Boolean(touched.passwordConfirmation && errors.passwordConfirmation)}
                                                       />
                                                       <Image
                                                            src={show ? OpenEye : CloseEye}
                                                            alt="Picture of the author"
                                                            width={20}
                                                            height={20}
                                                            onClick={showPassword}
                                                            style={{
                                                                 margin: "0 -40px",
                                                            }}
                                                       />
                                                  </div>
                                             </Label>
                                             <ErrorMessage name="passwordConfirmation">
                                                  {(message) => <StyledInlineErrorMessage>{message}</StyledInlineErrorMessage>}
                                             </ErrorMessage>
                                        </div>
                                        <Submit type="submit" disabled={!isValid || isSubmitting}>
                                             Отправить
                                        </Submit>
                                   </Form>
                              )}
                         </Formik>
                    </ChangePasswordBlock>
               </BlockRight>
          </WrapperRegister>
     );
};

export default ChangePassword;
