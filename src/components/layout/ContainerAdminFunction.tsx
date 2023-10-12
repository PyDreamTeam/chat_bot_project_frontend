import { FC, PropsWithChildren } from "react";
import css from "./style.module.css";
import AccountPageHeader from "../features/AccountPage/AccountPageHeader/AccountPageHeader";
import Cookies from "js-cookie";
import { useDataUserQuery } from "@/src/store/services/userAuth";
import { WithChildren } from "@/src/shared/types/withChildren";

interface IAdminContainer {
    title?: string;
}

export const ContainerAdminFunction: FC<IAdminContainer & WithChildren> = ({ children, title }) => {

    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const { data } = useDataUserQuery(token);

    return (
        <div className={css.containerAdminFunction}>
            <AccountPageHeader page="adminPage" title={title} name={`${data?.first_name} ${data?.last_name}`} />
            {children}
        </div>
    );
};