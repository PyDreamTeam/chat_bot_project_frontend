import React from "react";
import { initialValuesPersonalData, inputPersonalData, validationSchemaPersonalData } from "@/src/pagesData/personal-data";
import FormUniversal from "@/src/components/entities/forms/FormUniversal";

const PersonalData = () => {
     return (
          <>
               <FormUniversal
                    onSubmit={() => console.log(1)}
                    validationSchema={validationSchemaPersonalData}
                    classNameForm="personalData"
                    buttonSubmitText="Сохранить изменения"
                    initialValues={initialValuesPersonalData}
                    inputFieldData={inputPersonalData}
               />
          </>
     );
};

export default PersonalData;
