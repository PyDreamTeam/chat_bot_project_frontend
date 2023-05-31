import { FC } from "react";
import style from "./groupOptionsFilters.module.css";
import { GroupOption } from "../GroupOptionFilters/GroupOptionFilters";

interface PropsOption {
     name: string;
     checked: boolean;
     onChange?: () => void;
}

interface PropsGroupOption {
     price?: string;
     info?: string;
     name: string;
     items: PropsOption[]
}



interface PropsGroupsOptions {
     items: PropsGroupOption[]
}
export const GroupsOptions: FC<PropsGroupsOptions> = ({ items }) => {
     return (
          <div>
               <ul className={style.list}>
                    {items.map((item) => (
                         <li key={item.name}>
                              <GroupOption name={item.name} items={item.items} info={item.info} price={item.price}/>
                         </li>
                    ))}
               </ul>
          </div>
     );
};