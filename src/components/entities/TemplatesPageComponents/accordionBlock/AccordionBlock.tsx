import React from "react";
import styles from "@/src/components/entities/TemplatesPageComponents/accordionBlock/styles/AccordionBlock.module.css";
import Image from "next/image";
import imageAccor from "@/src/components/entities/TemplatesPageComponents/accordionBlock/img/OBJECTS.svg";
import { CONFIG_ACCORDION } from "@/src/components/entities/TemplatesPageComponents/accordionBlock/ConfigAccordion";

import AccordionList from "@/src/components/entities/lists/accordionList/AccordionList";
import Title from "@/src/components/shared/text/Title";

const AccordionBlock = () => {
     return (
          <div className={styles.wrapper}>
               <div className={styles.leftBlock}>
                    <Title type={"h3"} color={"black"}>
                         Что умеет чат-бот?
                    </Title>
                    <AccordionList data={CONFIG_ACCORDION} />
               </div>
               <div className={styles.rightBlock}>
                    <Image src={imageAccor} alt="Image" />
               </div>
          </div>
     );
};

export default AccordionBlock;