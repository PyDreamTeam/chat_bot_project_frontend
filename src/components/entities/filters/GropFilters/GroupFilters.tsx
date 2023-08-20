import { FC } from "react";
import { GroupFilter } from "../GroupFilter/GroupFilter";
import css from "./groupFilters.module.css";

interface PropsGroupFilters {
    results: {
        group: string
        id: number
        filters: {
            id: number
            filter: string
            image: string
            tags: {
                id: number
                tag: string
                is?: boolean
            }[]
        }[]
    }[]
}

export const GroupFilters: FC<PropsGroupFilters> = ({results = []}) => {
     return (
          <ul className={css.listGroups}>
               {results.map((item) => (
                    <li key={item.id} className={css.group}>
                         <GroupFilter id={item.id} group={item.group} filters={item.filters}/>
                    </li>
               ))}
          </ul>
     );
};