import { FC, PropsWithChildren } from "react";
import css from "./style.module.css";
import AccountPageHeader from "../features/AccountPage/AccountPageHeader/AccountPageHeader";
import Cookies from "js-cookie";
import { useDataUserQuery } from "@/src/store/services/userAuth";

export const ContainerAdminFunction: FC<PropsWithChildren> = ({children}) => {

    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const {data} = useDataUserQuery(token);

    return(
        <div className={css.containerAdminFunction}>
            <AccountPageHeader page="adminPage" name={`${data?.first_name} ${data?.last_name}`}/>
            {children}
        </div>
    );
};