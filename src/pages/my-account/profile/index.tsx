import AccountPageCredential from "@/src/components/entities/accountpageSettings/AccountpageCredentials";
import SearchHistory from "@/src/components/entities/MyAccountPageComponents/searchHistory/SearchHistory";
import AccountPageWrapper from "@/src/components/wrappers/AccountpageWrapper";
import { useAppSelector } from "@/src/hooks/types";
import { useDataUserQuery } from "@/src/store/services/userAuth";
import { useRouter } from "next/router";
import React from "react";
import Cookies from "js-cookie";

const Profile = () => {
    const router = useRouter();
    const token = JSON.parse(Cookies.get("loginUser") || "[]");

    const { data } = useDataUserQuery(token);

    //if (data?.user_role === ("AD" || "SA")) router.push("/admin");

    return (
        <AccountPageWrapper page="profile_templates">
            <AccountPageCredential
                page="profile_templates"
                phone_number={data?.phone_number}
                email={data?.email}
                isEmailVerified={true}
                first_name={data?.first_name}
                last_name={data?.last_name}
            />
        </AccountPageWrapper>
    );
};

export default Profile;
