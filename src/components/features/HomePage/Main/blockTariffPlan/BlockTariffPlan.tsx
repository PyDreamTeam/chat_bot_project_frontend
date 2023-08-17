import { TariffCard } from "@/src/components/shared/TariffCard/TariffCard";
import CheckMark from "@/src/components/shared/checkMark/CheckMark";
import { TariffPlanCard } from "@/src/types";
import css from "./blockTariffPlan.module.css";
import Title from "@/src/components/shared/text/Title";

const tariffPlansCards: TariffPlanCard[] = [
     {
          title: "Решение с доработкой",
          price: "от 9 000 ₽",
          icon: <CheckMark/>,
          advantage: ["1 plan", "Transfers and payments", "Transfers and payments", "Transfers and payments", "Basic analytics"],
          btn: "Выбрать план",
          hotPlan: false
     },
     {
          title: "Готовое решение",
          price: "от 17 000 ₽",
          icon: <CheckMark/>,
          advantage: ["5 plans", "Transfers and payments", "Transfers and payments", "Transfers and payments", "Premium analytics"],
          btn: "Выбрать план",
          hotPlan: true,
          bestPlan: "/img/hotPlan.svg"
     },
     {
          title: "Решение с нуля",
          price: "от 29 000 ₽",
          icon: <CheckMark/>,
          advantage: ["8 plans", "Transfers and payments", "Transfers and payments", "Transfers and payments", "Premium analytics"],
          btn: "Выбрать план",
          hotPlan: false
     }
];

export const BlockTariffPlan = () => {
     return (
          <div className={css.wrapper}>
               <div className={css.title}>
                    <Title type="h3" color="dark">Тарифы</Title>
               </div>
               <ul className={css.container}>
                    {tariffPlansCards.map((item, index) => (
                         <TariffCard 
                              key={index} 
                              title={item.title}
                              price={item.price}
                              icon={item.icon}
                              advantage={item.advantage}
                              btn={item.btn}
                              hotPlan={item.hotPlan}
                              bestPlan={item.bestPlan}
                         />
                    ))}
               </ul>
          </div>
     );
};