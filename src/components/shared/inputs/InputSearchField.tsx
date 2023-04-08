import React, { FC } from "react";

import styles from "./styles/styles.module.css";
import { Field, Form, Formik } from "formik";
import { IInitialValues } from "@/src/components/entities/forms/FormUniversal";
import Image from "next/image";
import InputSearch from "./img/SearchInput.svg";

const InputSearchField = () => {
     return (
          <Formik initialValues={{ searchValue: "" }} onSubmit={() => console.log(1)}>
               {({ touched }) => (
                    <div className={styles.inputSearchBlock}>
                         <Form className={styles.inputSearchForm}>
                              <Image className={styles.inputSearchImg} alt={"magnifier"} src={InputSearch} />
                              <Field
                                   className={styles.inputSearchField}
                                   type={"text"}
                                   id={"searchField"}
                                   name={"search"}
                                   placeholder={"Найти платформу"}
                              />
                         </Form>
                    </div>
               )}
          </Formik>
     );
};

export default InputSearchField;
