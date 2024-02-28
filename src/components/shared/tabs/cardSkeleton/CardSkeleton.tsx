import styles from "./CardSkeleton.module.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FC } from "react";
interface ICard {
    type?: "list" | "filter";
}

const CardSkeleton: FC<ICard> = ({ type }) => {
    return (
        <>
            {type === "list" && (
                <div className={styles.card_skeleton}>
                    <div className={styles.top_column}>
                        <Skeleton circle width={100} height={100} />
                    </div>
                    <div className={styles.bottom_column}>
                        <Skeleton className={styles.price} count={1} width={80} height={30} />
                        <span>
                            <Skeleton count={4} />
                        </span>
                    </div>
                </div>
            )}
            {type === "filter" && (
                <div className={styles.filterCard_skeleton}>
                    <div className={styles.filterBottom_column}>
                        <div>
                            <Skeleton className={styles.title} count={1} width={170} height={30} />
                            <Skeleton className={styles.price} count={1} width={80} height={30} />
                        </div>
                        <span>
                            <Skeleton width={574} count={3} />
                        </span>
                    </div>
                    <div className={styles.logo}>
                        <Skeleton borderRadius={30} width={230} height={230} />
                    </div>
                </div>
            )}
        </>
    );
};
export default CardSkeleton;
