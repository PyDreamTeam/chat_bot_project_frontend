import { FC } from "react";
import css from "./radio.module.css";

interface PropsRadio {
    tag: string
    checked: boolean

}

export const Radio: FC<PropsRadio> = () => {
     return (
          <div>
               <label>
                    <input 
                         type="radio"
                    />
               </label>
          </div>
     );
};