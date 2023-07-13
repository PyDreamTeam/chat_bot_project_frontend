import React from "react";
import Title from "@/src/components/shared/text/Title";
import styles from "./styles/BlockFAQ.module.css";
import ListAccordion from "@/src/components/entities/lists/accordionList/ListAccordion";
import { CONFIG_BLOCK_FAQ } from "@/src/components/features/HomePage/Main/blockFAQ/ConfigBlockFAQ";

const BlockFAQ = () => {
     return (
          <div className={styles.wrapper}>
               <Title type={"h3"} color={"black"}>FAQ</Title>
               <ListAccordion data={CONFIG_BLOCK_FAQ}/>
          </div>
     );
};

export default BlockFAQ;