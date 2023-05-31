
import { FC, useState } from "react";
import style from "./optionFilter.module.css";
import { Checkbox } from "../CheckboxFilter/CheckboxFilter";
import Text from "@/src/components/shared/text/Text";

interface PropsOption {
    name: string;
    checked: boolean;
    onChange?: () => void;
}
export const Option: FC<PropsOption> = ({ name, checked, onChange }) => {

     return (
          <div className={style.wrapper}>
               <Checkbox checked={checked} onChange={onChange} />
               <Text type="reg14" color="black">{name}</Text>
          </div>
     );
};