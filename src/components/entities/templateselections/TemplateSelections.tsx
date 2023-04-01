import React from "react";

import styles from "./styles/TemplateSelections.module.css";
import Link from "next/link";
import mailTemplate from "../../shared/images/img/Mail-template.svg";
import arrowTemplate from "./img/arrow_template.svg";
import Image from "next/image";
import TextField from "@/src/components/shared/textfields/TextField";

const TemplateSelections = () => {
     return (
          <div className={styles.templateSelectionsWrapper}>
               <div className={styles.templateSelectionsBlock}>
                    <Image className={styles.templateMailImage} alt={"mail-template"} src={mailTemplate} />
                    <div className={styles.textBlock}>
                         <p>Подберите шаблон и внедрите комплексный мессенджер-маркетинг в свой бизнес</p>
                         <Link href={"/home"}>Подобрать шаблон {<Image src={arrowTemplate} alt={"arrow"} />}</Link>
                         <TextField type={"p"} color={"grey"}>
                              База из 100 шаблонов от наших специалистов
                         </TextField>
                    </div>
               </div>
          </div>
     );
};

export default TemplateSelections;