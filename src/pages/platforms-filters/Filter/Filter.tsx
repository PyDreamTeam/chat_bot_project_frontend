import Title from "@/src/components/shared/text/Title";
import { FC, useState } from "react";
import GroupsOptions from "../GroupsOptionsFilters/GroupsOptionsFilters";
import style from "./filter.module.css";

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
     onChange?: () => void;
}

interface PropsFilter {
     name: string;
     items: PropsGroupOption[]
}
const Filter: FC<PropsFilter> = ({ name, items = [] }) => {

     const [isOpen, setIsOpen] = useState(false);
     const toogleMenu = () => {
          setIsOpen(!isOpen);
     };

     return (
          <div className={style.wrapper}>
               <div onClick={toogleMenu} className={style.titleOpen}>
                    <Title type="h5" color="black">{name}</Title>
                    {isOpen ? <img src="/img/chevron-up.svg" /> : <img src="/img/chevron-down.svg" />}
               </div>
               {<div className={!isOpen && style.list}>
                    <GroupsOptions items={items} />
               </div>}
          </div>
     );
};

export default Filter;