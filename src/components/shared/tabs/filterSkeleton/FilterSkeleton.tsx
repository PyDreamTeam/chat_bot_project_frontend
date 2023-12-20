import styles from "./filterSkeleton.module.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FC } from "react";
interface IFilters {
    type?: "listFilter" | "other";
    count?: number;
}

const FilterSkeleton: FC<IFilters> = ({ type, count }) => {
    return (
        <>
            {type === "listFilter" && (
                <div className={styles.filters}>
                    <Skeleton className={styles.skeleton} count={count} width={300} height={31} />
                </div>
            )}
        </>
    );
};
export default FilterSkeleton;
