import React from "react";
import styles from "./styles/styles.module.css";
import Link from "next/link";

const ButtonTemplates = () => {
     return (
          <Link href={"/my-account"}>
               <button className={styles.templatesFooterButton}>Вернуться к выбору шаблонов</button>
          </Link>
     );
};

export default ButtonTemplates;
