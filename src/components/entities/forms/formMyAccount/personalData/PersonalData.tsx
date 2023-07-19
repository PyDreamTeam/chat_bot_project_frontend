import React, {useEffect} from "react";
import { initialValuesPersonData, inputPersonData, validationSchemaPersonData } from "@/src/pagesData/personal-data";
import FormUniversal from "@/src/components/entities/forms/FormUniversal";
import styles from "../styles/FormMyAccount.module.css";
import Title from "@/src/components/shared/text/Title";
import { DataForm } from "../../../DataForm/DataForm";
import * as Yup from "yup";
import { useVerifyUserMutation } from "@/src/store/services/userAuth";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

interface PersonalData {
     htmlFor: string
     label: string
     type: string
     name: "first_name" | "last_name" | "number";
     placeholder: string
}

const schema: Array<PersonalData> = [
     {
          htmlFor: "first_name",
          label: "Имя",
          name: "first_name",
          placeholder: "Иван",
          type: "text"
     },
     {
          htmlFor: "last_name",
          label: "Фамилия",
          name: "last_name",
          placeholder: "Иванов",
          type: "text"
     },
     {
          htmlFor: "number",
          label: "Телефон",
          name: "number",
          placeholder: "+375299652084",
          type: "text"
     }
];

const PersonalDataForm = () => {
     const token = JSON.parse(Cookies.get("loginUser") || "[]");
     const [verifyUser, {isError}] = useVerifyUserMutation();
     const router = useRouter();

     useEffect(() => {
          verifyUser(token.access);
     },[]);
     useEffect(() => {
          if(isError) {
               router.push("/sign-in");
          }
     }, [isError]);

     return (
          <div className={styles.personalDataBlock}>
               <Title color={"black"} type={"h5"}>
                    Персональные данные
               </Title>
               <DataForm schema={schema}/>
          </div>
     );
};

export default PersonalDataForm;