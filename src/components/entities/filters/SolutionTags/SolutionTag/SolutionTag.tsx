import Text from "@/src/components/shared/text/Text";
import { FC } from "react";

export interface SolutionPropsTag {
    id?: number;
    tag: string | undefined;
    is?: boolean;
}

export const SolutionTag: FC<SolutionPropsTag> = ({ tag, is }) => {
    return (
        <>
            {is ? (
                <Text type={"reg14"} color={"black"}>
                    {tag}
                </Text>
            ) : null}
        </>
    );
};
