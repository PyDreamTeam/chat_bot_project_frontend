import { useRouter } from "next/router";
import { ContainerAdminFunction } from "@/src/components/layout/ContainerAdminFunction";
import { WrapperAdminPage } from "@/src/components/wrappers/WrapperAdminPage";
import styles from "./changePasswordAdmin.module.css";
import Cookies from "js-cookie";
import { useDataUserQuery } from "@/src/store/services/userAuth";
import ChangePassword from "@/src/components/entities/forms/formMyAccount/changePassword/ChangePassword";

const changePasswordAdmin = () => {
    return (
        <WrapperAdminPage>
            <ContainerAdminFunction page="personal-data">
                <ChangePassword />
            </ContainerAdminFunction>
        </WrapperAdminPage>
    );
};

export default changePasswordAdmin;
