import { ContainerAdminFunction } from "@/src/components/layout/ContainerAdminFunction";
import { WrapperAdminPage } from "@/src/components/wrappers/WrapperAdminPage";
import Text from "@/src/components/shared/text/Text";
import Link from "next/link";
import css from "./styles/addUser.module.css";
import NewAdministrator from "@/src/components/entities/forms/formAdministrators/newAdministrator/NewAdministrator";

const addUser = () => {
    return (
        <WrapperAdminPage>
            <ContainerAdminFunction>
                <div className={css.links}>
                    <Link href={"/admin"}>
                        <Text type="reg16" color="telegray">Главная</Text>
                    </Link>
                    <span className={css.link}>/Администрация и модерация</span>
                    <span className={css.link}>/Управление пользователями</span>
                    <span className={css.link}>/Добавить пользователя</span>
                </div>
                <NewAdministrator />
            </ContainerAdminFunction>
        </WrapperAdminPage>
    );
};
export default addUser;