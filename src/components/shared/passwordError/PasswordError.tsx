import React, { FC } from "react";

import styles from "./PasswordError.module.css";
import { errorPasswordConfig } from "@/src/components/shared/passwordError/images/PasswordErrorSvg";
import Text from "../textfields/Text";

export interface IPasswordError {
     errorText: string;
     isError: boolean;
}

const PasswordError: FC<IPasswordError> = ({ errorText, isError }) => {
     return (
          <div className={styles.passwordErrorBlock}>
               {isError ? errorPasswordConfig.errorTrue : errorPasswordConfig.errorFalse}
               <Text color={`${isError ? "red" : "green"}`} type={"reg16"}>
                    {errorText}
               </Text>
          </div>
     );
};

export default PasswordError;