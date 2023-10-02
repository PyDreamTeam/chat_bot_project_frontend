import Text from "@/src/components/shared/text/Text";
import css from "./platformsList.module.css";

export const PlatformsList = () => {
    return(
        <div className={css.container}>
            <div className={css.platformTitle}>
                <Text type="sem16" color="dark">
                    Название
                </Text>
            </div>
            <div className={css.platformSubTittle}>
                <Text type="sem16" color="dark">
                    Заголовок
                </Text>
            </div>
            <div>
                <Text type="sem16" color="dark">
                    Ключевые слова
                </Text>
            </div>
        </div>
    );
};