import React, { FC } from "react";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";
import Image from "next/image";
import styles from "./styles/CardSolution.module.css";
import uuid from "uuid-random";
import { TsConfigJson } from "type-fest";
import JSX = TsConfigJson.CompilerOptions.JSX;

export interface ICardSolution {
     id?: number;
     logo: React.ReactNode;
     title: JSX.Element;
     description: JSX.Element;
     features: string[];
     messengers: string[];
}

const CardSolution: FC<ICardSolution> = ({ id, logo, title, description, features, messengers }) => {
     return (
          <div className={styles.card}>
               {logo}
               {title}
               <div className={styles.bottom}>
                    {description}
                    <div className={styles.features}>
                         {features.map((feature) => (
                              <div key={uuid()} className={styles.tag}>
                                   <Text type="reg18" color="grey">
                                        {feature}
                                   </Text>
                              </div>
                         ))}
                    </div>
                    <div className={styles.iconBlock}>
                         {messengers.map((logo) => (
                              <div key={uuid()} className={styles.icon}>
                                   <Image src={logo} alt="logo-image" width={40} height={40} />
                              </div>
                         ))}
                    </div>
               </div>
          </div>
     );
};

export default CardSolution;
