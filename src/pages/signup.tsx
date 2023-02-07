import React from "react";
import {Formik, Form, ErrorMessage} from "formik";

import {Label} from "@/src/components/common/Label.styled";
import {Input} from "@/src/components/common/Input.styled";
import {Button} from "@/src/components/common/Button.styled";
import {StyledInlineErrorMessage} from "@/src/components/common/StyledInlineErrorMessage.styled";

// в value приходит значение с поля ввода(email который ввели)
// function validateEmail(value: string) {
//     if(!value) {
//         return 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
//        return 'Invalid email address' ;
//     }
// }
//
// function validatePassword (value: string) {
//     if (!value) {
//         return 'Required';
//     }
// }

export const Signup = () => {
    return (
               <Formik initialValues={{
                   fullname: '',
                   email: '',
               }} onSubmit={values => {
                   console.log('submit', values)    // submit сработает если валидация прошла успешно
               }}
               >
                    {/*errors - выдаст ошибки, touched - покажет что пользователь взаимодействовал с полем (трогал поле), но не заполнил его!*/}
                   {({errors, touched}) => (
                       <Form>
                           <Label htmlFor="fullname">
                               Fullname
                               <Input
                                   type="text"
                                   name="fullname"
                                   autoCorrect="off"
                                   autoComplete="name"
                                   placeholder="your fullname"
                                   valid={touched.fullname && !errors.fullname}
                                   error={touched.fullname && errors.fullname}
                               />
                           </Label>
                           {errors.fullname && touched.fullname && (
                               <StyledInlineErrorMessage>
                                   {errors.fullname}
                               </StyledInlineErrorMessage>
                           )}
                           <Label htmlFor="email">
                               Email
                               <Input
                                   type="email"
                                   name="email"
                                   autoCapitalize="off"
                                   autoCorrect="off"
                                   autoComplete="email"
                                   placeholder="your email"
                                   valid={touched.email && !errors.email}
                                   error={touched.email && errors.email}
                               />
                           </Label>
                           <ErrorMessage name="email">
                               {message => (
                                   <StyledInlineErrorMessage>{message}</StyledInlineErrorMessage>
                               )}
                           </ErrorMessage>
                           <Button type="submit" >
                               {`Submit`}
                           </Button>
                       </Form>
                   )}
               </Formik>
    );
};

export default Signup;