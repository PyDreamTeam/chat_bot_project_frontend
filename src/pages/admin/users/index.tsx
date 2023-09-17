import { ContainerAdminFunction } from "@/src/components/layout/ContainerAdminFunction";
import { WrapperAdminPage } from "@/src/components/wrappers/WrapperAdminPage";

const UsersAdmin = () => {
    return(
        <WrapperAdminPage>
            <ContainerAdminFunction>
                Здесь будет работа с пользователями админа
            </ContainerAdminFunction>
        </WrapperAdminPage>
    );
};

export default UsersAdmin;