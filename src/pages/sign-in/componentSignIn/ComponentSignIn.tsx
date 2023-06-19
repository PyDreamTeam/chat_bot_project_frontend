import Text from "@/src/components/shared/text/Text";
import Title from "@/src/components/shared/text/Title";
import { useAppDispatch } from "@/src/hooks/types";
import { actions } from "@/src/store/userAuth/sliceUser";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { FC } from "react";
import * as Yup from "yup";

interface PropsSignIn {
    schema: {
        htmlFor: string
        label: string
        type: string
        name: string
        placeholder: string
    }[]
}

const ComponentSignIn: FC<PropsSignIn> = ({ schema = [] }) => {
     const dispatch = useAppDispatch();

     return (
          <div>
               <Title type="h1" color="black">Вход</Title>
               <Formik
                    initialValues={{
                         email: "",
                         password: "",
                    }}
                    validationSchema={Yup.object().shape({
                         email: Yup.string().email("Неккоректный email").required("Введите e-mail"),
                         password: Yup.string().required("Введите пароль")
                    })}
                    onSubmit={(values) => {
                         alert(JSON.stringify(values));
                         dispatch(actions.fetchLoginUser(values));
                    }}
               >
                    {({isSubmitting, errors, touched }) => {

                         return (
                              <Form>
                                   {schema.map((item) => (
                                        <div key={item.name}>
                                             <label htmlFor={item.htmlFor}>
                                                  <Text type="reg18" color="black">{item.label}</Text>
                                             </label>
                                             <Field type={item.type} name={item.name} placeholder={item.placeholder} />
                                             <div>
                                                  <ErrorMessage name={item.name} />
                                             </div>

                                        </div>

                                   ))}

                                   <button type="submit" disabled={isSubmitting}>
                                Войти
                                   </button>
                              </Form>
                         );
                    }}
               </Formik>
          </div >
     );
};

export default ComponentSignIn;