import { ContainerAdminFunction } from "@/src/components/layout/ContainerAdminFunction";
import { WrapperAdminPage } from "@/src/components/wrappers/WrapperAdminPage";

const AccountAdmin = () => {
    return(
        <WrapperAdminPage>
            <ContainerAdminFunction>
                Здесь будет личный кабинет админа
            </ContainerAdminFunction>
        </WrapperAdminPage>
    );
};

export default AccountAdmin;