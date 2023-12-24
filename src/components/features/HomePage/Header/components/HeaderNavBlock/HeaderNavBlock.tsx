import React from "react";
import NavbarHome, { NavBarClasses } from "@/src/components/entities/navbars/NavbarHome";

const navElements = [
    { href: "/about", text: "О сервисе" },
    { href: "/articles", text: "Статьи" },
    { href: "/solutions-filter", text: "Решения" },
    { href: "/platforms-filter", text: "Платформы" },
];

const HeaderNavBlock = () => {
    return <NavbarHome navElements={navElements} className={NavBarClasses.navBarHome} />;
};

export default HeaderNavBlock;
