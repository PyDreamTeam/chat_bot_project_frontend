import { useState, FC } from "react";
import css from "./filterAndTags.module.css";
import Text from "@/src/components/shared/text/Text";
import Image from "next/image";
import { Checkbox } from "../../../leftBlock/Checkbox/Checkbox";
import { useAppDispatch, useAppSelector } from "@/src/hooks/types";
import { addFilterForPlatform, deleteFilterFromPlatform } from "@/src/store/reducers/addPlatform/slice";

interface PropsFiltersAndTagsSingle {
        onClick?: () => void
        filter?: string
        index: number
        id?: number
        multiple?: boolean
        tags?: 
            {
                tag: string
                id: number
            }[]
}

export const FiltersAndTagsSingle: FC<PropsFiltersAndTagsSingle> = ({filter, index, id, tags=[], multiple, onClick}) => {

    const dispatch = useAppDispatch();
    const filters = useAppSelector(state => state.reducerAddPlatform.filters);
    const [selectedFilter, setSelectedFilter] = useState<number | null>(null);
    
    return (
        <div>
            <div className={css.blockFilter}>
                <Text type="med20" color="dark">Фильтр {index + 1}</Text>
                <button className={css.btnDelete}>
                    <Image src="/platforms/delete.svg" alt="icon" width={16} height={17}/>
                    <Text type="reg14" color="red">Удалить фильтр</Text>
                </button>
            </div>
            <Text type="reg18" color="dark" className={css.title}>Название фильтра</Text>
            <Text type="reg18" color="dark" className={css.filter}>{filter}</Text>
            <ul className={css.listTags}>
                <Text type="reg18" color="dark" className={css.subTitle}>Параметры фильтра</Text>
                {tags.map(({id, tag}) => (
                    <li key={id} className={css.tag}>
                        <Checkbox 
                            checked={Boolean(filters.find(item => item.id === id))}
                            onChange={() => {
                                if(selectedFilter !== id) {
                                    if(selectedFilter) {
                                        dispatch(deleteFilterFromPlatform(selectedFilter));
                                    }
                                    dispatch(addFilterForPlatform({id, tag}));
                                    setSelectedFilter(id);
                                }
                                if(selectedFilter === id) {
                                    dispatch(deleteFilterFromPlatform(id));
                                    setSelectedFilter(null);
                                }
                            }}
                        />
                        <Text type="reg14" color="dark">{tag}</Text>
                    </li>
                ))}
            </ul>
        </div>
    );
};