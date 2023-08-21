import React, { FC } from "react";

import { userDefaultAvatar } from "../../features/AccountPage/AccountPageHeader/img/SvgConfig";
import Image from "next/image";
import UserAvatar from "@/src/components/shared/Avatar/UserAvatar/UserAvatar";

export enum UserDefaultAvatar {
    forHeader = "forHeader",
    forSettings = "forSettings",
}

interface AvatarProps {
    type: keyof typeof UserDefaultAvatar;
    url?: string;
    username?: string;
}

const Avatar: FC<AvatarProps> = ({ url, type, username = "" }) => {
    return type === "forHeader" ? (
        url ? (
            <Image src={url} alt={"avatar"} />
        ) : (
            userDefaultAvatar
        )
    ) : (
        <UserAvatar url={url} username={username} />
    );
};

export default Avatar;
