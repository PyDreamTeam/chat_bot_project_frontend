import { ContainerAdminFunction } from "@/src/components/layout/ContainerAdminFunction";
import { WrapperAdminPage } from "@/src/components/wrappers/WrapperAdminPage";

const SettingsAdmin = () => {
    return(
        <WrapperAdminPage>
            <ContainerAdminFunction>
                Здесь будут настройки админа
            </ContainerAdminFunction>
        </WrapperAdminPage>
    );
};

export default SettingsAdmin;