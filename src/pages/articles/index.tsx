import React from "react";
import Header from "@/src/components/features/HomePage/Header/Header";
import styles from "@/src/pages/articles/articles.module.css";
import Title from "@/src/components/shared/text/Title";
import Link from "next/link";
import Text from "@/src/components/shared/text/Text";
import Footer from "@/src/components/features/HomePage/Footer/Footer";

const Articles = () => {
    return (
        <div>
            <Header type="other" />
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.blockInfo}>
                        <div>
                            <Text type="reg14" color="telegray">
                                <Link href={"/home"} className={styles.link}>
                                    Главная
                                </Link>
                                / <span className={styles.link}>Статьи</span>
                            </Text>
                        </div>
                        <div className={styles.title}>
                            <Title type="h4" color="dark">
                                Статьи
                            </Title>
                        </div>
                        <Text type="reg24" color="dark" className={styles.textDev}>
                            🔨 Страница находится в разработке! 🔧
                        </Text>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Articles;
