import Link from "next/link";
import React from "react";
import uuid from "uuid-random";
import styles from "./styles/styles.module.css";
import Text from "@/src/components/shared/textfields/Text";

interface NavElement {
     text: string;
     href: string;
}

export enum NavBarClasses {
     navBarHome = "navBarHome",
}

interface NavbarHomeProps {
     navElements: Array<NavElement>;
     className: NavBarClasses.navBarHome;
}

const NavbarHome = ({ navElements, className }: NavbarHomeProps) => {
     return (
          <nav className={styles[className]}>
               {navElements.map(({ href, text }) => (
                    <Link key={uuid()} href={href}>
                         <Text type={"reg20"} color={"black"}>
                              {text}
                         </Text>
                    </Link>
               ))}
          </nav>
     );
};

export default NavbarHome;