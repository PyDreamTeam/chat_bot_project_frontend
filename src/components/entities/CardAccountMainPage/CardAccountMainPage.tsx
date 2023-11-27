import React, { FC } from "react";
import styles from "../CardAccountMainPage/CardAccountMainPage.module.css";
import Link from "next/link";


export interface ICardAccountMainPage {
    id?: number;
    title: string;
    icon: React.ReactNode;
    href: string;
}


const CardAccountMainPage: FC<ICardAccountMainPage> = ({id, title, icon, href}) => {
    return (
        <div className={styles.container}>
            <Link href={href}>
                <div>{icon}</div>
                <p className={styles.title}>{title}</p>
            </Link>
        </div>
    );
};

export default CardAccountMainPage;