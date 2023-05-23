import React from "react";
import { initialValuesPersonData, inputPersonData, validationSchemaPersonData } from "@/src/pagesData/personal-data";
import FormUniversal from "@/src/components/entities/forms/FormUniversal";
import styles from "../styles/FormMyAccount.module.css";
import Title from "@/src/components/shared/text/Title";

const PersonalDataForm = () => {
     return (
          <div className={styles.personalDataBlock}>
               <Title color={"black"} type={"h5"}>
                    Персональные данные
               </Title>
               <FormUniversal
                    onSubmit={() => console.log(1)}
                    validationSchema={validationSchemaPersonData}
                    classNameForm="personalData"
                    buttonSubmitText="Сохранить изменения"
                    initialValues={initialValuesPersonData}
                    inputFieldData={inputPersonData}
               />
          </div>
     );
};

export default PersonalDataForm;