import React from "react";
import styles from "./styles/TemplateSelections.module.css";
import Link from "next/link";
import mailTemplate from "../../../shared/images/img/Mail-template.svg";
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
                    <Text className={styles.subtitle} color={"grey"} type={"reg14"}>
                        База из 100 шаблонов от наших специалистов
                    </Text>
                    <Link href={clientEndpoints.home.get}>
                        <Text type={"sem16"} color={"blue"}>
                            Подобрать шаблон
                        </Text>
                        <svg className={styles.arrow}width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.65 11.6505L17.86 8.86053C17.7905 8.78908 17.7012 8.74001 17.6036 8.7196C17.506 8.69918 17.4045 8.70836 17.3121 8.74594C17.2198 8.78353 17.1408 8.84782 17.0851 8.93058C17.0295 9.01334 16.9999 9.11082 17 9.21053V11.0005H4C3.45 11.0005 3 11.4505 3 12.0005C3 12.5505 3.45 13.0005 4 13.0005H17V14.7905C17 15.2405 17.54 15.4605 17.85 15.1405L20.64 12.3505C20.84 12.1605 20.84 11.8405 20.65 11.6505Z" fill="#4466F5"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TemplateSelections;
