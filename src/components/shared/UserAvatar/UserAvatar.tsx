import React, {FC} from "react";

import {userDefaultAvatar} from "../../features/HomePage/HomePageHeader/pictures/SvgConfig";
import Image from "next/image";

interface AvatarProps {
  url?: string
}

const Avatar: FC <AvatarProps> = ({url}) => {
     return url ? <Image src={url} alt={"avatar"} /> : userDefaultAvatar;
};

export default Avatar;