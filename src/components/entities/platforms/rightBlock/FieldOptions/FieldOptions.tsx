import Text from "@/src/components/shared/text/Text";
import { useAppDispatch, useAppSelector } from "@/src/hooks/types";
import { deleteAllFilters, deleteFilters } from "@/src/store/reducers/platforms/slice";
import css from "./fieldOptions.module.css";
import Image from "next/image";

export const FieldOptions = () => {
    const dispatch = useAppDispatch();
    const filters = useAppSelector((state) => state.reducerFilters.filters);

    return (
        <div>
            <ul className={css.list}>
                {filters.map((item) => (
                    <li key={item.id} className={css.option}>
                        <Text type="reg14" color="telegray">
                            {item.filter}
                            {item.filter !== "" && ":"}{" "}
                        </Text>
                        <Text type="reg14" color="dark">
                            {item.tag}
                        </Text>
                        <Image
                            src={"/img/close.svg"}
                            alt="close"
                            width={24}
                            height={24}
                            onClick={() => dispatch(deleteFilters(item.id))}
                            className={css.img}
                        />
                    </li>
                ))}
                {filters.length !== 0 && (
                    <button
                        onClick={() => {
                            dispatch(deleteAllFilters());
                        }}
                        className={css.btn}
                    >
                        Очистить все
                    </button>
                )}
            </ul>
        </div>
    );
};
