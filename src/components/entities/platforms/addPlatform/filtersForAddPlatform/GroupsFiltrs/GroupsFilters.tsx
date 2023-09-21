import { FC, useState } from "react";
import css from "./groupsFilters.module.css";
import Text from "@/src/components/shared/text/Text";
import { FiltersAndTagsMultiple } from "../FiltersAndTagsMultiple/FiltersAndTagsMultiple";
import Image from "next/image";
import { FiltersAndTagsSingle } from "../FiltersAndTagsSingl/FiltersAndTagsSingl";

export interface PropsGroupsFilters {
    group?: string
    id?: number
    filters?: {
        filter?: string
        id?: number
        multiple?: boolean
        tags?: 
            {
                tag: string
                id: number
            }[]
    }[]
}

export const GroupsFilters: FC<PropsGroupsFilters> = ({group, id, filters=[]}) => {

    const [isOpen, setIsOpen] = useState(false);
    const handleIsOpen = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div className={css.container}>
            <div className={css.group} onClick={handleIsOpen}>
                <Text type="med20" color="dark" className={css.title}>{group}</Text>
                {isOpen ? (
                                <Image src={"/img/chevron-up.svg"} alt="chevron" width={24} height={24}/>
                            ) : (
                                <Image src={"/img/chevron-down.svg"} alt="chevron" width={24} height={24}/>
                            )}
            </div>
            {isOpen &&
            <ul>
                {filters.map(({filter, id, multiple, tags}, index) => (
                    <li key={id}>
                        {multiple ? 
                    <FiltersAndTagsMultiple id={id} filter={filter} tags={tags} index={index}/> :
                    <FiltersAndTagsSingle id={id} filter={filter} tags={tags} index={index}/>    
                        }
                    </li>
                ))}
            </ul>
            }
        </div>
    );
};