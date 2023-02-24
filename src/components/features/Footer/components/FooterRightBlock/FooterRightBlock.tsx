import { Arrow } from "@/src/components/features/Footer/pictures/SvgConfig";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Label } from "@/src/components/Label.styled";
import { FooterInput } from "@/src/components/Input.styled";
import styles from "./FooterRightBlock.module.css";

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
                              <div className={styles.footerInputBlock}>
                                   <Label htmlFor={"email"}>
                                        <FooterInput
                                             type="email"
                                             name="email"
                                             autoCapitalize="off"
                                             autoCorrect="off"
                                             autoComplete="email"
                                             placeholder="E-mail"
                                             valid={Boolean(touched.email && !errors.email)}
                                             error={Boolean(touched.email && errors.email)}
                                        ></FooterInput>
                                   </Label>
                                   <button className={styles.footerArrowButton}>{Arrow}</button>
                              </div>
                         </Form>
                    )}
               </Formik>
          </div>
     );
};

export default FooterLeftBlock;
