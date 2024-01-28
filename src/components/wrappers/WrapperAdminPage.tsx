import Link from "next/link";
import { FC, PropsWithChildren, useState } from "react";
import css from "./styles/styles.module.css";
import Text from "../shared/text/Text";
import Logo, { LogoVariantProps } from "../shared/Logo/Logo";
import Image from "next/image";
import Footer from "../features/HomePage/Footer/Footer";

const adminNavigation = [
    { title: "Кабинет администратора", href: "/admin", icon: "/admin/icon_home.svg" },
    { title: "Администрация и модерация", href: "/admin/users/all", icon: "/admin/icon_people.svg" },
    { title: "Платформы", href: "/admin/platforms", icon: "/admin/icon_platform.svg" },
    { title: "Решения", href: "/admin/solutions", icon: "/admin/icon_solution.svg" },
    { title: "Настройки", href: "/admin/settings", icon: "/admin/icon_settings.svg" },
];

export const WrapperAdminPage: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div>
            <div className={css.container}>
                <div className={css.navigationPanel}>
                    <Link href={"/home"}>
                        <Logo variant={LogoVariantProps.admin} className={css.logo} />
                    </Link>
                    <ul className={css.listNav}>
                        {adminNavigation.map(({ title, href, icon }) => (
                            <Link href={href} key={title} className={css.nav}>
                                <div className={css.link}>
                                    <Image src={icon} alt="icon" width={24} height={24} />
                                    <Text type="med20" color="dark">
                                        {title}
                                    </Text>
                                </div>
                            </Link>
                        ))}
                    </ul>
                </div>

                <div>{children}</div>
            </div>
            <Footer />
        </div>
    );
};
