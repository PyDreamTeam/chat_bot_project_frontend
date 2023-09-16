import React, { FC, ReactElement, useState } from "react";
import styles from "./styles/Slider.module.css";
import ArrowSlideRight from "../arrowSlideRight/ArrowSlideRight";
import ArrowSlideLeft from "../arrowSlideLeft/ArrowSlideLeft";
import { IListSliderCards } from "@/src/types/index";

interface ISliderProps {
    children?: ReactElement<IListSliderCards>;
    type?: "homeSlider" | "pageSlider";
}

const Slider: FC<ISliderProps> = ({ children, type }) => {
    const CARD_WIDTH = 468;
    let childrenCount: number;
    const [offset, setOffset] = useState(0);
    const [isEnableRight, setIsEnableRight] = useState(true);
    const [isEnableLeft, setIsEnableLeft] = useState(false);

    children ? (childrenCount = children?.props.results.length) : (childrenCount = 1);

    const handleRightClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - CARD_WIDTH;
            const maxOffset = -CARD_WIDTH * (childrenCount - 1);

            newOffset <= maxOffset ? setIsEnableRight(false) : setIsEnableLeft(true);

            return Math.max(newOffset, maxOffset);
        });
    };
    const handleLeftClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + CARD_WIDTH;

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
