import React from "react";
import styles from "@/src/components/features/HomePage/Main/blockForWhom/styles/BlockForWhom.module.css";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";

const BlockForWhom = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <ul className={styles.list}>
                    <li className={styles.element}>
                        <Text type={"reg20"} color={"black"}>
                            Внедрить проверенное решение по автоматизации
                        </Text>
                    </li>
                    <li className={styles.element}>
                        <Text type={"reg20"} color={"black"}>
                            Выбрать сервисы под ваши задачи
                        </Text>
                    </li>
                    <li className={styles.element}>
                        <Text type={"reg20"} color={"black"}>
                            Получать новых клиентов и увеличить продажи в мессенджерах
                        </Text>
                    </li>
                    <li className={styles.element}>
                        <Text type={"reg20"} color={"black"}>
                            Готовое и простое решение для достижения бизнес-целей
                        </Text>
                    </li>
                    <li className={styles.element}>
                        <Text type={"reg20"} color={"black"}>
                            Протестировать проверенные инструменты мессенджер-маркетинга
                        </Text>
                    </li>
                </ul>
            </div>
            <div className={styles.blockText}>
                <Title type={"h3"} color={"black"}>
                    Для кого подходит
                </Title>
                <Text type={"reg18"} color={"grey"}>
                    Для тех ,кто не готов тратить время на исследования и самостоятельную настройку чат-бота в
                    мессенджерах, а хочет:
                </Text>
            </div>
        </div>
    );
};

export default BlockForWhom;
