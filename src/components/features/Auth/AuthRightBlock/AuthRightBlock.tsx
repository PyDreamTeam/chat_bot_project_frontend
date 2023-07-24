import React, { FC } from "react";

import styles from "./AuthRightBlock.module.css";
import { WithChildren } from "@/src/shared/types/withChildren";
import AuthTitle from "@/src/components/shared/text/AuthTitle";
import { useRouter } from "next/router";
import { clientEndpoints } from "@/src/shared/routes/client-endpoints";

export interface IAuthRightBlock {
     titleText: string;
}

const AuthRightBlock: FC<WithChildren & IAuthRightBlock> = ({ children, titleText }) => {
     const isSuccess = useRouter().pathname === clientEndpoints.signIn.get;

     return (
          <div className={styles.authRightBlock}>
               <div className={styles.authContentBlock}>
                    {isSuccess && (
                         <div className={styles.sendLetter}>
                              <img src="/sign/success-filled.svg" alt="Success" />
                         </div>
                    )}
                    <AuthTitle text={titleText} />

                    <div className={styles.formCenter}>{children}</div>
               </div>
          </div>
     );
};

export default AuthRightBlock;