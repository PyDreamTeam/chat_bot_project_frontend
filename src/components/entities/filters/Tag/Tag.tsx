import Text from "@/src/components/shared/text/Text";
import Image from "next/image";
import { FC } from "react";
import css from "./tag.module.css";

interface PropsTag {
    id: number;
    tag: string;
    is?: boolean;
}

export const TagFilter: FC<PropsTag> = ({ tag, is, id }) => {
    return (
        <div className={css.tag}>
            <Text type="reg18" color="dark">
                {tag}
            </Text>
            {is ? (
                <Image src="/platforms/yes.svg" alt="yes" width={24} height={24} />
            ) : (
                <Image src="/platforms/no.svg" alt="no" width={24} height={24} />
            )}
        </div>
    );
};
