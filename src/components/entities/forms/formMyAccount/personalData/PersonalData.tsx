import React from "react";
import { initialValuesPersonData, inputPersonData, validationSchemaPersonData } from "@/src/pagesData/personal-data";
import FormUniversal from "@/src/components/entities/forms/FormUniversal";
import styles from "../styles/FormMyAccount.module.css"
import TextField from "@/src/components/shared/textfields/TextField";


const PersonalData = () => {
     return (
          <div className={styles.personalDataBlock}>
               <TextField color={"black"} type={"h4"}>Персональные данные</TextField>
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

export default PersonalData;
