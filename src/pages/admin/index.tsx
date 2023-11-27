import AccountPageHeader from "@/src/components/features/AccountPage/AccountPageHeader/AccountPageHeader";
import { ContainerAdminFunction } from "@/src/components/layout/ContainerAdminFunction";
import Title from "@/src/components/shared/text/Title";
import { WrapperAdminPage } from "@/src/components/wrappers/WrapperAdminPage";
import { useDataUserQuery } from "@/src/store/services/userAuth";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import css from "./admin.module.css";

const adminNavigation = [
    { title: "Администрация и модерация", href: "/admin/users/all", icon: "/admin/icon_people.svg" },
    { title: "Платформы", href: "/admin/platforms", icon: "/admin/icon_platform.svg" },
    { title: "Решения", href: "/admin/solutions", icon: "/admin/icon_solution.svg" },
    { title: "Главная страница", href: "/admin", icon: "/admin/icon_home.svg" },
    { title: "Личный кабинет", href: "/admin/account", icon: "/admin/icon_admin.svg" },
    { title: "Настройки", href: "/admin/settings", icon: "/admin/icon_settings.svg" },
];

const AdminPage = () => {

    return (
        <WrapperAdminPage>
            <ContainerAdminFunction>
                <ul className={css.listNav}>
                    {adminNavigation.map(({ title, href, icon }) => (
                        <Link href={href} key={title} className={css.nav}>
                            <Image src={icon} alt="icon" width={94} height={94} className={css.icon} />
                            <Title type="h5" color="dark">{title}</Title>
                        </Link>
                    ))}
                </ul>
            </ContainerAdminFunction>
        </WrapperAdminPage>
    );
};

export default AdminPage;