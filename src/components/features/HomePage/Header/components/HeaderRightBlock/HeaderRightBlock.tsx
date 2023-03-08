import NavbarHome, { NavBarClasses } from "@/src/components/entities/navbars/NavbarHome";
import ButtonAuthHeader, { ButtonAuthClasses } from "@/src/components/shared/buttons/ButtonAuthHeader";
import React from "react";
import styles from "./HeaderRightBlock.module.css";

const navElements = [
     { href: "/home", text: "О сервисе" },
     { href: "/home", text: "Тарифы" },
     { href: "/home", text: "Статьи" },
];

const HeaderRightBlock = () => {
     return (
          <div className={styles.rightBlock}>
               <NavbarHome navElements={navElements} className={NavBarClasses.navBarHome} />
               <div className={styles.buttonsAuthWrapper}>
                    <ButtonAuthHeader text="Войти" className={ButtonAuthClasses.signIn} href="/sign-in" />
                    <ButtonAuthHeader text="Регистрация" className={ButtonAuthClasses.signUp} href="/sign-up" />
               </div>
          </div>
     );
};

export default HeaderRightBlock;