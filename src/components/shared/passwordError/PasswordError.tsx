import React, { FC } from "react";

import styles from "./PasswordError.module.css";
import TextField from "@/src/components/shared/text/TextField";
import { errorPasswordConfig } from "@/src/components/shared/passwordError/images/PasswordErrorSvg";

export interface IPasswordError {
     errorText: string;
     isError: boolean;
}

const PasswordError: FC<IPasswordError> = ({ errorText, isError }) => {
     return (
          <div className={styles.passwordErrorBlock}>
               {isError ? errorPasswordConfig.errorTrue : errorPasswordConfig.errorFalse}
               <TextField color={`${isError ? "red" : "green"}`} type={"p"}>
                    {errorText}
               </TextField>
          </div>
     );
};

export default PasswordError;
