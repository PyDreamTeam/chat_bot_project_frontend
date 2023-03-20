import React from "react";

import styles from "./TemplateSelections.module.css";
import Link from "next/link";
import mailTemplate from "../../shared/images/pictures/png/Mail-template.png";
import arrowTemplate from "./images/arrow-template.png";
import Image from "next/image";
import TextField from "@/src/components/shared/text/TextField";

const TemplateSelections = () => {
     return (
          <div className={styles.templateSelectionsWrapper}>
               <div className={styles.templateSelectionsBlock}>
                    <Image className={styles.templateMailImage} alt={"mail-template"} src={mailTemplate} />
                    <div className={styles.textBlock}>
                         <p>Подберите шаблон и внедрите комплексный мессенджер-маркетинг в свой бизнес</p>
                         <Link href={"/home"}>Подобрать шаблон {<Image src={arrowTemplate} alt={"arrow"} />}</Link>
                         <TextField type={"p"} color={"grey"}>База из 100 шаблонов от наших специалистов</TextField>
                    </div>
               </div>
          </div>
     );
};

export default TemplateSelections;