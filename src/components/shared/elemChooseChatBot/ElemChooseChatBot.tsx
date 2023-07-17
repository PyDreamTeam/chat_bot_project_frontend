import React, { FC } from "react";
import css from "./ElemChooseChatBot.module.css";

export enum ElemVariantProps {
  home = "home",
  auth = "auth",
}

type IElem = {
  variant: ElemVariantProps.home | ElemVariantProps.auth;
};

const ElemChooseChatBot: FC<IElem> = ({ variant }) => {
     return (
          <>
               <span className={`${css.elem} ${variant === ElemVariantProps.home ? css.homePage : css.authWrapper} `}>конструктор чат-ботов
                    <div className={`${css.dot} ${css.left}`}></div>
                    <div className={`${css.dot} ${css.top}`}></div>
                    <div className={`${css.dot} ${css.right}`}></div>
                    <div className={`${css.dot} ${css.bottom}`}></div>
               </span>
          </>
     );
};

export default ElemChooseChatBot;