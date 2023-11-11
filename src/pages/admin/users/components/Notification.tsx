import style from "../styles/changeRole.module.css";
import React, { FC, useState } from "react";
import css from "classnames";
import Image from "next/image";
import Text from "@/src/components/shared/text/Text";

interface IAlert {
    classname: string;
    message: string;
    onClick: () => void;
}
const Alert: FC<IAlert> = ({ classname, message, onClick }) => {


    return (
        <div className={css(style.alert, style[classname])} >
            <Image src="/admin/icon_chekbox.svg"
                alt="check"
                width={24}
                height={24}
            />
            <Text type="sem16" color="black">{message}</Text>
            <Image src="/admin/icon_close.svg"
                onClick={onClick}
                alt="close"
                width={24}
                height={24}
                style={{ cursor: "pointer" }}
            />
        </div>
    );
};
export default Alert;