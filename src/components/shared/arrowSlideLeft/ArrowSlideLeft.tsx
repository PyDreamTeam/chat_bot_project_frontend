/* eslint-disable react/no-unknown-property */
import React, { FC } from "react";

import styles from "./styles/ArrowSlideRLeft.module.css";

interface IArrowProps {
    className: string;
    onClick?: () => void;
}

const ArrowSlideLeft: FC<IArrowProps> = ({ className = "", onClick }) => {
    return (
        <div className={className} onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                <g filter="url(#filter0_d_3814_5568)">
                    <rect width="40" height="40" rx="20" transform="matrix(-1 0 0 1 45 5)" fill="white" />
                    <path
                        d="M23.327 28.0002L20.0096 24.9799L23.3516 22.0112"
                        stroke="#17181A"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                    <path d="M30 25.0366L21.1208 24.9962" stroke="#17181A" strokeWidth="1.5" strokeLinecap="round" />
                </g>
                <defs>
                    <filter
                        id="filter0_d_3814_5568"
                        x="0"
                        y="0"
                        width="52"
                        height="52"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feMorphology
                            radius="2"
                            operator="dilate"
                            in="SourceAlpha"
                            result="effect1_dropShadow_3814_5568"
                        />
                        <feOffset dx="1" dy="1" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3814_5568" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3814_5568" result="shape" />
                    </filter>
                </defs>
            </svg>
        </div>
    );
};

export default ArrowSlideLeft;
