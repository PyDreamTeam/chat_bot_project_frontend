import React, { FC } from "react";

import styles from "./styles/CardFeedback.module.css";
import { TsConfigJson } from "type-fest";
import JSX = TsConfigJson.CompilerOptions.JSX;

export interface ICard {
     id?: number;
     img: React.ReactNode;
     name: JSX.Element;
     jobTitle: JSX.Element;
     text: JSX.Element;
}

const CardFeedback: FC<ICard> = ({ img, name, jobTitle, text }) => {
     return (
          <div className={styles.card}>
               <div className={styles.top}>
                    {img}
                    <div className={styles.title}>
                         {name}
                         {jobTitle}
                    </div>
               </div>
               {text}
          </div>
     );
};

export default CardFeedback;
