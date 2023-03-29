import React from "react";
import styles from "@/src/components/entities/accordionBlock/styles/AccordionBlock.module.css";
import Image from "next/image";
import imageAccor from "@/src/components/entities/accordionBlock/pictures/OBJECTS.svg";
import TextField from "@/src/components/shared/textfields/TextField";
import {CONFIG_ACCORDION} from "@/src/components/entities/accordionBlock/ConfigAccordion";

import TabAccordion from "@/src/components/shared/tabs/tabAccordion/TabAccordion";


const AccordionBlock = () => {
     return (
          <div className={styles.wrapper}>
               <div className={styles.leftBlock}>
                    <TextField type={"h3"} color={"black"}>
                        Что умеет чат-бот?
                    </TextField>
                    <TabAccordion data={CONFIG_ACCORDION}/>
               </div>
               <div className={styles.rightBlock}>
                    <Image src={imageAccor} alt="Image"/>
               </div>
          </div>
     );
};

export default AccordionBlock;