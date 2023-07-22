import React, { FC } from "react";

import styles from "./AuthRightBlock.module.css";
import { WithChildren } from "@/src/shared/types/withChildren";
import AuthTitle from "@/src/components/shared/text/AuthTitle";

export interface IAuthRightBlock {
     titleText: string;
}

const AuthRightBlock: FC<WithChildren & IAuthRightBlock> = ({ children, titleText }) => {


     return (
          <div className={styles.authRightBlock}>
               <div className={styles.authContentBlock}>
                    <AuthTitle text={titleText} />
                    <div className={styles.formCenter}>{children}</div>
               </div>
          </div>
     );
};

export default AuthRightBlock;