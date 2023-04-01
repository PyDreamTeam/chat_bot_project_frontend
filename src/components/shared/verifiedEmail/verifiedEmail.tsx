import React from "react";

import styles from "./styles/verifiedEmail.module.css";

const VerifiedEmail = () => {
     return (
          <div className={styles.verifiedEmailBlock}>
               <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5.76667L4.33333 9.5L11 1.5" stroke="#4F8325" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
               <p>Подтверждено</p>
          </div>
     );
};

export default VerifiedEmail;