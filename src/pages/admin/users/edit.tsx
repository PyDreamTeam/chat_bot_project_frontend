import { ContainerAdminFunction } from "@/src/components/layout/ContainerAdminFunction";
import { WrapperAdminPage } from "@/src/components/wrappers/WrapperAdminPage";
import Text from "@/src/components/shared/text/Text";
import Link from "next/link";
import css from "./styles/addUser.module.css";
import EditAdministrator from "@/src/components/entities/forms/formAdministrators/editAdministrator/EditAdministrator";

const editUser = ({ id }: { id: number; }) => {
    return (
        <WrapperAdminPage>
            <ContainerAdminFunction title={"Изменить Данные"}>
                <div className={css.links}>
                    <Link href={"/admin"}>
                        <Text type="reg16" color="telegray">Главная</Text>
                    </Link>
                    <span className={css.link}>/Администрация и модерация</span>
                    <span className={css.link}>/Управление пользователями</span>
                    <span className={css.link}>/Изменить данные {id}</span>
                </div>
                <EditAdministrator />
            </ContainerAdminFunction>
        </WrapperAdminPage>
    );
};
export default editUser;