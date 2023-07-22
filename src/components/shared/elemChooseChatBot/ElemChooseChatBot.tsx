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
                    <div className={`${variant === ElemVariantProps.home ? css.dotHome : css.dotWrap} ${variant === ElemVariantProps.home ? css.leftHome : css.leftWrap}`}></div>
                    <div className={`${variant === ElemVariantProps.home ? css.dotHome : css.dotWrap} ${variant === ElemVariantProps.home ? css.topHome : css.topWrap}`}></div>
                    <div className={`${variant === ElemVariantProps.home ? css.dotHome : css.dotWrap} ${variant === ElemVariantProps.home ? css.rightHome : css.rightWrap}`}></div>
                    <div className={`${variant === ElemVariantProps.home ? css.dotHome : css.dotWrap} ${variant === ElemVariantProps.home ? css.bottomHome : css.bottomWrap}`}></div>
               </span>
          </>
     );
};

export default ElemChooseChatBot;