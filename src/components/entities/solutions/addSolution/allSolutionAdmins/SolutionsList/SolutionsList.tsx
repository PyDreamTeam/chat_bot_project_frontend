import Text from "@/src/components/shared/text/Text";
import css from "./solutionsList.module.css";

export const SolutionsList = () => {
    return (
        <div className={css.container}>
            <div className={css.solutionTitle}>
                <Text type="sem16" color="dark">
                    Название
                </Text>
            </div>
            <div className={css.solutionSubTittle}>
                <Text type="sem16" color="dark">
                    Ссылка на страницу
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
