import React from "react";
import {initialValuesPersonData, inputPersonData, validationSchemaPersonData} from "@/src/pagesData/personal-data";
import FormUniversal from "@/src/components/entities/forms/FormUniversal";

const PersonalData = () => {
     return (
          <>
               <FormUniversal
                    onSubmit={() => console.log(1)}
                    validationSchema={validationSchemaPersonData}
                    classNameForm="personalData"
                    buttonSubmitText="Сохранить изменения"
                    initialValues={initialValuesPersonData}
                    inputFieldData={inputPersonData}
               />
          </>
     );
};

export default PersonalData;