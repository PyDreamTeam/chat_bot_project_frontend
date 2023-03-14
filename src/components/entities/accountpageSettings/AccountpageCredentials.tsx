import React, { FC } from "react";

import styles from "./AccountpageCredential.module.css";
import UserAvatar from "@/src/components/shared/Avatar/Avatar";
import ButtonAuthHeader, { ButtonAuthClasses } from "@/src/components/shared/buttons/ButtonAuthHeader";
import VerifiedEmail from "@/src/components/shared/verifiedEmail/verifiedEmail";
import { useRouter } from "next/router";

interface IAccountPageCredential {
     email: string;
     isEmailVerified: boolean;
     name: string;
     avatarUrl?: string;
     mobileNumber?: string;
     id?: string;
}

const AccountPageCredential: FC<IAccountPageCredential> = ({id, isEmailVerified, email, avatarUrl, mobileNumber, name }) => {

     const route = useRouter();

     return (
          <div className={styles.credentialsWrapper}>
               <UserAvatar url={avatarUrl} type={"forSettings"} username={name} />
               <div className={styles.credentialsRightBlock}>
                    <h4>{name}</h4>
                    {mobileNumber && <p className={styles.credentialsInfo}>{mobileNumber}</p>}
                    <div className={styles.emailBlock}>
                         {<p className={styles.credentialsInfo}>{email}</p>}
                         {isEmailVerified && <VerifiedEmail />}
                    </div>
                    {route.pathname === "/my-account/[slug]" && <ButtonAuthHeader className={ButtonAuthClasses.credentials} href={{pathname: "/my-account/[slug]/settings",
                         query: { slug: id}}} text={"Редактировать"} />}
               </div>
          </div>
     );
};

export default AccountPageCredential;
