import { ContainerAdminFunction } from "@/src/components/layout/ContainerAdminFunction";
import AccountPageCredential from "@/src/components/entities/accountpageSettings/AccountpageCredentials";
import { WrapperAdminPage } from "@/src/components/wrappers/WrapperAdminPage";
import styles from "./personalData.module.css";
import Cookies from "js-cookie";
import { useDataUserQuery } from "@/src/store/services/userAuth";
import PersonalDataForm from "@/src/components/entities/forms/formMyAccount/personalData/PersonalData";

const PersonalDataAdmin = () => {
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const { data } = useDataUserQuery(token);

    return (
        <WrapperAdminPage>
            <ContainerAdminFunction page="personal-data">
                <AccountPageCredential
                    page="profile_settings_personalData"
                    phone_number={data?.phone_number}
                    email={data?.email}
                    isEmailVerified={true}
                    first_name={data?.first_name}
                    last_name={data?.last_name}
                />
                <PersonalDataForm />
            </ContainerAdminFunction>
        </WrapperAdminPage>
    );
};

export default PersonalDataAdmin;
