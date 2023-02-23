import React from "react";

import { WrapperRegister, BlockLeft, BlockRight, ContentBlock } from "@/src/components/common/StyledRegister.styled";
import { Title } from "@/src/components/common/Title.styled";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { Label } from "@/src/components/common/Label.styled";
import { Input, StyledInlineErrorMessage } from "@/src/components/common/Input.styled";
import { Submit } from "@/src/components/common/Button.styled";
import { useRecoveryPasswordMutation } from "@/src/app/services/auth";

const RecoveryPassword = () => {
     const [recoveryPassword, recoveryPasswordResponse] = useRecoveryPasswordMutation();
     console.log(recoveryPasswordResponse.isSuccess);

     return (
          <WrapperRegister>
               <BlockLeft />
               <BlockRight>
                    <ContentBlock>
                         <Title>Восстановление пароля</Title>
                         <p>
                              {recoveryPasswordResponse.isSuccess
                                   ? "Письмо отправлено"
                                   : "Укажите Email, на который вы создавали личный кабинет"}
                         </p>
                         <Formik
                              initialValues={{ email: "" }}
                              onSubmit={(values, actions) => {
                                   recoveryPassword(values);
                              }}
                              validationSchema={Yup.object().shape({
                                   email: Yup.string()
                                        .email("Электронная почта неверна")
                                        .required("Введите электронную почту"),
                              })}
                         >
                              {({ values, errors, touched, handleSubmit, isSubmitting, isValidating, isValid }) => (
                                   <Form name="contact" method="post" onSubmit={handleSubmit}>
                                        <Label htmlFor="email">
                                             <p>E-mail</p>
                                             <Input
                                                  type="email"
                                                  name="email"
                                                  autoCapitalize="off"
                                                  autoCorrect="off"
                                                  autoComplete="email"
                                                  placeholder="example@mail.com"
                                                  valid={Boolean(touched.email && !errors.email)}
                                                  error={Boolean(touched.email && errors.email)}
                                             />
                                        </Label>
                                        <ErrorMessage name="email">
                                             {(message) => (
                                                  <StyledInlineErrorMessage>{message}</StyledInlineErrorMessage>
                                             )}
                                        </ErrorMessage>
                                        <Submit type="submit" disabled={!isValid || isSubmitting}>
                                             Отправить
                                        </Submit>
                                   </Form>
                              )}
                         </Formik>
                    </ContentBlock>
               </BlockRight>
          </WrapperRegister>
     );
};

export default RecoveryPassword;
