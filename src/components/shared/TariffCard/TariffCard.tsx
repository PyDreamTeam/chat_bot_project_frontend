import { TariffPlanCard } from "@/src/types";
import {FC} from "react";
import Text from "../text/Text";
import Title from "../text/Title";
import Image from "next/image";
import { Button } from "../buttons/Button";
import css from "./tariffCard.module.css";

export const TariffCard: FC<TariffPlanCard> = ({title, price, icon, advantage, btn, hotPlan, bestPlan}) => {
     return (
          <div className={hotPlan ? `${css.hotPlan}` : `${css.container}`}>
               <div>
                    {!hotPlan ? <div className={css.title}><Text type="reg18" color="grey">{title}</Text></div> :
                    <div className={css.titleBlock}>
                         <div className={css.title}>
                              <Text type="reg18" color="grey">{title}</Text>
                         </div>
                         <Image src={bestPlan === undefined ? "" : bestPlan} width={98} height={20} alt="hot plan"/>
                    </div>
                    }
               </div>
               <div className={css.priceBlock}>
                    <Title type="h4" color="black">{price}<span className={css.price}>/month</span></Title>
               </div>

               <ul className={css.advantageBlock}>
                    {advantage.map((item, index) => (
                         <div  key={index} className={css.advantage}>
                              {icon}
                              <Text type="reg16" color="dark">{item}</Text>
                         </div>
                    ))}
               </ul>

               <Button active={true} type="submit">{btn}</Button>
               
          </div>
     );
};