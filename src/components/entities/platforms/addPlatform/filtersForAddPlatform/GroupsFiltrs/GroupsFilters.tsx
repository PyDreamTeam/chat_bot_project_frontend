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
        isVisible?: boolean
        tags?: 
            {
                tag: string
                id: number
            }[]
    }[]
}

export const GroupsFilters: FC<PropsGroupsFilters> = ({group, id, filters=[]}) => {

    const array = filters.map(item => ({...item, isVisible: false}));
    const [newArray, setNewArray] = useState(array);

    const [isOpen, setIsOpen] = useState(false);
    const handleIsOpen = () => {
        setIsOpen(!isOpen);
        setNewArray(prev => prev.map(item => ({...item, isVisible: false})));
    };

    const [isFiltersOpen, setIsFiltersOpen] = useState(false);
    const handleFilterOpen = () => {
        setIsFiltersOpen(!isFiltersOpen);
    };
    const showFilter = (id: number | undefined) => {
        const arrayChange = newArray.map(item => item.id === id ? {...item, isVisible: true} : item);

        setNewArray(arrayChange);
        setIsFiltersOpen(false);
    };

    const closeFilter = (id: number | undefined) => {
        const arrayChange = newArray.map(item => item.id === id ? {...item, isVisible: !item.isVisible} : item);

        setNewArray(arrayChange);
        setIsFiltersOpen(false);
    };

    const isDisabled = !(newArray.some(item => item.isVisible === false));

    return(
        <div className={css.container}>
            <div className={css.group} onClick={handleIsOpen}>
                <Text type="med20" color="dark">{group}</Text>
                {isOpen ? (
                                <Image src={"/img/chevron-up.svg"} alt="chevron" width={24} height={24}/>
                            ) : (
                                <Image src={"/img/chevron-down.svg"} alt="chevron" width={24} height={24}/>
                            )}
            </div>
            {isOpen &&
            <ul>
                {newArray
                    .filter(item => item.isVisible === true)
                    .map(({filter, id, multiple, tags}) => (
                        <li key={id}>
                            {multiple ? 
                    <FiltersAndTagsMultiple id={id} filter={filter} tags={tags} onClick={() => closeFilter(id)}/> :
                    <FiltersAndTagsSingle id={id} filter={filter} tags={tags} onClick={() => closeFilter(id)}/>    
                            }
                        </li>
                    ))}
                <div className={css.border}>
                    <button className={isDisabled ? css.disabledBtn : css.addFilter} onClick={handleFilterOpen} disabled={isDisabled}>
                        <Text type="reg14" color="blue" className={isDisabled && css.disabledBtnText}>
                            <span style={{fontSize: "20px"}}>+</span> Добавить фильтр
                        </Text>
                    </button>
                    {isFiltersOpen && 
                    <ul className={css.hiddenList}>
                        {newArray.map(({filter, id, isVisible}) => (
                            <li key={id} className={css.hiddenFilter} onClick={() => showFilter(id)}>
                                <Text type="reg14" color="dark" className={isVisible && css.activeHiddenFilter}>
                                    {filter}
                                </Text>
                            </li>
                        ))}    
                    </ul>}
                </div>
            </ul>
            }
        </div>
    );
};