import React, { FC } from "react";

import { userDefaultAvatar } from "../../features/HomePage/HomePageHeader/pictures/SvgConfig";
import Image from "next/image";

interface AvatarProps {
     url?: string;
}

const Avatar: FC<AvatarProps> = ({ url }) => {
     return url ? <Image width={40} height={40} src={url} alt={"avatar"} /> : userDefaultAvatar;
};

export default Avatar;
