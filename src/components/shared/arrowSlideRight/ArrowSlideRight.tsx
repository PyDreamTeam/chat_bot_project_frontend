/* eslint-disable react/no-unknown-property */
import React, { FC } from "react";

import styles from "./styles/ArrowSlideRight.module.css";

interface IArrowProps {
     className: string;
     onClick?: () => void;
}

const ArrowSlideRight: FC<IArrowProps> = ({ className = "", onClick }) => {
     return (
          <div className={className} onClick={onClick}>
               <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                    <g filter="url(#filter0_d_3814_5572)">
                         <rect x="5" y="5" width="40" height="40" rx="20" fill="white" />
                         <path
                              d="M26.673 28.0002L29.9904 24.9799L26.6484 22.0112"
                              stroke="#17181A"
                              stroke-width="1.5"
                              stroke-linecap="round"
                         />
                         <path d="M20 25.0366L28.8792 24.9962" stroke="#17181A" stroke-width="1.5" stroke-linecap="round" />
                         <rect x="5.5" y="5.5" width="39" height="39" rx="19.5" stroke="white" />
                    </g>
                    <defs>
                         <filter
                              id="filter0_d_3814_5572"
                              x="0"
                              y="0"
                              width="52"
                              height="52"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                         >
                              <feFlood flood-opacity="0" result="BackgroundImageFix" />
                              <feColorMatrix
                                   in="SourceAlpha"
                                   type="matrix"
                                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"
                              />
                              <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_3814_5572" />
                              <feOffset dx="1" dy="1" />
                              <feGaussianBlur stdDeviation="2" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3814_5572" />
                              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3814_5572" result="shape" />
                         </filter>
                    </defs>
               </svg>
          </div>
     );
};

export default ArrowSlideRight;
