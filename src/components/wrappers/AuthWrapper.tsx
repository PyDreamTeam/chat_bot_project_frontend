import React, { FC } from "react";
import AuthLeftBlock from "@/src/components/features/Auth/AuthLeftBlock/AuthLeftBlock";
import AuthRightBlock from "@/src/components/features/Auth/AuthRightBlock/AuthRightBlock";
import { WithChildren } from "@/src/shared/types/withChildren";
import styles from "./styles/AuthWrapper.module.css";

export interface IAuthWrapper {
     titleText: string;
     children: JSX.Element | string;
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