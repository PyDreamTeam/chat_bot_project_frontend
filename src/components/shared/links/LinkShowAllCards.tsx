import React from "react";
import styles from "./styles/LinkShowAllCards.module.css";
import Link from "next/link";
import Text from "@/src/components/shared/text/Text";
import ArrowRight from "@/src/components/shared/arrowRight/ArrowRight";

interface ILinkProps {
     href: string;
}

const LinkShowAllCards = ({ href }: ILinkProps) => {
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

export default LinkShowAllCards;
