import React from "react";
import Text from "@/src/components/shared/text/Text";
import styles from "./FaqPageComponent.module.css";

const FaqPageComponent = () => {
    return (
        <div>
            <Text type="reg24" color="dark" className={styles.textDev}>
                🔨 Страница находится в разработке! 🔧
            </Text>
        </div>
    );
};

export default FaqPageComponent;
