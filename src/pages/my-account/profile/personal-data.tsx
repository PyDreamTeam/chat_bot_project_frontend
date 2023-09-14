import React from "react";
import AccountPageWrapper from "@/src/components/wrappers/AccountpageWrapper";
import { useRouter } from "next/router";
import { useAppSelector } from "@/src/hooks/types";
import AccountPageCredential from "@/src/components/entities/accountpageSettings/AccountpageCredentials";
import SelectTitle from "@/src/components/entities/selectTitle/SelectTitle";
import { SELECT_TITLE_CONFIG } from "@/src/components/entities/selectTitle/SelectTitleConfig";
import PersonalDataForm from "@/src/components/entities/forms/formMyAccount/personalData/PersonalData";
import { useDataUserQuery } from "@/src/store/services/userAuth";
import Cookies from "js-cookie";

const PersonalData = () => {
    
    const router = useRouter();
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const { data } = useDataUserQuery(token);

    return (
        <AccountPageWrapper page="profile_settings_personalData">
            <AccountPageCredential
                page="profile_settings_personalData"
                phone_number={data?.phone_number}
                email={data?.email}
                isEmailVerified={true}
                first_name={data?.first_name}
                last_name={data?.last_name}
            />
            <PersonalDataForm />
        </AccountPageWrapper>
    );
};

export default PersonalData;
