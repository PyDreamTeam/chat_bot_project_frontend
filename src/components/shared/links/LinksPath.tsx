import Text from "@/src/components/shared/text/Text";
import ArrowRight from "@/src/components/shared/arrowRight/ArrowRight";
import React from "react";
import styles from "./styles/LinkShowAllCards.module.css";
import Link from "next/link";
import { useGetPlatformQuery } from "@/src/store/services/platforms";

interface ILinkProps {
    href: string;
}

const LinkPath = ({ href }: ILinkProps) => {
    // const { data } = useGetPlatformQuery(Number(idp));
    return (
        <>
            <Link href={href} className={styles.link}>
                <Text type={"reg16"} color={"blue"}>
                    Посмотреть все
                </Text>
                <ArrowRight className={styles.arrow}></ArrowRight>
            </Link>
        </>
    );
};

export default LinkPath;
