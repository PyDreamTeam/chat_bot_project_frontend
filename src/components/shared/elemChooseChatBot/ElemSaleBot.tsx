import React, { FC } from "react";
import css from "./ElemChooseChatBot.module.css";

interface TextProps {
    text?: string;
}

const ElemChooseChatBot: FC<TextProps> = ({ text }) => {
    console.log(text);
    return (
        <>
            <span className={css.elemSaleBot}>
                {text}
                <div className={`${css.dotHome} ${css.leftHome}`}></div>
                <div className={`${css.dotHome} ${css.topHome}`}></div>
                <div className={`${css.dotHome} ${css.rightHome}`}></div>
                <div className={`${css.dotHome} ${css.bottomHome}`}></div>
            </span>
        </>
    );
};

export default ElemChooseChatBot;
