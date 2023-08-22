import React from "react";

import styles from "./styles/TemplateSelections.module.css";
import Link from "next/link";
import mailTemplate from "../../../shared/images/img/Mail-template.svg";
import arrowTemplate from "./img/arrow_template.svg";
import Image from "next/image";
import Text from "@/src/components/shared/text/Text";
import { clientEndpoints } from "@/src/shared/routes/client-endpoints";
import Title from "@/src/components/shared/text/Title";

const TemplateSelections = () => {
    return (
        <div className={styles.templateSelectionsWrapper}>
            <div className={styles.templateSelectionsBlock}>
                <Image className={styles.templateMailImage} alt={"mail-template"} src={mailTemplate} />
                <div className={styles.textBlock}>
                    <Title type={"h5"} color={"black"}>
                        Подберите шаблон и внедрите комплексный мессенджер-маркетинг в свой бизнес
                    </Title>
                    <Text color={"grey"} type={"reg14"}>
                        База из 100 шаблонов от наших специалистов
                    </Text>
                    <Link href={clientEndpoints.home.get}>
                        <Text type={"sem16"} color={"blue"}>
                            Подобрать шаблон
                        </Text>
                        {<Image src={arrowTemplate} className={styles.arrow} alt={"arrow"} />}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TemplateSelections;
