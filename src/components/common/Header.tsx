import {Logo} from "@/src/components/common/Logo.styled";
import Link from "next/link";

import React from "react";

export const Header = () => {


    return (
        <header style={{
            maxWidth: '1440px',
            padding: '47px 87px 45px 88px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: "space-between",
        }}>
            <div>
                <Logo>TOWNSEND</Logo>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: "space-between",
            }}>
                <ul style={{
                    display: 'flex',
                    justifyContent: "space-between",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "24px",
                    lineHeight: "28px",
                    gap: "28px",
                    listStyleType: "none",
                    paddingRight: "60px",
                }}>
                    <li><a href="#" style={{
                        textDecoration: "none",
                        color: "#17181A",
                    }}
                    >О сервисе</a></li>
                    <li><a href="#" style={{
                        textDecoration: "none",
                        color: "#17181A",
                    }}
                    >Тарифы</a></li>
                    <li><a href="#" style={{
                        textDecoration: "none",
                        color: "#17181A",
                    }}
                    >Статьи</a></li>
                </ul>
                <div style={{
                    display: 'flex',
                    justifyContent: "space-between",
                }}>
                    <Link href={"/SignIn"}>
                        Вход
                    </Link>
                    <Link href={"/SignUp"}>
                        Регистрация
                    </Link>
                </div>

            </div>
        </header>
    )
}
export default Header;