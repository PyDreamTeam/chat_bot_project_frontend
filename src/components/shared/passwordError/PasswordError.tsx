import React, { FC } from "react";

import styles from "./PasswordError.module.css";

export interface IPasswordError  {
     errorText?: string;
     isError?: boolean;
}

const PasswordError: FC <IPasswordError> = ({errorText, isError}) => {
     return (
          <div className={styles.passwordErrorBlock}>
               
          </div>
     );
};

export default PasswordError;
