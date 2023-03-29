import React, { FC } from "react";

import styles from "./PasswordError.module.css";
import { errorPasswordConfig } from "@/src/components/shared/passwordError/images/PasswordErrorSvg";
import TextField from "../textfields/TextField";

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
