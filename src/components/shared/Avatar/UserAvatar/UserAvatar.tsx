import React, { FC } from "react";

import styles from "../styles/Avatar.module.css";
import Image from "next/image";

interface IUserAvatar {
     url?: string;
     username?: string;
}

const UserAvatar: FC<IUserAvatar> = ({ url, username }) => {
     const transformUserNameToAvatar = () => {
          return username ? username?.split("")[0].toUpperCase() : "I";
     };
     return (
          <div className={styles.avatar}>
               {url ? <Image src={url} alt={"avatar"} /> : <span className={styles.avatarLetters}>{transformUserNameToAvatar()}</span>}
          </div>
     );
};

export default UserAvatar;
