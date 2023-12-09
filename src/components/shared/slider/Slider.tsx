import React, { FC, ReactElement, useState } from "react";
import styles from "./styles/Slider.module.css";
import ArrowSlideRight from "../arrowSlideRight/ArrowSlideRight";
import ArrowSlideLeft from "../arrowSlideLeft/ArrowSlideLeft";
import { IListSliderCards } from "@/src/types/index";

interface ISliderProps {
    children?: ReactElement<IListSliderCards>;
    type?: "homeSlider" | "pageSlider";
    cardType?: "644" | "464";
}

const Slider: FC<ISliderProps> = ({ children, type, cardType }) => {
    // const CARD_WIDTH = 634;
    // const CARD_WIDTH = 468;
    let card_width: number;

    if (cardType == "644") {
        card_width = 644;
    } else {
        card_width = 464;
    }

    let childrenCount: number;
    const [offset, setOffset] = useState(0);
    const [isEnableRight, setIsEnableRight] = useState(true);
    const [isEnableLeft, setIsEnableLeft] = useState(false);

    children ? (childrenCount = children?.props.results?.length) : (childrenCount = 1);

    const handleRightClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - card_width;
            const maxOffset = -card_width * (childrenCount - 1);

            newOffset <= maxOffset ? setIsEnableRight(false) : setIsEnableLeft(true);

            return Math.max(newOffset, maxOffset);
        });
    };
    const handleLeftClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + card_width;

            newOffset >= 0 ? setIsEnableLeft(false) : setIsEnableRight(true);

            return Math.min(newOffset, 0);
        });
    };

    return (
        <div className={type === "homeSlider" ? `${styles.wrapper}` : `${styles.solutionWrapper}`}>
            <div className={type === "homeSlider" ? `${styles.window}` : `${styles.solutionWindow}`}>
                <div className={styles.itemsContainer} style={{ transform: `translateX(${offset}px)` }}>
                    {children}
                </div>
            </div>
            <div className={styles.arrows}>
                <ArrowSlideLeft
                    className={isEnableLeft ? `${styles.arrow}` : `${styles.arrowDisabled}`}
                    onClick={handleLeftClick}
                />
                <ArrowSlideRight
                    className={isEnableRight ? `${styles.arrow}` : `${styles.arrowDisabled}`}
                    onClick={handleRightClick}
                />
            </div>
        </div>
    );
};

export default Slider;
