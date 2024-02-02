import React, { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Text from "@/src/components/shared/text/Text";
import Image from "next/image";
import styles from "./SubMenu.module.css";
import { ISidebarItem } from "./AdminSidebarData";

interface IPropsSubmenu {
    item: ISidebarItem;
    id: number;
    isOpen: boolean;
}

const SubMenu: FC<IPropsSubmenu> = ({ item, id, isOpen }) => {
    console.log(`${id} -isOpen- ${isOpen}`);
    const pathname = usePathname();
    const router = useRouter();

    const [subnav, setSubnav] = useState(isOpen);

    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <Link
                href={item.path}
                className={`${styles.nav} 
        ${pathname === item.path ? styles.active : null}
        `}
                onClick={item.subNav && showSubnav}
            >
                <div className={styles.link}>
                    <Image src={item.icon} alt="icon" width={24} height={24} />
                    <Text type="med20" color="dark">
                        {item.title}
                    </Text>
                </div>
                <div className={styles.navArrow}>
                    {item.subNav && subnav ? (
                        <Image src="/admin/icon_arrow_up.svg" alt="icon" width={24} height={24} />
                    ) : item.subNav ? (
                        <Image src="/admin/icon_arrow_right.svg" alt="icon" width={24} height={24} />
                    ) : null}
                </div>
            </Link>
            {subnav &&
                item.subNav?.map((item, index) => {
                    return (
                        <Link
                            href={item.path}
                            className={`${styles.subNav} 
        ${pathname === item.path ? styles.active : null}
        `}
                            key={index}
                        >
                            <Image src={item.icon} alt="icon" width={24} height={24} />
                            <Text type="med20" color="dark">
                                {item.title}
                            </Text>
                        </Link>
                    );
                })}
        </>
    );
};

export default SubMenu;
