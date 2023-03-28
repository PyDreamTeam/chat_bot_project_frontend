import ChangePassword from "@/src/components/entities/forms/formMyAccount/changePassword/ChangePassword";
import AccountPageWrapper from "@/src/components/widgets/AccountpageWrapper";
import React from "react";

const ChangePasswordPage = () => {
     return (
       <AccountPageWrapper page={"profile_settings_password"}>
            <ChangePassword/>
       </AccountPageWrapper>
     );
};

export default ChangePasswordPage;