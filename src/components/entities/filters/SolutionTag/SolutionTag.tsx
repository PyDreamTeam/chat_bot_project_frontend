import React, { useState, FC } from "react";
import Text from "@/src/components/shared/text/Text";

export interface SolutionPropsTag {
    id?: number;
    is?: boolean;
    tag: string | undefined;
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
