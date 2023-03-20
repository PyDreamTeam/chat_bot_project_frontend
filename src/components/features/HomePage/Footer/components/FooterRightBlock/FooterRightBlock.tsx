import { Form, Formik } from "formik";
import * as Yup from "yup";
import styles from "./FooterRightBlock.module.css";
import InputField, { InputVariantProps } from "@/src/components/shared/inputs/InputAuthField";
import { LabelTypes } from "@/src/components/shared/labels/Label";

const FooterLeftBlock = () => {
     return (
          <div className={styles.footerRightContainer}>
               <h2>Портал о мессенджер-маркетинге и чат-ботах</h2>
               <Formik
                    initialValues={{ email: "" }}
                    onSubmit={() => console.log(1)}
                    validationSchema={Yup.object().shape({
                         email: Yup.string().email("Электронная почта неверна").required("Введите электронную почту"),
                    })}
               >
                    {({ values, errors, touched, handleSubmit, isSubmitting, isValidating, isValid }) => (
                         <Form name="contact" method="post" onSubmit={() => console.log(1)}>
                              <InputField
                                   variant={InputVariantProps.forFooter}
                                   name={"email"}
                                   placeholder={"E-mail"}
                                   valid={Boolean(touched.email && !errors.email)}
                                   error={Boolean(touched.email && errors.email)}
                                   htmlFor={"email"}
                                   typeLabel={LabelTypes.inputField}
                              ></InputField>
                         </Form>
                    )}
               </Formik>
          </div>
     );
};

export default FooterLeftBlock;
