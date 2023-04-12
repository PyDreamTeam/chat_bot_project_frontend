import React from "react";
import styles from "@/src/components/entities/TemplatesPageComponents/accordionBlock/styles/AccordionBlock.module.css";
import Image from "next/image";
import imageAccor from "@/src/components/entities/TemplatesPageComponents/accordionBlock/img/OBJECTS.svg";
import Text from "@/src/components/shared/textfields/Text";
import { CONFIG_ACCORDION } from "@/src/components/entities/TemplatesPageComponents/accordionBlock/ConfigAccordion";

import AccordionList from "@/src/components/entities/lists/accordionList/AccordionList";

const AccordionBlock = () => {
     return (
          <div className={styles.wrapper}>
               <div className={styles.leftBlock}>
                    <Text type={"h3"} color={"black"}>
                         Что умеет чат-бот?
                    </Text>
                    <AccordionList data={CONFIG_ACCORDION} />
               </div>
               <div className={styles.rightBlock}>
                    <Image src={imageAccor} alt="Image" />
               </div>
          </div>
     );
};

export default AccordionBlock;