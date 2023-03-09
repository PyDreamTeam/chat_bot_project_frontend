import React, { FC } from "react";

import styles from "./AccountpageCredential.module.css";
import UserAvatar from "@/src/components/shared/Avatar/Avatar";
import ButtonAuthHeader, { ButtonAuthClasses } from "@/src/components/shared/buttons/ButtonAuthHeader";
import VerifiedEmail from "@/src/components/shared/verifiedEmail/verifiedEmail";

interface IAccountPageCredential {
     email: string;
     isEmailVerified: boolean;
     name: string;
     avatarUrl?: string;
     mobileNumber?: string;
}

const AccountPageCredential: FC<IAccountPageCredential> = ({ isEmailVerified, email, avatarUrl, mobileNumber, name }) => {
     return (
          <div className={styles.credentialsWrapper}>
               <UserAvatar type={"forSettings"} username={name} />
               <div className={styles.credentialsRightBlock}>
                    <h4>{name}</h4>
                    {mobileNumber && <p className={styles.credentialsInfo}>{mobileNumber}</p>}
                    <div className={styles.emailBlock}>
                         {<p className={styles.credentialsInfo}>{email}</p>}
                         {isEmailVerified && <VerifiedEmail />}
                    </div>
                    <ButtonAuthHeader className={ButtonAuthClasses.credentials} href={"/home"} text={"Редактировать"} />
               </div>
          </div>
     );
};

export default AccountPageCredential;
