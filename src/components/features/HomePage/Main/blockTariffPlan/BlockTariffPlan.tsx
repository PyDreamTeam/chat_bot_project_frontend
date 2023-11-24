import { TariffCard } from "@/src/components/shared/TariffCard/TariffCard";
import CheckMark from "@/src/components/shared/checkMark/CheckMark";
import { TariffPlanCard } from "@/src/types";
import css from "./blockTariffPlan.module.css";
import Title from "@/src/components/shared/text/Title";

const tariffPlansCards: TariffPlanCard[] = [
    {
        title: "Решение с доработкой",
        price: "от 9 000 ₽",
        icon: <CheckMark />,
        advantage: ["1 решение", "Переводы и платежи", "Переводы и платежи", "Переводы и платежи", "Базовая аналитика"],
        hotPlan: false,
    },
    {
        title: "Готовое решение",
        price: "от 17 000 ₽",
        icon: <CheckMark />,
        advantage: [
            "5 решений",
            "Переводы и платежи",
            "Переводы и платежи",
            "Переводы и платежи",
            "Премиальная аналитика",
        ],
        hotPlan: true,
        bestPlan: "/img/hotPlan.svg",
    },
    {
        title: "Решение с нуля",
        price: "от 29 000 ₽",
        icon: <CheckMark />,
        advantage: [
            "8 решений",
            "Переводы и платежи",
            "Переводы и платежи",
            "Переводы и платежи",
            "Премиальная аналитика",
        ],
        hotPlan: false,
    },
];

export const BlockTariffPlan = () => {
    return (
        <div className={css.wrapper}>
            <div className={css.title}>
                <Title type="h3" color="dark">
                    Тарифы
                </Title>
            </div>
            <ul className={css.container}>
                {tariffPlansCards.map((item, index) => (
                    <TariffCard
                        key={index}
                        title={item.title}
                        price={item.price}
                        icon={item.icon}
                        advantage={item.advantage}
                        hotPlan={item.hotPlan}
                        bestPlan={item.bestPlan}
                        dataComment={`Выбранный тариф: ${item?.title}`}
                    />
                ))}
            </ul>
        </div>
    );
};
