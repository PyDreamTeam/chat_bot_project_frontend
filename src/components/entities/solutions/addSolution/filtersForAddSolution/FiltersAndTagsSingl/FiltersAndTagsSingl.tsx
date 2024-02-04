import { useState, FC } from "react";
import css from "./filterAndTags.module.css";
import Text from "@/src/components/shared/text/Text";
import Image from "next/image";
import { Checkbox } from "../../../leftBlock/Checkbox/Checkbox";
import { useAppDispatch, useAppSelector } from "@/src/hooks/types";
import { addFilterForSolution, deleteFilterFromSolution } from "@/src/store/reducers/addSolution/slice";

interface PropsFiltersAndTagsSingle {
    onClick?: () => void;
    filter?: string;
    id?: number;
    multiple?: boolean;
    tags?: {
        tag: string;
        id: number;
    }[];
}

export const FiltersAndTagsSingle: FC<PropsFiltersAndTagsSingle> = ({ filter, id, tags = [], multiple, onClick }) => {
    const dispatch = useAppDispatch();
    const filters = useAppSelector((state) => state.reducerAddSolution.filters);
    const [selectedFilter, setSelectedFilter] = useState<number | null>(null);

    return (
        <div>
            <div className={css.titleFilter}>
                <Text type="reg18" color="dark">
                    Название фильтра
                </Text>
                <Image
                    src="/img/close.svg"
                    alt="close"
                    width={24}
                    height={24}
                    onClick={onClick}
                    style={{ cursor: "pointer" }}
                />
            </div>
            <Text type="reg18" color="dark" className={css.filter}>
                {filter}
            </Text>
            <ul className={css.listTags}>
                <Text type="reg18" color="dark" className={css.subTitle}>
                    Параметры фильтра
                </Text>
                {tags.map(({ id, tag }) => (
                    <li key={id} className={css.tag}>
                        <Checkbox
                            checked={Boolean(filters.find((item) => item.id === id))}
                            onChange={() => {
                                if (selectedFilter !== id) {
                                    if (selectedFilter) {
                                        dispatch(deleteFilterFromSolution(selectedFilter));
                                    }
                                    dispatch(addFilterForSolution({ id, tag }));
                                    setSelectedFilter(id);
                                }
                                if (selectedFilter === id) {
                                    dispatch(deleteFilterFromSolution(id));
                                    setSelectedFilter(null);
                                }
                            }}
                        />
                        <Text type="reg14" color="dark">
                            {tag}
                        </Text>
                    </li>
                ))}
            </ul>
        </div>
    );
};
