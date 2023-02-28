import React, { FC } from "react";
import AuthLeftBlock from "@/src/components/features/Auth/components/AuthLeftBlock/AuthLeftBlock";
import AuthRightBlock from "@/src/components/features/Auth/components/AuthRightBlock/AuthRightBlock";
import { WithChildren } from "@/src/types/withChildren";
import styles from "./AuthWrapper.module.css";

export interface IAuthWrapper {
     titleText: string;
}

const AuthWrapper: FC<WithChildren & IAuthWrapper> = ({ children, titleText }) => {
     return (
          <div className={styles.authWrapper}>
               <AuthLeftBlock />
               <AuthRightBlock titleText={titleText}>{children}</AuthRightBlock>
          </div>
     );
};

export default AuthWrapper;
