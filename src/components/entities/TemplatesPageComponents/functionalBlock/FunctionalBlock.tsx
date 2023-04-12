import React from "react";
import Text from "@/src/components/shared/textfields/Text";
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
                    <Text type={"h3"} color={"black"}>
                         Функционал для настроек чат-ботов
                    </Text>
                    <ListWithCheck titleConfig={CONFIG} />
               </div>
          </div>
     );
};

export default FunctionalBlock;