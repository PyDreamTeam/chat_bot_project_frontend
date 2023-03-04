import React, {FC} from "react";

import {userDefaultAvatar} from "../../features/AuthHeader/pictures/SvgConfig";
import Image from "next/image";

interface AvatarProps {
  url?: string
}

const Avatar: FC<AvatarProps> = ({url}) => {
     return url ? <Image src={url} alt={"avatar"} /> : <div>{userDefaultAvatar}</div>;
};

export default Avatar;