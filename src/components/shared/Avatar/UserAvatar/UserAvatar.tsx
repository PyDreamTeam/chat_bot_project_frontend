import React, { FC } from "react";

import styles from "../Avatar.module.css";
import Image from "next/image";

interface IUserAvatar {
     url?: string;
     username?: string;
}

const UserAvatar: FC<IUserAvatar> = ({ url, username }) => {
     const transformUserNameToAvatar = () => {
          return username?.split("")[0].toUpperCase();
          console.log(username);
     };
     return (
          <div className={styles.avatar}>
               {url ? <Image src={url} alt={"avatar"} /> : <span className={styles.avatarLetters}>{transformUserNameToAvatar()}</span>}
          </div>
     );
};

export default UserAvatar;
