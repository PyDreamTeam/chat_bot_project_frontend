import React from "react";
import { initialValuesPersonData, inputPersonData, validationSchemaPersonData } from "@/src/pagesData/personal-data";
import FormUniversal from "@/src/components/entities/forms/FormUniversal";
import styles from "../styles/FormMyAccount.module.css";
import Text from "@/src/components/shared/textfields/Text";

const PersonalDataForm = () => {
     return (
          <div className={styles.personalDataBlock}>
               <Text color={"black"} type={"subtitleH4"}>
                    Персональные данные
               </Text>
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