import React from "react";

import styles from "./styles/ArrowRight.module.css";

const ArrowRight = ({ className = "" }) => {
     return (
          <div className={className}>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                         d="M6 12.0004H18.0005M18.0005 12.0004L13.5 8M18.0005 12.0004L13.5 16"
                         stroke="#4466F5"
                         strokeLinecap="round"
                         strokeLinejoin="round"
                    />
               </svg>
          </div>
     );
};

export default ArrowRight;
