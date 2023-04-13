import React from "react";

import styles from "./styles/TemplateSelections.module.css";
import Link from "next/link";
import mailTemplate from "../../../shared/images/img/Mail-template.svg";
import arrowTemplate from "./img/arrow_template.svg";
import Image from "next/image";
import Text from "@/src/components/shared/textfields/Text";
import { clientEndpoints } from "@/src/shared/routes/client-endpoints";

const TemplateSelections = () => {
     return (
          <div className={styles.templateSelectionsWrapper}>
               <div className={styles.templateSelectionsBlock}>
                    <Image className={styles.templateMailImage} alt={"mail-template"} src={mailTemplate} />
                    <div className={styles.textBlock}>
                         <p>Подберите шаблон и внедрите комплексный мессенджер-маркетинг в свой бизнес</p>
                         <Link href={clientEndpoints.home.get}>Подобрать шаблон {<Image src={arrowTemplate} alt={"arrow"} />}</Link>
                         <Text color={"grey"} type={"title"}>
                              База из 100 шаблонов от наших специалистов
                         </Text>
                    </div>
               </div>
          </div>
     );
};

export default TemplateSelections;