import Title from "@/src/components/shared/text/Title";
import { FC } from "react";
import { TagsFilter } from "../Tags/Tags";
import css from "./groupFilter.module.css";

interface PropsGroupFilter {
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
}

export const GroupFilter: FC<PropsGroupFilter> = ({group, id, filters = []}) => {
     return (
          <div>
               <Title type="h5" color="dark">{group}</Title>
               <ul className={css.listFilters}>
                    {filters.map((item) => (
                         <li key={item.id}>
                              <TagsFilter id={item.id} filter={item.filter} image={item.image} tags={item.tags}/>
                         </li>
                    ))}
               </ul>
          </div>
     );
};