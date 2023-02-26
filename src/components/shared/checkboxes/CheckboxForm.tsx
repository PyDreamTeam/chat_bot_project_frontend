import React from "react";
import styles from "./styles/styles.module.css";
import { Field } from "formik";

const CheckboxForm = () => {
     return (
          <Field
               className={styles.checkboxForm}
               id={"checkboxForm"}
               type="checkbox"
               name="getNotifications"
               value="Я хочу получать уведомления и новости на почту"
          />
     );
};

export default CheckboxForm;
