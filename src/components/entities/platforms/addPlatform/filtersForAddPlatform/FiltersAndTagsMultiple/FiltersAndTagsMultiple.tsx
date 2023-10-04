import { useState, FC } from "react";
import css from "./filtersAndTags.module.css";
import Text from "@/src/components/shared/text/Text";
import Image from "next/image";
import { Checkbox } from "../../../leftBlock/Checkbox/Checkbox";
import { useAppDispatch, useAppSelector } from "@/src/hooks/types";
import { addFilterForPlatform, deleteFilterFromPlatform } from "@/src/store/reducers/addPlatform/slice";

interface PropsFiltersAndTagsMultiple {
        onClick?: () => void
        filter?: string
        id?: number
        multiple?: boolean
        tags?: 
            {
                tag: string
                id: number
            }[]
}

export const FiltersAndTagsMultiple: FC<PropsFiltersAndTagsMultiple> = ({filter, id, tags=[], multiple, onClick}) => {

    const filters = useAppSelector((state) => state.reducerAddPlatform.filters);
    const dispatch = useAppDispatch();
    
    
    return (
        <div>
            <div className={css.titleFilter}>
                <Text type="reg18" color="dark">Название фильтра</Text>
                <Image src="/img/close.svg" alt="close" width={24} height={24} onClick={onClick} style={{cursor: "pointer"}}/>
            </div>
            <Text type="reg18" color="dark" className={css.filter}>{filter}</Text>
            <ul className={css.listTags}>
                <Text type="reg18" color="dark" className={css.subTitle}>Параметры фильтра</Text>
                {tags.map(({id, tag}) => (
                    <li key={id} className={css.tag}>
                        <Checkbox 
                            checked={Boolean(filters.find((item) => item.id === id))}
                            onChange={() => {
                                if(!(filters.find((item) => item.id === id))) {
                                    dispatch(addFilterForPlatform({id,  tag}));
                                } else {
                                    dispatch(deleteFilterFromPlatform(id));
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