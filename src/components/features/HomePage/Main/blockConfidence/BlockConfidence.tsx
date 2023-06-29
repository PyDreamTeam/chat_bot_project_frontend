import React from "react";
import Title from "@/src/components/shared/text/Title";
import styles from "./styles/BlockConfidence.module.css";
import IconCompany from "@/src/components/entities/iconCompany/IconCompany";

const BlockConfidence = () => {
     return (
          <div className={styles.wrapper}>
               <Title type={"h3"} color={"black"}>
                   Нам доверяют
               </Title>
               <IconCompany/>
          </div>
     );
};

export default BlockConfidence;