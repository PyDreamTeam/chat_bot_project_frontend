import React from "react";
import Header from "@/src/components/features/HomePage/Header/Header";
import styles from "@/src/pages/about/about.module.css";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";

const About = () => {
    return (
        <div>
            <Header type="other" />
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <Title type="h4" color="dark" className={styles.pageTitle}>
                        О сервисе
                    </Title>
                    <Text type="reg24" color="dark">
                        🔨 Страница находится в разработке! 🔧
                    </Text>
                </div>
            </div>
        </div>
    );
};

export default About;
