import NavbarHome, { NavBarClasses } from "@/src/components/entities/navbars/NavbarHome";
import ButtonAuthHeader, { ButtonAuthClasses } from "@/src/components/shared/buttons/ButtonAuthHeader";
import { clientEndpoints } from "@/src/shared/routes/client-endpoints";
import React from "react";
import styles from "./HeaderRightBlock.module.css";
import {SelectLanguage} from "@/src/components/features/HomePage/Header/components/SelectLanguage/SelectLanguage";

const navElements = [
     { href: "/home", text: "О сервисе" },
     { href: "/home", text: "Статьи" },
     { href: "/home", text: "Решения" },
     { href: "/platforms-filters", text: "Платформы" },
];

const HeaderRightBlock = () => {
     return (
          <div className={styles.rightBlock}>
               <NavbarHome navElements={navElements} className={NavBarClasses.navBarHome} />
               <div className={styles.buttonsAuthWrapper}>
                    <SelectLanguage/>
                    <ButtonAuthHeader text="Войти" className={ButtonAuthClasses.signIn} href={clientEndpoints.signIn.get} />
                    <ButtonAuthHeader text="Регистрация" className={ButtonAuthClasses.signUp} href={clientEndpoints.signUp.get} />
               </div>
          </div>
     );
};

export default HeaderRightBlock;