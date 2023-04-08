import React from "react";
import TextField from "@/src/components/shared/textfields/TextField";
import ListWithCheck from "@/src/components/entities/lists/listWithCheck/ListWithCheck";
import { CONFIG } from "@/src/components/entities/TemplatesPageComponents/functionalBlock/Config";
import Image from "next/image";
import imageDev from "./img/Group.svg";

import styles from "./styles/FunctionalBlock.module.css";

const FunctionalBlock = () => {
     return (
          <div className={styles.wrapper}>
               <div className={styles.leftBlock}>
                    <Image src={imageDev} alt="Developers" />
               </div>
               <div className={styles.rightBlock}>
                    <TextField type={"h3"} color={"black"}>
                         Функционал для настроек чат-ботов
                    </TextField>
                    <ListWithCheck titleConfig={CONFIG} />
               </div>
          </div>
     );
};

export default FunctionalBlock;
