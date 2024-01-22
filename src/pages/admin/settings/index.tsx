import { ContainerAdminFunction } from "@/src/components/layout/ContainerAdminFunction";
import { WrapperAdminPage } from "@/src/components/wrappers/WrapperAdminPage";
import CardAccountMainPage from "@/src/components/entities/CardAccountMainPage/CardAccountMainPage";
import styles from "./settings.module.css";
import Link from "next/link";
import Image from "next/image";

const SETTINGS_CONFIG = [
    {
        id: 1,
        href: "/admin/settings/personal-data",
        title: "Персональные данные",
        icon: "/admin/icon_admin.svg",
    },
    {
        id: 2,
        href: "/admin/settings/tariffs",
        title: "Тарифы",
        icon: "/admin/icon_settings.svg",
    },
];

const SettingsAdmin = () => {
    return (
        <WrapperAdminPage>
            <ContainerAdminFunction>
                <div className={styles.container}>
                    {SETTINGS_CONFIG.map((item) => (
                        <Link href={item.href} key={item.id}>
                            <div className={styles.card}>
                                <Image src={item.icon} alt="icon" width={64} height={64} className={styles.icon} />
                                <p className={styles.title}>{item.title}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </ContainerAdminFunction>
        </WrapperAdminPage>
    );
};

export default SettingsAdmin;
